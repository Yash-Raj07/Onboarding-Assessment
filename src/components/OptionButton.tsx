'use client';



interface OptionButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  type?: 'single' | 'multi';
}

export const OptionButton = ({ label, selected, onClick, type = 'single' }: OptionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-5 rounded-xl transition-all duration-300 border
        ${selected 
          ? 'bg-blue-600/20 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
        }
        backdrop-blur-md flex items-center justify-between text-left group
      `}
    >
      <span className="text-lg font-medium">{label}</span>
      
      {/* Visual indicator for selection */}
      <div className={`
        w-6 h-6 rounded-full border-2 transition-all
        ${selected ? 'bg-blue-500 border-blue-500' : 'border-white/20 group-hover:border-white/40'}
        flex items-center justify-center shrink-0 ml-4
      `}>
        {selected && (
          <div className="w-2 h-2 bg-white rounded-full" />
        )}
      </div>
    </button>
  );
};
