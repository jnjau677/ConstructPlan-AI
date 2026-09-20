import React from 'react';

/**
 * LoadingModule component serves as the global Suspense fallback UI
 * when secondary BIM modules are lazy-loaded asynchronously.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] border border-slate-800/80 bg-slate-900/50 rounded-xl p-12 text-slate-400">
      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4" />
      <div className="font-mono text-sm tracking-wider animate-pulse text-slate-300">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
