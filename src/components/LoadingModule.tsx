import React from 'react';
import { Box } from 'lucide-react';

/**
 * LoadingModule component serves as a global, premium Suspense fallback
 * for lazy-loaded BIM modules, adhering to the design theme of ArcSystem Pro.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-12">
      <div className="relative flex items-center justify-center mb-6">
        {/* Pulsating backdrop glow */}
        <div className="absolute w-16 h-16 bg-indigo-500/20 rounded-2xl blur-xl animate-pulse" />

        {/* Themed box element */}
        <div className="relative w-16 h-16 bg-slate-900 border border-indigo-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.15)]">
          <Box className="w-8 h-8 text-indigo-400 animate-pulse" />
        </div>
      </div>

      {/* Monospace pulsating loading text */}
      <div className="text-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-indigo-400 font-bold animate-pulse">
          LOADING_BIM_MODULE...
        </p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500 mt-1.5">
          Connecting to ArcSystem Kernel
        </p>
      </div>
    </div>
  );
}
