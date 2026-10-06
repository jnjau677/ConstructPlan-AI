import React from 'react';
import { Box } from 'lucide-react';

/**
 * Fallback component displayed during lazy dynamic loading of BIM modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-indigo-400 font-mono">
      <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl animate-pulse">
        <Box className="w-8 h-8" />
      </div>
      <div className="text-[10px] tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
