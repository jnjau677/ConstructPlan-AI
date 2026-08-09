/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * LoadingModule is a high-fidelity suspense fallback designed to match the
 * high-tech BIM (Building Information Modeling) aesthetic of ArcSystem PRO.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-[11px] select-none">
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
        {/* Animated outer tracking ring */}
        <div className="absolute inset-0 border border-indigo-500/20 rounded-xl animate-spin [animation-duration:8s]" />

        {/* Pulsating inner target frame */}
        <div className="absolute w-16 h-16 border border-dashed border-indigo-400/40 rounded-lg animate-pulse" />

        {/* Glowing core indicator */}
        <div className="w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1] animate-ping" />
      </div>

      <div className="flex flex-col items-center gap-1.5 tracking-[0.3em]">
        <span className="font-bold uppercase animate-pulse">LOADING_BIM_MODULE...</span>
        <span className="text-[9px] text-slate-500 uppercase tracking-widest font-mono">initializing cluster workspace</span>
      </div>
    </div>
  );
}
