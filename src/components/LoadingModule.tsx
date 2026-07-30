import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-indigo-400/30 font-mono text-[10px] text-center">
      <div className="w-48 h-48 border border-white/5 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-white/0 to-white/5">
        <Building2 className="w-16 h-16 opacity-10 animate-bounce" />
      </div>
      <div className="animate-pulse tracking-[0.2em] font-bold text-indigo-400">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
