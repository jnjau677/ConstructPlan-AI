import React from 'react';

/**
 * LoadingModule component serves as the global Suspense fallback for lazy-loaded BIM modules.
 * It features a centered div, pulsating animation, themed box element, and standard LOADING_BIM_MODULE... text.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-12">
      {/* Themed box element with a pulsating animation */}
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
        {/* Animated outer aura */}
        <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 animate-pulse" />

        {/* Themed box element with bouncing/pulsing effect */}
        <div className="w-12 h-12 bg-slate-900 border-2 border-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 animate-bounce">
          <div className="w-4 h-4 bg-indigo-500 rounded-md animate-ping" />
        </div>
      </div>

      {/* Pulsing text element */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-mono font-bold tracking-[0.2em] text-indigo-400 uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </p>
        <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full animate-pulse" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  );
}
