import React from 'react';
import { Layers } from 'lucide-react';

/**
 * Fallback component displayed during React.lazy module chunk loading.
 * Styled to match the BIM dark slate theme.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-slate-900/40 rounded-3xl border border-slate-800 backdrop-blur-sm">
      <div className="w-16 h-16 border border-indigo-500/30 rounded-2xl flex items-center justify-center bg-indigo-500/5 mb-4 animate-pulse">
        <Layers className="w-8 h-8 text-indigo-400 opacity-80" />
      </div>
      <p className="text-xs font-mono font-bold tracking-[0.3em] text-indigo-400 uppercase animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
