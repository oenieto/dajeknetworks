import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CTA: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-28 relative overflow-hidden bg-primary">
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0ea5e9] to-sky-700 mix-blend-multiply"></div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                    {t('cta.title')}
                </h2>
                <p className="text-blue-50/80 mb-12 text-xl leading-relaxed">
                    {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="#contact"
                        className="px-10 py-5 bg-white text-primary font-bold rounded-2xl shadow-2xl shadow-black/20 hover:bg-blue-50 transition-all transform hover:-translate-y-1 active:scale-95 inline-flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined text-xl">rocket_launch</span>
                        {t('cta.primary')}
                    </a>
                    <Link
                        to="/portfolio"
                        className="px-10 py-5 bg-transparent border-2 border-white/40 hover:bg-white/10 text-white font-bold rounded-2xl transition-all inline-flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined text-xl">photo_library</span>
                        {t('cta.secondary')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;