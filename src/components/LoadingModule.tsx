import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule
 *
 * Consistent Suspense fallback component for lazy-loaded BIM modules.
 * Features a centered div, pulsating animation, themed box element,
 * and the 'LOADING_BIM_MODULE...' text as specified in project design requirements.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full py-20">
      <div className="relative mb-6">
        {/* Pulsating animation blur background */}
        <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse" />
        {/* Themed box element with icon */}
        <div className="relative w-16 h-16 bg-slate-900 border border-indigo-500/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-indigo-500/10">
          <Building2 className="w-8 h-8 text-indigo-400" />
        </div>
      </div>
      {/* Loading indicator text */}
      <p className="text-[10px] font-mono tracking-[0.3em] text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
