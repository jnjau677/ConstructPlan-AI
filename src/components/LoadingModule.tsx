import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-slate-900/40 rounded-3xl border border-slate-800/80 backdrop-blur-sm p-12">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <div className="absolute w-6 h-6 border-2 border-slate-700/50 border-b-indigo-400 rounded-full animate-spin [animation-direction:reverse]" />
      </div>
      <div className="mt-6 flex flex-col items-center gap-1.5">
        <span className="text-[11px] font-mono font-bold text-indigo-400 tracking-[0.3em] uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </span>
        <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase">
          INITIALIZING_DYNAMIC_CHUNK
        </span>
      </div>
    </div>
  );
}
