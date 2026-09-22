import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center py-24 min-h-[400px] border border-slate-800/60 bg-slate-900/40 rounded-3xl backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-12 h-12 rounded-2xl border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
        <div className="absolute w-6 h-6 rounded-lg bg-indigo-500/20 animate-pulse" />
      </div>
      <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-indigo-400 animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
