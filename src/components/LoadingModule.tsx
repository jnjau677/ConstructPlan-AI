import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full space-y-4">
      <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
      <div className="text-xs font-mono text-indigo-400 tracking-widest animate-pulse uppercase">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
