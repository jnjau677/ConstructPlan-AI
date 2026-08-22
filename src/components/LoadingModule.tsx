import React from 'react';

/**
 * LoadingModule component serves as the global Suspense fallback
 * when lazy-loaded BIM design modules are being fetched on demand.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full py-20 text-indigo-400 font-mono text-xs">
      <div className="w-16 h-16 border border-indigo-500/30 rounded-2xl mb-6 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
        <div className="w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
      </div>
      <p className="animate-pulse tracking-[0.3em] font-bold uppercase">LOADING_BIM_MODULE...</p>
    </div>
  );
}
