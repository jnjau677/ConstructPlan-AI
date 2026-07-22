import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-12 px-6 text-center select-none">
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
        {/* Pulsating back glow */}
        <div className="absolute inset-0 bg-indigo-600/20 rounded-2xl blur-xl animate-pulse" />

        {/* Themed box container */}
        <div className="relative w-16 h-16 bg-slate-900 border border-indigo-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/10">
          <Building2 className="w-8 h-8 text-indigo-400 animate-pulse" />
        </div>
      </div>

      {/* Loading text with design aesthetic */}
      <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-indigo-400 animate-pulse">
        LOADING_BIM_MODULE...
      </h3>
      <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-mono">
        Configuring telemetric layers & vectors
      </p>
    </div>
  );
}
