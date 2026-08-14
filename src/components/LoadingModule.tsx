import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] w-full text-slate-400">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-xl border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
        <div className="absolute w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 animate-pulse" />
      </div>
      <p className="mt-4 text-xs font-mono tracking-widest text-indigo-400/80 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
