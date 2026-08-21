import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full p-12 text-center">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <Box className="w-6 h-6 text-indigo-400 absolute animate-pulse" />
      </div>
      <div className="text-indigo-400 font-mono text-xs tracking-[0.3em] font-bold animate-pulse uppercase">
        LOADING_BIM_MODULE...
      </div>
      <p className="text-slate-500 font-mono text-[10px] mt-2 tracking-widest uppercase">
        Initializing geometry & telemetry datasets
      </p>
    </div>
  );
}
