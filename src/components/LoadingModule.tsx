import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
      <div className="p-6 border border-slate-800 rounded-2xl bg-indigo-500/5 animate-pulse flex items-center justify-center mb-4">
        <Box className="w-12 h-12 text-indigo-400" />
      </div>
      <div className="text-indigo-400 font-mono text-[10px] animate-pulse tracking-[0.5em] uppercase text-center">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
