import React from 'react';

/**
 * LoadingModule Component
 * Fallback component displayed during React.lazy dynamic module loading.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full bg-slate-900/40 rounded-3xl border border-slate-800 p-12 backdrop-blur-sm">
      <div className="w-16 h-16 border-2 border-indigo-500/20 border-t-indigo-500 rounded-2xl animate-spin mb-6 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
        <div className="w-6 h-6 rounded-lg bg-indigo-500/20 animate-pulse" />
      </div>
      <p className="text-xs font-mono font-bold tracking-[0.2em] text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
        FETCHING_ASYNC_ASSETS // STREAM_ACTIVE
      </p>
    </div>
  );
}
