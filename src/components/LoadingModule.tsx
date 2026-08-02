import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule is a high-performance Suspense fallback component designed to
 * display while lazy-loaded BIM modules are chunk-loaded.
 * It matches the ArcSystem design system aesthetic.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-12">
      <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl flex flex-col items-center max-w-sm w-full shadow-2xl relative overflow-hidden backdrop-blur-md">
        {/* Subtle high-tech ambient blue glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-[60px] -mr-16 -mt-16" />

        {/* Animated icon container reflecting active rendering */}
        <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center border border-indigo-500/20 mb-6 animate-pulse relative">
          <Building2 className="w-8 h-8 text-indigo-400" />
          <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-2xl animate-ping opacity-40"></div>
        </div>

        {/* Text indicators */}
        <div className="text-center space-y-2">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-indigo-400 animate-pulse">
            LOADING_BIM_MODULE...
          </p>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            INITIALIZING ASSETS
          </p>
        </div>
      </div>
    </div>
  );
}
