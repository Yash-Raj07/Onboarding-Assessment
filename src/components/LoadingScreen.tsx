'use client';

import { useState, useEffect } from 'react';



const LOADING_STEPS = [
  { icon: '🧠', label: 'Analyzing responses...' },
  { icon: '📈', label: 'Modeling market scenarios...' },
  { icon: '🛡️', label: 'Applying risk frameworks...' },
  { icon: '📋', label: 'Generating final profile...' },
];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const intervalTime = 50;
    const increment = (100 / (duration / intervalTime));

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Cycle through icons based on progress
    const iconTimer = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % LOADING_STEPS.length);
    }, duration / LOADING_STEPS.length);

    return () => {
      clearInterval(timer);
      clearInterval(iconTimer);
    };
  }, []);

  
  useEffect(() => {
    if (progress >= 100) {
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-12 animate-in fade-in duration-700">
      {/* Animated Icon Circle */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-white/5 relative z-10">
          <span className="text-4xl animate-bounce">{LOADING_STEPS[stepIndex].icon}</span>
        </div>
        {/* Glow behind icon */}
        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150 animate-pulse" />
      </div>

      {/* Progress Bar Container */}
      <div className="w-full max-w-md space-y-4">
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-center text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};
