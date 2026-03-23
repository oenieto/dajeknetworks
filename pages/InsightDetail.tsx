import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { getArticleBySlug, articles } from '../data/articles';

// ── Simple markdown-to-JSX renderer for bold/headers ──────────────────────
function renderContent(text: string) {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (const line of lines) {
        if (line.startsWith('## ')) {
            elements.push(
                <h2 key={key++} className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-white/10">
                    {line.slice(3)}
                </h2>
            );
        } else if (line.startsWith('**') && line.endsWith('**')) {
            const inner = line.slice(2, -2);
            const [boldPart, rest] = inner.includes('**') ? [inner, ''] : [inner.split(':')[0], inner.slice(inner.indexOf(':'))];
            elements.push(
                <p key={key++} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    <strong className="text-slate-900 dark:text-white">{boldPart}</strong>{rest}
                </p>
            );
        } else if (/^\*\*.*\*\*/.test(line)) {
            const parsed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            elements.push(
                <p key={key++} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: parsed }} />
            );
        } else if (line.startsWith('- ')) {
            elements.push(
                <li key={key++} className="flex gap-2 text-slate-700 dark:text-slate-300 mb-2">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">check_circle</span>
                    <span dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </li>
            );
        } else if (line.trim() === '') {
            elements.push(<div key={key++} className="h-2" />);
        } else {
            elements.push(
                <p key={key++} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            );
        }
    }
    return elements;
}

const InsightDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { i18n, t } = useTranslation();
    const lang = (i18n.language === 'en' || i18n.language === 'pt') ? i18n.language : 'es';

    const article = slug ? getArticleBySlug(slug) : undefined;

    if (!article) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617]">
                <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">article</span>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('insights.notFound')}</h1>
                <Link to="/insights" className="text-primary hover:underline font-medium">{t('insights.backToInsights')}</Link>
            </div>
        );
    }

    // Related articles (excluding current)
    const related = articles.filter(a => a.slug !== slug).slice(0, 2);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
            <SEO 
                title={article.title[lang]} 
                description={article.excerpt[lang]}
                image={article.image}
                type="article"
                url={`https://dajeknetwork.com/insights/${article.slug}`}
            />
            {/* ── Hero Image Banner ──────────────────────────────────── */}
            <div className="relative h-72 md:h-96 overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title[lang]}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-4">
                        {article.category}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                        {article.title[lang]}
                    </h1>
                </div>
            </div>

            {/* ── Article Body ───────────────────────────────────────── */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Back link + meta */}
                <div className="flex flex-wrap items-center gap-4 mb-10 text-sm text-slate-500 dark:text-slate-400">
                    <Link to="/insights" className="inline-flex items-center gap-1 font-medium text-primary hover:text-sky-400 transition-colors group">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                        {t('insights.backToInsights')}
                    </Link>
                    <span className="hidden sm:inline">·</span>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        {article.readTime} {t('insights.minRead')}
                    </span>
                </div>

                {/* Lead paragraph */}
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-10 pb-10 border-b border-slate-200 dark:border-white/10">
                    {article.excerpt[lang]}
                </p>

                {/* Content */}
                <div className="prose-custom">
                    <ul className="space-y-0 list-none p-0">
                        {renderContent(article.content[lang])}
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-indigo-500/10 border border-primary/20 text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('insights.ctaTitle')}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">{t('insights.ctaSubtitle')}</p>
                    <Link
                        to="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-sky-500/20 hover:bg-sky-400 hover:-translate-y-0.5 transition-all duration-200"
                    >
                        {t('insights.ctaButton')}
                        <span className="material-symbols-outlined text-lg">chat</span>
                    </Link>
                </div>

                {/* Related articles */}
                {related.length > 0 && (
                    <div className="mt-16">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{t('insights.relatedTitle')}</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {related.map(rel => (
                                <Link key={rel.slug} to={`/insights/${rel.slug}`} className="group flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 hover:border-primary/40 hover:shadow-md transition-all duration-200">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={rel.image} alt={rel.title[lang]} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{rel.category}</span>
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm mt-1 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                            {rel.title[lang]}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InsightDetail;
