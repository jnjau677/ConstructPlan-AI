import React, { useState } from 'react';
import { 
  Triangle, 
  Ruler, 
  ArrowRight, 
  Info,
  Maximize2
} from 'lucide-react';

export default function EngineeringCalculators() {
  const [activeCalc, setActiveCalc] = useState<'stair' | 'roof'>('stair');

  return (
    <div className="space-y-8">
      <header className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
        <h2 className="text-3xl font-bold tracking-tight text-white uppercase font-mono">Engineering <span className="text-indigo-400">Studio</span></h2>
        <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-[0.2em]">PRECISION CALCS // SYSTEM_TOLERANCE: 0.001mm</p>
      </header>

      <div className="flex gap-4 p-1.5 bg-slate-900/80 rounded-xl w-fit border border-slate-800">
        <button 
          onClick={() => setActiveCalc('stair')}
          className={`px-8 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
            activeCalc === 'stair' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Stair Stringers
        </button>
        <button 
          onClick={() => setActiveCalc('roof')}
          className={`px-8 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
            activeCalc === 'roof' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Roof Pitch
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {activeCalc === 'stair' ? <StairCalculator /> : <RoofCalculator />}
        
        {/* Technical References */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
             <div className="flex items-center gap-3 mb-6">
               <Info className="w-5 h-5 text-indigo-400" />
               <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200">Compliance Vector</h3>
             </div>
             <ul className="space-y-4 text-[10px] font-mono text-slate-400">
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Max Rise (Resi)</span>
                 <span className="text-white font-bold">190mm</span>
               </li>
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Min Tread depth</span>
                 <span className="text-white font-bold">250mm</span>
               </li>
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>2R + G Formula</span>
                 <span className="text-white font-bold">585-625mm</span>
               </li>
               <li className="flex justify-between">
                 <span>Headroom Min</span>
                 <span className="text-white font-bold">2030mm</span>
               </li>
             </ul>
          </div>

          <div className="bg-slate-950/40 border border-slate-800 p-8 rounded-3xl aspect-square relative flex items-center justify-center overflow-hidden">
             {/* Tech Sketch */}
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" />
             <div className="relative w-full h-full border border-slate-800 rounded-2xl flex items-center justify-center bg-slate-900/50">
                <div className="p-8 border border-slate-800 rounded bg-indigo-500/5 rotate-12 backdrop-blur-sm">
                   <Triangle className="w-24 h-24 text-indigo-500/20" />
                </div>
                <div className="absolute top-4 left-4 text-[9px] font-mono text-slate-600">REF_ID: ST-001_DYNAM</div>
                <div className="absolute bottom-4 right-4 text-[9px] font-mono text-indigo-400 font-bold uppercase tracking-widest">Live Engine Active</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StairCalculator() {
  const [totalRise, setTotalRise] = useState('2700');
  const [targetRise, setTargetRise] = useState('175');

  const risersCount = Math.ceil(Number(totalRise) / Number(targetRise));
  const actualRise = Number(totalRise) / risersCount;
  const treadsCount = risersCount - 1;

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Total Rise (mm)</label>
          <input 
            type="number" 
            value={totalRise}
            onChange={(e) => setTotalRise(e.target.value)}
            className="w-full bg-[#020617] border border-slate-800 p-4 rounded-xl font-mono text-lg text-white focus:outline-none focus:border-indigo-500 transition-all placeholder-slate-700"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Target Rise (mm)</label>
          <input 
            type="number" 
            value={targetRise}
            onChange={(e) => setTargetRise(e.target.value)}
            className="w-full bg-[#020617] border border-slate-800 p-4 rounded-xl font-mono text-lg text-white focus:outline-none focus:border-indigo-500 transition-all placeholder-slate-700"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-slate-400">
          <Ruler className="w-4 h-4 text-indigo-400" />
          Stringer Vector output
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800">
            <p className="text-[9px] text-slate-500 uppercase font-bold mb-1">Riser Count</p>
            <p className="text-xl font-mono font-bold text-white">{risersCount}</p>
          </div>
          <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400">
            <p className="text-[9px] text-indigo-300/60 uppercase font-bold mb-1">Unit Rise</p>
            <p className="text-xl font-mono font-bold">{actualRise.toFixed(2)}</p>
          </div>
           <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800">
            <p className="text-[9px] text-slate-500 uppercase font-bold mb-1">Tread Count</p>
            <p className="text-xl font-mono font-bold text-white">{treadsCount}</p>
          </div>
        </div>
      </div>

      <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all group text-xs uppercase tracking-widest shadow-lg shadow-indigo-900/40">
        Generate CAD Schematic
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

function RoofCalculator() {
  const [span, setSpan] = useState('6000');
  const [pitch, setPitch] = useState('22.5');

  const halfSpan = Number(span) / 2;
  const rise = halfSpan * Math.tan((Number(pitch) * Math.PI) / 180);
  const rafterLength = Math.sqrt(Math.pow(halfSpan, 2) + Math.pow(rise, 2));

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Span (mm)</label>
          <input 
            type="number" 
            value={span}
            onChange={(e) => setSpan(e.target.value)}
            className="w-full bg-[#020617] border border-slate-800 p-4 rounded-xl font-mono text-lg text-white"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Pitch Deg</label>
          <input 
            type="number" 
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            className="w-full bg-[#020617] border border-slate-800 p-4 rounded-xl font-mono text-lg text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-slate-950/40 rounded-2xl border border-slate-800">
          <p className="text-[9px] font-bold text-slate-500 uppercase mb-1">Apex Rise</p>
          <p className="text-2xl font-mono font-bold tracking-tighter text-white">{rise.toFixed(1)}mm</p>
        </div>
        <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
          <p className="text-[9px] font-bold text-indigo-300/60 uppercase mb-1">Rafter Hypotenuse</p>
          <p className="text-2xl font-mono font-bold tracking-tighter text-indigo-400">{rafterLength.toFixed(1)}mm</p>
        </div>
      </div>

      <div className="p-6 border border-slate-800 bg-[#020617] rounded-3xl text-center">
        <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Gable Config // V-PITCH: ACTIVE</p>
      </div>
    </div>
  );
}
