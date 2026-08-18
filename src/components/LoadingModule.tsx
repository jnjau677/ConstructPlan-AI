import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full py-16 text-slate-400">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-xl border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
        <div className="absolute w-6 h-6 rounded-lg bg-indigo-600/20 animate-pulse" />
      </div>
      <div className="font-mono text-xs tracking-widest uppercase text-slate-400 animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
