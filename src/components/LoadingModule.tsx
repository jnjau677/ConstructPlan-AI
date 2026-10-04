import React from 'react';

/**
 * LoadingModule fallback component displayed while secondary BIM modules
 * are lazily loaded.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm p-12 space-y-4">
      <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
      <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
