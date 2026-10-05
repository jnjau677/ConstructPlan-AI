import React from 'react';

export default function LoadingModule() {
  return (
    <div className="min-h-[400px] w-full flex flex-col items-center justify-center p-12 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm">
      <div className="w-12 h-12 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center mb-4 animate-pulse">
        <div className="w-4 h-4 rounded-sm bg-indigo-400 animate-spin" />
      </div>
      <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.3em] animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
