import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center h-96 w-full bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm p-8 space-y-4">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <div className="absolute w-6 h-6 border-2 border-indigo-400/10 border-b-indigo-400 rounded-full animate-spin [animation-direction:reverse]" />
      </div>
      <p className="text-xs font-mono tracking-[0.3em] text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
