import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const stats = [
    { value: 25, suffix: '+', labelKey: 'stats.years' },
    { value: 300, suffix: '+', labelKey: 'stats.clients' },
    { value: 10500, suffix: '+', labelKey: 'stats.ports' },
    { value: 99.9, suffix: '%', labelKey: 'stats.uptime', decimal: true },
];

function useCountUp(target: number, duration = 1800, decimal = false) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = performance.now();
                    const step = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                        setCount(parseFloat((eased * target).toFixed(decimal ? 1 : 0)));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration, decimal]);

    return { ref, count };
}

type StatItemProps = { value: number; suffix: string; labelKey: string; decimal?: boolean };

const StatItem: React.FC<StatItemProps> = ({ value, suffix, labelKey, decimal = false }) => {
    const { t } = useTranslation();
    const { ref, count } = useCountUp(value, 1800, decimal);

    const displayValue = value >= 10000
        ? `${(count / 1000).toFixed(1)}k`
        : decimal
            ? count.toFixed(1)
            : Math.floor(count).toString();

    return (
        <div ref={ref} className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-primary mb-2">
                {suffix === '+' ? '+' : ''}{displayValue}{suffix === '%' ? '%' : ''}
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                {t(labelKey)}
            </span>
        </div>
    );
};

const Stats: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#0f172a] border-y border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center divide-x divide-slate-200 dark:divide-white/5">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;