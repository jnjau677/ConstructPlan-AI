import React from 'react';

/**
 * Fallback loading UI component displayed during dynamic lazy loading of BIM modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-lg border-2 border-cyan-500/30 border-t-cyan-500 animate-spin" />
        <div className="absolute w-6 h-6 rounded bg-cyan-500/20 animate-pulse" />
      </div>
      <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
