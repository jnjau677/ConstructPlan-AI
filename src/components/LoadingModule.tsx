import React from 'react';
import { Box } from 'lucide-react';

/**
 * LoadingModule component serves as a high-fidelity visual fallback
 * during the dynamic loading of split code modules.
 * This is designed with a theme-matching aesthetic, a pulsating animation,
 * and a centered box element as a placeholder for the loading BIM sub-module.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-[10px] select-none">
      <div className="w-32 h-32 border border-white/5 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-white/0 to-white/5">
        <Box className="w-12 h-12 text-indigo-500/30" />
      </div>
      <div className="animate-pulse tracking-[0.3em] uppercase">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
