/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Box } from 'lucide-react';

/**
 * LoadingModule component
 * Serves as the global Suspense fallback for lazy-loaded BIM modules.
 * Matches the consistent project Suspense fallback aesthetic:
 * - A centered div with the text LOADING_BIM_MODULE...
 * - A pulsating animation
 * - A themed box element
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-indigo-400 font-mono text-[10px] tracking-[0.5em] select-none">
      <div className="w-16 h-16 border border-white/5 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-white/0 to-white/5 animate-pulse">
        <Box className="w-6 h-6 opacity-40 animate-pulse text-indigo-400" />
      </div>
      <div className="animate-pulse">
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
