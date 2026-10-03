import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Fallback loading component rendered while lazy-loaded BIM modules are fetched.
 * Designed with a centered flexbox layout and themed pulsating animation matching the dark slate UI.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-12 bg-slate-900/30 border border-slate-800/80 rounded-3xl backdrop-blur-sm">
      <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4 animate-bounce">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
      <p className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-[0.3em] animate-pulse">
        LOADING_BIM_MODULE...
      </p>
      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2">
        DECRYPTING_STUDIO_BUFFERS
      </p>
    </div>
  );
}
