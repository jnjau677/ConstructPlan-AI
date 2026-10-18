import React from 'react';

// Fallback loader component displayed while secondary BIM modules are dynamically loaded
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm p-12">
      <div className="w-16 h-16 border-2 border-indigo-500/20 border-t-indigo-500 rounded-2xl animate-spin mb-4" />
      <div className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-[0.2em] animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
