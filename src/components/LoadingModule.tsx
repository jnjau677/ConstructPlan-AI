import React from 'react';

/**
 * Fallback component displayed during Suspense lazy-loading transitions for BIM sub-modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/40 animate-ping absolute" />
        <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-500/60 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs">
          BIM
        </div>
      </div>
      <p className="text-xs font-mono text-slate-400 uppercase tracking-[0.25em] animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
