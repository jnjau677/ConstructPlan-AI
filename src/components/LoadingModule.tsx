import React from 'react';
import { Box } from 'lucide-react';

/**
 * LoadingModule component serves as a high-fidelity loading fallback UI
 * for lazy-loaded BIM modules in the App.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 font-mono text-xs text-slate-500">
      <div className="relative flex items-center justify-center">
        <Box className="w-12 h-12 text-indigo-500 animate-pulse" />
        <div className="absolute inset-0 border border-indigo-500/20 rounded-full scale-150 animate-ping opacity-25" />
      </div>
      <span className="tracking-[0.2em] animate-pulse">LOADING_BIM_MODULE...</span>
    </div>
  );
}
