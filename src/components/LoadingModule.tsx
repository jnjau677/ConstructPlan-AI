import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule component
 * Renders a consistent Suspense fallback aesthetic:
 * A centered div with a pulsating animation, a themed box element, and 'LOADING_BIM_MODULE...' text.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-12 text-center text-indigo-400">
      <div className="w-24 h-24 border border-indigo-500/10 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/5 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
        <Building2 className="w-10 h-10 opacity-60 text-indigo-400" />
      </div>
      <div className="text-[11px] font-mono tracking-[0.25em] uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
