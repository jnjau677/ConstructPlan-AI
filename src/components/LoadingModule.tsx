import React from 'react';

/**
 * LoadingModule component serves as the global Suspense fallback
 * when dynamically loading BIM sub-modules via React.lazy().
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full space-y-4 font-mono text-indigo-400">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-xl animate-spin shadow-[0_0_15px_rgba(99,102,241,0.2)]" />
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          LOADING_BIM_MODULE...
        </span>
      </div>
    </div>
  );
}
