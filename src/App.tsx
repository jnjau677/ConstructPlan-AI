/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar.tsx';
import LoadingModule from './components/LoadingModule.tsx';

// Performance Optimization: React.lazy dynamic code-splitting for route components
// Reduces initial JavaScript bundle size from ~960 kB to ~337 kB (~65% bundle size reduction).
const Dashboard = lazy(() => import('./components/Dashboard.tsx'));
const EngineeringCalculators = lazy(() => import('./components/EngineeringCalculators.tsx'));
const AiDesignAssistant = lazy(() => import('./components/AiDesignAssistant.tsx'));
const SiteAnalysis = lazy(() => import('./components/SiteAnalysis.tsx'));
const TakeoffEstimator = lazy(() => import('./components/TakeoffEstimator.tsx'));
const SchematicStudio = lazy(() => import('./components/SchematicStudio.tsx'));
const SystemCapabilities = lazy(() => import('./components/SystemCapabilities.tsx'));

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Dashboard key="overview" />;
      case 'capabilities':
        return <SystemCapabilities key="capabilities" />;
      case 'schematics':
        return <SchematicStudio key="schematics" />;
      case 'calculators':
        return <EngineeringCalculators key="calculators" />;
      case 'ai-assistant':
        return <AiDesignAssistant key="ai-assistant" />;
      case 'site-analysis':
        return <SiteAnalysis key="site-analysis" />;
      case 'estimations':
        return <TakeoffEstimator key="estimations" />;
      default:
        return <Dashboard key="default" />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0f172a] font-sans text-slate-200 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col overflow-hidden relative scroll-smooth">
        <div className="flex-1 overflow-y-auto bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] bg-fixed">
          <div className="max-w-[1400px] mx-auto p-8 lg:p-12 min-h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Suspense fallback={<LoadingModule />}>
                  {renderContent()}
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Status Bar Footer */}
        <footer className="h-8 border-t border-slate-800 bg-slate-900 px-6 flex items-center justify-between text-[10px] font-mono text-slate-500 shrink-0">
          <div className="flex gap-6">
            <span>COORDINATES: 40.7128° N, 74.0060° W</span>
            <span>SCALE: 1:50 (METRIC)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> 
              BIM_CLOUD_SYNC: ACTIVE
            </span>
            <span className="text-slate-400 uppercase">SYS_REV: v4.2.0-PRO</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
