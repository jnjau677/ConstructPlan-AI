import React from 'react';
import { Cpu } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full bg-slate-900/40 rounded-3xl border border-slate-800/80 backdrop-blur-sm p-12 text-slate-400 font-mono">
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-16 h-16 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/50 shadow-inner">
          <Cpu className="w-6 h-6 text-indigo-400 animate-pulse" />
        </div>
      </div>
      <div className="text-xs tracking-[0.3em] font-bold text-indigo-400 animate-pulse uppercase">
        LOADING_BIM_MODULE...
      </div>
      <div className="text-[10px] text-slate-600 mt-2 uppercase tracking-widest">
        Initializing component chunks
      </div>
    </div>
  );
}
