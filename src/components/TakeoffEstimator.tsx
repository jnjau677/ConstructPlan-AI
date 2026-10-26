import React from 'react';
import { 
  FileSpreadsheet, 
  Download, 
  Printer, 
  ArrowUpRight,
  TrendingDown,
  TrendingUp,
  Tag
} from 'lucide-react';

const estimates = [
  { id: '1', item: 'Reinforced Concrete Beam (300x600)', category: 'Concrete', unit: 'm3', quantity: 12.5, rate: 450, total: 5625, change: -2.1 },
  { id: '2', item: 'CLT External Wall Panel', category: 'Timber', unit: 'm2', quantity: 240, rate: 120, total: 28800, change: 0 },
  { id: '3', item: 'HR Steel Piles', category: 'Structural', unit: 't', quantity: 4.8, rate: 2100, total: 10080, change: +5.4 },
  { id: '4', item: 'Internal Glazing - Clear Loft', category: 'Finishes', unit: 'm2', quantity: 85, rate: 180, total: 15300, change: -1.2 },
];

// Hoist static estimates total calculation to module scope to avoid redundant array reduction calls on component re-renders
const GRAND_TOTAL = estimates.reduce((acc, curr) => acc + curr.total, 0);

export default function TakeoffEstimator() {
  const grandTotal = GRAND_TOTAL;

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase font-mono">BOM <span className="text-indigo-400">Processor</span></h2>
          <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-[0.2em]">LIVE QUANTITY TAKEOFF // ACCURACY: BIM_LOD_400</p>
        </div>
        <div className="flex gap-3">
          <button className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-colors shadow-lg group">
            <Download className="w-5 h-5 text-indigo-400 group-hover:text-white" />
          </button>
          <button className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-colors shadow-lg group">
            <Printer className="w-5 h-5 text-indigo-400 group-hover:text-white" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/40 border-b border-slate-800">
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Component Spec</th>
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 text-center">Unit</th>
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 text-center">Qty</th>
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 text-center">Rate</th>
                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 text-right">Total (AUD)</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-sm divide-y divide-slate-800">
                  {estimates.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-200 uppercase tracking-tight">{item.item}</span>
                          <span className="text-[9px] text-slate-600 uppercase tracking-widest mt-0.5">{item.category}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-slate-500 text-center">{item.unit}</td>
                      <td className="px-6 py-5 font-bold text-white text-center">{item.quantity}</td>
                      <td className="px-6 py-5 text-slate-400 text-center">${item.rate}</td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                           {item.change !== 0 && (
                             <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.change > 0 ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                               {item.change > 0 ? '+' : ''}{item.change}%
                             </span>
                           )}
                           <span className="font-bold text-indigo-400">${item.total.toLocaleString()}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-10 bg-[#020617] text-white flex justify-between items-center border-t border-slate-800">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-2">Aggregate Estimation</p>
                <h3 className="text-5xl font-bold font-mono tracking-tighter text-white">${grandTotal.toLocaleString()}</h3>
              </div>
              <button className="px-10 py-4 bg-indigo-600 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40 flex items-center gap-3 group">
                 Commit to Budget
                 <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                <Tag className="w-4 h-4 text-indigo-400" />
                Market Vectors
              </h4>
              
              <div className="space-y-4">
                 <div className="p-5 bg-red-950/20 rounded-2xl border border-red-900/30 flex items-start gap-4">
                    <TrendingUp className="w-6 h-6 text-red-500 shrink-0" />
                    <div>
                       <p className="text-xs font-bold text-red-400 uppercase tracking-tighter">Structural Steel</p>
                       <p className="text-2xl font-bold font-mono tracking-tighter text-white">+14.2%</p>
                       <p className="text-[9px] text-red-200/40 mt-1 uppercase leading-tight font-medium">Regional cluster bottleneck in APAC log-hubs</p>
                    </div>
                 </div>

                 <div className="p-5 bg-emerald-950/20 rounded-2xl border border-emerald-900/30 flex items-start gap-4">
                    <TrendingDown className="w-6 h-6 text-emerald-500 shrink-0" />
                    <div>
                       <p className="text-xs font-bold text-emerald-400 uppercase tracking-tighter">Solar PV Array</p>
                       <p className="text-2xl font-bold font-mono tracking-tighter text-white">-8.4%</p>
                       <p className="text-[9px] text-emerald-200/40 mt-1 uppercase leading-tight font-medium">New gen cells saturating local inventory</p>
                    </div>
                 </div>
              </div>

              <div className="p-6 bg-[#020617] rounded-2xl border border-slate-800 space-y-4 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 rounded-bl-full group-hover:bg-indigo-500/10 transition-colors" />
                 <h5 className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Core Optimization</h5>
                 <p className="text-xs text-slate-400 leading-relaxed font-medium">
                   Switching to <span className="font-bold text-white">Recycled Aggregates</span> for the slab-prep could save $4,200 and boost the LCA rating by 4%.
                 </p>
                 <button className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest hover:text-white transition-colors">Technical_Spec_Link</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
