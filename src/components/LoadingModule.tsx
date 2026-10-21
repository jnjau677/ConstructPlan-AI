import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 p-12 backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <div className="absolute w-8 h-8 bg-indigo-600/20 rounded-full animate-ping" />
      </div>
      <p className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-[0.3em] animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
        INITIALIZING COMPONENT MATRIX
      </p>
    </div>
  );
}
