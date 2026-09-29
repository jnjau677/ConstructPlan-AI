import React from 'react';
import { Box } from 'lucide-react';

/**
 * Fallback loading UI component displayed while secondary BIM modules are being lazy-loaded.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 p-12 text-indigo-400 font-mono">
      <div className="p-4 bg-indigo-950/40 rounded-2xl border border-indigo-500/20 shadow-lg shadow-indigo-950/50 animate-pulse">
        <Box className="w-8 h-8 opacity-80" />
      </div>
      <div className="text-[11px] font-bold tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
