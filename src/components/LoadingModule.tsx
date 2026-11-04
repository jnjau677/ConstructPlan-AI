import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex h-96 w-full items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-600/10 text-indigo-400">
          <Box className="h-8 w-8 animate-pulse" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-400 animate-pulse">
          LOADING_BIM_MODULE...
        </p>
      </div>
    </div>
  );
}
