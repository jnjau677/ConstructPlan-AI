import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-12">
      {/* Themed box element with pulsating animation */}
      <div className="w-24 h-24 border border-indigo-500/20 rounded-2xl mb-6 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/5 to-indigo-500/20 shadow-lg shadow-indigo-500/10">
        <Building2 className="w-10 h-10 text-indigo-400" />
      </div>

      {/* Centered text with tracking and pulse */}
      <div className="text-indigo-400 font-mono text-[11px] animate-pulse tracking-[0.4em] uppercase">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
