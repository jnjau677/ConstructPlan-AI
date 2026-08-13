import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-12">
      <div className="relative flex items-center justify-center mb-4">
        {/* Pulsating animation container */}
        <div className="absolute w-16 h-16 rounded-xl bg-indigo-500/10 border border-indigo-500/30 animate-pulse" />
        {/* Themed box element */}
        <Box className="w-8 h-8 text-indigo-400 animate-bounce" />
      </div>
      <div className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
