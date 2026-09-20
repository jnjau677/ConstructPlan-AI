import React from 'react';

/**
 * LoadingModule component serves as the global Suspense fallback for lazy-loaded BIM modules.
 * Designed to maintain aesthetic continuity while lazy components load on demand.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm p-12">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
      <p className="text-xs font-mono font-bold text-indigo-400 tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
