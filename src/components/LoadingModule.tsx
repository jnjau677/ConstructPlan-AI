import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <div className="text-indigo-400 font-mono text-xs animate-pulse tracking-[0.3em] flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-indigo-500/40 border-t-indigo-400 rounded-full animate-spin" />
        <span>LOADING_BIM_MODULE...</span>
      </div>
    </div>
  );
}
