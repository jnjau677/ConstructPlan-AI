import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-12 rounded-3xl border border-slate-800/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center animate-pulse">
          <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
        </div>
      </div>
      <p className="mt-4 text-[10px] font-mono text-slate-400 uppercase tracking-[0.25em]">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
