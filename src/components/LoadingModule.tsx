import React from 'react';

/**
 * LoadingModule serves as the Suspense fallback UI while dynamic React.lazy
 * component chunks are loaded on demand.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 bg-slate-900/40 rounded-3xl border border-slate-800 p-12 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center animate-pulse shadow-lg shadow-indigo-500/10">
        <div className="w-4 h-4 rounded-full bg-indigo-500 animate-ping" />
      </div>
      <div className="text-center space-y-1">
        <p className="text-xs font-bold font-mono text-indigo-400 tracking-widest uppercase">
          LOADING_BIM_MODULE...
        </p>
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          SYSTEM_TOLERANCE: 0.001mm // OPTIMIZING_CHUNKS
        </p>
      </div>
    </div>
  );
}
