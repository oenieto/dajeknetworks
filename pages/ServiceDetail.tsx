import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { serviceIds, serviceIcons, serviceImages } from '../components/Services';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    const isValid = id && (serviceIds as readonly string[]).includes(id);

    if (!isValid) {
        return (
            <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white">
                <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
                <Link to="/" className="text-primary hover:underline">{t('serviceDetail.back')}</Link>
            </div>
        );
    }

    const serviceTitle = t(`services.items.${id}.title`);
    const serviceDescription = t(`services.items.${id}.description`);
    const icon = serviceIcons[id];
    const image = serviceImages[id];

    const features = [
        { icon: 'verified', text: t('serviceDetail.features.experience') },
        { icon: 'tune', text: t('serviceDetail.features.custom') },
        { icon: 'headset_mic', text: t('serviceDetail.features.support') },
        { icon: 'auto_awesome', text: t('serviceDetail.features.innovation') },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">

            {/* ─── Hero Banner ──────────────────────────────── */}
            <div className="relative overflow-hidden pt-28 pb-24">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] rounded-full" />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors mb-10 group">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                        {t('serviceDetail.back')}
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-500/30 text-primary dark:text-blue-400 mb-6 shadow-sm">
                                <span className="material-symbols-outlined text-2xl">{icon}</span>
                                <span className="text-sm font-semibold tracking-wide uppercase">{t('serviceDetail.serviceBadge')}</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-slate-300 mb-6 leading-tight">
                                {serviceTitle}
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                                {serviceDescription}
                            </p>

                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm mb-10">
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {t('serviceDetail.description', { service: serviceTitle.toLowerCase() })}
                                </p>
                            </div>

                            <Link
                                to="/#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-sky-500/25 hover:bg-sky-400 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                {t('serviceDetail.ctaButton')}
                                <span className="material-symbols-outlined">chat</span>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-60 dark:opacity-40 pointer-events-none" />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 aspect-[4/3] group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-50" />
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

            {/* ─── Features ──────────────────────────────────── */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{t('serviceDetail.whyUs')}</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('serviceDetail.whyUsSubtitle')}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="group p-8 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-primary dark:text-blue-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA Banner ───────────────────────────────── */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="relative z-10 py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t('serviceDetail.bannerTitle', { service: serviceTitle })}
                        </h2>
                        <p className="text-blue-100/80 text-lg mb-10">{t('serviceDetail.bannerSubtitle')}</p>
                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-2xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            {t('serviceDetail.bannerButton')}
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
