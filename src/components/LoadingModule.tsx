import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule is the default Suspense fallback for lazy-loaded BIM modules.
 * It provides a highly stylized, pulsating, themed loading state to match
 * the technical CAD/BIM environment of ArcSystem PRO.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-[10px]">
      <div className="w-16 h-16 border border-indigo-500/20 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
        <Building2 className="w-6 h-6 text-indigo-400 animate-pulse" />
      </div>
      <div className="tracking-[0.3em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
