import React from 'react';

/**
 * LoadingModule is used as the global Suspense fallback for lazy-loaded BIM modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex h-[calc(100vh-140px)] items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-indigo-400 font-mono text-xs tracking-widest uppercase">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin shadow-[0_0_12px_#6366f1]" />
        <span className="animate-pulse">LOADING_BIM_MODULE...</span>
      </div>
    </div>
  );
}
