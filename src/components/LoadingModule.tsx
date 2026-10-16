import React from 'react';

/**
 * LoadingModule component
 * Standard Suspense fallback component rendered while dynamic BIM sub-modules are loaded.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm p-12 text-center space-y-6">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <div className="absolute w-8 h-8 border-2 border-indigo-400/40 border-b-indigo-400 rounded-full animate-spin [animation-direction:reverse]" />
      </div>
      <div className="space-y-2">
        <div className="text-xs font-mono font-bold tracking-[0.3em] text-indigo-400 uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </div>
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          FETCHING SYSTEM ASSETS // DECOMPRESSING DATA
        </p>
      </div>
    </div>
  );
}
