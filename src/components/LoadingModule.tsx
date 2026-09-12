import React from 'react';

/**
 * LoadingModule component serves as a Suspense fallback when lazy-loaded
 * BIM modules are dynamically fetched.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] border border-slate-800/80 bg-slate-900/30 rounded-3xl backdrop-blur-sm p-12 text-center">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="absolute w-8 h-8 rounded-lg bg-indigo-500/10 animate-pulse flex items-center justify-center">
          <div className="w-2 h-2 bg-indigo-400 rounded-full" />
        </div>
      </div>
      <p className="text-xs font-mono text-indigo-400 tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-600 mt-2">
        Fetching module chunk & dependencies
      </p>
    </div>
  );
}
