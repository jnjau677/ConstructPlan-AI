import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-[#020617]/50 rounded-3xl border border-slate-800 p-12 text-center">
      <div className="w-16 h-16 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-6" />
      <p className="text-xs font-mono font-bold tracking-[0.2em] text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
        SYSTEM_FETCH // DYNAMIC_SPLIT_CHUNK
      </p>
    </div>
  );
}
