import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full bg-slate-900/40 rounded-3xl border border-slate-800/80 backdrop-blur-sm p-12">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 animate-pulse flex items-center justify-center">
          <div className="w-4 h-4 rounded-md bg-indigo-400 animate-ping" />
        </div>
      </div>
      <span className="text-xs font-mono font-bold text-indigo-400 tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </span>
      <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
        FETCHING_DYNAMIC_ASSETS
      </p>
    </div>
  );
}
