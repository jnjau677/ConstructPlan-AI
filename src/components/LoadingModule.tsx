import React from 'react';

/**
 * LoadingModule component acts as a global Suspense fallback
 * when dynamically loading lazy-loaded BIM modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full">
      <div className="w-16 h-16 border-2 border-indigo-500/20 border-t-indigo-500 rounded-2xl animate-spin mb-4" />
      <p className="text-indigo-400 font-mono text-xs animate-pulse tracking-[0.3em] uppercase">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
