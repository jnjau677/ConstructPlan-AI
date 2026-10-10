import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-slate-400">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-xl border-2 border-indigo-500/20 animate-ping absolute" />
        <div className="w-12 h-12 rounded-xl border-2 border-indigo-500 flex items-center justify-center bg-indigo-500/10 backdrop-blur-sm shadow-lg shadow-indigo-500/20">
          <div className="w-3 h-3 bg-indigo-400 rounded-sm animate-pulse" />
        </div>
      </div>
      <span className="text-xs font-mono tracking-[0.3em] uppercase text-indigo-400 font-semibold animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
