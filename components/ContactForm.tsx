import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'development',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Sanitizar inputs removiendo saltos de linea maliciosos para evitar inyeccion de cabeceras en mailto
        const sanitizeInput = (str: string) => str.replace(/[\r\n]+/g, ' ');
        
        const cleanName = sanitizeInput(formData.name);
        const cleanService = sanitizeInput(formData.service);
        const cleanEmail = sanitizeInput(formData.email);
        const cleanMessage = formData.message.replace(/\r/g, ''); // Permitimos \n en el mensaje pero normalizamos

        const subject = `Interés en Servicios de ${cleanService} - ${cleanName}`;
        const body = `Hola Dajek Network,\n\nSoy ${cleanName} y estoy interesado en sus servicios de ${cleanService}.\n\nMensaje:\n${cleanMessage}\n\nMi correo de contacto es: ${cleanEmail}`;
        window.location.href = `mailto:genaro.lopez@dajeknetwork.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">
                        {t('contact.badge')}
                    </h2>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-6">
                        {t('contact.title')}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl shadow-sky-500/5 border border-slate-200 dark:border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    {t('contact.name')}
                                </label>
                                <input
                                    type="text" id="name" name="name" required
                                    value={formData.name} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder={t('contact.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    {t('contact.email')}
                                </label>
                                <input
                                    type="email" id="email" name="email" required
                                    value={formData.email} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder={t('contact.emailPlaceholder')}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                {t('contact.serviceLabel')}
                            </label>
                            <div className="relative">
                                <select
                                    id="service" name="service"
                                    value={formData.service} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                                >
                                    <option value="development">{t('contact.services.development')}</option>
                                    <option value="networking">{t('contact.services.networking')}</option>
                                    <option value="cybersecurity">{t('contact.services.cybersecurity')}</option>
                                    <option value="cloud">{t('contact.services.cloud')}</option>
                                    <option value="smart-buildings">{t('contact.services.smart-buildings')}</option>
                                    <option value="support">{t('contact.services.support')}</option>
                                    <option value="consulting">{t('contact.services.consulting')}</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                {t('contact.message')}
                            </label>
                            <textarea
                                id="message" name="message" rows={4}
                                value={formData.message} onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                placeholder={t('contact.messagePlaceholder')}
                            ></textarea>
                        </div>

                        <div className="pt-4 text-center">
                            <button
                                type="submit"
                                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-sky-400 shadow-xl shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                            >
                                {t('contact.submit')}
                                <span className="material-symbols-outlined ml-2 text-xl">send</span>
                            </button>
                            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                                {t('contact.directEmail')}{' '}
                                <a href="mailto:genaro.lopez@dajeknetwork.com" className="text-primary hover:underline">genaro.lopez@dajeknetwork.com</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
