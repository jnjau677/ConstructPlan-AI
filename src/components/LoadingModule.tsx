import React from 'react';

/**
 * Fallback loading component rendered while lazy-loaded BIM modules are chunked and loaded.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-12 h-12 rounded-2xl border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="absolute w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_8px_#6366f1]" />
      </div>
      <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-indigo-400 animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase">
        Fetching Module Assets
      </p>
    </div>
  );
}
