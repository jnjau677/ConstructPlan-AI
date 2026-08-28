import React from 'react';

// Fallback spinner component when dynamic modules are lazily loaded
export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono tracking-widest text-slate-400 uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </p>
      </div>
    </div>
  );
}
