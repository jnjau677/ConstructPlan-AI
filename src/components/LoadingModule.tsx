import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full animate-pulse">
      <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center border border-indigo-500/30 mb-4">
        <Building2 className="w-8 h-8 text-indigo-400" />
      </div>
      <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] animate-pulse">
        LOADING_BIM_MODULE...
      </div>
      <div className="mt-4 flex gap-1">
        <div className="w-8 h-1 bg-indigo-500 rounded-full" />
        <div className="w-4 h-1 bg-slate-800 rounded-full" />
        <div className="w-2 h-1 bg-slate-800 rounded-full" />
      </div>
    </div>
  );
}
