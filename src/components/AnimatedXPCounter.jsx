import React, { useState, useEffect, useRef } from 'react';
import { Award, Sparkles } from 'lucide-react';

export default function AnimatedXPCounter({ value = 0 }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [xpGained, setXpGained] = useState(null);
  const prevValueRef = useRef(value);
  const timerRef = useRef(null);

  useEffect(() => {
    const prev = prevValueRef.current;
    if (value !== prev) {
      const diff = value - prev;
      if (diff > 0) {
        setXpGained(diff);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setXpGained(null);
        }, 1800);
      }

      // Smooth number interpolation
      const start = displayValue;
      const end = value;
      const duration = 600; // ms
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quad
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentNumber = Math.round(start + (end - start) * easeProgress);
        setDisplayValue(currentNumber);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue(end);
        }
      };

      requestAnimationFrame(updateCounter);
      prevValueRef.current = value;
    }
  }, [value, displayValue]);

  return (
    <div className="relative inline-flex items-center">
      <span className="font-mono font-bold tracking-tight">
        {displayValue.toLocaleString()} XP
      </span>

      {/* Floating Sparkle Badge on XP gain */}
      {xpGained !== null && (
        <span
          className="absolute -top-6 -right-2 pointer-events-none px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 text-[10px] font-black shadow-lg shadow-amber-500/30 flex items-center gap-1 animate-float-up z-50 whitespace-nowrap"
        >
          <Sparkles className="w-2.5 h-2.5 fill-current" />
          +{xpGained} XP
        </span>
      )}
    </div>
  );
}
