/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule component serves as the global Suspense fallback for lazy-loaded BIM modules.
 * Designed to provide a consistent Suspense fallback aesthetic with a centered div,
 * pulsating animation, themed box element, and high-tech mono typography.
 */
export default function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full p-4">
      {/* Themed box element */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 max-w-sm w-full text-center flex flex-col items-center justify-center backdrop-blur-sm relative overflow-hidden group">

        {/* Subtle grid pattern background inside the card */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Pulsating animated central core indicator */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur-md animate-pulse" />
          <div className="w-14 h-14 bg-indigo-600/10 border border-indigo-500/30 rounded-xl flex items-center justify-center relative animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <Building2 className="w-7 h-7 text-indigo-400 animate-pulse" />
          </div>
        </div>

        {/* Pulsating text: LOADING_BIM_MODULE... */}
        <div className="space-y-2 animate-pulse">
          <p className="text-xs font-mono tracking-[0.25em] text-indigo-400 font-bold uppercase">
            LOADING_BIM_MODULE...
          </p>
          <p className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
            ESTABLISHING SECURE PIPELINE // PRO_V8
          </p>
        </div>

        {/* Dynamic decorative visual lines */}
        <div className="mt-6 w-32 flex gap-1 justify-center">
          <div className="h-1 w-8 rounded-full bg-indigo-500/80 animate-pulse" />
          <div className="h-1 w-4 rounded-full bg-indigo-500/40 animate-pulse delay-100" />
          <div className="h-1 w-2 rounded-full bg-indigo-500/20 animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
}
