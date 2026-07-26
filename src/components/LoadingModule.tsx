import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center select-none">
      <div className="w-20 h-20 bg-indigo-600/10 rounded-2xl mb-6 flex items-center justify-center border border-indigo-500/20 animate-pulse">
        <Building2 className="w-8 h-8 text-indigo-400" />
      </div>
      <div className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
