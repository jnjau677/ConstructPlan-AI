import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * LoadingModule is a consistent Suspense fallback aesthetic:
 * A centered div with the text 'LOADING_BIM_MODULE...', a pulsating animation, and a themed box element.
 *
 * Performance explanation: Under the lazy loading strategy implemented in App.tsx, this lightweight component
 * serves as a placeholders during module downloads, maintaining a highly responsive and unified UI.
 */
export default function LoadingModule() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-indigo-400 font-mono text-xs select-none">
      <div className="w-24 h-24 border border-indigo-500/10 rounded-2xl mb-6 flex items-center justify-center animate-pulse bg-gradient-to-tr from-indigo-500/0 to-indigo-500/5 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
        <Building2 className="w-8 h-8 opacity-40 text-indigo-400" />
      </div>
      <div className="flex items-center gap-2 tracking-[0.3em] uppercase animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
        LOADING_BIM_MODULE...
      </div>
    </div>
  );
}
