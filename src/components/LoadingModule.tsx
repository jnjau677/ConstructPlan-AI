import React from 'react';

/**
 * LoadingModule component serves as the Suspense fallback UI
 * when lazy-loaded secondary sub-modules are being fetched on demand.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full p-8 text-slate-400 font-mono">
      <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-8 max-w-md w-full flex flex-col items-center gap-4 shadow-xl backdrop-blur-sm">
        <div className="relative flex items-center justify-center w-12 h-12">
          <div className="absolute w-12 h-12 rounded-full border-2 border-cyan-500/20 animate-ping" />
          <div className="w-8 h-8 rounded-full border-2 border-t-cyan-500 border-r-transparent border-b-cyan-500 border-l-transparent animate-spin" />
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="text-sm font-semibold tracking-wider text-cyan-400 animate-pulse">
            LOADING_BIM_MODULE...
          </span>
          <span className="text-[11px] text-slate-500">
            FETCHING_ASSETS & SYNCHRONIZING_STATE
          </span>
        </div>
      </div>
    </div>
  );
}
