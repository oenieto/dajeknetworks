import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-slate-100 dark:bg-[#020617] pt-24 pb-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <img src="/dajek_nobg.png" alt="Dajek Logo" className="h-14 w-auto" />
                            <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                                DAJEK<span className="text-primary">NETWORK</span>
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-500 text-sm mb-8 leading-relaxed">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">public</span>
                            </a>
                            <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">videocam</span>
                            </a>
                            <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">alternate_email</span>
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-8">{t('footer.services')}</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services/networking" className="text-slate-600 dark:text-slate-500 hover:text-primary text-sm transition-colors">{t('footer.links.networking')}</Link></li>
                            <li><Link to="/services/cybersecurity" className="text-slate-600 dark:text-slate-500 hover:text-primary text-sm transition-colors">{t('footer.links.cybersecurity')}</Link></li>
                            <li><Link to="/services/infrastructure" className="text-slate-600 dark:text-slate-500 hover:text-primary text-sm transition-colors">{t('footer.links.infrastructure')}</Link></li>
                            <li><Link to="/services/development" className="text-slate-600 dark:text-slate-500 hover:text-primary text-sm transition-colors">{t('footer.links.development')}</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-8">{t('footer.company')}</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-slate-600 dark:text-slate-500 hover:text-primary text-sm transition-colors">{t('footer.links.about')}</Link></li>
                            <li><Link to="/insights" className="text-slate-600 dark:text-slate-500 hover:text-primary text-sm transition-colors">{t('footer.links.insights')}</Link></li>
                            <li><Link to="/legal" className="text-slate-600 dark:text-slate-500 hover:text-primary text-sm transition-colors">{t('footer.links.legal')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-8">{t('footer.contactTitle')}</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start group">
                                <span className="material-symbols-outlined text-primary text-xl mr-3">location_on</span>
                                <span className="text-slate-600 dark:text-slate-500 text-sm group-hover:text-slate-800 dark:group-hover:text-slate-400 transition-colors">
                                    Fresno 192, Col. Santa María La Ribera<br/>06400
                                </span>
                            </li>
                            <li className="flex items-center group">
                                <span className="material-symbols-outlined text-primary text-xl mr-3">call</span>
                                <span className="text-slate-600 dark:text-slate-500 text-sm group-hover:text-slate-800 dark:group-hover:text-slate-400 transition-colors">
                                    +52 (55) 6031-0863
                                </span>
                            </li>
                            <li className="flex items-center group">
                                <span className="material-symbols-outlined text-primary text-xl mr-3">mail</span>
                                <span className="text-slate-600 dark:text-slate-500 text-sm group-hover:text-slate-800 dark:group-hover:text-slate-400 transition-colors">
                                    genaro.lopez@dajeknetwork.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 dark:text-slate-600 text-xs font-medium">
                        © {new Date().getFullYear()} DajekNetwork · {t('footer.rights')}
                    </p>
                    <div className="flex items-center space-x-3 bg-slate-200 dark:bg-slate-900/50 px-4 py-2 rounded-full border border-slate-300 dark:border-white/5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-slate-600 dark:text-slate-500 uppercase tracking-widest">{t('footer.status')}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;