/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule is a high-fidelity Suspense fallback for our lazy-loaded modules.
 * It contains a centered div with 'LOADING_BIM_MODULE...' text, a pulsating animation,
 * and a themed box element matching the ArcSystem PRO design system.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-12">
      <div className="relative flex items-center justify-center">
        {/* Pulsating themed box element */}
        <div className="w-16 h-16 border-2 border-indigo-500/30 rounded-xl flex items-center justify-center animate-pulse bg-indigo-950/20 shadow-lg shadow-indigo-500/10">
          <Building2 className="w-8 h-8 text-indigo-400 animate-pulse" />
        </div>
        {/* Outer glowing ripple effect */}
        <div className="absolute inset-0 rounded-xl bg-indigo-500/20 blur-xl animate-ping opacity-30" />
      </div>
      <p className="mt-6 text-[10px] font-mono font-bold tracking-[0.2em] text-indigo-400 animate-pulse uppercase">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
