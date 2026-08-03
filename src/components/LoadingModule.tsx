import React from 'react';

/**
 * Fallback loading component displayed while lazy-loaded BIM modules are resolving.
 * Designed to provide a consistent aesthetic across all modules.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] w-full border border-slate-800 rounded-[2rem] bg-slate-900/40 backdrop-blur-sm relative overflow-hidden">
      {/* Scanline Grid Background to match the architectural theme */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative flex flex-col items-center gap-6 z-10">
        {/* Themed box/loader element */}
        <div className="w-16 h-16 border-2 border-indigo-500/20 border-t-indigo-500 rounded-2xl animate-spin shadow-lg shadow-indigo-500/5" />

        {/* Pulsating text */}
        <div className="text-indigo-400 font-mono text-xs font-bold animate-pulse tracking-[0.25em] uppercase">
          LOADING_BIM_MODULE...
        </div>
      </div>
    </div>
  );
}
