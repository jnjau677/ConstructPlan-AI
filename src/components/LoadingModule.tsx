import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full p-8 text-slate-400">
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute w-12 h-12 rounded-full border-2 border-cyan-500/20 animate-ping" />
        <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
      </div>
      <div className="font-mono text-xs tracking-wider uppercase text-slate-400 animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
