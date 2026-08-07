/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * LoadingModule component acts as a high-fidelity Suspense fallback for
 * lazy-loaded BIM modules. It provides a centered loading experience with
 * a pulsating animation that seamlessly integrates with the application's
 * high-tech/military-sci-fi/cyberpunk aesthetic.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8">
      {/* Themed box element with a pulsating outer shadow/glow */}
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center border border-indigo-500/30 rounded-2xl bg-indigo-500/5 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
        {/* Pulsating decorative elements */}
        <div className="absolute inset-2 border border-indigo-400/20 rounded-xl animate-pulse" />
        <div className="absolute inset-0 border border-t-indigo-500 border-r-indigo-500 rounded-2xl animate-spin [animation-duration:3s]" />

        {/* Central glowing indicator */}
        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-ping shadow-[0_0_12px_#6366f1]" />
        <div className="absolute w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_8px_#818cf8]" />
      </div>

      {/* Styled text with high-tech look and pulsating opacity */}
      <div className="text-center">
        <h4 className="text-xs font-mono font-bold tracking-[0.25em] text-indigo-400 animate-pulse uppercase">
          LOADING_BIM_MODULE...
        </h4>
        <p className="text-[9px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
          Resolving project coordinates // initializing vectors
        </p>
      </div>
    </div>
  );
}
