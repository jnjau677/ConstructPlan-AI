import React from 'react';
import { Cpu } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="min-h-[500px] w-full flex flex-col items-center justify-center p-12 bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-16 h-16 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700/50 text-indigo-400 shadow-xl">
          <Cpu className="w-8 h-8 animate-pulse" />
        </div>
      </div>
      <div className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-[0.3em] animate-pulse">
        LOADING_BIM_MODULE...
      </div>
      <div className="text-[9px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
        INITIALIZING_ASYNC_CHUNKS
      </div>
    </div>
  );
}
