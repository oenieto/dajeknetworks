import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { serviceIds, serviceIcons } from '../components/Services';
import { portfolioItems } from '../data/portfolioData';
import PortfolioCard from '../components/PortfolioCard';



const Portfolio: React.FC = () => {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();


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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Back Link positioned to the left */}
                    <div className="flex justify-start mb-10">
                        <Link
                            to="/#services"
                            className="inline-flex items-center text-sm font-medium text-primary hover:text-sky-400 transition-colors"
                        >
                            <span className="material-symbols-outlined mr-2 border border-transparent">arrow_back</span>
                            {t('serviceDetail.back')}
                        </Link>
                    </div>

                    {/* Centered Hero Content */}
                    <div className="text-center">
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
                            {filtered.map(item => (
                                <PortfolioCard
                                    key={item.id}
                                    item={item}
                                    showServiceBadge={true}
                                    linkTo={`/services/${item.serviceId}`}
                                />
                            ))}
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
