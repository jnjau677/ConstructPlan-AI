import React from 'react';

// Fallback component for lazy-loaded BIM sub-modules during tab switching
export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 p-8 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <p className="text-xs font-mono tracking-widest text-indigo-400 uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </p>
      </div>
    </div>
  );
}
