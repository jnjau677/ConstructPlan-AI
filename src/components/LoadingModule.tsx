import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-12 text-center text-indigo-400 font-mono text-[10px] tracking-[0.2em]">
      <div className="w-24 h-24 border border-indigo-500/10 rounded-2xl mb-6 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/5 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
        <Building2 className="w-10 h-10 text-indigo-500/40" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
