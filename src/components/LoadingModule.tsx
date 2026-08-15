import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-mono text-indigo-400 tracking-[0.3em] uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </span>
      </div>
    </div>
  );
}
