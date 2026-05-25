import React, { useState, useMemo } from 'react';
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
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  CartesianGrid,
  Customized
} from 'recharts';
import { format, addDays } from 'date-fns';

const stats = [
  { label: 'Project Phase', value: 'DD 60%', trend: '+5%', status: 'on-track' },
  { label: 'Carbon Footprint', value: '42.5 tCO2e', trend: '-12%', status: 'improved' },
  { label: 'Materials Est.', value: '$842,500', trend: '+2.1%', status: 'warning' },
  { label: 'Efficiency Rating', value: 'A++', trend: 'stable', status: 'optimal' },
];

const baseGanttData = [
  { phase: 'Site Prep & Demolition', start: 0, end: 14, color: '#6366f1', dependsOn: [] },
  { phase: 'Foundation & Grading', start: 14, end: 35, color: '#8b5cf6', dependsOn: ['Site Prep & Demolition'] },
  { phase: 'Structural Framing', start: 35, end: 65, color: '#10b981', dependsOn: ['Foundation & Grading'] },
  { phase: 'Roofing & Exterior', start: 60, end: 85, color: '#f59e0b', dependsOn: ['Structural Framing'] },
  { phase: 'MEP Rough-in', start: 70, end: 100, color: '#ec4899', dependsOn: ['Structural Framing'] },
  { phase: 'Insulation & Drywall', start: 100, end: 120, color: '#06b6d4', dependsOn: ['MEP Rough-in'] },
  { phase: 'Interior Finishes', start: 120, end: 150, color: '#f43f5e', dependsOn: ['Insulation & Drywall'] },
  { phase: 'Final Inspections', start: 150, end: 160, color: '#14b8a6', dependsOn: ['Interior Finishes'] },
];

const DependencyLines = ({ xAxisMap, yAxisMap, chartData }: any) => {
  if (!xAxisMap || !yAxisMap || !chartData) return null;

  const xAxis = Object.values(xAxisMap)[0] as any;
  const yAxis = Object.values(yAxisMap)[0] as any;

  if (!xAxis || !yAxis || !xAxis.scale || !yAxis.scale) return null;

  const getBandwidth = (scale: any) => scale.bandwidth ? scale.bandwidth() : 20;
  const band = getBandwidth(yAxis.scale);

  return (
    <g className="pointer-events-none">
      {chartData.map((item: any) => {
        if (!item.dependsOn) return null;

        return item.dependsOn.map((depPhase: string) => {
          const depItem = chartData.find((d: any) => d.phase === depPhase);
          if (!depItem) return null; // Dependency might be toggled off or hidden

          // y coordinates (centered on the bar)
          const y1 = yAxis.scale(depPhase) + band / 2;
          const y2 = yAxis.scale(item.phase) + band / 2;
          
          // x coordinates
          const x1 = xAxis.scale(depItem.end);
          const x2 = xAxis.scale(item.start);

          let path = '';
          if (x1 <= x2) {
             const midX = x1 + Math.max((x2 - x1) / 2, 8);
             path = `M ${x1},${y1} L ${midX},${y1} L ${midX},${y2} L ${x2},${y2}`;
          } else {
             const dropY = y1 + (y2 - y1) / 2;
             path = `M ${x1},${y1} L ${x1+8},${y1} L ${x1+8},${dropY} L ${x2-8},${dropY} L ${x2-8},${y2} L ${x2},${y2}`;
          }

          return (
             <g key={`${depPhase}-${item.phase}`}>
                <path d={path} fill="none" stroke="#475569" strokeWidth={1.5} strokeDasharray="3 3" />
                <polygon points={`${x2},${y2} ${x2-5},${y2-3} ${x2-5},${y2+3}`} fill="#475569" />
             </g>
          );
        });
      })}
    </g>
  );
};

const GanttTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#020617] border border-slate-700 p-3 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-white font-bold text-xs uppercase mb-1">{data.phase}</p>
        <p className="text-slate-400 text-[10px] font-mono mb-2">
          {data.startDateStr} — {data.endDateStr}
        </p>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color }} />
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-300">
               Duration: {data.end - data.start} Days
            </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const [projectStartDate, setProjectStartDate] = useState(() => new Date(2026, 0, 1));
  const [hiddenPhases, setHiddenPhases] = useState<string[]>([]);

  const ganttData = useMemo(() => {
    return baseGanttData.map(d => ({
      ...d,
      range: [d.start, d.end],
      startDateStr: format(addDays(projectStartDate, d.start), 'MMM dd'),
      endDateStr: format(addDays(projectStartDate, d.end), 'MMM dd'),
    }));
  }, [projectStartDate]);

  const togglePhase = (phase: string) => {
    setHiddenPhases(prev => 
      prev.includes(phase) ? prev.filter(p => p !== phase) : [...prev, phase]
    );
  };

  const visibleGanttData = ganttData.filter(d => !hiddenPhases.includes(d.phase));

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

      {/* Construction Schedule (Gantt) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
         <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" />
         <div className="relative z-10">
            <header className="flex justify-between items-end mb-8">
               <div>
                  <h3 className="text-xl font-bold tracking-tight text-white uppercase font-mono">Master <span className="text-indigo-400">Schedule</span></h3>
                  <p className="text-[10px] text-slate-500 font-mono mt-1 uppercase tracking-[0.2em]">TIMELINE MAPPING // GANTT_PROJECTION</p>
               </div>
               <div className="flex gap-4 items-center">
                 <input 
                   type="date"
                   value={format(projectStartDate, 'yyyy-MM-dd')}
                   onChange={(e) => {
                     const date = new Date(e.target.value);
                     if (!isNaN(date.getTime())) {
                       setProjectStartDate(date);
                     }
                   }}
                   className="bg-slate-900 border border-slate-700 text-slate-300 text-[10px] uppercase font-mono px-3 py-1.5 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                 />
                 <span className="text-[9px] font-mono px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20 uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                   LIVE SYNC
                 </span>
               </div>
            </header>

            <div className="mb-6 flex flex-wrap gap-2">
              {ganttData.map((data, index) => (
                <button
                  key={index}
                  onClick={() => togglePhase(data.phase)}
                  className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest border transition-all flex items-center gap-2 ${
                    hiddenPhases.includes(data.phase)
                      ? 'bg-slate-800/50 border-slate-700/50 text-slate-500 hover:text-slate-400'
                      : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.1)]'
                  }`}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ backgroundColor: hiddenPhases.includes(data.phase) ? '#475569' : data.color }} 
                  />
                  {data.phase}
                </button>
              ))}
            </div>

            <div className="w-full h-[300px] bg-[#020617]/50 rounded-2xl border border-slate-800/80 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={visibleGanttData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 140, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={true} vertical={true} />
                  <XAxis 
                    type="number" 
                    domain={[0, 160]} 
                    tickFormatter={(val) => `Day ${val}`}
                    tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'monospace' }}
                    axisLine={{ stroke: '#334155' }}
                    tickLine={{ stroke: '#334155' }}
                  />
                  <YAxis 
                    type="category" 
                    dataKey="phase" 
                    axisLine={{ stroke: '#334155' }}
                    tickLine={false}
                    tick={{ fill: '#cbd5e1', fontSize: 10, fontWeight: 'bold', fontFamily: 'sans-serif' }}
                  />
                  <Tooltip content={<GanttTooltip />} cursor={{ fill: '#1e293b', opacity: 0.5 }} />
                  <Bar dataKey="range" radius={[4, 4, 4, 4]} barSize={16}>
                    {visibleGanttData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                  <Customized component={<DependencyLines chartData={visibleGanttData} />} />
                </BarChart>
              </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
}
