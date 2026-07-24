import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-12 text-indigo-400 font-mono text-[10px] text-center">
      <div className="w-48 h-48 border border-white/5 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-white/0 to-white/5">
        <Building2 className="w-16 h-16 opacity-10 text-indigo-400" />
      </div>
      <div className="animate-pulse tracking-[0.3em] uppercase">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
