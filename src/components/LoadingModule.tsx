import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-12 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="w-16 h-16 border-2 border-indigo-500/20 border-t-indigo-500 rounded-2xl animate-spin mb-4 flex items-center justify-center">
        <div className="w-8 h-8 bg-indigo-500/10 rounded-xl" />
      </div>
      <p className="text-xs text-indigo-400 font-mono tracking-[0.25em] animate-pulse uppercase">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
