import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule is a global fallback component used with React.lazy and Suspense.
 * It provides a consistent sci-fi BIM aesthetic, complete with a themed box/building icon,
 * a pulsing indicator, and the required loading text.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center p-12 min-h-[400px] border border-slate-800 bg-[#020617]/40 rounded-3xl backdrop-blur-sm relative overflow-hidden select-none">
      {/* Pulse visual effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      {/* Sci-fi theme container */}
      <div className="relative flex flex-col items-center gap-6 z-10">
        <div className="w-20 h-20 border border-indigo-500/30 rounded-2xl flex items-center justify-center animate-pulse bg-indigo-500/5 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <Building2 className="w-10 h-10 text-indigo-400 animate-bounce" style={{ animationDuration: '2s' }} />
        </div>

        <div className="text-center space-y-2">
          {/* Pulsating load text as per UI rules */}
          <h3 className="text-indigo-400 font-mono text-xs tracking-[0.3em] font-bold uppercase animate-pulse">
            LOADING_BIM_MODULE...
          </h3>
          <p className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">
            ArcSystem core matrix synchronization active
          </p>
        </div>
      </div>
    </div>
  );
}
