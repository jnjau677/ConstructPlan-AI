import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[500px] bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mx-auto" />
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest animate-pulse">
          LOADING_BIM_MODULE...
        </p>
      </div>
    </div>
  );
}
