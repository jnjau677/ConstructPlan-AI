import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 p-8 font-mono text-xs">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-xl animate-spin mb-4" />
      <span className="text-indigo-400 font-bold uppercase tracking-[0.2em] animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
