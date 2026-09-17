import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Global Suspense fallback component for lazy-loaded BIM secondary modules.
 * Designed with a centered container, pulsating animation, and theme-consistent styling.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full bg-slate-900/40 border border-slate-800/80 rounded-3xl p-12 backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center animate-pulse">
          <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
        </div>
        <div className="absolute -inset-1 bg-indigo-500/20 rounded-2xl blur-sm -z-10 animate-pulse" />
      </div>
      <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.2em] animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mt-2">
        INITIALIZING VECTOR LAYERS
      </p>
    </div>
  );
}
