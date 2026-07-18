import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * Global Suspense fallback aesthetic for lazy-loaded BIM modules.
 * Features a centered layout, pulsating animation, text, and themed box.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-[10px] space-y-4">
      <div className="w-16 h-16 border border-white/10 rounded-2xl flex items-center justify-center animate-pulse bg-gradient-to-tr from-white/0 to-white/5">
        <Building2 className="w-6 h-6 opacity-40 text-indigo-400" />
      </div>
      <div className="animate-pulse tracking-[0.2em] uppercase font-bold">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
