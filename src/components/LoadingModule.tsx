import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full bg-slate-900/40 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-12 h-12 rounded-2xl border-2 border-indigo-500/20 animate-spin border-t-indigo-500" />
        <div className="absolute w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_#6366f1]" />
      </div>
      <div className="text-indigo-400 font-mono text-xs tracking-[0.3em] font-bold uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
      <div className="text-slate-600 font-mono text-[9px] mt-2 uppercase tracking-widest">
        INITIALIZING_ASSETS_AND_DATA_BUFFERS
      </div>
    </div>
  );
}
