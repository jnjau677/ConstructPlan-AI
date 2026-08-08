import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-indigo-400 font-mono text-[10px] tracking-[0.5em] gap-4">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border border-white/5 rounded-2xl mb-2 flex items-center justify-center bg-gradient-to-tr from-white/0 to-white/5 animate-pulse">
          <Box className="w-6 h-6 opacity-30 animate-spin [animation-duration:8s]" />
        </div>
      </div>
      <div className="animate-pulse">LOADING_BIM_MODULE...</div>
    </div>
  );
}
