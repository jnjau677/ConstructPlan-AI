import React from 'react';
import { Building2 } from 'lucide-react';

// Fallback component displayed during lazy loading of sub-modules
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900/40 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm space-y-4">
      <div className="w-12 h-12 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-indigo-500/10">
        <Building2 className="w-6 h-6 text-indigo-400 animate-spin" />
      </div>
      <div className="text-center font-mono">
        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest animate-pulse">
          LOADING_BIM_MODULE...
        </p>
        <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">
          FETCHING VECTOR DATA & ASSETS
        </p>
      </div>
    </div>
  );
}
