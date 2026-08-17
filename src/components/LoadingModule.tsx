import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-12 bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute w-12 h-12 rounded-full bg-indigo-500/20 animate-ping" />
        <Box className="w-8 h-8 text-indigo-400 animate-pulse relative z-10" />
      </div>
      <span className="text-xs font-mono font-bold tracking-[0.3em] text-indigo-400 animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
