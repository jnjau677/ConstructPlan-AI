import React from 'react';

// Fallback component displayed while React.lazy components are loaded dynamically
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
      <p className="text-xs font-mono text-slate-500 uppercase tracking-widest animate-pulse">
        LOADING_BIM_MODULE...
      </p>
    </div>
  );
}
