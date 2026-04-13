import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PortfolioItem } from '../data/portfolioData';
import { serviceIcons } from './Services';

// ─── PortfolioCard ────────────────────────────────────────────────────────────
// Self-contained card with auto-rotating image gallery.
// If the item has `images[]`, it cycles through them automatically.
// Use `compact` for the smaller version shown in ServiceDetail.
// ─────────────────────────────────────────────────────────────────────────────

interface PortfolioCardProps {
    item: PortfolioItem;
    /** Show service badge + CTA hover overlay (Portfolio page) */
    showServiceBadge?: boolean;
    /** Link to navigate when clicking the card */
    linkTo?: string;
    /** Compact style for ServiceDetail sections */
    compact?: boolean;
}

const INTERVAL_MS = 2800;

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    item,
    showServiceBadge = true,
    linkTo,
    compact = false,
}) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    // All images to cycle: prefer images[] array, fallback to single image
    const allImages: string[] = item.images && item.images.length > 1
        ? item.images
        : [item.image];
    const hasGallery = allImages.length > 1;

    const [currentIdx, setCurrentIdx] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Start auto-rotation on mount
    useEffect(() => {
        if (!hasGallery) return;
        intervalRef.current = setInterval(() => {
            setCurrentIdx(prev => (prev + 1) % allImages.length);
        }, INTERVAL_MS);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasGallery, allImages.length]);

    const title = lang === 'en' ? item.titleEn : lang === 'pt' ? item.titlePt : item.titleEs;
    const description = lang === 'en' ? item.descriptionEn : lang === 'pt' ? item.descriptionPt : item.descriptionEs;

    const serviceLabel = (id: string) => t(`services.items.${id}.title`);

    // ─── Image area ───────────────────────────────────────────────────────────
    const imageArea = (
        <div className={`relative ${compact ? 'aspect-[4/3]' : 'aspect-[4/3]'} overflow-hidden bg-slate-100 dark:bg-slate-800`}>
            {allImages.map((src, idx) => (
                <img
                    key={src}
                    src={src}
                    alt={`${title} ${idx + 1}`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        currentIdx === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}

            {/* Dot indicators */}
            {hasGallery && (
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {allImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={e => {
                                e.preventDefault();
                                setCurrentIdx(idx);
                                // Restart timer
                                if (intervalRef.current) clearInterval(intervalRef.current);
                                intervalRef.current = setInterval(() => {
                                    setCurrentIdx(prev => (prev + 1) % allImages.length);
                                }, INTERVAL_MS);
                            }}
                            className={`rounded-full transition-all duration-300 ${
                                currentIdx === idx
                                    ? 'w-5 h-1.5 bg-white shadow'
                                    : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Ver imagen ${idx + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Gallery count badge */}
            {hasGallery && (
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-10">
                    <span className="material-symbols-outlined" style={{ fontSize: '11px' }}>photo_library</span>
                    {currentIdx + 1}/{allImages.length}
                </div>
            )}

            {/* Featured badge */}
            {item.featured && !compact && (
                <div className="absolute top-2.5 right-2.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full z-10">
                    {t('portfolio.featured')}
                </div>
            )}

            {/* Service badge – Portfolio page only */}
            {showServiceBadge && !compact && (
                <div className={`absolute ${item.featured ? 'top-10' : 'top-2.5'} right-2.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 z-10`}>
                    <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>
                        {serviceIcons[item.serviceId]}
                    </span>
                    {serviceLabel(item.serviceId)}
                </div>
            )}

            {/* Gradient overlay for CTA */}
            {!compact && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]" />
            )}

            {/* Hover CTA – Portfolio page */}
            {showServiceBadge && !compact && linkTo && (
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-xl">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                        {t('portfolio.goToService')} {serviceLabel(item.serviceId)}
                    </span>
                </div>
            )}
        </div>
    );

    // ─── Card body ────────────────────────────────────────────────────────────
    const cardBody = (
        <div className={compact ? 'p-4' : 'p-5'}>
            <h3 className={`font-bold text-slate-900 dark:text-white leading-snug mb-2 ${compact ? 'text-sm group-hover:text-primary transition-colors' : ''}`}>
                {title}
            </h3>
            <p className={`text-slate-500 dark:text-slate-400 leading-relaxed ${compact ? 'text-xs line-clamp-2 mb-2' : 'text-sm mb-4'}`}>
                {description}
            </p>
            <div className="flex flex-wrap gap-1.5">
                {(compact ? item.tags.slice(0, 3) : item.tags).map(tag => (
                    <span
                        key={tag}
                        className="text-[10px] font-semibold text-primary bg-sky-500/10 dark:bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );

    // ─── Wrapper ──────────────────────────────────────────────────────────────
    const className = `group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 ${compact ? 'hover:-translate-y-1' : ''}`;

    if (linkTo) {
        return (
            <Link to={linkTo} className={className} id={`portfolio-card-${item.id}`}>
                {imageArea}
                {cardBody}
            </Link>
        );
    }

    return (
        <div className={className} id={`portfolio-card-${item.id}`}>
            {imageArea}
            {cardBody}
        </div>
    );
};

export default PortfolioCard;
