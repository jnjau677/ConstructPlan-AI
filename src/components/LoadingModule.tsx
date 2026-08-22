import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-12 text-slate-400">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <div className="absolute w-8 h-8 border-2 border-indigo-400/30 border-b-indigo-400 rounded-full animate-spin [animation-direction:reverse]" />
      </div>
      <p className="text-xs font-mono uppercase tracking-[0.3em] text-indigo-400 animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
