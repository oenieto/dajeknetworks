import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";

const LANGUAGES = [
  { code: 'es', label: 'Español', flag: '🇲🇽' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-slate-200 dark:hover:border-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base">{selected.flag}</span>
        <span className="hidden sm:inline">{selected.code.toUpperCase()}</span>
        <span className={`material-symbols-outlined transition-transform duration-200 ${open ? 'rotate-180' : ''}`} style={{ fontSize: '16px' }}>
          expand_more
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 py-1.5 rounded-2xl glass-card border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-900/20 dark:shadow-black/40 z-50 overflow-hidden">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                selected.code === lang.code
                  ? 'bg-primary/10 text-primary dark:text-blue-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
              {selected.code === lang.code && (
                <span className="material-symbols-outlined ml-auto" style={{ fontSize: '16px' }}>check</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleScrollTo = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
        navigate(`/#${id}`);
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <nav className="fixed w-full z-50 glass-card border-b border-slate-200 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0" onClick={() => window.scrollTo(0, 0)}>
            <img src="/dajek_nobg.png" alt="Dajek Logo" className="h-10 sm:h-12 md:h-16 w-auto flex-shrink-0" />
            <div className="min-w-0 flex flex-col">
              <span className="font-bold text-base sm:text-xl tracking-tight text-slate-800 dark:text-white block leading-none truncate">
                DAJEK<span className="text-primary">NETWORK</span>
              </span>
              <span className="text-[0.55rem] sm:text-[0.6rem] text-slate-500 dark:text-slate-400 uppercase tracking-widest sm:block font-medium truncate hidden">
                {t('nav.subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center">
            <button
              onClick={() => handleScrollTo('services')}
              className="text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 bg-transparent border-none cursor-pointer"
            >
              {t('nav.services')}
            </button>
            <Link
              to="/about"
              className="text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
            >
              {t('nav.about')}
            </Link>

            <div className="w-px h-6 bg-slate-200 dark:bg-white/10 mx-1" />

            <LanguageSelector />
            <ThemeToggle />

            <button
              onClick={() => handleScrollTo('contact')}
              className="ml-2 bg-primary hover:bg-sky-400 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-sky-500/25 active:scale-95 cursor-pointer"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1 sm:gap-3 flex-shrink-0 ml-2">
            <LanguageSelector />
            <ThemeToggle />
            <button
              className="text-slate-600 dark:text-slate-300 hover:text-primary focus:outline-none p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl sm:text-3xl block">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-slate-200 dark:border-white/5 absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => handleScrollTo('services')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg bg-transparent border-none"
            >
              {t('nav.services')}
            </button>
            <Link
               to="/about"
               className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
               onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <div className="pt-4">
              <button
                onClick={() => handleScrollTo('contact')}
                className="block w-full text-center bg-primary hover:bg-sky-400 text-white px-6 py-3 rounded-xl font-semibold transition-all border-none"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
