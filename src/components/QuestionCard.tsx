'use client';

import { Question } from '../types';
import { useAssessment } from '../context/AssessmentContext';
import { OptionButton } from './OptionButton';
import { SliderInput } from './SliderInput';

interface QuestionCardProps {
  question: Question;
  stepIndex: number;
  totalSteps: number;
}


export const QuestionCard = ({ question, stepIndex, totalSteps }: QuestionCardProps) => {
  const { answers, setAnswer } = useAssessment();
  const currentAnswer = answers[question.id];

  const handleSingleSelect = (option: string) => {
    setAnswer(question.id, option);
  };

  const handleMultiSelect = (option: string) => {
    const prevAnswers = (currentAnswer as string[]) || [];
    const newAnswers = prevAnswers.includes(option)
      ? prevAnswers.filter((a) => a !== option)
      : [...prevAnswers, option];
    setAnswer(question.id, newAnswers);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col items-center">
      {/* Question Header */}
      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center space-x-2 text-sm font-medium text-gray-500 uppercase tracking-widest">
          <span>Question {stepIndex + 1} of {totalSteps}</span>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span className="text-blue-500/80">{question.type === 'multi' ? 'Multiple select' : question.type === 'slider' ? (question.description || 'Scale 1-5') : 'Single select'}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
          {question.question}
        </h2>
      </div>

      {/* Answer Inputs */}
      <div className="w-full space-y-4">
        {question.type === 'single' && question.options?.map((option) => (
          <OptionButton
            key={option}
            label={option}
            selected={currentAnswer === option}
            onClick={() => handleSingleSelect(option)}
          />
        ))}

        {question.type === 'multi' && question.options?.map((option) => (
          <OptionButton
            key={option}
            label={option}
            selected={((currentAnswer as string[]) || []).includes(option)}
            onClick={() => handleMultiSelect(option)}
            type="multi"
          />
        ))}

        {question.type === 'slider' && (
          <SliderInput
            value={(currentAnswer as number) || question.min || 1}
            min={question.min || 1}
            max={question.max || 5}
            onChange={(val) => setAnswer(question.id, val)}
            description={question.description}
          />
        )}
      </div>
    </div>
  );
};
