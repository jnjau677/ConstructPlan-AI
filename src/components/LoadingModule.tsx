import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-12 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 border border-indigo-500/20 rounded-2xl animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/10 flex items-center justify-center">
          <Box className="w-8 h-8 text-indigo-400 animate-spin opacity-75" />
        </div>
      </div>
      <p className="text-xs font-mono font-bold text-indigo-400 tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
        FETCHING_DYNAM_CHUNK // STANDBY
      </p>
    </div>
  );
}
