import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface ServiceItem {
    title: string;
    description: string;
    icon: string;
    id: string;
    image: string;
}

export const serviceIds = ['development', 'networking', 'cybersecurity', 'infrastructure', 'smart-buildings', 'support'] as const;

export const serviceIcons: Record<string, string> = {
    development: 'code',
    networking: 'hub',
    cybersecurity: 'shield',
    infrastructure: 'dns',
    'smart-buildings': 'apartment',
    support: 'support_agent',
};

export const serviceImages: Record<string, string> = {
    development: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    networking: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cybersecurity: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    infrastructure: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    'smart-buildings': "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    support: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
};

// Keep static version for ServiceDetail (uses t() dynamically)
export const services: ServiceItem[] = serviceIds.map(id => ({
    id,
    title: id,
    description: '',
    icon: serviceIcons[id],
    image: serviceImages[id],
}));

const Services: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="services" className="py-24 bg-slate-50 dark:bg-[#020617] relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">
                        {t('services.badge')}
                    </h2>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-5xl mb-6">
                        {t('services.title')}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceIds.map((id, index) => (
                        <div 
                            key={index}
                            className="glass-card rounded-3xl p-10 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 group border-t-2 border-t-transparent hover:border-t-primary"
                        >
                            <div className="h-14 w-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-sky-500/20">
                                <span className="material-symbols-outlined text-primary text-3xl">
                                    {serviceIcons[id]}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                {t(`services.items.${id}.title`)}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                {t(`services.items.${id}.description`)}
                            </p>
                            <Link to={`/services/${id}`} className="inline-flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                                {t('services.more')}
                                <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;