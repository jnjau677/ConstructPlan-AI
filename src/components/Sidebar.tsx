import React, { useState } from 'react';
import { 
  BarChart3, 
  Calculator, 
  LayoutDashboard, 
  MessageSquare, 
  Mountain, 
  ClipboardList,
  Building2,
  Leaf,
  PenTool,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'capabilities', label: 'System Specs', icon: Zap },
  { id: 'schematics', label: 'Schematic Studio', icon: PenTool },
  { id: 'calculators', label: 'Engineering Tools', icon: Calculator },
  { id: 'ai-assistant', label: 'AI Architect', icon: MessageSquare },
  { id: 'site-analysis', label: 'Site & LiDAR', icon: Mountain },
  { id: 'estimations', label: 'Estimates & BOQ', icon: ClipboardList },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col flex-shrink-0">
      <header className="h-16 flex items-center gap-4 px-6 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-white uppercase">ArcSystem <span className="text-indigo-400 font-light lowercase tracking-tighter">pro</span></h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">ResiVillas v2.4</p>
        </div>
      </header>

      <div className="flex-1 px-4 py-8 space-y-8 overflow-y-auto">
        <div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4 px-2 font-bold">Design Modules</p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                  activeTab === item.id 
                    ? 'bg-indigo-600/10 text-white border border-indigo-500/20' 
                    : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                }`}
              >
                <item.icon className={`w-4 h-4 transition-colors ${activeTab === item.id ? 'text-indigo-400' : 'group-hover:text-slate-200'}`} />
                <span className="text-sm font-medium">{item.label}</span>
                {activeTab === item.id && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="ml-auto w-1 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 bg-indigo-600/5 border border-indigo-500/10 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-tighter">AI Generative Active</span>
          </div>
          <p className="text-[11px] text-indigo-200/50 leading-relaxed italic">
            "Optimizing floorplan for 84% solar gain based on June solstice..."
          </p>
        </div>
      </div>

      <div className="p-4 mt-auto border-t border-slate-800 bg-slate-900/30">
        <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-indigo-400 border border-slate-700/50 group-hover:border-indigo-500/30">
            JD
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate text-slate-200">John Designer</p>
            <p className="text-[9px] opacity-50 uppercase tracking-tighter truncate font-mono text-slate-400">Principal Architect</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
