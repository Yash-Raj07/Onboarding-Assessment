'use client';

import { categories } from '../data/questions';

interface ProgressBarProps {
  currentCategory: string;
}


export const ProgressBar = ({ currentCategory }: ProgressBarProps) => {
  const currentIndex = categories.indexOf(currentCategory);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center space-x-4">
        {categories.map((cat, index) => {
          const isActive = cat === currentCategory;
          const isPast = index < currentIndex;

          return (
            <div key={cat} className="flex-1 flex flex-col items-center space-y-3">
              {/* The progress line/indicator */}
              <div
                className={`
                  w-full h-[2px] rounded-full transition-all duration-700 ease-in-out
                  ${
                    isActive
                      ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] scale-y-150'
                      : isPast
                        ? 'bg-blue-800'
                        : 'bg-white/10'
                  }
                `}
              />
              {/* The label */}
              <span className={`
                text-[10px] uppercase tracking-[0.15em] font-bold transition-all duration-500
                ${isActive 
                  ? 'text-white scale-105' 
                  : isPast 
                    ? 'text-gray-400' 
                    : 'text-gray-700'
                }
              `}>
                {cat}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
