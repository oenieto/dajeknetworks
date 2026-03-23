import React from 'react';

const Insights: React.FC = () => {
    const articles = [
        {
            title: "El Futuro de la Ciberseguridad en LATAM",
            date: "10 Oct, 2023",
            excerpt: "Analizamos las tendencias emergentes en amenazas digitales y cómo las empresas pueden prepararse.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            title: "5G y el Impacto en IoT Industrial",
            date: "22 Sep, 2023",
            excerpt: "Cómo la conectividad de alta velocidad está revolucionando la manufactura y la logística.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            title: "Migración a la Nube: Estrategias Exitosas",
            date: "05 Ago, 2023",
            excerpt: "Guía paso a paso para minimizar riesgos durante la transición digital de su infraestructura.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-300 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Insights & Noticias</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Análisis profundos y novedades sobre tecnología, negocios e innovación.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="rounded-2xl overflow-hidden shadow-lg mb-6 border border-slate-200 dark:border-white/10 aspect-video relative">
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="mb-2">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">{article.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {article.excerpt}
                            </p>
                            <a href="#" className="inline-block mt-4 text-sm font-bold text-primary hover:underline">
                                Leer más →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Insights;
