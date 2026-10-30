import React from 'react';

/**
 * LoadingModule is the Suspense fallback component for lazy-loaded route sub-modules.
 * Designed to provide smooth transition UX while sub-component JavaScript chunks load on demand.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-12 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
      <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-[0.2em] animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
