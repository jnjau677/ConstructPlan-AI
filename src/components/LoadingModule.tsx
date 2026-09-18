import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full p-12 bg-slate-900/30 rounded-3xl border border-slate-800/50 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center animate-pulse">
          <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
        </div>
      </div>
      <div className="mt-6 text-center space-y-2">
        <span className="text-xs font-mono font-bold tracking-[0.3em] text-indigo-400 uppercase animate-pulse block">
          LOADING_BIM_MODULE...
        </span>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
          FETCHING ASSETS // DYNAMIC ROUTE DEFERRED
        </span>
      </div>
    </div>
  );
}
