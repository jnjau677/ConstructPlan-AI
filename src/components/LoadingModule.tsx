import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * LoadingModule component used as Suspense fallback during lazy loading of sub-modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-12 bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl mb-4">
        <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
      </div>
      <p className="text-xs font-mono text-slate-400 uppercase tracking-[0.3em] animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
