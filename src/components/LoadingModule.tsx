import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-20 text-indigo-400/50 font-mono text-[10px]">
      {/* Themed box element with a pulsating animation */}
      <div className="w-24 h-24 border border-indigo-500/15 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/5 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
        <Building2 className="w-10 h-10 text-indigo-500/40 animate-pulse" />
      </div>

      {/* Pulsating text */}
      <div className="tracking-[0.25em] uppercase font-bold animate-pulse text-indigo-300">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
