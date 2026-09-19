import React from 'react';
import { Layers } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm space-y-4">
      <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400 animate-pulse">
        <Layers className="w-8 h-8" />
      </div>
      <div className="text-center space-y-1">
        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] animate-pulse">
          LOADING_BIM_MODULE...
        </p>
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          FETCHING ASSETS // DEFERRED CHUNK
        </p>
      </div>
    </div>
  );
}
