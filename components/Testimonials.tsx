import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const testimonials = [
    {
        name: 'Ing. Roberto Sánchez',
        role: 'Director de TI',
        company: 'Red de Universidades Anáhuac',
        avatar: 'RS',
        color: 'from-blue-500 to-indigo-600',
        quote: {
            es: 'Dajek Network transformó por completo nuestra infraestructura de red. La implementación fue impecable, el soporte 24/7 es excepcional y el equipo demostró un nivel de expertise que superó nuestras expectativas.',
            en: 'Dajek Network completely transformed our network infrastructure. The implementation was flawless, the 24/7 support is exceptional, and the team demonstrated a level of expertise that exceeded our expectations.',
            pt: 'A Dajek Network transformou completamente nossa infraestrutura de rede. A implementação foi impecável, o suporte 24/7 é excepcional e a equipe demonstrou um nível de expertise que superou nossas expectativas.',
        },
        rating: 5,
    },
    {
        name: 'Lic. María González',
        role: 'Gerente de Operaciones',
        company: 'ECOMA',
        avatar: 'MG',
        color: 'from-emerald-500 to-teal-600',
        quote: {
            es: 'Gracias a la solución de ciberseguridad implementada por Dajek, logramos cero incidentes de seguridad en los últimos 18 meses. Una inversión que se pagó sola en el primer trimestre.',
            en: 'Thanks to the cybersecurity solution implemented by Dajek, we achieved zero security incidents in the last 18 months. An investment that paid for itself in the first quarter.',
            pt: 'Graças à solução de cibersegurança implementada pela Dajek, alcançamos zero incidentes de segurança nos últimos 18 meses. Um investimento que se pagou no primeiro trimestre.',
        },
        rating: 5,
    },
    {
        name: 'Arq. Carlos Mendoza',
        role: 'CEO',
        company: 'Distribuidora ORTHO',
        avatar: 'CM',
        color: 'from-violet-500 to-purple-600',
        quote: {
            es: 'El sistema de Smart Building que instalaron en nuestras oficinas redujo un 30% nuestros costos de operación. La automatización y el control de acceso biométrico son simplemente de primer nivel.',
            en: 'The Smart Building system they installed in our offices reduced our operating costs by 30%. The automation and biometric access control are simply first-class.',
            pt: 'O sistema de Smart Building que instalaram em nossos escritórios reduziu 30% nossos custos operacionais. A automação e o controle de acesso biométrico são simplesmente de primeiro nível.',
        },
        rating: 5,
    },
];

const StarRating: React.FC<{ count: number }> = ({ count }) => (
    <div className="flex gap-0.5 mb-5">
        {Array.from({ length: count }).map((_, i) => (
            <span key={i} className="text-amber-400" style={{ fontSize: '18px' }}>★</span>
        ))}
    </div>
);

const Testimonials: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [active, setActive] = useState(0);

    const lang = (i18n.language === 'en' || i18n.language === 'pt') ? i18n.language : 'es';

    return (
        <section className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/20">
                        {t('testimonials.badge')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                {/* Main testimonial card */}
                <div className="max-w-3xl mx-auto mb-10">
                    <div className="relative bg-white dark:bg-slate-800/60 rounded-3xl p-10 shadow-xl border border-slate-200 dark:border-white/5 transition-all duration-500">
                        {/* Large quote mark */}
                        <div className="absolute top-6 right-8 text-8xl font-serif text-primary/10 dark:text-primary/15 select-none leading-none">"</div>

                        <StarRating count={testimonials[active].rating} />

                        <blockquote className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 relative z-10">
                            "{testimonials[active].quote[lang]}"
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                                {testimonials[active].avatar}
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">{testimonials[active].name}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {testimonials[active].role} · <span className="text-primary font-medium">{testimonials[active].company}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab selectors */}
                <div className="flex justify-center gap-4 flex-wrap">
                    {testimonials.map((t_item, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActive(idx)}
                            className={`flex items-center gap-3 px-5 py-3 rounded-2xl border text-sm font-semibold transition-all duration-200 ${
                                active === idx
                                    ? 'bg-primary/10 border-primary/40 text-primary dark:text-blue-400 shadow-md'
                                    : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-primary/30 hover:text-primary'
                            }`}
                        >
                            <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t_item.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                                {t_item.avatar}
                            </div>
                            <span className="hidden sm:inline">{t_item.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
