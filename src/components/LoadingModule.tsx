import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 p-12 text-center backdrop-blur-sm">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
      <p className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-[0.2em] animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
