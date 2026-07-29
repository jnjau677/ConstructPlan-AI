import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  RefreshCcw, 
  FileText,
  Hammer,
  Map,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { askAiArchitect } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AiDesignAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello. I'm ArcSystem PRO. I've integrated your BIM layers with current market cost vectors and IBC standards. Stop fighting with software—just tell me what you want to build. How can I assist with your design iteration today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    if (userMsg.length > 4000) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: Message exceeds the maximum limit of 4000 characters.' }]);
      return;
    }

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await askAiArchitect(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response || 'No response generated.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Apologies, I encountered a technical latency in the BIM cluster. Please re-initialize.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-140px)] gap-8">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Gen-AI Arch_Intelligence</h3>
          </div>
          <button onClick={() => setMessages([messages[0]])} className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-500">
            <RefreshCcw className="w-4 h-4" />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]"
        >
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-6 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40 border border-indigo-500' 
                    : 'bg-slate-800/40 border border-slate-800 text-slate-200 backdrop-blur-sm'
                }`}>
                  <div className="prose prose-sm max-w-none prose-p:leading-relaxed text-inherit">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="bg-slate-800/40 border border-slate-800 p-6 rounded-2xl gap-2 flex">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce shadow-[0_0_8px_#6366f1]" />
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.2s] shadow-[0_0_8px_#6366f1]" />
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.4s] shadow-[0_0_8px_#6366f1]" />
              </div>
            </motion.div>
          )}
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-900/80 backdrop-blur-md">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
              maxLength={4000}
              placeholder="Query zoning constraints, material lifecycle, or structural vectors..."
              className="w-full bg-[#020617] border border-slate-800 p-4 pr-16 rounded-2xl min-h-[100px] resize-none focus:outline-none focus:border-indigo-500 transition-all font-sans text-sm text-white placeholder-slate-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute bottom-4 right-4 p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-all disabled:opacity-20 shadow-lg shadow-indigo-900/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[9px] text-slate-600 mt-3 uppercase tracking-tighter text-center font-mono">Kernel: Gemini-3-Flash // Verify with local council data</p>
        </div>
      </div>

      {/* Shortcuts Panel */}
      <div className="w-80 space-y-4 hidden xl:block">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Diagnostic Tools</h4>
        <div className="grid grid-cols-1 gap-3">
          {[
            { label: 'Zoning Matrix', icon: Map, color: 'text-blue-400' },
            { label: 'LCA Analyzer', icon: Hammer, color: 'text-emerald-400' },
            { label: 'Permit Router', icon: ShieldCheck, color: 'text-purple-400' },
            { label: 'Spec Builder', icon: FileText, color: 'text-indigo-400' },
          ].map((tool) => (
            <button 
              key={tool.label}
              className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4 hover:border-indigo-500/30 transition-all group text-left shadow-xl"
            >
              <div className={`p-3 bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-colors ${tool.color}`}>
                <tool.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-200 uppercase tracking-tight">{tool.label}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl backdrop-blur-sm">
           <h5 className="font-bold text-indigo-300 uppercase text-[10px] tracking-widest mb-2 flex items-center gap-2">
             <AlertCircle className="w-3 h-3" />
             Arch_Protocol
           </h5>
           <p className="text-[11px] text-indigo-200/40 leading-relaxed italic">
             AI suggestions utilize IBC 2024 standards. Cross-reference with project-specific LEED targets.
           </p>
        </div>
      </div>
    </div>
  );
}
