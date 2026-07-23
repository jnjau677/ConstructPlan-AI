import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-[11px] select-none">
      {/* Themed pulsating box */}
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
        {/* Pulsating background ring */}
        <div className="absolute inset-0 border border-indigo-500/20 rounded-2xl animate-ping opacity-75" />
        {/* Static outer ring */}
        <div className="absolute inset-0 border border-indigo-500/10 rounded-2xl" />
        {/* Pulsating themed box */}
        <div className="w-12 h-12 border border-indigo-500/40 rounded-xl bg-indigo-500/5 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.15)]">
          <div className="w-3 h-3 bg-indigo-500 rounded" />
        </div>
      </div>
      {/* Pulsating loading text */}
      <div className="animate-pulse tracking-[0.2em] font-bold text-indigo-300 uppercase">
        LOADING_BIM_MODULE...
      </div>
      <div className="text-[9px] text-slate-500/60 uppercase tracking-widest mt-2">
        Allocating Virtual Core / Link_Stable
      </div>
    </div>
  );
}
