import React from 'react';

/**
 * LoadingModule is the suspense fallback element when switching modules.
 * It provides a consistent aesthetic matching the BIM application design,
 * featuring a centered layout and a pulsating loading indicator.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400/60 font-mono text-xs select-none">
      <div className="w-16 h-16 border border-white/5 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/10">
        <div className="w-8 h-8 rounded-lg border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
      </div>
      <div className="animate-pulse tracking-[0.3em] font-bold">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
