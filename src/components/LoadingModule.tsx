import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-slate-700/50 border-b-slate-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
      </div>
      <div className="text-indigo-400 font-mono text-xs animate-pulse tracking-[0.3em] font-bold uppercase">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
