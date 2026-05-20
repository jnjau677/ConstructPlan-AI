import React from 'react';
import { 
  Wind, 
  Sun, 
  TrendingUp, 
  AlertCircle,
  Package,
  Layers,
  ArrowUpRight,
  Leaf,
  Building2
} from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Project Phase', value: 'DD 60%', trend: '+5%', status: 'on-track' },
  { label: 'Carbon Footprint', value: '42.5 tCO2e', trend: '-12%', status: 'improved' },
  { label: 'Materials Est.', value: '$842,500', trend: '+2.1%', status: 'warning' },
  { label: 'Efficiency Rating', value: 'A++', trend: 'stable', status: 'optimal' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase font-mono">Mission <span className="text-indigo-400">Control</span></h2>
          <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-[0.2em]">PROJECT: RESIDENTIAL-X24 // CORE: SYDNEY_NORTH</p>
        </div>
        <div className="flex gap-4">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
             <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_8px_#6366f1]" />
             <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">ArcSystem PRO V8.12-Active</span>
          </div>
          <button className="px-6 py-2.5 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40">
            Export Analytics
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label}
            className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl hover:border-indigo-500/30 transition-all cursor-default group"
          >
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold font-mono tracking-tighter text-white">{stat.value}</h3>
              <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded bg-slate-800 ${
                stat.status === 'optimal' || stat.status === 'improved' ? 'text-emerald-400' : 
                stat.status === 'warning' ? 'text-orange-400' : 'text-indigo-400'
              }`}>
                {stat.trend}
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
              <h4 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-slate-400">
                <Layers className="w-4 h-4 text-indigo-400" />
                BIM 4D Workspace
              </h4>
              <span className="text-[9px] font-mono px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 uppercase">RT_LINK_ACTIVE</span>
            </div>
            <div className="p-8 aspect-video bg-[#020617] relative flex items-center justify-center overflow-hidden">
               {/* 3D Mock */}
               <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" />
               <div className="text-indigo-400/30 font-mono text-[10px] text-center">
                  <div className="w-48 h-48 border border-white/5 rounded-2xl mb-4 flex items-center justify-center animate-pulse bg-gradient-to-tr from-white/0 to-white/5">
                    <Building2 className="w-16 h-16 opacity-5" />
                  </div>
                  CORE_ENGINE_RENDERING...
               </div>
               
               <div className="absolute bottom-6 left-6 right-6 flex gap-1.5">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full ${i < 8 ? 'bg-indigo-500 shadow-[0_0_8px_#6366f1]' : 'bg-slate-800'}`} />
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="space-y-6">
           <div className="bg-emerald-950/20 border border-emerald-900/30 p-8 rounded-3xl relative overflow-hidden group">
              <Leaf className="absolute -top-4 -right-4 w-24 h-24 text-emerald-500/5 rotate-12" />
              <h4 className="text-lg font-bold mb-4 text-emerald-400 uppercase font-mono italic">Eco_Insight</h4>
              <p className="text-xs text-emerald-100/60 leading-relaxed mb-6 font-medium">
                Switching primary structural beams to CLT could reduce the project's embodied carbon by 65%.
              </p>
              <button className="w-full py-4 bg-emerald-500 text-emerald-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 group text-xs uppercase tracking-widest">
                 Run LCA Simulation
                 <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
           </div>

           <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Critical Vectors</h4>
              <div className="space-y-3">
                 <div className="flex gap-4 p-4 bg-red-950/20 rounded-xl border border-red-900/30">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <div>
                       <p className="text-xs font-bold text-red-400 uppercase tracking-tighter">Zoning Fault</p>
                       <p className="text-[10px] text-red-100/40 mt-1 uppercase leading-tight">Rear setback limit error @PT_B4</p>
                    </div>
                 </div>
                 <div className="flex gap-4 p-4 bg-orange-950/20 rounded-xl border border-orange-900/30">
                    <Package className="w-5 h-5 text-orange-500 shrink-0" />
                    <div>
                       <p className="text-xs font-bold text-orange-400 uppercase tracking-tighter">Supply Lock</p>
                       <p className="text-[10px] text-orange-100/40 mt-1 uppercase leading-tight">Batch X-420: Delayed 48H</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
