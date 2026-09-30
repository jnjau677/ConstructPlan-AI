import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-12 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <div className="absolute inset-0 rounded-xl border-2 border-indigo-500/20 animate-ping" />
        <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center shadow-lg shadow-indigo-500/10">
          <div className="w-3 h-3 bg-indigo-400 rounded-sm animate-pulse" />
        </div>
      </div>
      <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-indigo-400 animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
        FETCHING_VECTOR_SETS // DYNAMIC_SPLIT
      </p>
    </div>
  );
}
