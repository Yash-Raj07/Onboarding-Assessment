'use client';

import { useState, useEffect } from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { questions } from '../data/questions';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import { NavigationButtons } from '../components/NavigationButtons';
import { LoadingScreen } from '../components/LoadingScreen';
import { DisclaimerScreen } from '../components/DisclaimerScreen';
import { FortressProfile } from '../components/FortressProfile';


export default function AssessmentPage() {
  const [started, setStarted] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const { 
    currentStep, 
    nextStep, 
    prevStep, 
    isAnswered, 
    isComplete, 
    answers,
    resetAssessment 
  } = useAssessment();

  const currentQuestion = questions[currentStep];

  
  useEffect(() => {
    if (isComplete && !showLoading && !showDisclaimer && !showSummary) {
      setShowDisclaimer(true);
    }
  }, [isComplete, showLoading, showDisclaimer, showSummary]);

  const handleDisclaimerAccept = () => {
    setShowDisclaimer(false);
    setShowLoading(true);
  };

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setShowSummary(true);
  };

  const handleBegin = () => {
    resetAssessment(); // Ensure we start fresh
    setStarted(true);
  };

  // INTRO VIEW: Shown before starting the assessment
  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-12 animate-in fade-in zoom-in duration-1000">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Let&apos;s build your investment profile
          </h1>
          <p className="text-gray-400 text-lg">
            Answer a few questions so we can understand your financial goals 
            and recommend the best strategy for you.
          </p>
        </div>

        {/* Feature Icons - Matching the uploaded design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <FeatureCard 
            icon="🎯" 
            title="Personalized" 
            desc="Tailored to your goals" 
          />
          <FeatureCard 
            icon="🕒" 
            title="5 minutes" 
            desc="Quick & easy process" 
          />
          <FeatureCard 
            icon="🛡️" 
            title="Secure" 
            desc="Your data is protected" 
          />
        </div>

        <button
          onClick={handleBegin}
          className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95"
        >
          Begin Assessment
        </button>
      </div>
    );
  }

  // DISCLAIMER VIEW
  if (showDisclaimer) {
    return <DisclaimerScreen onAccept={handleDisclaimerAccept} onBack={prevStep} />;
  }

  // LOADING VIEW
  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  // SUMMARY VIEW: Shown when all questions are answered and loading is done
  if (showSummary) {
    return <FortressProfile onReset={() => {
      resetAssessment();
      setShowSummary(false);
      setStarted(false);
    }} />;
  }

  // QUESTION VIEW: The main step-by-step flow
  return (
    <div className="flex flex-col min-h-screen pb-12">
      {/* Top Progress Bar */}
      <ProgressBar currentCategory={currentQuestion.category} />

      {/* Main Question Card Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 mt-8">
        <QuestionCard 
          question={currentQuestion} 
          stepIndex={currentStep}
          totalSteps={questions.length}
        />

        {/* Navigation Buttons */}
        <NavigationButtons
          onBack={prevStep}
          onNext={nextStep}
          canNext={isAnswered(currentQuestion.id)}
          isFirstStep={currentStep === 0}
          isLastStep={currentStep === questions.length - 1}
        />
      </div>
    </div>
  );
}

// Simple Helper Component for the Intro page
function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="glass p-8 rounded-2xl space-y-3 transition-all hover:border-blue-500/30 hover:bg-white/5">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}
