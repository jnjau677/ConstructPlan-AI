import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * A consistent high-fidelity fallback component for lazy-loaded BIM modules.
 * Features a centered layout, pulsating animation, themed box container,
 * and standard "LOADING_BIM_MODULE..." indicator.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4" aria-live="polite">
      <div className="w-16 h-16 border border-indigo-500/20 rounded-2xl flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/5">
        <Building2 className="w-8 h-8 text-indigo-400 opacity-60" />
      </div>
      <div className="text-indigo-400/60 font-mono text-xs tracking-[0.25em] animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
