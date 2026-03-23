import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import ClientsCarousel from '../components/ClientsCarousel';
import Testimonials from '../components/Testimonials';
import Methodologies from '../components/Methodologies';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <>
            <SEO 
                title="Especialistas en TI y Soluciones Digitales" 
                description="Dajek Network: transformamos la infraestructura digital de su empresa con arquitectura de redes robusta, ciberseguridad avanzada y desarrollo de software."
                url="https://dajeknetwork.com"
            />
            <Hero />
            <Stats />
            <Services />
            <ClientsCarousel />
            <Testimonials />
            <Methodologies />
            <CTA />
            <ContactForm />
        </>
    );
};

export default Home;
