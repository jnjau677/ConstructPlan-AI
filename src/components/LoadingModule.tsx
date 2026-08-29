import React from 'react';

/**
 * LoadingModule fallback component for React.lazy code splitting.
 * Styled to seamlessly integrate with the ArcSystem PRO dark BIM UI theme.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 p-8 bg-slate-900/20 border border-slate-800/50 rounded-3xl backdrop-blur-sm">
      <div className="w-12 h-12 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center shadow-lg shadow-indigo-900/20 animate-pulse">
        <div className="w-4 h-4 rounded-sm bg-indigo-500 shadow-[0_0_12px_#6366f1]" />
      </div>
      <span className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em] animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
