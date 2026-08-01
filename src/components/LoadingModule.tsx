import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400/30 font-mono text-[10px] space-y-4">
      <div className="w-24 h-24 border border-white/5 rounded-2xl flex items-center justify-center animate-pulse bg-gradient-to-tr from-white/0 to-white/5">
        <Building2 className="w-10 h-10 opacity-10 animate-bounce" />
      </div>
      <div className="tracking-[0.4em] animate-pulse">LOADING_BIM_MODULE...</div>
    </div>
  );
}
