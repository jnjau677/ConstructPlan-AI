import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-indigo-400/50 font-mono text-xs text-center">
      <div className="w-24 h-24 border border-indigo-500/10 rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-tr from-indigo-500/0 to-indigo-500/5 animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.05)]">
        <Building2 className="w-10 h-10 text-indigo-400 opacity-20" />
      </div>
      <div className="animate-pulse tracking-[0.3em] font-semibold text-indigo-400/70">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
