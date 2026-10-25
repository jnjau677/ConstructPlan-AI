import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-12 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
      <div className="text-xs font-mono font-bold text-indigo-400 tracking-[0.2em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
