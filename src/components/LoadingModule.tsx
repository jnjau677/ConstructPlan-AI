import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm p-12 text-center">
      <Loader2 className="w-8 h-8 text-indigo-400 animate-spin mb-4" />
      <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
