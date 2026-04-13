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

                    {/* Image/Visual Content (Bento Grid) */}
                    <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] mt-12 lg:mt-0">
                        {/* Decorative Glows */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

                        <div className="grid grid-cols-2 gap-4 h-full relative z-10 px-2 sm:px-0">
                            {/* Left Column (Tall Image) */}
                            <div className="col-span-1 flex flex-col pt-8">
                                <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group relative bg-slate-100 dark:bg-slate-800">
                                    <img 
                                        alt="Infraestructura ISP" 
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" 
                                        src="/portfolio/ISP1.jpeg"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 lg:p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                                        <div className="translate-y-2 group-hover:translate-y-0 transition-transform">
                                            <span className="inline-block text-white text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-2 py-1 rounded-md mb-2 border border-white/10">Planta Exterior</span>
                                            <p className="text-white font-medium text-sm hidden sm:block leading-tight text-white/90">Despliegue aéreo de fibra óptica ISP</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column (Two Stacked Images) */}
                            <div className="col-span-1 flex flex-col gap-4 pb-8">
                                <div className="h-2/5 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 group relative bg-slate-100 dark:bg-slate-800">
                                    <img 
                                        alt="Centro de Datos" 
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" 
                                        src="/portfolio/networking-rack-1.jpg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-3 lg:p-5 opacity-90 group-hover:opacity-100 transition-opacity">
                                        <span className="inline-block text-white text-[9px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 translate-y-1 group-hover:translate-y-0 transition-transform">Networking</span>
                                    </div>
                                </div>
                                
                                <div className="h-3/5 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 group relative bg-slate-100 dark:bg-slate-800">
                                    <img 
                                        alt="Seguridad y Control" 
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" 
                                        src="/portfolio/cctv.jpeg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-3 lg:p-5 opacity-90 group-hover:opacity-100 transition-opacity">
                                        <div className="translate-y-1 group-hover:translate-y-0 transition-transform">
                                            <span className="inline-block text-white text-[9px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 mb-1.5">Seguridad</span>
                                            <p className="text-[11px] hidden sm:block font-medium text-white/90 leading-tight">CCTV y Control de Acceso</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;