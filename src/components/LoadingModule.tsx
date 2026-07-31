import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-indigo-400 font-mono text-xs text-center select-none">
      <div className="w-24 h-24 border border-white/5 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-white/0 to-white/5 shadow-lg shadow-indigo-500/5">
        <Building2 className="w-8 h-8 opacity-20" />
      </div>
      <div className="tracking-[0.25em] uppercase font-bold text-indigo-400 animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
