import React from 'react';
import { Cpu } from 'lucide-react';

/**
 * LoadingModule serves as the Suspense fallback when sub-modules are dynamically loaded via React.lazy.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm space-y-4">
      <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 animate-pulse">
        <Cpu className="w-8 h-8 text-indigo-400 animate-spin" style={{ animationDuration: '3s' }} />
      </div>
      <div className="text-center space-y-1">
        <p className="text-xs font-mono font-bold text-indigo-400 tracking-[0.2em] uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </p>
        <p className="text-[10px] font-mono text-slate-500 uppercase">
          INITIALIZING_SUB_SYSTEM_VECTOR
        </p>
      </div>
    </div>
  );
}
