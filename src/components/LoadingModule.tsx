import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-xl border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <Box className="w-5 h-5 text-indigo-400 absolute animate-pulse" />
      </div>
      <p className="text-xs font-mono text-slate-400 uppercase tracking-[0.2em] animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
