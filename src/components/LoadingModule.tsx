import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] h-full space-y-4">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-xl" />
        <div className="absolute inset-0 border-2 border-indigo-500 border-t-transparent rounded-xl animate-spin" />
        <div className="w-6 h-6 bg-indigo-500/10 rounded-lg animate-pulse" />
      </div>
      <div className="text-center font-mono">
        <p className="text-xs text-indigo-400 font-bold uppercase tracking-[0.2em] animate-pulse">
          LOADING_BIM_MODULE...
        </p>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
          FETCHING CHUNK // PLEASE WAIT
        </p>
      </div>
    </div>
  );
}
