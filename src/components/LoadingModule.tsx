import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-[#020617]/20 border border-slate-800/40 rounded-3xl p-12 backdrop-blur-sm">
      <div className="relative flex items-center justify-center w-20 h-20 bg-indigo-600/10 rounded-2xl border border-indigo-500/20 mb-6 animate-pulse">
        <Building2 className="w-10 h-10 text-indigo-400 animate-pulse" />
        <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500/40 animate-ping opacity-25" />
      </div>
      <div className="text-indigo-400 font-mono text-[11px] uppercase tracking-[0.3em] animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
