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
    // ── NETWORKING ────────────────────────────────────────────────────────────
    {
        id: 'net-01',
        serviceId: 'networking',
        titleEs: 'Diseño de Red LAN Corporativa',
        titleEn: 'Corporate LAN Network Design',
        titlePt: 'Design de Rede LAN Corporativa',
        descriptionEs: 'Implementación de red LAN de alta disponibilidad con switching Cisco Catalyst, incluyendo segmentación VLAN y redundancia.',
        descriptionEn: 'High-availability LAN network implementation with Cisco Catalyst switching, including VLAN segmentation and redundancy.',
        descriptionPt: 'Implementação de rede LAN de alta disponibilidade com switching Cisco Catalyst, incluindo segmentação VLAN e redundância.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Cisco', 'LAN', 'VLAN', 'Switching'],
        featured: true,
    },
    {
        id: 'net-02',
        serviceId: 'networking',
        titleEs: 'Red Wi-Fi 6 en Campus Empresarial',
        titleEn: 'Wi-Fi 6 Campus Network',
        titlePt: 'Rede Wi-Fi 6 em Campus Empresarial',
        descriptionEs: 'Despliegue de red inalámbrica Wi-Fi 6 de alta densidad con Ruckus en campus de 5,000 m², con cobertura total y análisis de rendimiento.',
        descriptionEn: 'High-density Wi-Fi 6 wireless network deployment with Ruckus across a 5,000 m² campus, with full coverage and performance analytics.',
        descriptionPt: 'Implantação de rede sem fio Wi-Fi 6 de alta densidade com Ruckus em campus de 5.000 m², com cobertura total e análise de desempenho.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Wi-Fi 6', 'Ruckus', 'Campus', 'Wireless'],
        featured: true,
    },
    {
        id: 'net-03',
        serviceId: 'networking',
        titleEs: 'Enrutamiento WAN Multi-sitio',
        titleEn: 'Multi-Site WAN Routing',
        titlePt: 'Roteamento WAN Multi-site',
        descriptionEs: 'Interconexión de 8 sucursales mediante SD-WAN con Fortinet, optimizando ancho de banda y garantizando continuidad del negocio.',
        descriptionEn: 'Interconnection of 8 branches via SD-WAN with Fortinet, optimizing bandwidth and ensuring business continuity.',
        descriptionPt: 'Interconexão de 8 filiais via SD-WAN com Fortinet, otimizando largura de banda e garantindo continuidade de negócios.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['SD-WAN', 'Fortinet', 'WAN', 'Multi-site'],
    },

    // ── INFRAESTRUCTURA ───────────────────────────────────────────────────────
    {
        id: 'inf-01',
        serviceId: 'infrastructure',
        titleEs: 'Cableado Estructurado Cat6A',
        titleEn: 'Cat6A Structured Cabling',
        titlePt: 'Cabeamento Estruturado Cat6A',
        descriptionEs: 'Instalación de cableado estructurado Cat6A con Panduit para Data Center de 200 m², con gestión y etiquetado profesional.',
        descriptionEn: 'Cat6A structured cabling installation with Panduit for a 200 m² Data Center, with professional management and labeling.',
        descriptionPt: 'Instalação de cabeamento estruturado Cat6A com Panduit para Data Center de 200 m², com gerenciamento e etiquetagem profissional.',
        image: 'https://images.unsplash.com/photo-1580196969807-cc6de06c05be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Cat6A', 'Panduit', 'Data Center', 'Cableado'],
        featured: true,
    },
    {
        id: 'inf-02',
        serviceId: 'infrastructure',
        titleEs: 'Enlace de Fibra Óptica Multimodo',
        titleEn: 'Multimode Fiber Optic Link',
        titlePt: 'Link de Fibra Óptica Multimodo',
        descriptionEs: 'Tendido e integración de fibra óptica multimodo de 1 km entre edificios con pruebas OTDR certificadas.',
        descriptionEn: '1 km multimode fiber optic run and integration between buildings with certified OTDR testing.',
        descriptionPt: 'Tendimento e integração de 1 km de fibra óptica multimodo entre edifícios com testes OTDR certificados.',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Fibra Óptica', 'OTDR', 'Multimodo', 'Certificación'],
    },
    {
        id: 'inf-03',
        serviceId: 'infrastructure',
        titleEs: 'Rack Profesional con Patch Panel',
        titleEn: 'Professional Rack with Patch Panel',
        titlePt: 'Rack Profissional com Patch Panel',
        descriptionEs: 'Montaje y organización de rack de telecomunicaciones con patch panel 48 puertos, gestión de cables y UPS integrada.',
        descriptionEn: 'Rack assembly and organization with 48-port patch panel, cable management and integrated UPS.',
        descriptionPt: 'Montagem e organização de rack de telecomunicações com patch panel de 48 portas, gestão de cabos e no-break integrado.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Rack', 'Patch Panel', 'UPS', 'Organización'],
    },

    // ── CIBERSEGURIDAD ────────────────────────────────────────────────────────
    {
        id: 'sec-01',
        serviceId: 'cybersecurity',
        titleEs: 'Firewall NGFW con IPS Activo',
        titleEn: 'NGFW Firewall with Active IPS',
        titlePt: 'Firewall NGFW com IPS Ativo',
        descriptionEs: 'Implementación de Firewall Fortinet FortiGate con IPS, filtrado web, VPN SSL y segmentación de zonas de seguridad.',
        descriptionEn: 'Fortinet FortiGate Firewall implementation with IPS, web filtering, SSL VPN and security zone segmentation.',
        descriptionPt: 'Implementação de Firewall Fortinet FortiGate com IPS, filtragem web, VPN SSL e segmentação de zonas de segurança.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Fortinet', 'NGFW', 'IPS', 'VPN'],
        featured: true,
    },
    {
        id: 'sec-02',
        serviceId: 'cybersecurity',
        titleEs: 'Auditoría de Seguridad Corporativa',
        titleEn: 'Corporate Security Audit',
        titlePt: 'Auditoria de Segurança Corporativa',
        descriptionEs: 'Análisis de vulnerabilidades, pruebas de penetración y entrega de reporte ejecutivo con plan de remediación priorizado.',
        descriptionEn: 'Vulnerability analysis, penetration testing and executive report with prioritized remediation plan.',
        descriptionPt: 'Análise de vulnerabilidades, testes de penetração e entrega de relatório executivo com plano de remediação priorizado.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Pen Testing', 'Auditoría', 'Vulnerabilidades', 'Reporte'],
    },

    // ── SMART BUILDINGS ───────────────────────────────────────────────────────
    {
        id: 'sb-01',
        serviceId: 'smart-buildings',
        titleEs: 'Sistema CCTV IP 4K con Analítica',
        titleEn: '4K IP CCTV System with Analytics',
        titlePt: 'Sistema CCTV IP 4K com Analítica',
        descriptionEs: 'Instalación de 32 cámaras IP 4K con analítica de video, detección de movimiento inteligente y almacenamiento NVR de 30 días.',
        descriptionEn: 'Installation of 32 4K IP cameras with video analytics, smart motion detection and 30-day NVR storage.',
        descriptionPt: 'Instalação de 32 câmeras IP 4K com análise de vídeo, detecção de movimento inteligente e armazenamento NVR de 30 dias.',
        image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['CCTV', '4K', 'Analítica', 'NVR'],
        featured: true,
    },
    {
        id: 'sb-02',
        serviceId: 'smart-buildings',
        titleEs: 'Control de Acceso Biométrico',
        titleEn: 'Biometric Access Control',
        titlePt: 'Controle de Acesso Biométrico',
        descriptionEs: 'Integración de lectores biométricos de huella y facial en 12 puntos de acceso con gestión centralizada y registro de eventos.',
        descriptionEn: 'Integration of fingerprint and facial biometric readers at 12 access points with centralized management and event logging.',
        descriptionPt: 'Integração de leitores biométricos de impressão digital e facial em 12 pontos de acesso com gestão centralizada e registro de eventos.',
        image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Biometría', 'Acceso', 'Seguridad Física', 'IoT'],
    },

    // ── SOPORTE ───────────────────────────────────────────────────────────────
    {
        id: 'sup-01',
        serviceId: 'support',
        titleEs: 'Gestión de Red Administrada 24/7',
        titleEn: '24/7 Managed Network Operations',
        titlePt: 'Gestão de Rede Administrada 24/7',
        descriptionEs: 'Centro de operaciones de red (NOC) para cliente con 500+ dispositivos, monitoreo proactivo y tiempo de respuesta SLA garantizado.',
        descriptionEn: 'Network Operations Center (NOC) for a client with 500+ devices, proactive monitoring and guaranteed SLA response time.',
        descriptionPt: 'Centro de operações de rede (NOC) para cliente com 500+ dispositivos, monitoramento proativo e tempo de resposta SLA garantido.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['NOC', 'SLA', '24/7', 'Monitoreo'],
        featured: true,
    },
];

// Helper: get items by service
export const getItemsByService = (serviceId: string): PortfolioItem[] =>
    portfolioItems.filter(item => item.serviceId === serviceId);

// Helper: get featured items
export const getFeaturedItems = (): PortfolioItem[] =>
    portfolioItems.filter(item => item.featured);
