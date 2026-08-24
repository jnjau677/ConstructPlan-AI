import React from 'react';

/**
 * LoadingModule component used as Suspense fallback during lazy loading of modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full space-y-4">
      <div className="w-12 h-12 rounded-xl border-2 border-indigo-500/30 border-t-indigo-500 animate-spin flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-indigo-500/50 animate-pulse" />
      </div>
      <p className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
