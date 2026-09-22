import React from 'react';

/**
 * LoadingModule component serves as the Suspense fallback UI when
 * secondary BIM modules are dynamically loaded via React.lazy.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 border border-slate-800 rounded-xl bg-slate-900/50 backdrop-blur-xs">
      <div className="w-12 h-12 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mb-4" />
      <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
