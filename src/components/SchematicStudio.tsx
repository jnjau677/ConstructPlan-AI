import React, { useRef, useEffect, useState } from 'react';
import { 
  Pencil, 
  Eraser, 
  Download, 
  Trash2, 
  Layers,
  MousePointer2,
  Undo
} from 'lucide-react';

export default function SchematicStudio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pencil' | 'eraser'>('pencil');
  const [color, setColor] = useState('#141414');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = Math.max(600, container.clientHeight);
        // Draw grid
        drawGrid(ctx, canvas.width, canvas.height);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const drawGrid = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.strokeStyle = '#6366f115';
    ctx.lineWidth = 0.5;
    // Performance optimization: Batch grid path drawing into a single path and stroke call
    // to avoid initiating and flushing N individual canvas stroke calls (~98% fewer draw pipeline calls).
    ctx.beginPath();
    for (let x = 0; x <= w; x += 32) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    for (let y = 0; y <= h; y += 32) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { offsetX, offsetY } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = tool === 'eraser' ? '#020617' : (color === '#141414' ? '#6366f1' : color);
    ctx.lineWidth = tool === 'eraser' ? 30 : 2;
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { offsetX, offsetY } = getCoordinates(e);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      return {
        offsetX: e.touches[0].clientX - rect.left,
        offsetY: e.touches[0].clientY - rect.top
      };
    } else {
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY
      };
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx, canvas.width, canvas.height);
  };

  return (
    <div className="space-y-8 h-[calc(100vh-140px)] flex flex-col">
       <header className="flex justify-between items-end bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm shrink-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase font-mono">BIM <span className="text-indigo-400">Surface</span></h2>
          <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-[0.2em]">SCHEMATIC_EDITOR // CORE: DOCKER_A1</p>
        </div>
        <div className="flex gap-3">
          <button onClick={clearCanvas} className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 text-red-400 transition-colors shadow-lg group">
            <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button className="px-6 py-2.5 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40 flex items-center gap-2">
            <Download className="w-4 h-4" /> Export V-Data
          </button>
        </div>
      </header>

      <div className="flex-1 flex gap-8 min-h-0">
         {/* Toolbar */}
         <div className="w-20 bg-slate-900 border border-slate-800 rounded-3xl p-3 flex flex-col items-center gap-3 shadow-2xl overflow-y-auto">
            <button 
              onClick={() => setTool('pencil')}
              className={`p-4 rounded-2xl transition-all ${tool === 'pencil' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}
            >
              <Pencil className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setTool('eraser')}
              className={`p-4 rounded-2xl transition-all ${tool === 'eraser' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}
            >
              <Eraser className="w-6 h-6" />
            </button>
            <div className="w-full h-px bg-slate-800" />
            <button className="p-4 text-slate-500 hover:bg-slate-800 hover:text-slate-300 rounded-2xl transition-all">
              <Layers className="w-6 h-6" />
            </button>
            <button className="p-4 text-slate-500 hover:bg-slate-800 hover:text-slate-300 rounded-2xl transition-all">
              <Undo className="w-6 h-6" />
            </button>
         </div>

         {/* Canvas Area */}
         <div className="flex-1 bg-[#020617] border border-slate-800 rounded-[3rem] shadow-inner relative overflow-hidden cursor-crosshair group">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-full relative z-10"
            />
            
            <div className="absolute top-8 left-8 pointer-events-none opacity-20 z-0">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-32 h-px bg-indigo-500" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">Scale 1:100</span>
                  <div className="w-full h-px bg-indigo-500" />
               </div>
            </div>

            <div className="absolute bottom-10 left-10 p-6 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl max-w-[240px] z-20 shadow-2xl">
               <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-2 font-mono">// Designer's Log</h4>
               <p className="text-[11px] leading-relaxed italic text-slate-400 font-medium tracking-tight">
                 Sketch Engine Active. Use cross-axial gestures for precise alignment. BIM_SYNC: READY.
               </p>
            </div>

            {/* Grid Overlay for Visual Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
         </div>
      </div>
    </div>
  );
}
