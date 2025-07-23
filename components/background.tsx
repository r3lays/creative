"use client";

import type React from "react";

import { useEffect, useRef } from "react";

interface CodeBackgroundProps {
  children?: React.ReactNode;
}

export default function CodeBackground({ children }: CodeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const staticChars = useRef<
    Array<{
      x: number;
      y: number;
      char: string;
      glow: number;
      targetGlow: number;
      glowSpeed: number;
      nextGlowChange: number;
    }>
  >([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const resize = () => {
      staticChars.current = []; // Clear characters on resize
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };

    // Characters to use in the background with emphasis on special characters
    const specialChars =
      "!@#$%^&*()_+-=[]{}|;:,./<>?`~\\/*-+{}[]()$#@!%^&*~`'\"\\";
    const alphaNumeric =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    // Create a character set with more special characters
    const chars = specialChars.repeat(3) + alphaNumeric;

    const cellSize = 18; // Increased cell size to accommodate larger font
    const fontSize = 14; // Increased font size

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Initialize static characters once
    const initializeChars = () => {
      if (staticChars.current.length > 0) return;

      const cols = Math.ceil(canvas.width / cellSize);
      const rows = Math.ceil(canvas.height / cellSize);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Only create character for some positions to add spacing
          if (Math.random() > 0.3) {
            // 70% chance to create a character
            const x = i * cellSize;
            const y = j * cellSize;

            // Higher chance of selecting a special character
            const char = chars[Math.floor(Math.random() * chars.length)];

            staticChars.current.push({
              x,
              y,
              char,
              glow: Math.random() * 0.15 + 0.05, // Subtle initial glow
              targetGlow: Math.random() * 0.15 + 0.05,
              glowSpeed: Math.random() * 0.01 + 0.002,
              nextGlowChange: Date.now() + Math.random() * 3000,
            });
          }
        }
      }
    };

    // Draw the background with static characters and animated colors
    const drawBackground = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      // Initialize characters if not done
      initializeChars();

      staticChars.current.forEach((charObj) => {
        const now = Date.now();

        // Check if it's time to change glow target
        if (now > charObj.nextGlowChange) {
          charObj.targetGlow = Math.random() * 0.25 + 0.05; // Subtle range
          charObj.nextGlowChange = now + Math.random() * 4000 + 1000;
        }

        // Smoothly animate towards target glow
        if (Math.abs(charObj.glow - charObj.targetGlow) > 0.01) {
          if (charObj.glow < charObj.targetGlow) {
            charObj.glow = Math.min(
              charObj.glow + charObj.glowSpeed,
              charObj.targetGlow
            );
          } else {
            charObj.glow = Math.max(
              charObj.glow - charObj.glowSpeed,
              charObj.targetGlow
            );
          }
        }

        // Calculate distance from mouse for hover effect
        const dx = charObj.x - mouseRef.current.x;
        const dy = charObj.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Add hover glow effect
        let finalGlow = charObj.glow;
        const hoverRadius = 60;
        if (distance < hoverRadius) {
          const hoverIntensity = (1 - distance / hoverRadius) * 0.6; // Brighter hover effect
          finalGlow = Math.max(finalGlow, hoverIntensity);
        }

        ctx.fillStyle = `rgba(0, 0, 0, ${finalGlow})`;
        ctx.fillText(charObj.char, charObj.x, charObj.y + fontSize);
      });
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      drawBackground();
      animationId = requestAnimationFrame(animate);
    };

    // Set up event listeners
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize
    resize();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="h-full absolute inset-0 w-full bg-background">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{ opacity: 0.5 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
