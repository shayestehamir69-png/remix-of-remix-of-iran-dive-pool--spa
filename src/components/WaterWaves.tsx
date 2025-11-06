"use client";

import React, { useEffect, useRef } from 'react';

export default function WaterWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let waves: Wave[] = [];

    class Wave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      opacity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = Math.random() * 200 + 100;
        this.speed = Math.random() * 0.5 + 0.3;
        this.opacity = 0.3;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(14, 165, 233, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      update() {
        this.radius += this.speed;
        this.opacity = (1 - this.radius / this.maxRadius) * 0.3;
      }

      isFinished(): boolean {
        return this.radius >= this.maxRadius;
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createWave = (x: number, y: number) => {
      waves.push(new Wave(x, y));
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 10, 21, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waves = waves.filter((wave) => {
        wave.update();
        wave.draw(ctx);
        return !wave.isFinished();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleClick = (e: MouseEvent) => {
      createWave(e.clientX, e.clientY);
    };

    // Auto-generate waves
    const interval = setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      createWave(x, y);
    }, 2000);

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('click', handleClick);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
