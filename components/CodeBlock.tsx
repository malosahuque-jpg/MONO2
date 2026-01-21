import React, { useState } from 'react';
import { LiquidFile } from '../types';

interface CodeBlockProps {
  file: LiquidFile;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ file }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(file.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#111] border border-white/10 rounded-lg overflow-hidden mb-8 shadow-2xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#161616]">
        <div>
          <h3 className="font-heading text-lg text-white">{file.path}</h3>
          <p className="text-xs text-gray-400 mt-1">{file.description}</p>
        </div>
        <button 
          onClick={handleCopy}
          className={`px-4 py-2 text-xs uppercase tracking-wider border rounded transition-all duration-300 ${
            copied 
              ? 'bg-[#C0C0C0] text-black border-[#C0C0C0]' 
              : 'border-white/20 text-gray-300 hover:border-white hover:text-white'
          }`}
        >
          {copied ? 'Copié!' : 'Copier le Code'}
        </button>
      </div>
      <div className="relative">
        <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 bg-[#0a0a0a]">
          <code>{file.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
