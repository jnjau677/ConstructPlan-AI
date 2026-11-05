import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-12">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center animate-pulse">
          <Box className="w-8 h-8 text-indigo-400" />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 animate-ping pointer-events-none" />
      </div>
      <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-indigo-400 animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
