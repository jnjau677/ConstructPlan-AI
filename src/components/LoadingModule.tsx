import React from 'react';

/**
 * LoadingModule is the consistent Suspense fallback aesthetic for the application.
 * It features a centered layout with a pulsating animation, themed box element,
 * and the 'LOADING_BIM_MODULE...' text.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-12">
      <div className="relative flex items-center justify-center">
        {/* Pulsating outer ring */}
        <div className="absolute w-16 h-16 rounded-xl border border-indigo-500/30 animate-ping opacity-75" />
        {/* Themed box element */}
        <div className="w-12 h-12 bg-slate-900 border-2 border-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 animate-pulse">
          <div className="w-4 h-4 bg-indigo-500 rounded-md animate-spin duration-3000" />
        </div>
      </div>
      <span className="mt-6 text-xs font-mono font-bold tracking-[0.25em] text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
