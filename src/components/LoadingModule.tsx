import React from 'react';

/**
 * Fallback component displayed when dynamic BIM modules are loaded lazily.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm">
      <div className="relative w-12 h-12 mb-4 flex items-center justify-center">
        <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-xl" />
        <div className="absolute inset-0 border-2 border-indigo-500 border-t-transparent rounded-xl animate-spin" />
      </div>
      <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest animate-pulse font-bold">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
