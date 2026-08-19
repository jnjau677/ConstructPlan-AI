import React from 'react';

/**
 * LoadingModule component serves as the global Suspense fallback
 * when lazy-loaded BIM modules are being fetched asynchronously.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <div className="w-12 h-12 border-4 border-slate-700 border-t-emerald-500 rounded-full animate-spin" />
      <div className="text-xs font-mono text-slate-400 tracking-wider animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
