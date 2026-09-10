import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full space-y-4">
      <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl animate-pulse">
        <Box className="w-8 h-8 text-indigo-400" />
      </div>
      <div className="text-xs font-mono tracking-[0.3em] text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
