import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 p-12 bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.2)]">
        <div className="w-4 h-4 rounded bg-indigo-500 animate-ping" />
      </div>
      <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
