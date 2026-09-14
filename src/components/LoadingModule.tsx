import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-12 rounded-3xl border border-slate-800/80 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-2xl border-2 border-indigo-500/30 border-t-indigo-500 animate-spin mb-4" />
      <span className="text-xs font-mono text-slate-400 animate-pulse tracking-[0.2em] uppercase font-semibold">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
