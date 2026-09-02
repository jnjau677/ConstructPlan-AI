import React from 'react';

/**
 * LoadingModule component serves as a lightweight Suspense fallback for lazy-loaded BIM modules.
 * Standardized aesthetic with dark slate styling and pulse animation.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full border border-slate-800/80 rounded-xl bg-slate-900/40 p-8 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-lg border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
        <div className="absolute w-6 h-6 rounded bg-cyan-500/20 animate-pulse" />
      </div>
      <div className="mt-4 flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider">
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>LOADING_BIM_MODULE...</span>
      </div>
    </div>
  );
}
