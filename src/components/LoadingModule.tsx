import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule is a global Suspense fallback component for lazy-loaded BIM modules.
 * Designed with a centered div, pulsating animation, themed box/building element, and
 * the text "LOADING_BIM_MODULE..." matching the ArcSystem PRO futuristic aesthetic.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-12 text-center select-none">
      {/* Themed box element with custom pulsating & floating animations */}
      <div className="relative mb-6">
        {/* Glow behind the icon */}
        <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse" />

        <div className="relative w-20 h-20 bg-slate-900/80 border border-indigo-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/10 animate-bounce [animation-duration:3s]">
          <Building2 className="w-10 h-10 text-indigo-400 animate-pulse" />
        </div>
      </div>

      {/* Pulsating load message */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold font-mono tracking-[0.3em] text-indigo-400 uppercase animate-pulse">
          LOADING_BIM_MODULE...
        </h3>
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          SYS_REV: v4.2.0-PRO // CONNECTING CLUSTER
        </p>
      </div>

      {/* Progress bar simulation */}
      <div className="w-48 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-indigo-500 rounded-full animate-[shimmer_1.5s_infinite] w-1/3" />
      </div>
    </div>
  );
}
