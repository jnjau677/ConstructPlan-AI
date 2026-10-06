import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 bg-slate-900/40 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
      <div className="text-xs font-mono tracking-[0.2em] text-indigo-400 animate-pulse uppercase">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
