import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-12 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm">
      <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
      <p className="text-xs font-mono text-slate-400 uppercase tracking-widest animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
