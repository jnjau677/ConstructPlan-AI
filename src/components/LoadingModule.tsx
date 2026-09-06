import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <div className="flex flex-col items-center gap-4 bg-slate-900/60 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm shadow-xl">
        <div className="relative flex items-center justify-center w-12 h-12">
          <div className="absolute w-12 h-12 rounded-full border-2 border-indigo-500/20 animate-ping" />
          <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
        </div>
        <div className="text-center font-mono">
          <p className="text-xs text-indigo-400 font-bold uppercase tracking-[0.2em] animate-pulse">
            LOADING_BIM_MODULE...
          </p>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
            INITIALIZING ASSETS & CALC ENGINE
          </p>
        </div>
      </div>
    </div>
  );
}
