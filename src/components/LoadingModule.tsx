import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * LoadingModule serves as the Suspense fallback UI for lazy-loaded BIM modules.
 * Designed to provide a smooth loading transition without disrupting layout aesthetic.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full rounded-xl border border-slate-800 bg-slate-900/40 p-12 text-center backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <Loader2 className="w-6 h-6 text-indigo-400 absolute animate-pulse" />
      </div>
      <p className="text-xs font-mono text-indigo-400 font-semibold tracking-wider uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-500 mt-1">
        Compiling design parameters and assets
      </p>
    </div>
  );
}
