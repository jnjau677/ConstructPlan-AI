import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-[10px] space-y-4">
      {/* Themed box element with a pulsating animation */}
      <div className="w-16 h-16 border border-indigo-500/20 rounded-2xl flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/10">
        <Building2 className="w-8 h-8 opacity-40 text-indigo-400" />
      </div>
      <div className="tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
