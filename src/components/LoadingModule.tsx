import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4" aria-label="Loading BIM Module">
      {/* Pulsating themed box element */}
      <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center border border-indigo-500/20 animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.1)]">
        <Box className="w-8 h-8 text-indigo-400" />
      </div>
      {/* Pulsating loading text */}
      <div className="text-indigo-400 font-mono text-[10px] animate-pulse tracking-[0.5em] uppercase">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
