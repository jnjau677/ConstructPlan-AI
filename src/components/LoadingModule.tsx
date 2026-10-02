import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-xl border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
        <div className="absolute w-6 h-6 rounded-lg bg-indigo-500/20 animate-pulse" />
      </div>
      <div className="text-center font-mono">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 animate-pulse">
          LOADING_BIM_MODULE...
        </span>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
          INITIALIZING_COMPONENT_CHUNK
        </p>
      </div>
    </div>
  );
}
