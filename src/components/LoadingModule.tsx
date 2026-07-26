import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-12">
      <div className="relative flex items-center justify-center">
        {/* Pulsating backdrop rings */}
        <div className="absolute w-24 h-24 rounded-full border border-indigo-500/20 animate-ping opacity-40" />
        <div className="absolute w-32 h-32 rounded-full border border-indigo-500/10 animate-pulse opacity-30" />

        {/* Centered themed box element */}
        <div className="relative w-16 h-16 bg-indigo-950/40 border border-indigo-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-900/20 backdrop-blur-sm animate-bounce">
          <Building2 className="w-8 h-8 text-indigo-400" />
        </div>
      </div>

      {/* Loading text with pulsating/glow styling */}
      <span className="mt-8 text-xs font-mono font-bold uppercase tracking-[0.4em] text-indigo-400 animate-pulse text-center">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
