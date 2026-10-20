import React from 'react';

/**
 * LoadingModule component acts as a lightweight Suspense fallback for lazy-loaded BIM modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-12 rounded-3xl border border-slate-800/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 animate-ping" />
        <div className="relative w-12 h-12 rounded-xl bg-slate-800 border border-indigo-500/40 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse" />
        </div>
      </div>
      <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400 animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
