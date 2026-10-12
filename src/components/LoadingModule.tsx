import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[500px] w-full">
      <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
        <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.3em] animate-pulse">
          LOADING_BIM_MODULE...
        </span>
      </div>
    </div>
  );
}
