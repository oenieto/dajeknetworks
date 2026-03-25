import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { serviceIds, serviceIcons } from '../components/Services';
import { portfolioItems } from '../data/portfolioData';

// Helper to pick the right localized field
const useLocalizedField = () => {
    const { i18n } = useTranslation();
    return (item: { titleEs: string; titleEn: string; titlePt: string } |
        { descriptionEs: string; descriptionEn: string; descriptionPt: string },
        field: 'title' | 'description'
    ) => {
        const lang = i18n.language;
        if (field === 'title') {
            const t = item as { titleEs: string; titleEn: string; titlePt: string };
            if (lang === 'en') return t.titleEn;
            if (lang === 'pt') return t.titlePt;
            return t.titleEs;
        } else {
            const d = item as { descriptionEs: string; descriptionEn: string; descriptionPt: string };
            if (lang === 'en') return d.descriptionEn;
            if (lang === 'pt') return d.descriptionPt;
            return d.descriptionEs;
        }
    };
};

const Portfolio: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const localField = useLocalizedField();

    // Read ?service=networking from URL (set by ServiceDetail "ver más")
    const activeFilter = searchParams.get('service') ?? 'all';

    const setFilter = (value: string) => {
        if (value === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ service: value });
        }
    };

    const filtered = useMemo(() => {
        if (activeFilter === 'all') return portfolioItems;
        return portfolioItems.filter(item => item.serviceId === activeFilter);
    }, [activeFilter]);

    const serviceLabel = (id: string): string => {
        return t(`services.items.${id}.title`);
    };

    const filterTabs = [
        { id: 'all', label: t('portfolio.all'), icon: 'grid_view' },
        ...serviceIds.map(id => ({
            id,
            label: serviceLabel(id),
            icon: serviceIcons[id],
        })),
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
            <SEO
                title={t('portfolio.seoTitle')}
                description={t('portfolio.seoDesc')}
                url="https://dajeknetwork.com/portfolio"
            />

            {/* ─── Hero ──────────────────────────────────────────────────── */}
            <div className="relative overflow-hidden pt-28 pb-20">
                {/* Background gradient */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Link
                        to="/#services"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-sky-400 mb-10 transition-colors"
                    >
                        <span className="material-symbols-outlined mr-2">arrow_back</span>
                        {t('serviceDetail.back')}
                    </Link>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                        <span className="material-symbols-outlined text-sm">photo_library</span>
                        <span className="text-xs font-bold uppercase tracking-widest">{t('portfolio.badge')}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        {t('portfolio.title')}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t('portfolio.subtitle')}
                    </p>
                </div>
            </div>

            {/* ─── Filter Tabs ───────────────────────────────────────────── */}
            <div className="sticky top-20 z-30 bg-slate-50/90 dark:bg-[#020617]/90 backdrop-blur-lg border-b border-slate-200 dark:border-white/5 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {filterTabs.map(tab => (
                            <button
                                key={tab.id}
                                id={`portfolio-filter-${tab.id}`}
                                onClick={() => setFilter(tab.id)}
                                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                                    activeFilter === tab.id
                                        ? 'bg-primary text-white border-primary shadow-lg shadow-sky-500/25'
                                        : 'bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-primary hover:text-primary'
                                }`}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Gallery Grid ──────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {filtered.length === 0 ? (
                    <div className="text-center py-24">
                        <span className="material-symbols-outlined text-5xl text-slate-300 dark:text-slate-700 mb-4 block">image_not_supported</span>
                        <p className="text-slate-500 dark:text-slate-500 text-lg">{t('portfolio.empty')}</p>
                    </div>
                ) : (
                    <>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-8">
                            {filtered.length} {filtered.length === 1 ? t('portfolio.project') : t('portfolio.projects')}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map(item => {
                                const title = item[`title${i18n.language === 'en' ? 'En' : i18n.language === 'pt' ? 'Pt' : 'Es'}` as keyof typeof item] as string;
                                const description = item[`description${i18n.language === 'en' ? 'En' : i18n.language === 'pt' ? 'Pt' : 'Es'}` as keyof typeof item] as string;

                                return (
                                    <div
                                        key={item.id}
                                        id={`portfolio-item-${item.id}`}
                                        className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5"
                                        onMouseEnter={() => setHoveredId(item.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Dark overlay on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`} />

                                            {/* Featured badge */}
                                            {item.featured && (
                                                <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                                                    {t('portfolio.featured')}
                                                </div>
                                            )}

                                            {/* Service badge */}
                                            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                                                <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>{serviceIcons[item.serviceId]}</span>
                                                {serviceLabel(item.serviceId)}
                                            </div>

                                            {/* Hover CTA */}
                                            <div className={`absolute inset-0 flex items-end p-4 transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}>
                                                <Link
                                                    to={`/services/${item.serviceId}`}
                                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-sky-400 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                                                    {t('portfolio.goToService')} {serviceLabel(item.serviceId)}
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-5">
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                                                {title}
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                                {description}
                                            </p>
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5">
                                                {item.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className="text-[11px] font-semibold text-primary bg-sky-500/10 dark:bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>

            {/* ─── Bottom CTA ────────────────────────────────────────────── */}
            <div className="py-20 relative overflow-hidden bg-primary">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0ea5e9] to-sky-700 mix-blend-multiply" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        {t('portfolio.ctaTitle')}
                    </h2>
                    <p className="text-blue-50/80 mb-10 text-lg">
                        {t('portfolio.ctaSubtitle')}
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

export default Portfolio;
