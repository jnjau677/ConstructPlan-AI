import React from 'react';

/**
 * LoadingModule component serves as the global Suspense fallback for lazy-loaded BIM sub-modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center animate-pulse mb-4">
        <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1]" />
      </div>
      <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
