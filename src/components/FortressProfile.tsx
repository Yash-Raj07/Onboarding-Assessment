'use client';

import React from 'react';
import { useAssessment } from '../context/AssessmentContext';



export const FortressProfile = ({ onReset }: { onReset: () => void }) => {
  const { answers } = useAssessment();

  // Mock calculation logic for educational purposes
  const calculateScore = () => 30; // Matches image
  const getInvestorType = () => "Moderate Investor";

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Header Icon & Title */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </div>
        <h1 className="text-4xl font-semibold text-white tracking-tight">Your Fortress Profile</h1>
        <p className="text-gray-500 text-sm">Based on your responses, we&apos;ve created a personalized strategy</p>
      </div>

      {/* Stats Overview Card */}
      <div className="glass rounded-3xl p-8 space-y-8">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Investor Type</span>
            <h2 className="text-2xl font-semibold text-white">{getInvestorType()}</h2>
          </div>
          <div className="text-right space-y-1">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Overall Score</span>
            <div className="text-5xl font-medium text-white">{calculateScore()}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
          <div className="space-y-1">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Risk Tolerance</span>
            <div className="text-2xl font-semibold text-white">30%</div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Experience Level</span>
            <div className="text-2xl font-semibold text-white">30%</div>
          </div>
        </div>
      </div>

      {/* Recommended Portfolio Allocation */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Recommended Portfolio Allocation</h3>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <AllocationItem title="Foundations of Asset Protection" desc="Low-cost index funds across multiple sectors" percent="40%" />
          <AllocationItem title="Understanding Market Cycles" desc="High-potential companies in tech and innovation" percent="30%" />
          <AllocationItem title="Risk Assessment Calculator" desc="Stable returns with lower risk exposure" percent="20%" />
          <AllocationItem title="Recession Scenario Planner" desc="Real estate, commodities, and crypto" percent="10%" />
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          Create account to save your plan →
        </button>
        
        <div className="flex space-x-4">
          <button className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-white font-medium flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Fortress</span>
          </button>
          <button className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-white font-medium flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* What's Next Card */}
      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-4">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider">What&apos;s Next?</h4>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          Connect with one of our financial advisors to discuss your personalized strategy, or start 
          building your portfolio right away with our guided investment tools.
        </p>
      </div>

      <button onClick={onReset} className="w-full text-center text-gray-600 hover:text-white transition-colors text-sm underline underline-offset-4">
        Retake Assessment
      </button>
    </div>
  );
};





type AllocationItemProps = {
  title: string;
  desc: string;
  percent: string;
};

const AllocationItem = ({
  title,
  desc,
  percent,
}: AllocationItemProps) => {
  const containerClasses =
    "glass-light bg-white/[0.03] p-6 rounded-2xl flex items-center justify-between cursor-default transition-all hover:bg-white/5 group";

  const percentClasses =
    "text-2xl font-medium text-white transition-colors group-hover:text-blue-400";

  return (
    <div className={containerClasses}>
      <div className="space-y-1">
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>

      <span className={percentClasses}>{percent}</span>
    </div>
  );
};
