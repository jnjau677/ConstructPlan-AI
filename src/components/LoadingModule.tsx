import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule component serves as the global Suspense fallback for lazy-loaded BIM modules.
 * It provides a consistent aesthetic: a centered div with 'LOADING_BIM_MODULE...',
 * a pulsating animation, and a themed box element containing a building icon.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[450px] w-full py-12 relative overflow-hidden">
      {/* Subtle background radial gradient for depth */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Themed box element */}
      <div className="relative z-10 w-48 h-48 border border-indigo-500/10 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-tr from-indigo-500/0 to-indigo-500/5 shadow-2xl shadow-indigo-500/5 animate-pulse">
        <Building2 className="w-16 h-16 text-indigo-400/40" />
      </div>

      {/* Pulsating text */}
      <div className="relative z-10 text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase animate-pulse select-none">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
