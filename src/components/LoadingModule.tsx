import React from 'react';

/**
 * LoadingModule fallback component for React.lazy dynamic code splitting.
 * Displays a lightweight, animated pulse skeleton loader while secondary BIM modules are loaded.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full space-y-4 p-8 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="absolute w-6 h-6 rounded-full bg-indigo-500/10 animate-ping" />
      </div>
      <p className="text-xs font-mono font-bold tracking-[0.2em] text-slate-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
