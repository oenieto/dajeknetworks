import React from 'react';
import { useTranslation } from 'react-i18next';

const Methodologies: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white dark:bg-[#0f172a] border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Text Side */}
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                            {t('methodologies.title')}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                            {t('methodologies.subtitle')}
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-emerald-500 dark:text-emerald-400 mr-3">check_circle</span>
                                {t('methodologies.itil')}
                            </li>
                            <li className="flex items-center text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-emerald-500 dark:text-emerald-400 mr-3">check_circle</span>
                                {t('methodologies.scrum')}
                            </li>
                            <li className="flex items-center text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-emerald-500 dark:text-emerald-400 mr-3">check_circle</span>
                                {t('methodologies.pmi')}
                            </li>
                        </ul>
                    </div>

                    {/* Badges Side */}
                    <div className="lg:w-1/2 flex justify-center gap-8 flex-wrap">
                        {/* ITIL Card */}
                        <div className="flex flex-col items-center justify-center w-32 h-32 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                            <span className="font-black text-2xl text-slate-700 dark:text-slate-200">ITIL</span>
                            <span className="text-[0.6rem] text-slate-500 uppercase font-bold mt-1">Certified</span>
                        </div>
                        {/* SCRUM Card (Highlighted) */}
                        <div className="flex flex-col items-center justify-center w-32 h-32 rounded-3xl bg-sky-500/10 border-2 border-primary shadow-2xl shadow-sky-500/20 hover:-translate-y-2 transition-transform duration-300 transform scale-110">
                            <span className="font-black text-2xl text-primary">SCRUM</span>
                            <span className="text-[0.6rem] text-slate-600 dark:text-slate-400 uppercase font-bold mt-1">Master</span>
                        </div>
                        {/* PMI Card */}
                        <div className="flex flex-col items-center justify-center w-32 h-32 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                            <span className="font-black text-2xl text-slate-700 dark:text-slate-200">PMI</span>
                            <span className="text-[0.6rem] text-slate-500 uppercase font-bold mt-1">Standard</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodologies;