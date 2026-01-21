import React, { useState } from 'react';
import { CollectionType } from '../types';

const Preview: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const getCollectionImage = (type: string) => {
    switch (type) {
      case CollectionType.SEIKO:
        return "https://images.unsplash.com/photo-1612817288484-96916a0816a9?w=800&auto=format&fit=crop&q=80"; // Minimalist Dark
      case CollectionType.VINTAGE:
        return "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&auto=format&fit=crop&q=80"; // Classic Leather
      case CollectionType.LUXE:
        return "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&auto=format&fit=crop&q=80"; // Luxury Dark
      default:
        return "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=80";
    }
  };

  const getBlogImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80", // Minimalist Architecture
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=80", // Industrial Texture
      "https://images.unsplash.com/photo-1551732998-957e26dd9a4c?w=800&auto=format&fit=crop&q=80"  // Watchmaking tools
    ];
    return images[index - 1] || images[0];
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#C0C0C0] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-8 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-1">
            <a href="#" className="font-heading text-2xl tracking-[0.1em] hover:text-[#C0C0C0] transition-colors">
              MONOCHROMA
            </a>
          </div>

          {/* Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><a href="#" className="text-sm uppercase tracking-widest hover:text-[#C0C0C0] transition-colors">Accueil</a></li>
              <li 
                className="group relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <a href="#" className="text-sm uppercase tracking-widest hover:text-[#C0C0C0] transition-colors pb-8">
                  Nos Montres
                </a>
                
                {/* Mega Menu Overlay */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-screen bg-[#050505] border-b border-white/10 transition-all duration-300 overflow-hidden ${isMegaMenuOpen ? 'opacity-100 visible h-auto py-16' : 'opacity-0 invisible h-0 py-0'}`}>
                  <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-3 gap-8">
                    {Object.values(CollectionType).map((col) => (
                      <a key={col} href="#" className="group/item block text-center">
                        <div className="aspect-square bg-[#111] mb-4 overflow-hidden relative">
                           <img 
                            src={getCollectionImage(col)} 
                            alt={col}
                            className="w-full h-full object-cover opacity-70 grayscale group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-105 transition-all duration-500"
                           />
                        </div>
                        <h3 className="font-heading text-xl mb-1">{col}</h3>
                        <span className="text-xs text-[#C0C0C0] uppercase tracking-wider">Voir la collection</span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li><a href="#" className="text-sm uppercase tracking-widest hover:text-[#C0C0C0] transition-colors">Blog</a></li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex-1 flex justify-end gap-6">
            <button className="hover:text-[#C0C0C0] transition-colors">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="hover:text-[#C0C0C0] transition-colors relative">
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#C0C0C0] rounded-full"></span>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=2670&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fade-in-up">
            L'ABSENCE DE BRUIT.<br />
            LA PRÉSENCE DU TEMPS.
          </h2>
          <button className="px-8 py-4 border border-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
            Explorer la Collection
          </button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-8 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(CollectionType).map((col) => (
              <a key={col} href="#" className="group block relative">
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={getCollectionImage(col)}
                    alt={col} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl mb-2">{col}</h3>
                  <span className="text-sm text-[#C0C0C0] uppercase tracking-widest border-b border-transparent group-hover:border-[#C0C0C0] transition-colors pb-1">
                    Voir la collection
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 px-8 bg-[#080808]">
        <div className="max-w-[1400px] mx-auto">
            <h2 className="font-heading text-3xl mb-12 border-l-2 border-[#C0C0C0] pl-6">Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {[1, 2, 3].map((i) => (
                <article key={i} className="group cursor-pointer">
                  <div className="aspect-video bg-[#111] mb-6 overflow-hidden">
                    <img 
                      src={getBlogImage(i)}
                      alt="Blog Post"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <time className="text-xs text-[#C0C0C0] uppercase tracking-widest mb-2">
                      24 Octobre 2023
                    </time>
                    <h3 className="font-heading text-xl md:text-2xl mb-4 leading-snug group-hover:underline decoration-[#C0C0C0] underline-offset-4">
                      L'Art du Minimalisme Industriel : Une Révolution Silencieuse
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      Dans un monde saturé de bruit et de couleurs, le choix du monochrome n'est pas une absence, mais une déclaration. Découvrez comment nos designers repensent l'horlogerie moderne...
                    </p>
                  </div>
                </article>
              ))}
            </div>
        </div>
      </section>
      
      {/* Footer Simple */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-xs tracking-widest uppercase">
        &copy; 2023 Monochroma. Tous droits réservés.
      </footer>
    </div>
  );
};

export default Preview;
