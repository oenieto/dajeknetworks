import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-mesh">
            <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ 
                    backgroundImage: 'radial-gradient(var(--pattern-color, #38bdf8) 0.5px, transparent 0.5px)', 
                    backgroundSize: '30px 30px' 
                }} 
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    
                    {/* Text Content */}
                    <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-semibold mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            {t('hero.badge')}
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            {t('hero.title')} <span className="gradient-text">{t('hero.titleHighlight')}</span> {t('hero.titleEnd')}
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-sky-400 shadow-xl shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-1">
                                {t('hero.cta_primary')}
                                <span className="material-symbols-outlined ml-2 text-xl">arrow_right_alt</span>
                            </a>
                            <a href="#services" className="inline-flex justify-center items-center px-8 py-4 border border-slate-300 dark:border-slate-700 text-base font-semibold rounded-xl text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300">
                                {t('hero.cta_secondary')}
                            </a>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group bg-slate-900">
                            <div className="aspect-video relative overflow-hidden">
                                <img 
                                    alt="Server Infrastructure" 
                                    className="object-cover w-full h-full opacity-60 dark:opacity-40 mix-blend-overlay dark:mix-blend-luminosity scale-105 group-hover:scale-110 transition-transform duration-700" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvITS2b4WdPgq_qAnoNTEDCUyZjeHM7oBu1goa2X6fIeGN-0pV0oqt1B4qMpQjF8X77uoaYiz-FqEUaEKcXHBGAkLQyFUvDoO6wnjpFooXzAmydxyQrp1O0qoBm9N0-zOI1gVyTPeWtmkZsqd_aCoP1hRDvsfIKAaVwj8tl2UDP_AsLgcovW_UAYF0q0wYgqBZkmDcrNGIFH5pd3DpZ7gKTybfiwWVWmqiMZPkYcady41vyj64xnEctMwqJzovfsZYVsmxxE0egF0A"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-transparent to-primary/10"></div>
                                
                                {/* Overlay 1: System Status */}
                                <div className="absolute top-8 left-8 p-4 glass-card rounded-2xl border-l-4 border-primary">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-emerald-500 h-2.5 w-2.5 rounded-full animate-ping"></div>
                                        <span className="text-xs font-mono text-slate-800 dark:text-slate-200 uppercase tracking-widest">{t('hero.system_status')}</span>
                                    </div>
                                </div>

                                {/* Overlay 2: Security Stats */}
                                <div className="absolute bottom-8 right-8 p-6 glass-card rounded-2xl max-w-xs border border-slate-200 dark:border-white/10">
                                    <div className="flex items-center justify-between mb-3 gap-8">
                                        <span className="text-xs font-bold text-primary uppercase tracking-tighter">{t('hero.cybersecurity')}</span>
                                        <span className="material-symbols-outlined text-emerald-500 dark:text-emerald-400 text-xl">verified_user</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 mb-2">
                                        <div className="bg-primary h-1.5 rounded-full" style={{ width: '98%' }}></div>
                                    </div>
                                    <div className="text-[10px] text-slate-600 dark:text-slate-400 font-mono">{t('hero.encrypted')}</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Glows */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;