import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm p-12">
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        {/* Pulsating themed outer box */}
        <div className="absolute inset-0 border border-indigo-500/20 rounded-2xl animate-pulse" />
        <div className="absolute inset-2 border border-indigo-500/10 rounded-xl animate-ping [animation-duration:3s]" />

        {/* Spinner inside the themed box */}
        <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
      </div>

      {/* Status info */}
      <div className="text-center space-y-2">
        <h3 className="text-sm font-bold tracking-[0.2em] text-indigo-400 font-mono uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </h3>
        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
          Resolving dependencies & rendering vectors
        </p>
      </div>
    </div>
  );
}
