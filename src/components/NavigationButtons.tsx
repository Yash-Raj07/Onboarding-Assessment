'use client';

interface NavigationButtonsProps {
  onBack: () => void;
  onNext: () => void;
  canNext: boolean;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export const NavigationButtons = ({ 
  onBack, 
  onNext, 
  canNext, 
  isFirstStep,
  isLastStep
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-12">
      {/* Back Button */}
      <button
        onClick={onBack}
        disabled={isFirstStep}
        className={`
          p-4 rounded-full border transition-all
          ${isFirstStep 
            ? 'opacity-0 pointer-events-none' 
            : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
          }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      {/* Next / Skip Button */}
      <button
        onClick={onNext}
        className={`
          flex items-center space-x-3 px-8 py-3 rounded-full border transition-all
          ${canNext 
            ? 'bg-blue-600 border-blue-500 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
            : 'border-white/20 text-gray-500 hover:border-white/40 hover:text-white'
          }
        `}
      >
        <span className="font-semibold">{canNext ? (isLastStep ? 'Finish' : 'Next') : 'Skip'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};
