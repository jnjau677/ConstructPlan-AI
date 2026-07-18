import React from 'react';
import { Loader2, LayoutGrid } from 'lucide-react';

/**
 * LoadingModule component serves as the global Suspense fallback for lazy-loaded BIM modules.
 * Designed with a consistent technical, futuristic BIM theme matching ArcSystem's visual style.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full h-full py-12">
      {/* Themed Box Element with pulsating and spinning visual accents */}
      <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-slate-900/40 border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)] mb-6 animate-pulse">
        {/* Decorative corner borders to look like a draft or BIM model outline */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-indigo-400 rounded-tl"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-indigo-400 rounded-tr"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-indigo-400 rounded-bl"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-indigo-400 rounded-br"></div>

        {/* Rotating technical loader/grid icon */}
        <LayoutGrid className="w-10 h-10 text-indigo-400" />
        <Loader2 className="absolute w-16 h-16 text-indigo-500/20 animate-spin" />
      </div>

      {/* Themed pulsating status text */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-mono font-bold tracking-[0.2em] text-indigo-400 animate-pulse uppercase">
          LOADING_BIM_MODULE...
        </span>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          Syncing local CAD buffer
        </span>
      </div>
    </div>
  );
}
