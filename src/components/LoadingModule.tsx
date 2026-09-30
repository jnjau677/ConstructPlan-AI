import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-12 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <div className="absolute w-6 h-6 bg-indigo-500/10 rounded-full animate-pulse" />
      </div>
      <p className="text-xs text-indigo-400 font-mono font-bold tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
