import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 animate-pulse">
          <Box className="w-6 h-6" />
        </div>
      </div>
      <span className="text-indigo-400 font-mono text-[10px] tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
