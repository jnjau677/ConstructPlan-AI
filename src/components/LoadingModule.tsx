import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * LoadingModule fallback component displayed during React.lazy dynamic module loading.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm">
      <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 mb-4 animate-pulse">
        <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
      </div>
      <div className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-[0.3em] animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
