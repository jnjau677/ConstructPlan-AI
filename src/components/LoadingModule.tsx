import React from 'react';

/**
 * LoadingModule component acts as a high-fidelity visual Suspense fallback
 * for lazy-loaded BIM modules. It features a themed loading container,
 * a pulsating visual indicator, and a consistent, polished look.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-12">
      <div className="relative flex flex-col items-center p-8 bg-slate-900/60 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-md max-w-sm w-full text-center group overflow-hidden">
        {/* Animated accent gradient line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse" />

        {/* Themed box element with a pulsating animation */}
        <div className="w-16 h-16 border border-indigo-500/30 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-tr from-indigo-500/5 to-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)] relative">
          <div className="absolute inset-2 border border-indigo-400/20 rounded-xl animate-ping" />
          <span className="text-indigo-400 text-lg font-mono font-bold animate-pulse">BIM</span>
        </div>

        {/* Loading text with consistent styling */}
        <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-indigo-400 animate-pulse">
          LOADING_BIM_MODULE...
        </p>

        {/* Subtext description */}
        <p className="text-[10px] text-slate-500 font-mono mt-2 uppercase tracking-wide">
          Initializing Spatial Vectors & layers
        </p>
      </div>
    </div>
  );
}
