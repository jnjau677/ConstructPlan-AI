import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-12 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="w-16 h-16 border border-white/10 rounded-2xl mb-6 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/10 to-indigo-500/20 shadow-lg shadow-indigo-500/10">
        <Building2 className="w-8 h-8 text-indigo-400 opacity-80 animate-bounce" />
      </div>
      <p className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
