import React from 'react';

/**
 * LoadingModule component
 *
 * Serves as the global Suspense fallback for lazy-loaded BIM modules.
 * Features a centered layout, themed box elements, and a pulsating animation
 * consistent with the ArcSystem PRO futuristic aesthetic.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-[10px] tracking-[0.5em] select-none">
      <div className="w-16 h-16 border border-indigo-500/20 rounded-2xl mb-6 flex items-center justify-center bg-indigo-500/5 shadow-[0_0_15px_rgba(99,102,241,0.05)] relative overflow-hidden">
        {/* Pulsating themed box indicator */}
        <div className="absolute inset-2 border border-indigo-400/40 rounded-xl animate-pulse bg-indigo-500/10" />
      </div>
      <span className="animate-pulse">LOADING_BIM_MODULE...</span>
    </div>
  );
}
