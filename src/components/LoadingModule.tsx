/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Box } from 'lucide-react';

/**
 * Standard loading fallback for lazy-loaded BIM modules.
 * Implements a centered layout, a themed box icon with a pulsating glow,
 * and standard 'LOADING_BIM_MODULE...' indicator.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-[10px] tracking-[0.5em] gap-4 select-none">
      <div className="w-16 h-16 border border-indigo-500/15 rounded-2xl flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/5 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
        <Box className="w-6 h-6 text-indigo-400/40 animate-pulse" />
      </div>
      <div className="animate-pulse">LOADING_BIM_MODULE...</div>
    </div>
  );
}
