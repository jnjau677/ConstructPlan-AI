import React from 'react';

// Loading fallback component for dynamically imported secondary BIM modules
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 p-12 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-2xl border-2 border-indigo-500/20 border-t-indigo-500 animate-spin mb-4" />
      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.3em] animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
