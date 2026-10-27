import React from 'react';

// Fallback component displayed during lazy loading of secondary BIM modules.
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm p-12">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
      <span className="text-xs font-mono tracking-[0.2em] text-slate-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
