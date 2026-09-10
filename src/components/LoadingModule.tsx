/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-slate-900/30 rounded-3xl border border-slate-800/50 backdrop-blur-sm animate-pulse">
      <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
        <Cpu className="w-8 h-8 animate-spin" style={{ animationDuration: '3s' }} />
      </div>
      <h3 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-widest mb-1">
        LOADING_BIM_MODULE...
      </h3>
      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
        Initializing workspace components
      </p>
    </div>
  );
}
