import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-12 rounded-3xl border border-slate-800 backdrop-blur-sm space-y-4">
      <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
      <div className="text-center">
        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest animate-pulse">
          LOADING_BIM_MODULE...
        </p>
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mt-1">
          FETCHING ASSETS // SYSTEM_TOLERANCE: 0.001mm
        </p>
      </div>
    </div>
  );
}
