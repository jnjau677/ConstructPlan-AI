import React from 'react';

/**
 * Loading fallback component for dynamically loaded BIM submodules.
 * Displays a lightweight pulsating state while the chunk loads on demand.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-xl animate-spin" />
      <span className="text-[10px] font-mono text-indigo-400 tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
