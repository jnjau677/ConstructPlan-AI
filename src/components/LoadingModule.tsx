import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule component serves as the global Suspense fallback
 * during lazy-loaded sub-module chunk fetching.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 bg-slate-900/40 rounded-3xl border border-slate-800 p-12 backdrop-blur-sm">
      <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl animate-pulse">
        <Building2 className="w-10 h-10 text-indigo-400" />
      </div>
      <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400 animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
