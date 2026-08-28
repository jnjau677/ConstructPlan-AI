import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full space-y-4">
      <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
      <div className="text-xs font-mono text-cyan-400 tracking-wider animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
