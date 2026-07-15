import React from 'react';

/**
 * LoadingModule component serves as a themed Suspense fallback.
 * Matches the ArcSystem PRO aesthetic with pulsating animations and mono typography.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full space-y-8 py-20">
      <div className="relative">
        {/* Pulsating background ring */}
        <div className="absolute inset-0 w-20 h-20 border-2 border-indigo-500/20 rounded-full animate-ping -translate-x-2 -translate-y-2" />

        {/* Central Hexagon/Box surrogate */}
        <div className="w-16 h-16 border border-indigo-500/50 rounded-xl bg-indigo-500/5 flex items-center justify-center relative overflow-hidden group">
          <div className="w-8 h-8 bg-indigo-600 rounded animate-bounce shadow-[0_0_15px_#6366f1]" />
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:8px_8px] opacity-20" />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.4em] font-mono animate-pulse">
            LOADING_BIM_MODULE...
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse [animation-delay:0.5s]" />
        </div>

        {/* Progress Bar surrogate */}
        <div className="w-64 h-1 bg-slate-800/50 rounded-full border border-slate-700/30 overflow-hidden relative">
          <div
            className="absolute inset-y-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-1/2 animate-[shimmer_1.5s_infinite]"
            style={{ left: '-50%' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
