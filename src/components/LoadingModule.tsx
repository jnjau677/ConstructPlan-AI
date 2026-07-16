import React from 'react';

const LoadingModule: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-indigo-500/20 rounded-xl animate-pulse bg-indigo-500/5 flex items-center justify-center mb-4">
          <div className="w-8 h-8 border border-indigo-500/40 rounded-lg animate-ping" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono font-bold text-indigo-400 tracking-[0.3em] animate-pulse uppercase">
          LOADING_BIM_MODULE...
        </span>
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 animate-[loading_2s_ease-in-out_infinite] w-1/3" />
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingModule;
