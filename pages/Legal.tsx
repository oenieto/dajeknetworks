import React from 'react';

const Legal: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-300 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">Información Legal</h1>
                
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Términos de Uso</h2>
                        <p>
                            Bienvenido a Dajek Network. Al acceder a nuestro sitio web, usted acepta estar sujeto a estos términos de servicio, a todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables.
                        </p>
                    </section>
                    
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Política de Privacidad</h2>
                        <p>
                            Su privacidad es importante para nosotros. Es política de Dajek Network respetar su privacidad con respecto a cualquier información que podamos recopilar de usted a través de nuestro sitio web.
                        </p>
                        <p>
                            Solo solicitamos información personal cuando realmente la necesitamos para brindarle un servicio. La recopilamos por medios justos y legales, con su conocimiento y consentimiento.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Propiedad Intelectual</h2>
                        <p>
                            El contenido, organización, gráficos, diseño, compilación, traducción magnética, conversión digital y otros asuntos relacionados con el Sitio están protegidos por derechos de autor, marcas registradas y otros derechos de propiedad (incluida, pero no limitada a, la propiedad intelectual).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
                        <p>
                            Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en <a href="mailto:genaro.lopez@dajeknetwork.com" className="text-primary hover:underline">genaro.lopez@dajeknetwork.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Legal;
