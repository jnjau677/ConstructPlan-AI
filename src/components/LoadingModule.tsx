import React from 'react';
import { Cpu } from 'lucide-react';

/**
 * LoadingModule fallback component used during lazy-loading of secondary BIM modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center py-24 min-h-[400px] border border-slate-800/60 rounded-3xl bg-slate-900/30 backdrop-blur-sm">
      <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-4 animate-pulse">
        <Cpu className="w-8 h-8 text-indigo-400" />
      </div>
      <div className="text-xs font-mono text-indigo-400 font-semibold tracking-[0.2em] animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
