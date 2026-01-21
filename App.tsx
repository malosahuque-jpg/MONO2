import React, { useState } from 'react';
import { FILES } from './constants';
import Preview from './components/Preview';
import CodeBlock from './components/CodeBlock';
import ChatInterface from './components/ChatInterface';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.PREVIEW);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Top Bar for Mode Switching */}
      <div className="fixed top-0 left-0 w-full h-14 z-[100] bg-[#1a1a1a] border-b border-white/10 flex items-center justify-between px-6 shadow-md">
        <div className="flex items-center gap-4">
          <h1 className="font-heading text-lg font-bold tracking-widest text-white">MONOCHROMA</h1>
          <span className="text-xs text-gray-500 uppercase tracking-wider hidden sm:inline-block">Theme Architect v1.0</span>
        </div>
        
        <div className="flex bg-[#000] rounded p-1 border border-white/10">
          <button 
            onClick={() => setViewMode(ViewMode.PREVIEW)}
            className={`px-4 py-1.5 rounded text-xs uppercase tracking-wider transition-all ${viewMode === ViewMode.PREVIEW ? 'bg-[#C0C0C0] text-black font-semibold' : 'text-gray-400 hover:text-white'}`}
          >
            Visual Preview
          </button>
          <button 
            onClick={() => setViewMode(ViewMode.CODE)}
            className={`px-4 py-1.5 rounded text-xs uppercase tracking-wider transition-all ${viewMode === ViewMode.CODE ? 'bg-[#C0C0C0] text-black font-semibold' : 'text-gray-400 hover:text-white'}`}
          >
            Liquid Source
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="pt-14 min-h-screen">
        {viewMode === ViewMode.PREVIEW ? (
          <Preview />
        ) : (
          <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
            <header className="mb-12 text-center">
              <h2 className="font-heading text-3xl mb-4 text-[#C0C0C0]">Generated Liquid Artifacts</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Below are the core Liquid files required to implement the Monochroma design system. 
                Copy these into your Shopify Theme's code editor.
              </p>
            </header>
            
            {FILES.map((file) => (
              <CodeBlock key={file.path} file={file} />
            ))}
          </div>
        )}
      </main>

      {/* AI Assistant */}
      <ChatInterface />
    </div>
  );
};

export default App;
