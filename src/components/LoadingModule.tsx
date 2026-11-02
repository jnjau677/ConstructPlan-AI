import React from 'react';
import { Box } from 'lucide-react';

export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-slate-500 font-mono space-y-4">
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl animate-pulse">
        <Box className="w-8 h-8 text-indigo-400 animate-spin" />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Loading_BIM_Module...</p>
    </div>
  );
}
