import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-12 w-full">
      {/* Themed Box Element */}
      <div className="relative w-24 h-24 bg-slate-900/80 border-2 border-indigo-500/20 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/10 mb-6 overflow-hidden">
        {/* Glow behind the icon */}
        <div className="absolute inset-0 bg-indigo-500/5 animate-pulse" />
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-indigo-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-indigo-500" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-indigo-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-indigo-500" />

        <Building2 className="w-10 h-10 text-indigo-400 animate-pulse" />
      </div>

      {/* Pulsating Text */}
      <div className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-indigo-400 animate-pulse text-center">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
