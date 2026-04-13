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
    image: string;                 // primary image (cover card)
    images?: string[];             // optional gallery with multiple photos
    tags: string[];
    featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
    // ── PROYECTOS REALES ────────────────────────────────────────────────────────────
    {
        id: 'real-05',
        serviceId: 'smart-buildings',
        titleEs: 'Centro de Monitoreo CCTV - Nave Industrial',
        titleEn: 'CCTV Monitoring Center - Industrial Facility',
        titlePt: 'Centro de Monitoramento CCTV - Instalação Industrial',
        descriptionEs: 'Diseño, suministro e integración de un Centro de Control y Monitoreo de Videovigilancia para nave industrial. El proyecto incluyó la instalación de un videowall con 8 monitores de gran formato para la visualización simultánea de múltiples cámaras, configuración de estaciones de trabajo con software de gestión VMS, control PTZ de cámaras mediante joysticks especializados, e integración de los racks de grabación y procesamiento en los muebles de operación. El resultado es un centro de seguridad 24/7 con cobertura total del perímetro y zonas internas de la instalación.',
        descriptionEn: 'Design, supply, and integration of a Video Surveillance Control and Monitoring Center for an industrial facility. The project included the installation of a videowall with 8 large-format monitors for simultaneous multi-camera display, VMS management software workstation setup, PTZ camera control via specialized joysticks, and integration of recording and processing racks into the operator furniture. The result is a 24/7 security center with full coverage of the perimeter and internal areas.',
        descriptionPt: 'Design, fornecimento e integração de um Centro de Controle e Monitoramento de Videovigilância para instalação industrial. O projeto incluiu a instalação de um videowall com 8 monitores de grande formato para visualização simultânea de múltiplas câmeras, configuração de estações de trabalho com software VMS, controle PTZ de câmeras com joysticks especializados e integração dos racks de gravação nos móveis dos operadores. O resultado é um centro de segurança 24/7 com cobertura total do perímetro.',
        image: '/portfolio/cctv.jpeg',
        tags: ['CCTV', 'Videovigilancia', 'VMS', 'Seguridad', 'Centro de Control'],
        featured: true,
    },
    {
        id: 'real-06',
        serviceId: 'networking',
        titleEs: 'Conectividad Industrial - Red de Monitoreo en Plantas de Bombeo',
        titleEn: 'Industrial Connectivity - Monitoring Network for Water Pump Stations',
        titlePt: 'Conectividade Industrial - Rede de Monitoramento em Estações de Bombeamento',
        descriptionEs: 'Implementación de red de comunicaciones industriales para interconectar múltiples plantas de bombeo de agua. Se desplegaron routers industriales Teltonika RUT951 (fabricación española) con conectividad LTE/Wi-Fi dual como nodos de comunicación dentro de gabinetes de control eléctrico, junto con switches industriales con redundancia de fibra óptica. El cableado UTP fue tendido desde registros subterráneos hasta los tableros de fuerza, garantizando supervisión remota en tiempo real del estado operativo de cada planta, alarmas y variables de proceso.',
        descriptionEn: 'Implementation of an industrial communications network to interconnect multiple water pump stations. Teltonika RUT951 industrial routers (European/Spanish manufacture) with dual LTE/Wi-Fi connectivity were deployed as communication nodes inside electrical control cabinets, alongside industrial switches with fiber optic redundancy. UTP cabling was routed from underground conduits to the power panels, ensuring real-time remote monitoring of each station\'s operational status, alarms, and process variables.',
        descriptionPt: 'Implementação de rede de comunicações industriais para interligar múltiplas estações de bombeamento de água. Roteadores industriais Teltonika RUT951 (fabricação europeia) com conectividade LTE/Wi-Fi dual foram implantados como nós de comunicação em gabinetes de controle elétrico, junto com switches industriais com redundância de fibra óptica. O cabeamento UTP foi lançado desde registros subterrâneos até os quadros de força, garantindo monitoramento remoto em tempo real do status de cada estação.',
        image: '/portfolio/networking1.jpeg',
        images: ['/portfolio/networking1.jpeg', '/portfolio/networking2.jpeg', '/portfolio/networking4.jpeg', '/portfolio/networking-rack-2.jpeg'],
        tags: ['Teltonika', 'Redes Industriales', 'SCADA', 'Plantas de Bombeo', 'LTE', 'Fibra Óptica'],
        featured: true,
    },
    {
        id: 'real-07',
        serviceId: 'infrastructure',
        titleEs: 'Despliegue de Red ISP - Municipio de Ozumba',
        titleEn: 'ISP Network Deployment - Ozumba Municipality',
        titlePt: 'Implantação de Rede ISP - Município de Ozumba',
        descriptionEs: 'Proyecto de despliegue de infraestructura de red ISP para cobertura de banda ancha en el municipio de Ozumba. El equipo realizó la instalación de cableado aéreo de fibra óptica y red en postes urbanos, incluyendo el tendido desde postes de distribución eléctrica hasta puntos de distribución locales. Los trabajos incluyeron configuración de cuartos de telecomunicaciones con rack de datos (routers, switches, OLT de fibra), peinado y fusión de fibra óptica, e instalación de splitters en poste. Proyecto ejecutado con personal certificado en trabajos en altura.',
        descriptionEn: 'ISP network infrastructure deployment project for broadband coverage in the Ozumba municipality. The team carried out aerial fiber optic and network cabling on urban utility poles, including drops from distribution poles to local distribution points. Work included configuration of telecommunications rooms with data racks (routers, switches, fiber OLT), fiber splicing and management, and aerial splitter installation on poles. Project executed with height-certified personnel.',
        descriptionPt: 'Projeto de implantação de infraestrutura de rede ISP para cobertura de banda larga no município de Ozumba. A equipe realizou a instalação de cabeamento aéreo de fibra óptica e rede em postes urbanos, incluindo a descida de postes de distribuição até pontos locais. Os trabalhos incluíram configuração de salas de telecomunicações com rack de dados (roteadores, switches, OLT de fibra), fusão e gestão de fibra óptica e instalação de splitters em poste. Projeto executado com pessoal certificado para trabalhos em altura.',
        image: '/portfolio/ozumba1.jpeg',
        images: ['/portfolio/ozumba1.jpeg', '/portfolio/ISP1.jpeg', '/portfolio/ISP2.jpeg', '/portfolio/ISP3.jpeg', '/portfolio/ISP4.jpeg', '/portfolio/ISP5.jpeg'],
        tags: ['ISP', 'Fibra Óptica', 'Red Aérea', 'OLT', 'Infraestructura', 'Ozumba'],
        featured: true,
    },
    {
        id: 'real-01',
        serviceId: 'infrastructure',
        titleEs: 'Data Center Corporativo de Alta Disponibilidad',
        titleEn: 'High-Availability Corporate Data Center',
        titlePt: 'Data Center Corporativo de Alta Disponibilidade',
        descriptionEs: 'Diseño e implementación de infraestructura para Centro de Datos corporativo regional. Instalación de racks de telecomunicaciones, canalización de fibra óptica de alta densidad (FiberGuide), puesta a punto de switches Cisco Catalyst multinivel corporativo, paneles de parcheo (Lumen/Panduit), y suministro de bancos de baterías Absolyte GNB, garantizando continuidad operativa con grado Tier 3.',
        descriptionEn: 'Design and implementation of infrastructure for a regional corporate Data Center. Installation of telecom racks, high-density fiber optic channeling, setup of corporate Cisco Catalyst switches, patch panels (Lumen/Panduit), and Absolyte GNB battery banks, ensuring operational continuity with Tier 3 grade.',
        descriptionPt: 'Design e implementação de infraestrutura para Data Center corporativo regional. Instalação de racks de telecomunicações, canalização de fibra óptica de alta densidade, configuração de switches Cisco Catalyst corporativos, patch panels (Lumen/Panduit) e bancos de baterias Absolyte GNB, garantindo continuidade operacional de grau Tier 3.',
        image: '/portfolio/aguascalientes-server.jpeg', // IMPORTANTE: Agregar las fotos reales en la carpeta public/portfolio con este nombre
        tags: ['Data Center', 'Cisco', 'Fibra Óptica', 'Infraestructura', 'Baterías'],
        featured: true,
    },
    {
        id: 'real-02',
        serviceId: 'infrastructure',
        titleEs: 'Infraestructura de Red y Eléctrica - Complejo Gubernamental',
        titleEn: 'Network and Electrical Infrastructure - Government Complex',
        titlePt: 'Infraestrutura Elétrica e de Rede - Complexo Governamental',
        descriptionEs: 'Acondicionamiento de cuartos de telecomunicaciones para un complejo sindical a gran escala. Los trabajos abarcaron la instalación de tableros de plantas y de transferencia automática (PTM) para resiliencia energética, instalación de gabinetes de fibra óptica CommScope, y ruteo aéreo de cables sobre bandejas estructuradas.',
        descriptionEn: 'Outfitting of telecommunications rooms for a large-scale union complex. The work included the installation of automatic transfer and switchboards (PTM) for power resilience, CommScope fiber optic cabinet installation, and overhead cable routing on structured trays.',
        descriptionPt: 'Acondicionamento de salas de telecomunicações para um complexo sindical em grande escala. O trabalho abrangeu a instalação de quadros de transferência automática (PTM) para resiliência energética, instalação de armários de fibra óptica CommScope e roteamento aéreo de cabos em bandejas estruturadas.',
        image: '/portfolio/pemex-infra.jpeg', // Agregar las fotos reales en public/portfolio
        tags: ['Fibra Óptica', 'Eléctrico', 'CommScope', 'Canalización'],
        featured: true,
    },
    {
        id: 'real-03',
        serviceId: 'support',
        titleEs: 'Mantenimiento a Sistemas Automáticos y Elevadores - Corporativo',
        titleEn: 'Automatic Systems and Elevator Maintenance - Corporate Building',
        titlePt: 'Manutenção de Sistemas Automáticos e Elevadores - Edifício Corporativo',
        descriptionEs: 'Servicio de mantenimiento integral a nivel de sistemas de control en cuartos de máquinas de elevadores de un edificio corporativo gubernamental. Se realizaron tareas de recableado en tableros eléctricos, configuración de módulos de control de acceso e interfaz para un desempeño seguro del elevador.',
        descriptionEn: 'Comprehensive maintenance service at the control systems level in the elevator machine rooms of a government corporate building. Rewiring tasks in electrical panels, access control module configuration and interfacing were performed to ensure safe elevator operation.',
        descriptionPt: 'Serviço de manutenção abrangente em nível de sistemas de controle em casas de máquinas de elevadores de um edifício corporativo governamental. Foram realizadas tarefas de recabeamento em painéis elétricos, configuração de módulos de controle de acesso e interface para um desempenho seguro do elevador.',
        image: '/portfolio/pemex-elevador.jpeg', // Agregar las fotos reales en public/portfolio
        tags: ['Mantenimiento', 'Sistemas de Control', 'Soporte', 'Elevadores'],
        featured: true,
    },
    {
        id: 'real-04',
        serviceId: 'development',
        titleEs: 'Portal Web de Gestión - Central NOC & ISP',
        titleEn: 'Management Web Portal - Central NOC & ISP',
        titlePt: 'Portal Web de Gestão - Central NOC & ISP',
        descriptionEs: 'Desarrollo de una aplicación web (SPA) dedicada para la gestión integral de servicios de telecomunicaciones ISP. Con un frontend optimizado en React, Tailwind CSS y Vite para navegación instantánea (Context API). Su motor backend en Python y Django REST Framework procesa la lógica transaccional, respaldado por una base de datos PostgreSQL. Incorpora autenticación vía PyJWT, CORS, notificaciones automáticas (SMTP), y está desplegado bajo una arquitectura altamente escalable usando Docker y Gunicorn.',
        descriptionEn: 'Development of a dedicated single-page application (SPA) for the comprehensive management of ISP telecommunication services. Built with a React, Tailwind CSS, and Vite frontend for instant navigation. The Python and Django REST Framework backend handles transactional logic with a PostgreSQL database. It features PyJWT authentication, automated SMTP notifications, and is fully orchestrated via Docker and Gunicorn for high concurrency and scalability.',
        descriptionPt: 'Desenvolvimento de uma aplicação web (SPA) dedicada à gestão integral de serviços de telecomunicações ISP. Frontend construído em React, Tailwind CSS e Vite para navegação instantânea. O motor backend em Python e Django REST Framework processa a lógica de negócios usando um banco de dados PostgreSQL. Inclui autenticação PyJWT, notificações automáticas, e é implantado usando Docker e Gunicorn para alta escalabilidade.',
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
