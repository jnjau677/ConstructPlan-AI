import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-indigo-400 font-mono">
      <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 animate-pulse">
        <Box className="w-8 h-8 text-indigo-400" />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] animate-pulse">LOADING_BIM_MODULE...</p>
    </div>
  );
}
