import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule is the suspense fallback component used when BIM modules are lazy-loaded.
 * It provides a consistent aesthetic with a themed box, pulsating icon, and a status message.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400/50 font-mono text-[10px] text-center">
      <div className="w-48 h-48 border border-white/5 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-white/0 to-white/5 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
        <Building2 className="w-16 h-16 opacity-20 text-indigo-400 animate-pulse" />
      </div>
      <div className="flex items-center gap-2 tracking-[0.2em] uppercase font-bold text-slate-400 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
