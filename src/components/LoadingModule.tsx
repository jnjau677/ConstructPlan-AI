import React from 'react';
import { Box } from 'lucide-react';

/**
 * Lightweight Suspense fallback rendered during on-demand loading of BIM sub-modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-indigo-400/40 font-mono text-xs uppercase tracking-[0.25em] space-y-4">
      <div className="w-16 h-16 border border-indigo-500/20 rounded-2xl flex items-center justify-center animate-pulse bg-indigo-500/5 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
        <Box className="w-8 h-8 text-indigo-400/50" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
        <span>LOADING_BIM_MODULE...</span>
      </div>
    </div>
  );
}
