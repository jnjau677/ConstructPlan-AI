import React from 'react';

export default function LoadingModule() {
  return (
    <div className="h-96 w-full flex flex-col items-center justify-center space-y-4 bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center animate-pulse">
        <div className="w-6 h-6 bg-indigo-500 rounded-sm animate-spin" />
      </div>
      <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
