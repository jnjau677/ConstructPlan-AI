import React from 'react';

/**
 * Global fallback component displayed when lazy-loaded BIM modules
 * are being fetched asynchronously.
 */
export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <div className="flex flex-col items-center gap-4 text-indigo-400 font-mono text-xs">
        <div className="w-12 h-12 rounded-xl border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          <div className="w-4 h-4 bg-indigo-500 rounded-sm animate-ping" />
        </div>
        <span className="tracking-[0.25em] text-slate-400 font-bold uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </span>
      </div>
    </div>
  );
}
