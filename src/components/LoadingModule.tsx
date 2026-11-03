import React from 'react';

/**
 * Lightweight Suspense fallback displayed while dynamically imported
 * secondary BIM modules are downloaded over the network.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-slate-500 font-mono space-y-4">
      <div className="w-10 h-10 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin shadow-[0_0_12px_#6366f1]" />
      <div className="text-[11px] uppercase tracking-[0.3em] text-indigo-400 animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
