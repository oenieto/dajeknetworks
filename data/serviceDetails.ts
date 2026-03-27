// ─────────────────────────────────────────────────────────────────────────────
// Service Detail Content — Dajek Network
// Each service has: intro, subcategories (with icon, title, desc, items[])
// Translations: Es / En / Pt per field
// ─────────────────────────────────────────────────────────────────────────────

export interface SubCategory {
    icon: string;         // Google Material Symbol name
    titleEs: string;
    titleEn: string;
    titlePt: string;
    descEs?: string;
    descEn?: string;
    descPt?: string;
    items: {
        es: string;
        en: string;
        pt: string;
    }[];
    tags?: string[];
}

export interface ServiceDetailData {
    id: string;
    introEs: string;
    introEn: string;
    introPt: string;
    methodologyBadge?: string;
    subcategories: SubCategory[];
    highlights: {
        icon: string;
        labelEs: string;
        labelEn: string;
        labelPt: string;
    }[];
    images?: string[];
}

export const serviceDetailsMap: Record<string, ServiceDetailData> = {

    // ─── NETWORKING ────────────────────────────────────────────────────────────
    networking: {
        id: 'networking',
        introEs: 'En DAJEKNETWORK, entendemos el networking como la base de la conectividad moderna. Diseñamos e implementamos soluciones de interconexión que permiten a empresas, organizaciones y usuarios mantenerse siempre comunicados de forma eficiente, segura y confiable.\n\nNuestra infraestructura de red está enfocada en ofrecer alto desempeño, baja latencia y máxima disponibilidad, garantizando la continuidad operativa de nuestros clientes. Integramos tecnologías avanzadas para optimizar el flujo de datos, facilitar la comunicación entre sedes y asegurar el acceso a servicios críticos en todo momento.\n\nA través de nuestras soluciones de networking, ayudamos a las empresas a crecer, escalar sus operaciones y adaptarse a las demandas del entorno digital actual, brindando soporte especializado y un enfoque personalizado en cada proyecto.',
        introEn: 'At DAJEKNETWORK, we understand networking as the foundation of modern connectivity. We design and implement interconnection solutions that allow companies, organizations, and users to stay communicated efficiently, securely, and reliably always.\n\nOur network infrastructure is focused on offering high performance, low latency, and maximum availability, guaranteeing our clients\' operational continuity. We integrate advanced technologies to optimize data flow, facilitate communication between sites, and assure access to critical services at all times.\n\nThrough our networking solutions, we help companies grow, scale their operations, and adapt to the demands of the current digital environment, providing specialized support and a personalized approach for every project.',
        introPt: 'Na DAJEKNETWORK, entendemos o networking como a base da conectividade moderna. Desenhamos e implementamos soluções de interconexão que permitem a empresas, organizações e usuários manterem-se sempre comunicados de forma eficiente, segura e confiável.\n\nNossa infraestrutura de rede é focada em oferecer alto desempenho, baixa latência e máxima disponibilidade, garantindo a continuidade operacional dos nossos clientes. Integramos tecnologias avançadas para otimizar o fluxo de dados, facilitar a comunicação entre sedes e assegurar o acesso a serviços críticos em todos os momentos.\n\nAtravés de nossas soluções de networking, ajudamos as empresas a crescer, escalar suas operações e adaptar-se às demandas do ambiente digital atual, fornecendo suporte especializado e uma abordagem personalizada em cada projeto.',
        images: [
            '/portfolio/networking-rack-1.jpg',
            '/portfolio/networking-rack-2.jpeg'
        ],
        subcategories: [
            {
                icon: 'settings_ethernet',
                titleEs: 'Routing & Switching',
                titleEn: 'Routing & Switching',
                titlePt: 'Routing & Switching',
                descEs: 'Diseño, optimización y troubleshooting de redes LAN, WAN y Data Center con protocolos de enrutamiento estándar del mercado.',
                descEn: 'Design, optimization and troubleshooting of LAN, WAN and Data Center networks using industry-standard routing protocols.',
                descPt: 'Design, otimização e troubleshooting de redes LAN, WAN e Data Center com protocolos de roteamento padrão do mercado.',
                items: [
                    { es: 'Diseño y optimización de redes LAN, WAN y Data Centers', en: 'Design and optimization of LAN, WAN and Data Center networks', pt: 'Design e otimização de redes LAN, WAN e Data Centers' },
                    { es: 'Troubleshooting avanzado y diagnóstico de fallas', en: 'Advanced troubleshooting and fault diagnosis', pt: 'Troubleshooting avançado e diagnóstico de falhas' },
                    { es: 'Interoperabilidad de equipos multi-fabricante', en: 'Multi-vendor equipment interoperability', pt: 'Interoperabilidade de equipamentos multi-fabricante' },
                    { es: 'Segmentación VLAN y políticas QoS', en: 'VLAN segmentation and QoS policies', pt: 'Segmentação VLAN e políticas QoS' },
                    { es: 'Protocolos OSPF, BGP, EIGRP y MPLS', en: 'OSPF, BGP, EIGRP and MPLS protocols', pt: 'Protocolos OSPF, BGP, EIGRP e MPLS' },
                ],
                tags: ['Cisco', 'Juniper', 'HP', 'OSPF', 'BGP'],
            },
            {
                icon: 'hub',
                titleEs: 'Fabric Networking Campus',
                titleEn: 'Fabric Networking Campus',
                titlePt: 'Fabric Networking Campus',
                descEs: 'Arquitecturas de red simplificadas con gestión centralizada y automatización, diseñadas para escalar de forma eficiente y segura.',
                descEn: 'Simplified network architectures with centralized management and automation, designed to scale efficiently and securely.',
                descPt: 'Arquiteturas de rede simplificadas com gestão centralizada e automação, projetadas para escalar com eficiência e segurança.',
                items: [
                    { es: 'Redes simplificadas con gestión centralizada', en: 'Simplified networks with centralized management', pt: 'Redes simplificadas com gestão centralizada' },
                    { es: 'Automatización y orquestación de red', en: 'Network automation and orchestration', pt: 'Automação e orquestração de rede' },
                    { es: 'Servicios administrados de TI para evitar fallas en la operación', en: 'Managed IT services to prevent operational failures', pt: 'Serviços gerenciados de TI para evitar falhas operacionais' },
                    { es: 'Diseño, implementación y mantenimiento: HaaS, SaaS', en: 'Design, implementation and maintenance: HaaS, SaaS', pt: 'Design, implementação e manutenção: HaaS, SaaS' },
                    { es: 'Servicios de red inteligentes de alto rendimiento para servidores, almacenamiento y aplicaciones', en: 'High-performance intelligent network services for servers, storage and applications', pt: 'Serviços de rede inteligentes de alto desempenho para servidores, armazenamento e aplicações' },
                ],
                tags: ['SD-Access', 'Automation', 'HaaS', 'SaaS'],
            },
            {
                icon: 'wifi',
                titleEs: 'Redes Wi-Fi / Wi-Fi 6',
                titleEn: 'Wi-Fi / Wi-Fi 6 Networks',
                titlePt: 'Redes Wi-Fi / Wi-Fi 6',
                descEs: 'Redes seguras y de alto desempeño en Wi-Fi, fáciles de administrar. Diseñadas con topologías de alto desempeño y probadas con Software líder de industria.',
                descEn: 'High-performance, secure and easy-to-manage Wi-Fi networks. Designed with high-performance topologies and tested with industry-leading software.',
                descPt: 'Redes Wi-Fi seguras e de alto desempenho, fáceis de administrar. Projetadas com topologias de alto desempenho e testadas com software líder do setor.',
                items: [
                    { es: 'Air Defense: Seguridad IPS inalámbrico, detección de vulnerabilidades e intrusos Bluetooth', en: 'Air Defense: Wireless IPS security, Bluetooth vulnerability & intruder detection', pt: 'Air Defense: Segurança IPS sem fio, detecção de vulnerabilidades e intrusos Bluetooth' },
                    { es: 'Analíticos: Captura de información sobre rendimiento, seguridad y tipos de dispositivos', en: 'Analytics: Performance, security and device-type data capture', pt: 'Analíticos: Captura de informações sobre desempenho, segurança e tipos de dispositivos' },
                    { es: 'Wi-Fi de alta eficiencia: optimización de ancho de banda en todos los entornos', en: 'High-efficiency Wi-Fi: bandwidth optimization in all environments', pt: 'Wi-Fi de alta eficiência: otimização de largura de banda em todos os ambientes' },
                    { es: 'Administración de nube de 4ª generación para operaciones de TI completas', en: '4th generation cloud management for complete IT operations', pt: 'Gestão de nuvem de 4ª geração para operações de TI completas' },
                ],
                tags: ['Wi-Fi 6', 'Ruckus', 'Fortinet', 'Air Defense'],
            },
            {
                icon: 'cloud_sync',
                titleEs: 'Networking Services (Cloud)',
                titleEn: 'Networking Services (Cloud)',
                titlePt: 'Networking Services (Nuvem)',
                descEs: 'Soluciones de red gestionadas desde la nube con automatización, soporte 24×7×365 y compatibilidad con los principales fabricantes del mercado.',
                descEn: 'Cloud-managed network solutions with automation, 24×7×365 support and compatibility with the leading market vendors.',
                descPt: 'Soluções de rede gerenciadas na nuvem com automação, suporte 24×7×365 e compatibilidade com os principais fabricantes do mercado.',
                items: [
                    { es: 'Soluciones administrables desde la nube', en: 'Cloud-manageable solutions', pt: 'Soluções gerenciáveis pela nuvem' },
                    { es: 'Automatización de redes de acuerdo a la operación del cliente', en: 'Network automation according to client operations', pt: 'Automação de redes de acordo com as operações do cliente' },
                    { es: 'Soporte 24×7×365 con SLA garantizado', en: '24×7×365 support with guaranteed SLA', pt: 'Suporte 24×7×365 com SLA garantido' },
                    { es: 'Diseño e implementación basado en estándares de la industria', en: 'Industry-standards-based design and implementation', pt: 'Design e implementação baseados em padrões do setor' },
                    { es: 'Integraciones de hardware HP, Cisco, Juniper, Fortinet, Ruckus y más', en: 'Hardware integrations: HP, Cisco, Juniper, Fortinet, Ruckus and more', pt: 'Integrações de hardware HP, Cisco, Juniper, Fortinet, Ruckus e mais' },
                ],
                tags: ['Cisco', 'HP', 'Juniper', 'Fortinet', 'Ruckus'],
            },
        ],
        highlights: [
            { icon: 'verified', labelEs: '24×7×365 Soporte garantizado', labelEn: '24×7×365 Guaranteed support', labelPt: '24×7×365 Suporte garantido' },
            { icon: 'devices', labelEs: 'Multi-fabricante certificado', labelEn: 'Certified multi-vendor', labelPt: 'Multi-fabricante certificado' },
            { icon: 'speed', labelEs: 'Redes de alto rendimiento', labelEn: 'High-performance networks', labelPt: 'Redes de alto desempenho' },
            { icon: 'cloud_done', labelEs: 'Administración en la nube', labelEn: 'Cloud management', labelPt: 'Gestão na nuvem' },
        ],
    },

    // ─── INFRAESTRUCTURA ──────────────────────────────────────────────────────
    infrastructure: {
        id: 'infrastructure',
        introEs: 'Diseño y definición de la instalación de cableado estructurado. Realizamos la instalación mediante infraestructura de conectividad de diferentes fabricantes para que pueda conectar sus equipos informáticos, con un sistema de calidad y garantías únicos. Utilizamos las normas y mejores prácticas del mercado.',
        introEn: 'Design and definition of structured cabling installation. We perform installations using connectivity infrastructure from different manufacturers so you can connect your IT equipment, with a unique quality and warranty system. We use industry norms and best practices.',
        introPt: 'Design e definição da instalação de cabeamento estruturado. Realizamos a instalação por meio de infraestrutura de conectividade de diferentes fabricantes para que você possa conectar seus equipamentos de TI, com um sistema de qualidade e garantias únicos. Utilizamos as normas e melhores práticas do mercado.',
        subcategories: [
            {
                icon: 'cable',
                titleEs: 'Cableado Estructurado',
                titleEn: 'Structured Cabling',
                titlePt: 'Cabeamento Estruturado',
                descEs: 'Instalación profesional bajo estándares ANSI/TIA-568 y ISO/IEC 11801, con certificación de cada punto mediante equipos Fluke.',
                descEn: 'Professional installation under ANSI/TIA-568 and ISO/IEC 11801 standards, with Fluke-certified point testing.',
                descPt: 'Instalação profissional sob padrões ANSI/TIA-568 e ISO/IEC 11801, com certificação de cada ponto por equipamentos Fluke.',
                items: [
                    { es: 'Correcciones de cableado: Horizontal, Vertical y Sites', en: 'Cabling corrections: Horizontal, Vertical and Sites', pt: 'Correções de cabeamento: Horizontal, Vertical e Sites' },
                    { es: 'Pruebas de funcionalidad y medición de parámetros', en: 'Functionality testing and parameter measurement', pt: 'Testes de funcionalidade e medição de parâmetros' },
                    { es: 'Suministro de accesorios: Racks, Gabinetes, charolas, jumpers y más', en: 'Supply of accessories: Racks, Cabinets, trays, jumpers and more', pt: 'Fornecimento de acessórios: Racks, Gabinetes, bandejas, jumpers e mais' },
                    { es: 'Supervisión de obras e instalaciones completa', en: 'Complete construction and installation supervision', pt: 'Supervisão completa de obras e instalações' },
                    { es: 'Certificación Cat5e, Cat6, Cat6A y Cat7', en: 'Cat5e, Cat6, Cat6A and Cat7 certification', pt: 'Certificação Cat5e, Cat6, Cat6A e Cat7' },
                    { es: 'Cumplimiento de normas BICSI TDMM y NOM', en: 'Compliance with BICSI TDMM and NOM standards', pt: 'Conformidade com as normas BICSI TDMM e NOM' },
                ],
                tags: ['Cat6A', 'Panduit', 'Fluke', 'ANSI/TIA-568'],
            },
            {
                icon: 'fiber_manual_record',
                titleEs: 'Fibra Óptica',
                titleEn: 'Fiber Optics',
                titlePt: 'Fibra Óptica',
                descEs: 'Instalación y certificación de enlaces de fibra óptica monomodo y multimodo para backbone corporativo y Data Centers.',
                descEn: 'Installation and certification of single-mode and multimode fiber optic links for corporate backbone and Data Centers.',
                descPt: 'Instalação e certificação de links de fibra óptica monomodo e multimodo para backbone corporativo e Data Centers.',
                items: [
                    { es: 'Enlaces de fibra óptica monomodo y multimodo', en: 'Single-mode and multimode fiber optic links', pt: 'Links de fibra óptica monomodo e multimodo' },
                    { es: 'Certificación con equipo OTDR e instrumentos de medición profesional', en: 'Certification with OTDR equipment and professional measuring instruments', pt: 'Certificação com equipamentos OTDR e instrumentos de medição profissional' },
                    { es: 'Fusión y conectivización de fibra con empalmes de baja pérdida', en: 'Fiber fusion and connectorization with low-loss splices', pt: 'Fusão e conectorização de fibra com emendas de baixa perda' },
                    { es: 'Tendido subterráneo, aéreo y en canaleta', en: 'Underground, aerial and conduit fiber runs', pt: 'Tendimento subterrâneo, aéreo e em duto' },
                    { es: 'Backbone de fibra óptica para Data Centers y campus', en: 'Fiber optic backbone for Data Centers and campuses', pt: 'Backbone de fibra óptica para Data Centers e campus' },
                ],
                tags: ['OTDR', 'Monomodo', 'Multimodo', 'Fusión'],
            },
            {
                icon: 'dns',
                titleEs: 'Cómputo y Electrónica',
                titleEn: 'Computing & Electronics',
                titlePt: 'Computação e Eletrônica',
                descEs: 'Suministro, instalación y configuración de equipos de cómputo, servidores y soluciones de almacenamiento empresariales.',
                descEn: 'Supply, installation and configuration of computing equipment, servers and enterprise storage solutions.',
                descPt: 'Fornecimento, instalação e configuração de equipamentos de computação, servidores e soluções de armazenamento empresariais.',
                items: [
                    { es: 'Suministro e instalación de Desktops, Laptops y Workstations', en: 'Supply and installation of Desktops, Laptops and Workstations', pt: 'Fornecimento e instalação de Desktops, Laptops e Workstations' },
                    { es: 'Servidores físicos y virtualizados (Rack, Tower, Blade)', en: 'Physical and virtualized servers (Rack, Tower, Blade)', pt: 'Servidores físicos e virtualizados (Rack, Tower, Blade)' },
                    { es: 'Soluciones de almacenamiento SAN, NAS y DAS de alta disponibilidad', en: 'High-availability SAN, NAS and DAS storage solutions', pt: 'Soluções de armazenamento SAN, NAS e DAS de alta disponibilidade' },
                    { es: 'UPS y sistemas de energía ininterrumpida para infraestructura crítica', en: 'UPS and uninterruptible power systems for critical infrastructure', pt: 'Nobreak e sistemas de energia ininterrupta para infraestrutura crítica' },
                    { es: 'Virtualización con VMware, Hyper-V y Proxmox', en: 'Virtualization with VMware, Hyper-V and Proxmox', pt: 'Virtualização com VMware, Hyper-V e Proxmox' },
                ],
                tags: ['HP', 'Dell', 'VMware', 'SAN/NAS'],
            },
            {
                icon: 'warehouse',
                titleEs: 'Data Center & Cuarto de Telecomunicaciones',
                titleEn: 'Data Center & Telecom Room',
                titlePt: 'Data Center & Sala de Telecomunicações',
                descEs: 'Diseño y construcción de Data Centers categorizados desde TIER I hasta TIER IV, con sistemas de energía, enfriamiento y extinción certificados.',
                descEn: 'Design and construction of Data Centers from TIER I to TIER IV, with certified power, cooling and suppression systems.',
                descPt: 'Design e construção de Data Centers de TIER I a TIER IV, com sistemas certificados de energia, resfriamento e extinção.',
                items: [
                    { es: 'Diseño y construcción de Data Centers bajo estándar TIER I–IV', en: 'Data Center design and construction under TIER I–IV standards', pt: 'Design e construção de Data Centers sob padrão TIER I–IV' },
                    { es: 'Sistemas de aire acondicionado de precisión para cuartos de telecomunicaciones', en: 'Precision air conditioning systems for telecom rooms', pt: 'Sistemas de ar-condicionado de precisão para salas de telecomunicações' },
                    { es: 'Gestión de energía PDU, KVM y monitoreo ambiental', en: 'PDU, KVM power management and environmental monitoring', pt: 'Gestão de energia PDU, KVM e monitoramento ambiental' },
                    { es: 'Sistemas de extinción de incendios FM-200 y NOVEC', en: 'FM-200 and NOVEC fire suppression systems', pt: 'Sistemas de extinção de incêndio FM-200 e NOVEC' },
                ],
                tags: ['TIER III', 'PDU', 'FM-200', 'Hiperconvergencia'],
            },
        ],
        highlights: [
            { icon: 'verified_user', labelEs: 'Certificación ANSI/TIA-568', labelEn: 'ANSI/TIA-568 Certified', labelPt: 'Certificação ANSI/TIA-568' },
            { icon: 'engineering', labelEs: 'Supervisión de obras incluida', labelEn: 'Construction supervision included', labelPt: 'Supervisão de obras incluída' },
            { icon: 'timer', labelEs: 'Entrega en tiempo y forma', labelEn: 'On-time delivery', labelPt: 'Entrega no prazo' },
            { icon: 'workspace_premium', labelEs: 'Garantía única de instalación', labelEn: 'Unique installation warranty', labelPt: 'Garantia única de instalação' },
        ],
    },

    // ─── CIBERSEGURIDAD ───────────────────────────────────────────────────────
    cybersecurity: {
        id: 'cybersecurity',
        introEs: 'Protegemos los activos digitales de su empresa con soluciones de seguridad de nueva generación. Desde auditorías exhaustivas hasta implementación de firewalls NGFW, nuestro equipo certificado garantiza la continuidad del negocio y el cumplimiento normativo.',
        introEn: 'We protect your company\'s digital assets with next-generation security solutions. From comprehensive audits to NGFW firewall implementation, our certified team guarantees business continuity and regulatory compliance.',
        introPt: 'Protegemos os ativos digitais da sua empresa com soluções de segurança de nova geração. Desde auditorias abrangentes até implementação de firewalls NGFW, nossa equipe certificada garante a continuidade do negócio e a conformidade regulatória.',
        subcategories: [
            {
                icon: 'security',
                titleEs: 'Firewalls & Perímetro',
                titleEn: 'Firewalls & Perimeter',
                titlePt: 'Firewalls & Perímetro',
                descEs: 'Implementación de firewalls de nueva generación (NGFW) con capacidades avanzadas de inspección de tráfico, IPS y filtrado de contenido.',
                descEn: 'Implementation of next-generation firewalls (NGFW) with advanced traffic inspection, IPS and content filtering capabilities.',
                descPt: 'Implementação de firewalls de nova geração (NGFW) com recursos avançados de inspeção de tráfego, IPS e filtragem de conteúdo.',
                items: [
                    { es: 'Firewalls NGFW con inspección profunda de paquetes (DPI)', en: 'NGFW firewalls with deep packet inspection (DPI)', pt: 'Firewalls NGFW com inspeção profunda de pacotes (DPI)' },
                    { es: 'IPS/IDS activo con correlación de eventos en tiempo real', en: 'Active IPS/IDS with real-time event correlation', pt: 'IPS/IDS ativo com correlação de eventos em tempo real' },
                    { es: 'VPN SSL y IPSec para acceso remoto seguro', en: 'SSL and IPSec VPN for secure remote access', pt: 'VPN SSL e IPSec para acesso remoto seguro' },
                    { es: 'Filtrado web, control de aplicaciones y segmentación de zonas', en: 'Web filtering, application control and zone segmentation', pt: 'Filtragem web, controle de aplicações e segmentação de zonas' },
                    { es: 'Microsegmentación y políticas Zero Trust', en: 'Microsegmentation and Zero Trust policies', pt: 'Microssegmentação e políticas Zero Trust' },
                ],
                tags: ['Fortinet', 'Palo Alto', 'Cisco FTD', 'Zero Trust'],
            },
            {
                icon: 'manage_search',
                titleEs: 'Auditorías & Pentesting',
                titleEn: 'Audits & Pentesting',
                titlePt: 'Auditorias & Pentesting',
                descEs: 'Evaluación integral de la postura de seguridad mediante pruebas de penetración, análisis de vulnerabilidades y cumplimiento normativo.',
                descEn: 'Comprehensive security posture evaluation through penetration testing, vulnerability analysis and regulatory compliance.',
                descPt: 'Avaliação integral da postura de segurança por meio de testes de penetração, análise de vulnerabilidades e conformidade regulatória.',
                items: [
                    { es: 'Análisis de vulnerabilidades con herramientas certificadas (Nessus, OpenVAS)', en: 'Vulnerability analysis with certified tools (Nessus, OpenVAS)', pt: 'Análise de vulnerabilidades com ferramentas certificadas (Nessus, OpenVAS)' },
                    { es: 'Pruebas de penetración externas e internas', en: 'External and internal penetration testing', pt: 'Testes de penetração externos e internos' },
                    { es: 'Análisis de postura de seguridad y brecha (GAP Analysis)', en: 'Security posture and gap analysis', pt: 'Análise de postura de segurança e lacunas (GAP Analysis)' },
                    { es: 'Reporte ejecutivo con plan de remediación priorizado', en: 'Executive report with prioritized remediation plan', pt: 'Relatório executivo com plano de remediação priorizado' },
                    { es: 'Cumplimiento con ISO 27001, NIST y PCI-DSS', en: 'Compliance with ISO 27001, NIST and PCI-DSS', pt: 'Conformidade com ISO 27001, NIST e PCI-DSS' },
                ],
                tags: ['Nessus', 'ISO 27001', 'NIST', 'PCI-DSS'],
            },
            {
                icon: 'monitoring',
                titleEs: 'SOC & Monitoreo Continuo',
                titleEn: 'SOC & Continuous Monitoring',
                titlePt: 'SOC & Monitoramento Contínuo',
                descEs: 'Centro de Operaciones de Seguridad operativo 24×7×365 con SIEM, análisis de amenazas en tiempo real y respuesta activa a incidentes.',
                descEn: '24×7×365 Security Operations Center with SIEM, real-time threat analysis and active incident response.',
                descPt: 'Centro de Operações de Segurança 24×7×365 com SIEM, análise de ameaças em tempo real e resposta ativa a incidentes.',
                items: [
                    { es: 'Centro de Operaciones de Seguridad (SOC) 24×7×365', en: 'Security Operations Center (SOC) 24×7×365', pt: 'Centro de Operações de Segurança (SOC) 24×7×365' },
                    { es: 'SIEM: correlación y análisis de logs en tiempo real', en: 'SIEM: real-time log correlation and analysis', pt: 'SIEM: correlação e análise de logs em tempo real' },
                    { es: 'Respuesta a incidentes (IR) y contención de amenazas', en: 'Incident response (IR) and threat containment', pt: 'Resposta a incidentes (IR) e contenção de ameaças' },
                    { es: 'Threat hunting y análisis de comportamiento (UEBA)', en: 'Threat hunting and behavior analysis (UEBA)', pt: 'Threat hunting e análise de comportamento (UEBA)' },
                ],
                tags: ['SIEM', 'SOC', 'Threat Hunting', 'UEBA'],
            },
            {
                icon: 'lock_person',
                titleEs: 'Protección de Endpoints & Datos',
                titleEn: 'Endpoint & Data Protection',
                titlePt: 'Proteção de Endpoints & Dados',
                descEs: 'Soluciones EDR/XDR, DLP e IAM para proteger dispositivos, datos sensibles e identidades ante amenazas internas y externas.',
                descEn: 'EDR/XDR, DLP and IAM solutions to protect devices, sensitive data and identities against internal and external threats.',
                descPt: 'Soluções EDR/XDR, DLP e IAM para proteger dispositivos, dados sensíveis e identidades contra ameaças internas e externas.',
                items: [
                    { es: 'EDR/XDR: detección y respuesta avanzada en endpoints', en: 'EDR/XDR: advanced endpoint detection and response', pt: 'EDR/XDR: detecção e resposta avançada em endpoints' },
                    { es: 'DLP: prevención de fuga de información sensible', en: 'DLP: sensitive data loss prevention', pt: 'DLP: prevenção de perda de dados sensíveis' },
                    { es: 'Encriptación de discos y políticas de contraseñas robustas', en: 'Disk encryption and strong password policies', pt: 'Criptografia de discos e políticas de senhas robustas' },
                    { es: 'Gestión de identidades y accesos (IAM / MFA)', en: 'Identity and access management (IAM / MFA)', pt: 'Gestão de identidades e acessos (IAM / MFA)' },
                ],
                tags: ['EDR', 'DLP', 'MFA', 'IAM'],
            },
        ],
        highlights: [
            { icon: 'security', labelEs: 'Certificaciones CISSP / CEH', labelEn: 'CISSP / CEH Certifications', labelPt: 'Certificações CISSP / CEH' },
            { icon: 'gpp_good', labelEs: 'Cumplimiento ISO 27001', labelEn: 'ISO 27001 Compliance', labelPt: 'Conformidade ISO 27001' },
            { icon: 'timer', labelEs: 'Respuesta a incidentes 24/7', labelEn: '24/7 Incident response', labelPt: 'Resposta a incidentes 24/7' },
            { icon: 'policy', labelEs: 'Políticas Zero Trust', labelEn: 'Zero Trust Policies', labelPt: 'Políticas Zero Trust' },
        ],
    },

    // ─── SMART BUILDINGS ──────────────────────────────────────────────────────
    'smart-buildings': {
        id: 'smart-buildings',
        introEs: 'Transformamos edificios convencionales en espacios inteligentes, seguros y eficientes. Integramos tecnologías de automatización, videovigilancia, control de acceso y sistemas IoT para optimizar la operación y la seguridad de sus instalaciones.',
        introEn: 'We transform conventional buildings into intelligent, secure and efficient spaces. We integrate automation technologies, video surveillance, access control and IoT systems to optimize the operation and security of your facilities.',
        introPt: 'Transformamos edifícios convencionais em espaços inteligentes, seguros e eficientes. Integramos tecnologias de automação, videovigilância, controle de acesso e sistemas IoT para otimizar a operação e a segurança das suas instalações.',
        images: [
            '/portfolio/smart-pole-cameras.jpeg',
            '/portfolio/smart-access-control.jpeg'
        ],
        subcategories: [
            {
                icon: 'videocam',
                titleEs: 'CCTV & Videovigilancia IP',
                titleEn: 'CCTV & IP Video Surveillance',
                titlePt: 'CCTV & Videovigilância IP',
                descEs: 'Sistemas de videovigilancia de alta definición con analítica de video inteligente para proteger personas, bienes e instalaciones.',
                descEn: 'High-definition video surveillance systems with intelligent video analytics to protect people, assets and facilities.',
                descPt: 'Sistemas de videovigilância de alta definição com análise de vídeo inteligente para proteger pessoas, bens e instalações.',
                items: [
                    { es: 'Cámaras IP 4K con analítica de video (detección facial, conteo de personas)', en: '4K IP cameras with video analytics (facial detection, people counting)', pt: 'Câmeras IP 4K com análise de vídeo (detecção facial, contagem de pessoas)' },
                    { es: 'Grabadores NVR con almacenamiento en RAID y respaldo en nube', en: 'NVR recorders with RAID storage and cloud backup', pt: 'Gravadores NVR com armazenamento em RAID e backup na nuvem' },
                    { es: 'Monitoreo remoto 24/7 desde aplicación móvil', en: '24/7 remote monitoring from mobile app', pt: 'Monitoramento remoto 24/7 por aplicativo móvel' },
                    { es: 'Integración con sistemas de control de acceso y alarmas', en: 'Integration with access control and alarm systems', pt: 'Integração com sistemas de controle de acesso e alarmes' },
                    { es: 'Cámaras PTZ, térmicas y de visión nocturna', en: 'PTZ, thermal and night-vision cameras', pt: 'Câmeras PTZ, térmicas e de visão noturna' },
                ],
                tags: ['Hikvision', 'Dahua', '4K', 'Analítica IA'],
            },
            {
                icon: 'fingerprint',
                titleEs: 'Control de Acceso & Biometría',
                titleEn: 'Access Control & Biometrics',
                titlePt: 'Controle de Acesso & Biometria',
                descEs: 'Sistemas de control de acceso físico con biometría avanzada, credenciales RFID/NFC y gestión centralizada de perfiles y horarios.',
                descEn: 'Physical access control systems with advanced biometrics, RFID/NFC credentials and centralized profile and schedule management.',
                descPt: 'Sistemas de controle de acesso físico com biometria avançada, credenciais RFID/NFC e gestão centralizada de perfis e horários.',
                items: [
                    { es: 'Lectores biométricos de huella digital y reconocimiento facial', en: 'Fingerprint and facial recognition biometric readers', pt: 'Leitores biométricos de impressão digital e reconhecimento facial' },
                    { es: 'Torniquetes, puertas electromagnéticas y barreras vehiculares', en: 'Turnstiles, electromagnetic doors and vehicle barriers', pt: 'Catracas, portas eletromagnéticas e barreiras veiculares' },
                    { es: 'Gestión centralizada de perfiles y horarios de acceso', en: 'Centralized access profile and schedule management', pt: 'Gestão centralizada de perfis e horários de acesso' },
                    { es: 'Registro de eventos y reportes de asistencia', en: 'Event logging and attendance reports', pt: 'Registro de eventos e relatórios de presença' },
                    { es: 'Tarjetas RFID, NFC y credenciales móviles', en: 'RFID, NFC cards and mobile credentials', pt: 'Cartões RFID, NFC e credenciais móveis' },
                ],
                tags: ['ZKTeco', 'Suprema', 'RFID', 'NFC'],
            },
            {
                icon: 'sensors',
                titleEs: 'Automatización & IoT',
                titleEn: 'Automation & IoT',
                titlePt: 'Automação & IoT',
                descEs: 'Integración de sensores, actuadores y plataformas BMS para convertir sus instalaciones en edificios eficientes e inteligentes.',
                descEn: 'Integration of sensors, actuators and BMS platforms to turn your facilities into efficient, intelligent buildings.',
                descPt: 'Integração de sensores, atuadores e plataformas BMS para transformar suas instalações em edifícios eficientes e inteligentes.',
                items: [
                    { es: 'Sistemas de automatización de iluminación y HVAC inteligente', en: 'Smart lighting and HVAC automation systems', pt: 'Sistemas de automação de iluminação e HVAC inteligente' },
                    { es: 'Gestión energética con medición en tiempo real', en: 'Energy management with real-time monitoring', pt: 'Gestão energética com medição em tempo real' },
                    { es: 'Sensores de temperatura, humedad, CO₂ y ocupación', en: 'Temperature, humidity, CO₂ and occupancy sensors', pt: 'Sensores de temperatura, umidade, CO₂ e ocupação' },
                    { es: 'Plataforma de gestión unificada de edificio (BMS)', en: 'Unified building management platform (BMS)', pt: 'Plataforma de gestão unificada do edifício (BMS)' },
                    { es: 'Integración con asistentes de voz y paneles táctiles', en: 'Integration with voice assistants and touch panels', pt: 'Integração com assistentes de voz e painéis touch' },
                ],
                tags: ['BMS', 'IoT', 'HVAC', 'KNX'],
            },
            {
                icon: 'local_fire_department',
                titleEs: 'Sistemas de Alarma & Detección',
                titleEn: 'Alarm & Detection Systems',
                titlePt: 'Sistemas de Alarme & Detecção',
                descEs: 'Sistemas contra incendio, detección de gases y alarmas perimetrales bajo normativas NFPA 72, con monitoreo centralizado y extinción automática.',
                descEn: 'Fire, gas detection and perimeter alarm systems under NFPA 72 standards, with centralized monitoring and automatic suppression.',
                descPt: 'Sistemas contra incêndio, detecção de gases e alarmes perimetrais sob normas NFPA 72, com monitoramento centralizado e extinção automática.',
                items: [
                    { es: 'Sistemas de detección y alarma contra incendio (NFPA 72)', en: 'Fire detection and alarm systems (NFPA 72)', pt: 'Sistemas de detecção e alarme contra incêndio (NFPA 72)' },
                    { es: 'Detectores de humo, calor y gas con panel centralizado', en: 'Smoke, heat and gas detectors with centralized panel', pt: 'Detectores de fumaça, calor e gás com painel centralizado' },
                    { es: 'Sistemas de extinción automática FM-200 y rociadores', en: 'FM-200 automatic suppression and sprinkler systems', pt: 'Sistemas de extinção automática FM-200 e sprinklers' },
                    { es: 'Alarmas perimetrales con sensores de vibración y movimiento', en: 'Perimeter alarms with vibration and motion sensors', pt: 'Alarmes perimetrais com sensores de vibração e movimento' },
                ],
                tags: ['NFPA 72', 'FM-200', 'Notifier', 'Bosch'],
            },
        ],
        highlights: [
            { icon: 'videocam', labelEs: 'Videovigilancia 4K con IA', labelEn: '4K AI Video Surveillance', labelPt: 'Videovigilância 4K com IA' },
            { icon: 'fingerprint', labelEs: 'Biometría multi-modal', labelEn: 'Multi-modal biometrics', labelPt: 'Biometria multi-modal' },
            { icon: 'bolt', labelEs: 'Eficiencia energética IoT', labelEn: 'IoT energy efficiency', labelPt: 'Eficiência energética IoT' },
            { icon: 'integration_instructions', labelEs: 'Gestión BMS unificada', labelEn: 'Unified BMS management', labelPt: 'Gestão BMS unificada' },
        ],
    },

    // ─── SOPORTE ──────────────────────────────────────────────────────────────
    support: {
        id: 'support',
        introEs: 'Nos encargamos totalmente de la red de nuestros clientes. Mediante nuestras soluciones administradas contamos con esquemas de arrendamiento, cobro por puerto y cobro por AP, que incluyen el diseño, suministro, instalación y operación de la red, cumpliendo los SLAs que el cliente requiera.',
        introEn: 'We fully manage our clients\' networks. Through our managed solutions we offer leasing schemes, per-port and per-AP billing, including the design, supply, installation and operation of the network, meeting the SLAs the client requires.',
        introPt: 'Nos encarregamos totalmente da rede dos nossos clientes. Por meio das nossas soluções gerenciadas, oferecemos esquemas de arrendamento, cobrança por porta e por AP, incluindo o design, fornecimento, instalação e operação da rede, cumprindo os SLAs que o cliente exigir.',
        subcategories: [
            {
                icon: 'support_agent',
                titleEs: 'Soporte Técnico',
                titleEn: 'Technical Support',
                titlePt: 'Suporte Técnico',
                descEs: 'Atención en sitio y remota con SLAs contractuales, ticketing profesional, capacitación al usuario y gestión de garantías con fabricantes.',
                descEn: 'On-site and remote service with contractual SLAs, professional ticketing, user training and warranty management with manufacturers.',
                descPt: 'Atendimento no local e remoto com SLAs contratuais, ticketing profissional, treinamento ao usuário e gestão de garantias com fabricantes.',
                items: [
                    { es: 'Soporte técnico en sitio con tiempos de respuesta SLA garantizados', en: 'On-site technical support with guaranteed SLA response times', pt: 'Suporte técnico no local com tempos de resposta SLA garantidos' },
                    { es: 'Soporte técnico remoto via ticketing y sesiones de escritorio', en: 'Remote technical support via ticketing and desktop sessions', pt: 'Suporte técnico remoto via ticketing e sessões de desktop' },
                    { es: 'Soporte por evento, hora o tiempo definido según contrato', en: 'Event, hourly or defined-time support per contract', pt: 'Suporte por evento, hora ou tempo definido por contrato' },
                    { es: 'Capacitación sobre el producto y transferencia de conocimiento', en: 'Product training and knowledge transfer', pt: 'Treinamento sobre o produto e transferência de conhecimento' },
                    { es: 'Gestión de garantías y RMA con fabricantes', en: 'Warranty and RMA management with manufacturers', pt: 'Gestão de garantias e RMA com fabricantes' },
                ],
                tags: ['SLA', 'On-site', 'Remoto', 'Help Desk'],
            },
            {
                icon: 'monitoring',
                titleEs: 'Administración de Red (NOC)',
                titleEn: 'Network Management (NOC)',
                titlePt: 'Administração de Rede (NOC)',
                descEs: 'Centro de Operaciones de Red proactivo que monitorea, gestiona y optimiza su infraestructura las 24 horas, los 7 días de la semana.',
                descEn: 'Proactive Network Operations Center that monitors, manages and optimizes your infrastructure 24 hours a day, 7 days a week.',
                descPt: 'Centro de Operações de Rede proativo que monitora, gerencia e otimiza sua infraestrutura 24 horas por dia, 7 dias por semana.',
                items: [
                    { es: 'Monitoreo proactivo 24×7×365 de dispositivos y servicios críticos', en: 'Proactive 24×7×365 monitoring of devices and critical services', pt: 'Monitoramento proativo 24×7×365 de dispositivos e serviços críticos' },
                    { es: 'Gestión completa de la red: diseño, suministro, instalación y operación', en: 'Complete network management: design, supply, installation and operation', pt: 'Gestão completa da rede: design, fornecimento, instalação e operação' },
                    { es: 'Esquemas flexibles: cobro por puerto, por AP o arrendamiento', en: 'Flexible schemes: per-port, per-AP billing or leasing', pt: 'Esquemas flexíveis: cobrança por porta, por AP ou arrendamento' },
                    { es: 'Reportes mensuales de disponibilidad, incidentes y capacidad', en: 'Monthly availability, incident and capacity reports', pt: 'Relatórios mensais de disponibilidade, incidentes e capacidade' },
                    { es: 'Gestión de cambios y actualizaciones de firmware planificadas', en: 'Planned change management and firmware updates', pt: 'Gestão de mudanças e atualizações de firmware planejadas' },
                ],
                tags: ['NOC', '24/7', 'ITSM', 'ITIL v4'],
            },
            {
                icon: 'backup',
                titleEs: 'Backup & Continuidad del Negocio',
                titleEn: 'Backup & Business Continuity',
                titlePt: 'Backup & Continuidade de Negócios',
                descEs: 'Estrategias de respaldo y recuperación ante desastres con RPO/RTO definidos para garantizar la continuidad operativa de su empresa.',
                descEn: 'Backup and disaster recovery strategies with defined RPO/RTO to ensure business continuity.',
                descPt: 'Estratégias de backup e recuperação de desastres com RPO/RTO definidos para garantir a continuidade operacional da empresa.',
                items: [
                    { es: 'Estrategia de backup 3-2-1 con retención configurable', en: '3-2-1 backup strategy with configurable retention', pt: 'Estratégia de backup 3-2-1 com retenção configurável' },
                    { es: 'Planes de recuperación ante desastres (DRP) con RPO/RTO definido', en: 'Disaster recovery plans (DRP) with defined RPO/RTO', pt: 'Planos de recuperação de desastres (DRP) com RPO/RTO definido' },
                    { es: 'Replicación de datos en sitio secundario o nube', en: 'Data replication to secondary site or cloud', pt: 'Replicação de dados para site secundário ou nuvem' },
                    { es: 'Pruebas periódicas de restauración para validar integridad', en: 'Periodic restoration testing to validate integrity', pt: 'Testes periódicos de restauração para validar integridade' },
                ],
                tags: ['DRP', 'RTO/RPO', 'Veeam', 'Backup Cloud'],
            },
            {
                icon: 'cloud',
                titleEs: 'Cloud & Servicios Administrados',
                titleEn: 'Cloud & Managed Services',
                titlePt: 'Nuvem & Serviços Gerenciados',
                descEs: 'Migración, administración y optimización de recursos en AWS, Azure y Google Cloud, incluyendo herramientas de colaboración Microsoft 365.',
                descEn: 'Migration, management and optimization of resources on AWS, Azure and Google Cloud, including Microsoft 365 collaboration tools.',
                descPt: 'Migração, administração e otimização de recursos na AWS, Azure e Google Cloud, incluindo ferramentas de colaboração Microsoft 365.',
                items: [
                    { es: 'Migración a la nube: AWS, Azure y Google Cloud', en: 'Cloud migration: AWS, Azure and Google Cloud', pt: 'Migração para a nuvem: AWS, Azure e Google Cloud' },
                    { es: 'Administración de instancias, almacenamiento y costos en nube', en: 'Cloud instance, storage and cost management', pt: 'Administração de instâncias, armazenamento e custos na nuvem' },
                    { es: 'Hybrid Cloud: integración on-premise + nube pública', en: 'Hybrid Cloud: on-premise + public cloud integration', pt: 'Hybrid Cloud: integração on-premise + nuvem pública' },
                    { es: 'Office 365, Exchange y herramientas de colaboración (Teams, SharePoint)', en: 'Office 365, Exchange and collaboration tools (Teams, SharePoint)', pt: 'Office 365, Exchange e ferramentas de colaboração (Teams, SharePoint)' },
                ],
                tags: ['AWS', 'Azure', 'Google Cloud', 'Office 365'],
            },
        ],
        highlights: [
            { icon: 'support_agent', labelEs: 'Mesa de ayuda especializada', labelEn: 'Specialized help desk', labelPt: 'Help desk especializado' },
            { icon: 'schedule', labelEs: 'SLA garantizado por contrato', labelEn: 'Contract-guaranteed SLA', labelPt: 'SLA garantido por contrato' },
            { icon: 'analytics', labelEs: 'Reportes mensuales detallados', labelEn: 'Detailed monthly reports', labelPt: 'Relatórios mensais detalhados' },
            { icon: 'trending_up', labelEs: 'Mejora continua ITIL v4', labelEn: 'ITIL v4 continuous improvement', labelPt: 'Melhoria contínua ITIL v4' },
        ],
    },

    // ─── DEVELOPMENT ──────────────────────────────────────────────────────────
    development: {
        id: 'development',
        introEs: 'Desarrollamos soluciones de software a la medida de las necesidades de su negocio. Desde aplicaciones web y móviles hasta sistemas empresariales complejos, nuestro equipo utiliza metodologías ágiles y las tecnologías más modernas del mercado para entregar productos de alta calidad.',
        introEn: 'We develop software solutions tailored to your business needs. From web and mobile applications to complex enterprise systems, our team uses agile methodologies and the most modern technologies to deliver high-quality products.',
        introPt: 'Desenvolvemos soluções de software sob medida para as necessidades do seu negócio. De aplicações web e mobile a sistemas empresariais complexos, nossa equipe utiliza metodologias ágeis e as tecnologias mais modernas do mercado para entregar produtos de alta qualidade.',
        subcategories: [
            {
                icon: 'code',
                titleEs: 'Desarrollo Web & APIs',
                titleEn: 'Web Development & APIs',
                titlePt: 'Desenvolvimento Web & APIs',
                descEs: 'Aplicaciones web modernas y APIs escalables bajo buenas prácticas de arquitectura, seguridad y rendimiento para cualquier industria.',
                descEn: 'Modern web applications and scalable APIs following best practices in architecture, security and performance for any industry.',
                descPt: 'Aplicações web modernas e APIs escaláveis seguindo boas práticas de arquitetura, segurança e desempenho para qualquer setor.',
                items: [
                    { es: 'Aplicaciones web progresivas (PWA) con React, Vue y Angular', en: 'Progressive web apps (PWA) with React, Vue and Angular', pt: 'Aplicações web progressivas (PWA) com React, Vue e Angular' },
                    { es: 'APIs RESTful y GraphQL escalables y documentadas', en: 'Scalable, documented RESTful and GraphQL APIs', pt: 'APIs RESTful e GraphQL escaláveis e documentadas' },
                    { es: 'Backends con Node.js, Python (Django/FastAPI) y .NET', en: 'Backends with Node.js, Python (Django/FastAPI) and .NET', pt: 'Backends com Node.js, Python (Django/FastAPI) e .NET' },
                    { es: 'Portales corporativos, intranets y plataformas B2B', en: 'Corporate portals, intranets and B2B platforms', pt: 'Portais corporativos, intranets e plataformas B2B' },
                ],
                tags: ['React', 'Node.js', 'Python', 'REST API'],
            },
            {
                icon: 'smartphone',
                titleEs: 'Desarrollo Móvil',
                titleEn: 'Mobile Development',
                titlePt: 'Desenvolvimento Mobile',
                descEs: 'Apps nativas y multiplataforma para iOS y Android con experiencias de usuario intuitivas, publicadas con pipelines CI/CD.',
                descEn: 'Native and cross-platform apps for iOS and Android with intuitive user experiences, published with CI/CD pipelines.',
                descPt: 'Apps nativas e multiplataforma para iOS e Android com experiências de usuário intuitivas, publicadas com pipelines CI/CD.',
                items: [
                    { es: 'Aplicaciones iOS y Android nativas y multiplataforma (React Native, Flutter)', en: 'Native and cross-platform iOS & Android apps (React Native, Flutter)', pt: 'Aplicações iOS e Android nativas e multiplataforma (React Native, Flutter)' },
                    { es: 'UX/UI centrado en el usuario con prototipado en Figma', en: 'User-centered UX/UI with Figma prototyping', pt: 'UX/UI centrado no usuário com prototipagem em Figma' },
                    { es: 'Integración con APIs, pasarelas de pago y notificaciones push', en: 'Integration with APIs, payment gateways and push notifications', pt: 'Integração com APIs, gateways de pagamento e notificações push' },
                    { es: 'Publicación en App Store y Google Play con CI/CD', en: 'App Store and Google Play publishing with CI/CD', pt: 'Publicação na App Store e Google Play com CI/CD' },
                ],
                tags: ['React Native', 'Flutter', 'iOS', 'Android'],
            },
            {
                icon: 'storage',
                titleEs: 'Sistemas Empresariales & ERP',
                titleEn: 'Enterprise Systems & ERP',
                titlePt: 'Sistemas Empresariais & ERP',
                descEs: 'Desarrollo e integración de ERP, CRM y soluciones de BI a medida, con automatización de procesos y dashboards ejecutivos en tiempo real.',
                descEn: 'Custom ERP, CRM and BI development and integration with process automation and real-time executive dashboards.',
                descPt: 'Desenvolvimento e integração de ERP, CRM e soluções de BI sob medida, com automação de processos e dashboards executivos em tempo real.',
                items: [
                    { es: 'Desarrollo e integración de sistemas ERP y CRM a medida', en: 'Custom ERP and CRM system development and integration', pt: 'Desenvolvimento e integração de sistemas ERP e CRM sob medida' },
                    { es: 'Migración y modernización de sistemas legados', en: 'Legacy system migration and modernization', pt: 'Migração e modernização de sistemas legados' },
                    { es: 'Automatización de procesos de negocio (BPA/RPA)', en: 'Business process automation (BPA/RPA)', pt: 'Automação de processos de negócios (BPA/RPA)' },
                    { es: 'Dashboards y Business Intelligence con Power BI y Tableau', en: 'Dashboards and Business Intelligence with Power BI and Tableau', pt: 'Dashboards e Business Intelligence com Power BI e Tableau' },
                ],
                tags: ['ERP', 'CRM', 'Power BI', 'RPA'],
            },
            {
                icon: 'deployed_code',
                titleEs: 'DevOps & Infraestructura Cloud',
                titleEn: 'DevOps & Cloud Infrastructure',
                titlePt: 'DevOps & Infraestrutura Cloud',
                descEs: 'Automatización del ciclo de vida del software con pipelines CI/CD, contenedores, IaC y monitoreo de infraestructura en tiempo real.',
                descEn: 'Software lifecycle automation with CI/CD pipelines, containers, IaC and real-time infrastructure monitoring.',
                descPt: 'Automação do ciclo de vida do software com pipelines CI/CD, contêineres, IaC e monitoramento de infraestrutura em tempo real.',
                items: [
                    { es: 'Pipelines CI/CD con GitHub Actions, GitLab CI y Jenkins', en: 'CI/CD pipelines with GitHub Actions, GitLab CI and Jenkins', pt: 'Pipelines CI/CD com GitHub Actions, GitLab CI e Jenkins' },
                    { es: 'Contenedorización con Docker y orquestación con Kubernetes', en: 'Containerization with Docker and orchestration with Kubernetes', pt: 'Containerização com Docker e orquestração com Kubernetes' },
                    { es: 'Infraestructura como código (IaC) con Terraform y Ansible', en: 'Infrastructure as Code (IaC) with Terraform and Ansible', pt: 'Infraestrutura como Código (IaC) com Terraform e Ansible' },
                    { es: 'Monitoreo con Grafana, Prometheus y alertas automáticas', en: 'Monitoring with Grafana, Prometheus and automatic alerts', pt: 'Monitoramento com Grafana, Prometheus e alertas automáticos' },
                ],
                tags: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
            },
        ],
        highlights: [
            { icon: 'sprint', labelEs: 'Metodología Agile SCRUM', labelEn: 'Agile SCRUM methodology', labelPt: 'Metodologia Agile SCRUM' },
            { icon: 'code_blocks', labelEs: 'Clean code y buenas prácticas', labelEn: 'Clean code & best practices', labelPt: 'Clean code e boas práticas' },
            { icon: 'bug_report', labelEs: 'QA y pruebas automatizadas', labelEn: 'QA and automated testing', labelPt: 'QA e testes automatizados' },
            { icon: 'rocket_launch', labelEs: 'Entrega continua (CI/CD)', labelEn: 'Continuous delivery (CI/CD)', labelPt: 'Entrega contínua (CI/CD)' },
        ],
    },
};
