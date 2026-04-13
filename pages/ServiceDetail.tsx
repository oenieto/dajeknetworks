import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { serviceIds, serviceIcons, serviceImages } from '../components/Services';
import { getItemsByService } from '../data/portfolioData';
import { serviceDetailsMap, SubCategory } from '../data/serviceDetails';
import PortfolioCard from '../components/PortfolioCard';

// ─── Helpers ──────────────────────────────────────────────────────────────────
function pick<T extends { es: string; en: string; pt: string }>(obj: T, lang: string): string {
    if (lang === 'en') return obj.en;
    if (lang === 'pt') return obj.pt;
    return obj.es;
}

function pickField(obj: Record<string, unknown>, prefix: string, lang: string): string | undefined {
    if (lang === 'en') return obj[`${prefix}En`] as string | undefined;
    if (lang === 'pt') return obj[`${prefix}Pt`] as string | undefined;
    return obj[`${prefix}Es`] as string | undefined;
}

// ─── Subcategory Card ─────────────────────────────────────────────────────────
const SubcategoryCard: React.FC<{ sub: SubCategory; lang: string }> = ({ sub, lang }) => {
    const title = pick({ es: sub.titleEs, en: sub.titleEn, pt: sub.titlePt }, lang);
    const desc = lang === 'en' ? sub.descEn : lang === 'pt' ? sub.descPt : sub.descEs;

    return (
        <div className="group flex flex-col bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 rounded-2xl p-6 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-sky-400/10 flex items-center justify-center mb-5 border border-sky-500/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl">{sub.icon}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">{title}</h3>

            {/* Optional paragraph */}
            {desc && (
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
            )}

            {/* Bullet list */}
            <ul className="space-y-2">
                {sub.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm">
                        <span className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '10px' }}>check</span>
                        </span>
                        {pick(item, lang)}
                    </li>
                ))}
            </ul>

            {/* Tags */}
            {sub.tags && sub.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100 dark:border-white/5">
                    {sub.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wide text-primary bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

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
    const portfolioWorks = getItemsByService(id!);
    const detail = serviceDetailsMap[id!];

    const intro = detail
        ? (lang === 'en' ? detail.introEn : lang === 'pt' ? detail.introPt : detail.introEs)
        : serviceDescription;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
            <SEO
                title={`${serviceTitle} - Servicios`}
                description={serviceDescription}
                image={image}
                url={`https://dajeknetwork.com/services/${id}`}
            />

            {/* ─── Hero Banner ──────────────────────────────────────────────── */}
            <div className="relative overflow-hidden pt-28 pb-24 bg-white dark:bg-[#020617]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/#services" className="inline-flex items-center text-sm font-medium text-primary hover:text-sky-400 mb-8 transition-colors">
                        <span className="material-symbols-outlined mr-2">arrow_back</span>
                        {t('serviceDetail.back')}
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Text */}
                        <div className="w-full md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                                <span className="material-symbols-outlined text-sm">{icon}</span>
                                <span className="text-xs font-bold uppercase tracking-widest">{t('serviceDetail.serviceBadge')}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                                {serviceTitle}
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 whitespace-pre-line">
                                {intro}
                            </p>
                            {/* Methodology badges */}
                            <div className="flex flex-wrap gap-2">
                                {['ITIL v4', 'SCRUM', 'PMI'].map(m => (
                                    <span key={m} className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">
                                        {m}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-sky-500/20 rounded-[2.5rem] transform -rotate-3 blur-sm" />
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

            {/* ─── Service Image Gallery ────────────────────────────────────── */}
            {detail?.images && detail.images.length > 0 && (
                <div className="py-12 bg-white dark:bg-[#020617]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {detail.images.map((img, idx) => (
                                <div key={idx} className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 group bg-slate-100 dark:bg-slate-800">
                                    <img 
                                        src={img} 
                                        alt={`${serviceTitle} preview ${idx + 1}`} 
                                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ─── Highlights Strip ─────────────────────────────────────────── */}
            {detail?.highlights && (
                <div className="bg-primary">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                            {detail.highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-5">
                                    <span className="material-symbols-outlined text-white/70 text-xl flex-shrink-0">{h.icon}</span>
                                    <span className="text-white text-sm font-semibold leading-snug">
                                        {lang === 'en' ? h.labelEn : lang === 'pt' ? h.labelPt : h.labelEs}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ─── Subcategory Cards ────────────────────────────────────────── */}
            {detail?.subcategories && detail.subcategories.length > 0 && (
                <div className="py-24 bg-slate-50 dark:bg-[#0a1828] border-t border-slate-200 dark:border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                                {t('serviceDetail.detailBadge')}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                                {t('serviceDetail.detailTitle')}
                            </h2>
                        </div>

                        <div className={`grid gap-6 ${
                            detail.subcategories.length === 2
                                ? 'grid-cols-1 md:grid-cols-2'
                                : detail.subcategories.length === 3
                                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'
                        } `}>
                            {detail.subcategories.map((sub, idx) => (
                                <SubcategoryCard key={idx} sub={sub} lang={lang} />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ─── Why Us ───────────────────────────────────────────────────── */}
            <div className="py-20 bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                            {t('serviceDetail.whyUs')}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400">
                            {t('serviceDetail.description', { service: serviceTitle })}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: 'verified', key: 'experience' },
                            { icon: 'tune', key: 'custom' },
                            { icon: 'support_agent', key: 'support' },
                            { icon: 'lightbulb', key: 'innovation' },
                        ].map(f => (
                            <div key={f.key} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300 text-center">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined">{f.icon}</span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-snug">
                                    {t(`serviceDetail.features.${f.key}`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Trabajos Realizados ──────────────────────────────────────── */}
            {portfolioWorks.length > 0 && (
                <div className="py-20 bg-slate-100 dark:bg-[#0a1020] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                            <div>
                                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
                                    {t('serviceDetail.worksLabel')}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                                    {t('serviceDetail.worksTitle')}
                                </h2>
                            </div>
                            <Link
                                to={`/portfolio?service=${id}`}
                                className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:text-sky-400 flex-shrink-0 transition-colors"
                            >
                                {t('serviceDetail.worksMore')}
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {portfolioWorks.map(work => (
                                <PortfolioCard
                                    key={work.id}
                                    item={work}
                                    showServiceBadge={false}
                                    linkTo={`/portfolio?service=${id}`}
                                    compact
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ─── Bottom CTA ───────────────────────────────────────────────── */}
            <div className="py-20 relative overflow-hidden bg-primary">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0ea5e9] to-sky-700 mix-blend-multiply" />
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
