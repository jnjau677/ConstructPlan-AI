import React from 'react';

/**
 * LoadingModule fallback component for React.lazy Suspense boundaries.
 * Styled to match the dark BIM theme and design aesthetics of the application.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full space-y-4">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-xl animate-spin" />
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-slate-400">
          LOADING_BIM_MODULE...
        </span>
      </div>
    </div>
  );
}
