import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTA from '../components/CTA';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-300 transition-colors duration-300">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
                     <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        alt="Background" 
                        className="w-full h-full object-cover grayscale"
                    loading="lazy"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/90 to-slate-50 dark:from-[#020617]/80 dark:via-[#020617]/90 dark:to-[#020617]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
                    
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-transparent border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm">
                        {t('about.badge')}
                    </span>
                    
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-slate-300 mb-6 drop-shadow-sm">
                        {t('about.title')}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        {t('about.subtitle')}
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group">
                            <img 
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80" 
                                alt="Team collaboration" 
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t('about.storyTitle')}</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                {t('about.story1')}
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                {t('about.story2')}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/5">
                                    <span className="block text-3xl font-bold text-primary mb-1">+10</span>
                                    <span className="text-sm text-slate-500 uppercase font-bold">{t('about.years')}</span>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/5">
                                    <span className="block text-3xl font-bold text-primary mb-1">100%</span>
                                    <span className="text-sm text-slate-500 uppercase font-bold">{t('about.commitment')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-slate-100 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t('about.valuesTitle')}</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('about.valuesSubtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {(['excellence', 'integrity', 'innovation'] as const).map((key, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-white/5 text-center transition-transform hover:-translate-y-2">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                                    <span className="material-symbols-outlined text-3xl">
                                        {key === 'excellence' ? 'military_tech' : key === 'integrity' ? 'verified' : 'lightbulb'}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t(`about.values.${key}.title`)}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {t(`about.values.${key}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-12 bg-primary">
                 <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">{t('about.ctaTitle')}</h2>
                    <p className="text-blue-50/80 mb-8 text-lg">
                        {t('about.ctaSubtitle')}
                    </p>
                    <Link to="/#contact" className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-slate-100 transition-colors">
                        {t('about.ctaButton')}
                    </Link>
                 </div>
            </section>
        </div>
    );
};

export default About;
