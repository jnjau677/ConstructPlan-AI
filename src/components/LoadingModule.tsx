import React from 'react';

/**
 * LoadingModule component serves as the lightweight Suspense fallback
 * displayed while BIM sub-modules are lazily loaded.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full space-y-4">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
      <p className="text-xs font-mono text-indigo-400 animate-pulse uppercase tracking-[0.3em]">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
