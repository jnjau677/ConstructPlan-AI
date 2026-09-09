import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-xs tracking-[0.3em]">
      <div className="w-10 h-10 border-2 border-indigo-500/30 border-t-indigo-500 rounded-lg animate-spin mb-4" />
      <span className="animate-pulse">LOADING_BIM_MODULE...</span>
    </div>
  );
}
