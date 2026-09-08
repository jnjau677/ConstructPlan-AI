import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-slate-400 font-mono">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-12 h-12 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        <div className="absolute w-6 h-6 border-2 border-cyan-500/20 border-b-cyan-500 rounded-full animate-spin [animation-direction:reverse]" />
      </div>
      <div className="text-xs tracking-widest uppercase text-slate-400 animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
