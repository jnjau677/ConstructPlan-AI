import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full space-y-4 py-12">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-xl border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="absolute w-6 h-6 rounded-lg bg-indigo-500/10 animate-pulse" />
      </div>
      <div className="flex flex-col items-center space-y-1 text-center">
        <p className="text-xs font-mono font-bold text-indigo-400 tracking-wider uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </p>
        <p className="text-[10px] font-mono text-slate-500">
          INITIALIZING ASSETS & CALCULATIONS
        </p>
      </div>
    </div>
  );
}
