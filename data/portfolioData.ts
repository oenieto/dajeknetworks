// ─────────────────────────────────────────────────────────────────────────────
// Portfolio Data — Dajek Network
// To add real photos: place images in /public/portfolio/ and update `image`
// Each item is linked to a service via `serviceId`
// ─────────────────────────────────────────────────────────────────────────────

export interface PortfolioItem {
    id: string;
    serviceId: string;             // must match serviceIds in Services.tsx
    titleEs: string;
    titleEn: string;
    titlePt: string;
    descriptionEs: string;
    descriptionEn: string;
    descriptionPt: string;
    image: string;                 // path under /public or external URL
    tags: string[];
    featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
    // ── PROYECTOS REALES ────────────────────────────────────────────────────────────
    {
        id: 'real-01',
        serviceId: 'infrastructure',
        titleEs: 'Data Center Corporativo en Aguascalientes',
        titleEn: 'Corporate Data Center in Aguascalientes',
        titlePt: 'Data Center Corporativo em Aguascalientes',
        descriptionEs: 'Diseño e implementación de infraestructura para Centro de Datos corporativo en Aguascalientes. Instalación de racks de telecomunicaciones, canalización de fibra óptica de alta densidad (FiberGuide), puesta a punto de switches Cisco Catalyst multinivel corporativo, paneles de parcheo (Lumen/Panduit), y suministro de bancos de baterías Absolyte GNB, garantizando continuidad operativa con grado Tier 3.',
        descriptionEn: 'Design and implementation of infrastructure for a corporate Data Center in Aguascalientes. Installation of telecom racks, high-density fiber optic channeling, setup of corporate Cisco Catalyst switches, patch panels (Lumen/Panduit), and Absolyte GNB battery banks, ensuring operational continuity with Tier 3 grade.',
        descriptionPt: 'Design e implementação de infraestrutura para Data Center corporativo em Aguascalientes. Instalação de racks de telecomunicações, canalização de fibra óptica de alta densidade, configuração de switches Cisco Catalyst corporativos, patch panels (Lumen/Panduit) e bancos de baterias Absolyte GNB, garantindo continuidade operacional de grau Tier 3.',
        image: '/portfolio/aguascalientes-server.jpeg', // IMPORTANTE: Agregar las fotos reales en la carpeta public/portfolio con este nombre
        tags: ['Data Center', 'Cisco', 'Fibra Óptica', 'Infraestructura', 'Baterías'],
        featured: true,
    },
    {
        id: 'real-02',
        serviceId: 'infrastructure',
        titleEs: 'Infraestructura de Red y Eléctrica - Sindicato PEMEX',
        titleEn: 'Network and Electrical Infrastructure - PEMEX Union',
        titlePt: 'Infraestrutura Elétrica e de Rede - Sindicato PEMEX',
        descriptionEs: 'Acondicionamiento de cuartos de telecomunicaciones para el Sindicato de PEMEX. Los trabajos abarcaron la instalación de tableros de plantas y de transferencia automática (PTM) para resiliencia energética, instalación de gabinetes de fibra óptica CommScope, y ruteo aéreo de cables sobre bandejas estructuradas.',
        descriptionEn: 'Outfitting of telecommunications rooms for the PEMEX Union. The work included the installation of automatic transfer and switchboards (PTM) for power resilience, CommScope fiber optic cabinet installation, and overhead cable routing on structured trays.',
        descriptionPt: 'Acondicionamento de salas de telecomunicações para o Sindicato PEMEX. O trabalho abrangeu a instalação de quadros de transferência automática (PTM) para resiliência energética, instalação de armários de fibra óptica CommScope e roteamento aéreo de cabos em bandejas estruturadas.',
        image: '/portfolio/pemex-infra.jpeg', // Agregar las fotos reales en public/portfolio
        tags: ['Fibra Óptica', 'Eléctrico', 'CommScope', 'Canalización'],
        featured: true,
    },
    {
        id: 'real-03',
        serviceId: 'support',
        titleEs: 'Mantenimiento a Sistemas Automáticos y Elevadores - Sindicato PEMEX',
        titleEn: 'Automatic Systems and Elevator Maintenance - PEMEX Union',
        titlePt: 'Manutenção de Sistemas Automáticos e Elevadores - Sindicato PEMEX',
        descriptionEs: 'Servicio de mantenimiento integral a nivel de sistemas de control en cuartos de máquinas de elevadores del edificio del Sindicato de PEMEX. Se realizaron tareas de recableado en tableros eléctricos, configuración de módulos de control de acceso e interfaz para un desempeño seguro del elevador.',
        descriptionEn: 'Comprehensive maintenance service at the control systems level in the elevator machine rooms of the PEMEX Union building. Rewiring tasks in electrical panels, access control module configuration and interfacing were performed to ensure safe elevator operation.',
        descriptionPt: 'Serviço de manutenção abrangente em nível de sistemas de controle em casas de máquinas de elevadores do edifício do Sindicato PEMEX. Foram realizadas tarefas de recabeamento em painéis elétricos, configuração de módulos de controle de acesso e interface para um desempenho seguro do elevador.',
        image: '/portfolio/pemex-elevador.jpeg', // Agregar las fotos reales en public/portfolio
        tags: ['Mantenimiento', 'Sistemas de Control', 'Soporte', 'Elevadores'],
        featured: true,
    },
    {
        id: 'real-04',
        serviceId: 'development',
        titleEs: 'Portal Web de Gestión - MultiCarrier NOC & CRM',
        titleEn: 'Management Web Portal - MultiCarrier NOC & CRM',
        titlePt: 'Portal Web de Gestão - MultiCarrier NOC & CRM',
        descriptionEs: 'Desarrollo de una aplicación web (SPA) dedicada para la gestión integral de servicios MultiCarrier. Con un frontend optimizado en React, Tailwind CSS y Vite para navegación instantánea (Context API). Su motor backend en Python y Django REST Framework procesa la lógica transaccional, respaldado por una base de datos PostgreSQL. Incorpora autenticación vía PyJWT, CORS, notificaciones automáticas (SMTP), procesamiento de imágenes (Pillow), y está desplegado bajo una arquitectura altamente escalable usando Docker, Gunicorn y WhiteNoise.',
        descriptionEn: 'Development of a dedicated single-page application (SPA) for the comprehensive management of MultiCarrier services. Built with a React, Tailwind CSS, and Vite frontend for instant navigation. The Python and Django REST Framework backend handles transactional logic with a PostgreSQL database. It features PyJWT authentication, automated SMTP notifications, Pillow image processing, and is fully orchestrated via Docker and Gunicorn for high concurrency and scalability.',
        descriptionPt: 'Desenvolvimento de uma aplicação web (SPA) dedicada à gestão integral dos serviços MultiCarrier. Frontend construído em React, Tailwind CSS e Vite para navegação instantânea. O motor backend em Python e Django REST Framework processa a lógica de negócios usando um banco de dados PostgreSQL. Inclui autenticação PyJWT, notificações automáticas, processamento de imagens (Pillow), e é implantado usando Docker e Gunicorn para alta escalabilidade.',
        image: '/portfolio/multicarrier-portal.png',
        tags: ['React', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Desarrollo Web'],
        featured: true,
    }
];

// Helper: get items by service
export const getItemsByService = (serviceId: string): PortfolioItem[] =>
    portfolioItems.filter(item => item.serviceId === serviceId);

// Helper: get featured items
export const getFeaturedItems = (): PortfolioItem[] =>
    portfolioItems.filter(item => item.featured);
