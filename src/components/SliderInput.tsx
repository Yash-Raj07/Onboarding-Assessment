'use client';

interface SliderInputProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  description?: string;
}

export const SliderInput = ({ value, min, max, onChange, description }: SliderInputProps) => {
  const getLabel = (val: number) => {
    if (val === 1) return 'Not Familiar';
    if (val === 5) return 'Expert';
    return '';
  };

  return (
    <div className="w-full space-y-12 py-12 flex flex-col items-center">
      {/* Large Value Display */}
      <div className="text-6xl font-medium text-white mb-4">
        {value}
      </div>
      
      <div className="w-full max-w-xl relative">
        {/* Min/Max Labels */}
        <div className="flex justify-between text-gray-500 text-sm font-medium mb-4">
          <span>{min}</span>
          <span>{max}</span>
        </div>

        {/* Custom Slider */}
        <div className="relative h-1 w-full bg-white/10 rounded-full">
          {/* Active Track */}
          <div 
            className="absolute h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((value - min) / (max - min)) * 100}%` }}
          />
          
          {/* Hidden Input for functionality */}
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          />

          {/* Custom Handle */}
     <div
    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 pointer-events-none transition-all duration-300"
    style={{ left: `${thumbPosition}%` }}
  >
    {/* Tooltip Label */}
    {label && (
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap font-bold uppercase tracking-wider">
        {label}
      </div>
    )}
  </div>
);


          
        </div>
      </div>
    </div>
  );
};
