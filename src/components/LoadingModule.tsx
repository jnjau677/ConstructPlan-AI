import React from 'react';

/**
 * LoadingModule component acts as a lightweight Suspense fallback
 * when BIM sub-modules are loaded dynamically on demand.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 p-12 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-xl border-2 border-indigo-500/30 border-t-indigo-500 animate-spin mb-4" />
      <p className="text-indigo-400 font-mono text-xs uppercase tracking-[0.3em] animate-pulse font-bold">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
