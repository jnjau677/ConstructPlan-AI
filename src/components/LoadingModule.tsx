import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule is the consistent Suspense fallback component.
 * It features a centered layout, a themed box/building element,
 * a pulsating animation, and the "LOADING_BIM_MODULE..." text.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8 text-center cursor-default select-none">
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer glowing pulsing circle */}
        <div className="absolute inset-0 w-24 h-24 rounded-3xl bg-indigo-500/10 animate-ping" />

        {/* Themed box container */}
        <div className="relative w-20 h-20 bg-slate-900 border border-indigo-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/10 animate-pulse">
          <Building2 className="w-10 h-10 text-indigo-400" />
        </div>
      </div>

      {/* Monospace themed loading message */}
      <span className="text-[11px] font-mono tracking-[0.25em] text-indigo-400 font-bold uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </span>
    </div>
  );
}
