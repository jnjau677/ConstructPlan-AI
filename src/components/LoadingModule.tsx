import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-20 text-indigo-400 font-mono text-[10px] tracking-[0.5em] select-none">
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/10 border border-indigo-500/20 rounded-2xl shadow-[0_0_15px_rgba(99,102,241,0.1)]">
        <Building2 className="w-10 h-10 text-indigo-400 opacity-60 animate-bounce" style={{ animationDuration: '2s' }} />
        {/* Subtle decorative elements for themed box */}
        <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-indigo-400/40" />
        <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-indigo-400/40" />
        <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-indigo-400/40" />
        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-indigo-400/40" />
      </div>
      <div className="animate-pulse">LOADING_BIM_MODULE...</div>
    </div>
  );
}
