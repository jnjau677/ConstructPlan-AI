import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-cyan-500 font-mono">
      <div className="w-12 h-12 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
      <span className="text-xs tracking-widest animate-pulse">LOADING_BIM_MODULE...</span>
    </div>
  );
}
