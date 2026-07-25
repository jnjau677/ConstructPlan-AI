import React from 'react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-center">
      <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-md max-w-sm w-full flex flex-col items-center gap-6 animate-pulse">
        {/* Pulsating themed box indicator */}
        <div className="w-16 h-16 border-2 border-indigo-500 rounded-2xl flex items-center justify-center relative bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          <div className="w-8 h-8 border-2 border-indigo-400 rounded-lg animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-indigo-400 uppercase animate-pulse">
            LOADING_BIM_MODULE...
          </h4>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            Initializing System Matrices
          </p>
        </div>
      </div>
    </div>
  );
}
