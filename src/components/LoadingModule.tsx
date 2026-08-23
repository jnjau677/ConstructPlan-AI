import React from 'react';

/**
 * LoadingModule component serves as a visual Suspense fallback for lazy-loaded BIM modules.
 * Matches project design language with dark theme, pulse animation, and mono font styling.
 */
export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 p-12 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center animate-pulse">
          <div className="w-4 h-4 rounded-sm bg-indigo-500 shadow-[0_0_12px_#6366f1]" />
        </div>
        <div>
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-indigo-400">
            LOADING_BIM_MODULE...
          </p>
          <p className="text-[10px] font-mono text-slate-500 mt-1 uppercase">
            FETCHING CHUNK // PLEASE WAIT
          </p>
        </div>
      </div>
    </div>
  );
}
