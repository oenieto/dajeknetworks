import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { articles } from '../data/articles';

const Insights: React.FC = () => {
    const { t, i18n } = useTranslation();
    const lang = (i18n.language === 'en' || i18n.language === 'pt') ? i18n.language : 'es';

    return (
        <div className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-300 transition-colors duration-300">
            <SEO 
                title={t('insights.title')} 
                description={t('insights.subtitle')}
                url="https://dajeknetwork.com/insights"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/20">
                        {t('insights.badge')}
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        {t('insights.title')}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t('insights.subtitle')}
                    </p>
                </div>

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <article key={article.slug} className="group flex flex-col bg-white dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            {/* Image */}
                            <Link to={`/insights/${article.slug}`} className="block overflow-hidden aspect-video relative flex-shrink-0">
                                <img
                                    src={article.image}
                                    alt={article.title[lang]}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
                                    {article.category}
                                </span>
                            </Link>

                            {/* Body */}
                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                    <span className="font-semibold text-primary">{article.date}</span>
                                    <span>·</span>
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        {article.readTime} {t('insights.minRead')}
                                    </span>
                                </div>

                                <Link to={`/insights/${article.slug}`}>
                                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                                        {article.title[lang]}
                                    </h2>
                                </Link>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm flex-1 line-clamp-3">
                                    {article.excerpt[lang]}
                                </p>

                                <Link
                                    to={`/insights/${article.slug}`}
                                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-primary hover:text-sky-400 transition-colors group/link"
                                >
                                    {t('insights.readMore')}
                                    <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Insights;
