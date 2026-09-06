import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-slate-400 gap-3">
      <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col items-center gap-3">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
        <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
          LOADING_BIM_MODULE...
        </span>
      </div>
    </div>
  );
}
