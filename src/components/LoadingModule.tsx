import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full h-full text-indigo-400 font-mono text-[11px] tracking-[0.3em] uppercase">
      <div className="w-24 h-24 border border-indigo-500/15 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-tr from-indigo-500/0 to-indigo-500/10 animate-pulse relative">
        <Building2 className="w-10 h-10 text-indigo-400 opacity-60 animate-bounce [animation-duration:2s]" />
        {/* Pulsating Ring */}
        <div className="absolute -inset-2 border border-indigo-500/10 rounded-3xl animate-ping opacity-30 [animation-duration:3s]" />
      </div>
      <div className="animate-pulse flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
        LOADING_BIM_MODULE...
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
      </div>
    </div>
  );
}
