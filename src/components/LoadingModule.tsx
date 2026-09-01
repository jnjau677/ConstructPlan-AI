import React from 'react';
import { Layers } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm p-12 text-center">
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-16 h-16 rounded-2xl bg-indigo-500/20 animate-ping" />
        <div className="relative w-16 h-16 rounded-2xl bg-slate-900 border border-indigo-500/40 flex items-center justify-center shadow-lg shadow-indigo-500/10">
          <Layers className="w-8 h-8 text-indigo-400 animate-pulse" />
        </div>
      </div>
      <p className="text-xs font-mono font-bold tracking-[0.2em] text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase">
        Initializing sub-system components
      </p>
    </div>
  );
}
