import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-12 text-slate-400 font-mono">
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 animate-ping" />
        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-950/50 relative z-10">
          <Box className="w-6 h-6 animate-pulse" />
        </div>
      </div>
      <div className="text-xs font-bold tracking-[0.3em] uppercase text-indigo-400 animate-pulse mb-2">
        LOADING_BIM_MODULE...
      </div>
      <div className="text-[10px] text-slate-500 uppercase tracking-widest">
        FETCHING_GEOMETRY_ENGINE
      </div>
    </div>
  );
}
