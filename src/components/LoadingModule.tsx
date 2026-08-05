import React from 'react';

/**
 * LoadingModule is a highly optimized, aesthetically pleasing Suspense fallback
 * designed for the lazily-loaded BIM modules. It features a centered layout,
 * pulsating animation, and a clean, tech-themed loading container.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-slate-950/40 rounded-3xl border border-slate-800 backdrop-blur-sm p-12">
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        {/* Animated pulsating circles */}
        <div className="absolute inset-0 rounded-xl border border-indigo-500/20 animate-ping" />
        <div className="absolute w-16 h-16 rounded-lg border border-indigo-400/40 animate-pulse bg-indigo-500/5 flex items-center justify-center">
          <div className="w-8 h-8 rounded border border-indigo-400/60 animate-[spin_4s_linear_infinite]" />
        </div>
      </div>
      <div className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
