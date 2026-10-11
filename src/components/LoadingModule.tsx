import React from 'react';

/**
 * LoadingModule
 *
 * Global Suspense fallback component for lazy-loaded BIM modules.
 * Rendered when dynamic sub-modules (e.g., AI Architect, Topo Studio) are loaded.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500/20 animate-pulse" />
        <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-xl animate-spin" />
      </div>
      <p className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-[0.2em] animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
