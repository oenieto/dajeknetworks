import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { serviceIds, serviceIcons, serviceImages } from '../components/Services';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    const isValid = id && (serviceIds as readonly string[]).includes(id);

    if (!isValid) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617]">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Servicio no encontrado</h1>
                <Link to="/" className="text-primary hover:underline font-medium">Volver a inicio</Link>
            </div>
        );
    }

    const serviceTitle = t(`services.items.${id}.title`);
    const serviceDescription = t(`services.items.${id}.description`);
    const icon = serviceIcons[id!];
    const image = serviceImages[id!];

    const features = [
        { icon: 'verified', text: t('serviceDetail.features.experience') },
        { icon: 'tune', text: t('serviceDetail.features.custom') },
        { icon: 'support_agent', text: t('serviceDetail.features.support') },
        { icon: 'lightbulb', text: t('serviceDetail.features.innovation') },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
            <SEO 
                title={`${serviceTitle} - Servicios`} 
                description={serviceDescription}
                image={image}
                url={`https://dajeknetwork.com/services/${id}`}
            />
            {/* ─── Hero Banner ──────────────────────────────── */}
            <div className="relative overflow-hidden pt-28 pb-24">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/#services" className="inline-flex items-center text-sm font-medium text-primary hover:text-sky-400 mb-8 transition-colors">
                        <span className="material-symbols-outlined mr-2">arrow_back</span>
                        {t('serviceDetail.back')}
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Text Content */}
                        <div className="w-full md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                                <span className="material-symbols-outlined text-sm">{icon}</span>
                                <span className="text-xs font-bold uppercase tracking-widest">{t('serviceDetail.serviceBadge')}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                                {serviceTitle}
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                {serviceDescription}
                            </p>
                        </div>

                        {/* Image Content */}
                        <div className="w-full md:w-1/2 relative">
                            {/* Decorative element behind image */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-sky-500/20 rounded-[2.5rem] transform -rotate-3 blur-sm"></div>
                            
                            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border border-slate-200 dark:border-white/10 group">
                                <img
                                    src={image}
                                    alt={serviceTitle}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Service Details ──────────────────────────── */}
            <div className="py-24 bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                            {t('serviceDetail.whyUs')}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            {t('serviceDetail.description', { service: serviceTitle })}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined">{feature.icon}</span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 font-medium">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Bottom CTA ───────────────────────────────── */}
            <div className="py-20 relative overflow-hidden bg-primary">
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0ea5e9] to-sky-700 mix-blend-multiply"></div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        {t('serviceDetail.bannerTitle', { service: serviceTitle })}
                    </h2>
                    <p className="text-blue-50/80 mb-10 text-lg">
                        {t('serviceDetail.bannerSubtitle')}
                    </p>
                    <Link
                        to="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-slate-50 transition-all transform hover:-translate-y-1"
                    >
                        {t('serviceDetail.bannerButton')}
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
