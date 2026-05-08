'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AssessmentAnswers } from '../types';
import { questions } from '../data/questions';



interface AssessmentContextType {
  currentStep: number;
  answers: AssessmentAnswers;
  nextStep: () => void;
  prevStep: () => void;
  setAnswer: (questionId: string, value: string | string[] | number) => void;
  isAnswered: (questionId: string) => boolean;
  totalSteps: number;
  isComplete: boolean;
  resetAssessment: () => void;
}


const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const AssessmentProvider = ({ children }: { children: ReactNode }) => {
 
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [isComplete, setIsComplete] = useState(false);

  const totalSteps = questions.length;

  // PERSISTENCE
  // Use useEffect to load data from localStorage when the app starts
  useEffect(() => {
    const saved = localStorage.getItem('onboarding-assessment');
    if (saved) {
      const { currentStep: savedStep, answers: savedAnswers } = JSON.parse(saved);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentStep(savedStep);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAnswers(savedAnswers);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('onboarding-assessment', JSON.stringify({ currentStep, answers }));
  }, [currentStep, answers]);

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

 
  const setAnswer = (questionId: string, value: string | string[] | number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const isAnswered = (questionId: string) => {
    const answer = answers[questionId];
    if (Array.isArray(answer)) return answer.length > 0;
    return answer !== undefined && answer !== '';
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
    localStorage.removeItem('onboarding-assessment');
  };

  return (
    <AssessmentContext.Provider
      value={{
        currentStep,
        answers,
        nextStep,
        prevStep,
        setAnswer,
        isAnswered,
        totalSteps,
        isComplete,
        resetAssessment,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
};


