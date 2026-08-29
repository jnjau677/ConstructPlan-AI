import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full py-20">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="absolute w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/30 animate-pulse" />
      </div>
      <span className="mt-6 font-mono text-[11px] font-bold text-indigo-400 tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
