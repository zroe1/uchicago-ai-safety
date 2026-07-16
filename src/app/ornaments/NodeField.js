"use client";
import { useEffect, useRef } from "react";
import styles from "./NodeField.module.css";

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * A field of scattered nodes joined by faint edges — the model as a graph.
 * Nodes drift gently and ease away from the cursor as it moves over them.
 *
 * Nodes are generated only in the side margins outside the central content
 * column (`clearWidth`), and a mask fades them out before they can reach it,
 * so they never sit behind text.
 */
export default function NodeField({ clearWidth = 920 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let nodes = [];
    let edges = [];
    let W = 0;
    let H = 0;
    const cursor = { x: -9999, y: -9999 };

    // Colors come from the theme tokens so the field adapts to dark mode.
    function readPalette() {
      const cs = getComputedStyle(document.documentElement);
      const ink = (cs.getPropertyValue("--ink-rgb") || "26, 24, 21").trim();
      const maroon = (cs.getPropertyValue("--maroon-rgb") || "139, 23, 36").trim();
      return {
        edge: `rgba(${ink}, 0.07)`,
        node: `rgba(${ink}, 0.22)`,
        accent: `rgba(${maroon}, 0.4)`,
      };
    }
    let palette = readPalette();

    function build() {
      const parent = canvas.parentElement;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const rand = mulberry32(0xa11c3d);
      // Width of each usable side band, overlapping slightly into the mask fade.
      const band = Math.max(90, (W - clearWidth) / 2 + 70);
      const count = Math.min(110, Math.max(16, Math.round((2 * band * H) / 16000)));
      nodes = [];
      for (let i = 0; i < count; i++) {
        const off = rand() * band;
        nodes.push({
          bx: rand() < 0.5 ? off : W - off,
          by: rand() * H,
          x: 0,
          y: 0,
          r: 1.6 + rand() * 1.2,
          maroon: rand() < 0.08,
          phase: rand() * Math.PI * 2,
        });
      }
      nodes.forEach((n) => {
        n.x = n.bx;
        n.y = n.by;
      });

      edges = [];
      const reach = 170;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = nodes[i].bx - nodes[j].bx;
          const dy = nodes[i].by - nodes[j].by;
          if (dx * dx + dy * dy < reach * reach) edges.push([i, j]);
        }
      }
    }

    function step(t) {
      const R = 140;
      for (const n of nodes) {
        let tx = n.bx;
        let ty = n.by;
        const dxc = n.bx - cursor.x;
        const dyc = n.by - cursor.y;
        const d2 = dxc * dxc + dyc * dyc;
        if (d2 < R * R && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const push = ((R - d) / R) * 30;
          tx += (dxc / d) * push;
          ty += (dyc / d) * push;
        }
        if (!reduceMotion) {
          tx += Math.sin(t * 0.0004 + n.phase) * 3;
          ty += Math.cos(t * 0.00034 + n.phase) * 3;
        }
        n.x += (tx - n.x) * 0.08;
        n.y += (ty - n.y) * 0.08;
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = palette.edge;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (const [i, j] of edges) {
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
      }
      ctx.stroke();

      for (const n of nodes) {
        ctx.fillStyle = n.maroon ? palette.accent : palette.node;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop(t) {
      step(t);
      draw();
      raf = requestAnimationFrame(loop);
    }

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
    }

    function onPointerLeave() {
      cursor.x = -9999;
      cursor.y = -9999;
    }

    build();
    if (reduceMotion) {
      draw();
    } else {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(() => {
      build();
      if (reduceMotion) draw();
    });
    ro.observe(canvas.parentElement);

    const mo = new MutationObserver(() => {
      palette = readPalette();
      if (reduceMotion) draw();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      ro.disconnect();
      mo.disconnect();
    };
  }, [clearWidth]);

  return (
    <div
      className={styles.field}
      style={{ "--nf-clear": `${clearWidth}px` }}
      aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
