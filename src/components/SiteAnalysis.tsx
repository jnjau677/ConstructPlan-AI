import React, { useState, useMemo } from 'react';
import { 
  Mountain, 
  Scan, 
  Map as MapIcon, 
  Drone,
  Layers,
  Box,
  ChevronRight,
  Maximize2,
  Ruler,
  Zap,
  Leaf
} from 'lucide-react';
import { motion } from 'motion/react';

export default function SiteAnalysis() {
  const [activeLayer, setActiveLayer] = useState('lidar');
  const [activeOverlays, setActiveOverlays] = useState<string[]>([]);

  // Memoize LiDAR point cloud visualization blocks to prevent layout shifts and visual jitter on re-renders
  const lidarBlocks = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      width: `${Math.random() * 300 + 100}px`,
      height: `${Math.random() * 150 + 50}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
  }, []);

  const toggleOverlay = (id: string) => {
    setActiveOverlays(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase font-mono">Topo <span className="text-indigo-400">Studio</span></h2>
          <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-[0.2em]">SITE DATA // LiDAR MAPPING // ENGINE_REV: 8.4</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-500 transition-all border border-indigo-400 shadow-lg shadow-indigo-900/40 group">
            <Drone className="w-4 h-4 group-hover:animate-pulse" /> Start Remote Survey
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Layer Controls */}
        <div className="lg:col-span-1 space-y-4">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Raster Display Layers</h4>
          {[
            { id: 'lidar', label: 'Point Cloud', icon: Scan },
            { id: 'contours', label: 'Topography', icon: Mountain },
            { id: 'ortho', label: 'Ortho-Mosaic', icon: MapIcon },
            { id: 'cadastral', label: 'Cadastral', icon: Layers },
          ].map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all border ${
                activeLayer === layer.id 
                  ? 'bg-slate-800 text-white border-indigo-500/50 shadow-xl shadow-indigo-900/20' 
                  : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <layer.icon className={`w-4 h-4 ${activeLayer === layer.id ? 'text-indigo-400' : 'text-slate-600'}`} />
              <span className="text-[11px] font-bold uppercase tracking-tight">{layer.label}</span>
              <ChevronRight className={`ml-auto w-4 h-4 opacity-30 ${activeLayer === layer.id ? 'visible' : 'invisible'}`} />
            </button>
          ))}

          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 mt-8">Vector Overlays</h4>
          <div className="space-y-3">
          {[
            { id: 'utilities', label: 'Utility Mapping', icon: Zap },
            { id: 'soil', label: 'Soil Composition', icon: Layers },
            { id: 'vegetation', label: 'Tree Protection', icon: Leaf },
          ].map((overlay) => (
            <button
              key={overlay.id}
              onClick={() => toggleOverlay(overlay.id)}
              className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all border ${
                activeOverlays.includes(overlay.id)
                  ? 'bg-indigo-600/10 text-indigo-400 border-indigo-500/30' 
                  : 'bg-slate-900/40 text-slate-500 border-slate-800 hover:bg-slate-800 hover:text-slate-300'
              }`}
            >
              <div className={`w-4 h-4 rounded flex items-center justify-center border ${activeOverlays.includes(overlay.id) ? 'border-indigo-400 bg-indigo-500/20' : 'border-slate-600'}`}>
                 {activeOverlays.includes(overlay.id) && <div className="w-2 h-2 bg-indigo-400 rounded-sm" />}
              </div>
              <overlay.icon className={`w-4 h-4 ${activeOverlays.includes(overlay.id) ? 'text-indigo-400' : 'text-slate-600'}`} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{overlay.label}</span>
            </button>
          ))}
          </div>

          <div className="mt-8 p-6 bg-slate-900 border border-slate-800 rounded-3xl backdrop-blur-sm">
             <h5 className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4">Telemetric Data</h5>
             <div className="space-y-4 font-mono text-[10px]">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                   <span className="opacity-40 uppercase">Points</span>
                   <span className="font-bold text-slate-200">14,240,512</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                   <span className="opacity-40 uppercase">Resolution</span>
                   <span className="font-bold text-slate-200">0.05m/px</span>
                </div>
                <div className="flex justify-between">
                   <span className="opacity-40 uppercase">Delta-Z Max</span>
                   <span className="font-bold text-indigo-400">8.42m</span>
                </div>
             </div>
          </div>
        </div>

        {/* Viewport */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl relative group">
           <div className="absolute top-6 left-6 z-10 flex gap-2">
              <span className="px-3 py-1.5 bg-[#020617]/80 backdrop-blur-lg text-indigo-400 text-[9px] font-mono rounded-lg border border-indigo-500/20 uppercase tracking-widest">
                GE_LAT: -34.221" // LON: 150.842"
              </span>
           </div>
           
           <div className="absolute top-6 right-6 z-10">
              <button className="p-2.5 bg-slate-800 hover:bg-slate-700 text-indigo-400 border border-slate-700 rounded-xl transition-all shadow-lg">
                <Maximize2 className="w-5 h-5" />
              </button>
           </div>

           <div className="w-full h-full min-h-[600px] bg-[#020617] flex items-center justify-center relative overflow-hidden">
              {/* Scanline Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              {/* Viz Overlays */}
              {activeLayer === 'lidar' && (
                <div className="relative w-full h-full overflow-hidden">
                  {lidarBlocks.map((block, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.15 }}
                      transition={{ delay: i * 0.03 }}
                      className="absolute border border-indigo-500/40 rounded-lg bg-indigo-500/5 backdrop-blur-[1px]"
                      style={{
                        width: block.width,
                        height: block.height,
                        left: block.left,
                        top: block.top,
                        transform: 'translate(-50%, -50%) skew(15deg, -2deg)',
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-indigo-500 font-mono text-[10px] animate-pulse tracking-[0.5em] flex flex-col items-center gap-4">
                       <Scan className="w-8 h-8 opacity-40" />
                       ANALYZING_POINT_CLUSTER...
                    </div>
                  </div>
                </div>
              )}

              {activeLayer === 'contours' && (
                <div className="w-full h-full flex items-center justify-center">
                   <svg width="100%" height="100%" className="opacity-20">
                      {[...Array(12)].map((_, i) => (
                        <ellipse 
                          key={i}
                          cx="50%" cy="50%" 
                          rx={`${15 * i}%`} ry={`${10 * i}%`}
                          fill="none" stroke="#6366f1" strokeWidth="1"
                          strokeDasharray="4 8"
                        />
                      ))}
                   </svg>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/10 backdrop-blur-md text-indigo-400 px-6 py-2 rounded-lg text-[10px] font-bold border border-indigo-500/20 uppercase tracking-[0.2em]">
                      RL_DATUM: 12.000m
                   </div>
                </div>
              )}

              {/* Overlay Viz */}
              {activeOverlays.includes('utilities') && (
                <div className="absolute inset-0 pointer-events-none z-20">
                  <svg width="100%" height="100%" className="opacity-60 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                    <path d="M0 200 Q 150 250, 300 200 T 600 200" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 5" />
                    <circle cx="300" cy="200" r="4" fill="#f59e0b" />
                    <path d="M150 0 L 200 600" fill="none" stroke="#ef4444" strokeWidth="2" />
                    <circle cx="175" cy="300" r="4" fill="#ef4444" />
                    <path d="M0 400 Q 250 450, 400 300 T 800 300" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 5" />
                    <circle cx="400" cy="300" r="4" fill="#3b82f6" />
                  </svg>
                  <div className="absolute top-[210px] left-[310px] text-[8px] font-bold font-mono text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 backdrop-blur-sm">HV_ELEC_11kV</div>
                  <div className="absolute top-[310px] left-[410px] text-[8px] font-bold font-mono text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20 backdrop-blur-sm">WATER_MAIN_150mm</div>
                  <div className="absolute top-[310px] left-[185px] text-[8px] font-bold font-mono text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20 backdrop-blur-sm">SEWER_GRAV_200mm</div>
                </div>
              )}

              {activeOverlays.includes('soil') && (
                 <div className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none z-10">
                   <div className="w-full h-full bg-gradient-to-t from-orange-950/40 via-orange-900/10 to-transparent border-t border-orange-500/20" />
                   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDBoNHY0SDB6IiBmaWxsPSIjZjA4YzAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50" />
                   <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-orange-400 font-mono text-[10px] uppercase tracking-widest font-bold bg-orange-950/50 px-4 py-2 rounded-lg border border-orange-500/30 backdrop-blur-md flex flex-col items-center">
                     <div>Class M - Moderately Reactive Clay</div>
                     <div className="text-[8px] opacity-70 mt-1">Bearing Capacity: 150kPa // Depth: 4.2m</div>
                   </div>
                 </div>
              )}

              {activeOverlays.includes('vegetation') && (
                 <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute w-28 h-28 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-[2px] flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]"
                        style={{
                          left: `${25 + (i * 12)}%`,
                          top: `${30 + (i % 2 === 0 ? 15 : -10) + (i * 8)}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      >
                         <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981]" />
                         <div className="absolute w-full h-full border border-emerald-500/20 rounded-full scale-125" />
                         <span className="absolute -bottom-6 text-[8px] font-mono font-bold text-emerald-400 bg-[#020617]/80 px-1.5 py-0.5 rounded border border-emerald-500/30">TPZ_{i+100}_EUC</span>
                      </div>
                    ))}
                 </div>
              )}

              {/* HUD */}
              <div className="absolute bottom-6 left-6 text-slate-600 font-mono text-[9px] space-y-1 select-none">
                 <div>// KERNEL: SCAN_ENGINE_ACTIVE</div>
                 <div>// SOURCE: LiDAR_HDS_X2</div>
                 <div>// STATUS: 124ms_LATENCY</div>
              </div>

              <div className="absolute bottom-6 right-6 flex gap-2">
                 <div className="p-2 bg-[#020617]/50 backdrop-blur-md border border-slate-800 rounded-xl flex gap-2 shadow-2xl">
                    <button className="p-2 bg-indigo-600 text-white rounded-lg hover:scale-105 transition-all shadow-lg shadow-indigo-900/40">
                      <Box className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
                      <Ruler className="w-4 h-4" />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
