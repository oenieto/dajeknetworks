export interface Article {
  id: string;
  slug: string;
  category: string;
  date: string;
  readTime: number; // minutos
  image: string;
  title: { es: string; en: string; pt: string };
  excerpt: { es: string; en: string; pt: string };
  content: { es: string; en: string; pt: string };
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "ciberseguridad-latam-2024",
    category: "Ciberseguridad",
    date: "15 Mar, 2025",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: {
      es: "El Futuro de la Ciberseguridad en LATAM",
      en: "The Future of Cybersecurity in LATAM",
      pt: "O Futuro da Cibersegurança na LATAM",
    },
    excerpt: {
      es: "Analizamos las tendencias emergentes en amenazas digitales y cómo las empresas pueden prepararse para enfrentar el panorama de seguridad de 2025.",
      en: "We analyze the emerging trends in digital threats and how companies can prepare to face the 2025 security landscape.",
      pt: "Analisamos as tendências emergentes em ameaças digitais e como as empresas podem se preparar para o cenário de segurança de 2025.",
    },
    content: {
      es: `El panorama de la ciberseguridad en América Latina ha evolucionado drásticamente en los últimos años. Los ataques de ransomware, phishing avanzado y amenazas persistentes avanzadas (APT) se han multiplicado, afectando tanto a grandes corporativos como a PYMEs que antes consideraban no ser un objetivo.

## Tendencias principales para 2025

**1. Ransomware como servicio (RaaS)**
Los grupos criminales ahora operan con modelos de negocio sofisticados, ofreciendo su malware como servicio a atacantes sin experiencia técnica. En LATAM, sectores como manufactura, salud y gobierno han sido los más afectados.

**2. Ataques a la cadena de suministro**
Un vector cada vez más utilizado es comprometer a proveedores de software o servicios confiables para, a través de ellos, infectar a cientos de organizaciones simultáneamente.

**3. Inteligencia Artificial ofensiva**
Los atacantes ya utilizan IA para generar correos de phishing hiperrealistas, identificar vulnerabilidades de forma automatizada y evadir sistemas de detección tradicionales.

## Cómo proteger su organización

La defensa efectiva requiere un enfoque multicapa:

- **Zero Trust Architecture**: nunca confiar implícitamente en ningún usuario o dispositivo, validar continuamente.
- **EDR/XDR**: soluciones de detección y respuesta en endpoints que van más allá del antivirus tradicional.
- **Capacitación continua**: el factor humano sigue siendo el eslabón más débil; los programas de concientización reducen hasta un 70% los incidentes por phishing.
- **Plan de respuesta a incidentes**: tener un playbook documentado y probado antes de necesitarlo.

En Dajek Network, realizamos auditorías de seguridad integrales, simulaciones de ataque (red team) y diseño de arquitecturas Zero Trust adaptadas al contexto de empresas latinoamericanas.`,
      en: `The cybersecurity landscape in Latin America has evolved dramatically in recent years. Ransomware attacks, advanced phishing, and advanced persistent threats (APT) have multiplied, affecting both large corporations and SMEs that previously considered themselves non-targets.

## Key trends for 2025

**1. Ransomware as a Service (RaaS)**
Criminal groups now operate with sophisticated business models, offering their malware as a service to attackers without technical experience. In LATAM, sectors such as manufacturing, healthcare, and government have been the most affected.

**2. Supply chain attacks**
An increasingly used vector is compromising trusted software or service providers to, through them, infect hundreds of organizations simultaneously.

**3. Offensive Artificial Intelligence**
Attackers already use AI to generate hyper-realistic phishing emails, identify vulnerabilities automatically, and evade traditional detection systems.

## How to protect your organization

Effective defense requires a multi-layer approach:

- **Zero Trust Architecture**: never implicitly trust any user or device, continuously validate.
- **EDR/XDR**: endpoint detection and response solutions that go beyond traditional antivirus.
- **Continuous training**: the human factor remains the weakest link; awareness programs reduce phishing incidents by up to 70%.
- **Incident response plan**: have a documented and tested playbook before you need it.

At Dajek Network, we conduct comprehensive security audits, attack simulations (red team), and design Zero Trust architectures adapted to the context of Latin American companies.`,
      pt: `O cenário de cibersegurança na América Latina evoluiu drasticamente nos últimos anos. Ataques de ransomware, phishing avançado e ameaças persistentes avançadas (APT) se multiplicaram, afetando tanto grandes corporações quanto PMEs que antes se consideravam não ser um alvo.

## Principais tendências para 2025

**1. Ransomware como serviço (RaaS)**
Grupos criminosos agora operam com modelos de negócios sofisticados, oferecendo seu malware como serviço a atacantes sem experiência técnica. Na LATAM, setores como manufatura, saúde e governo foram os mais afetados.

**2. Ataques à cadeia de suprimentos**
Um vetor cada vez mais utilizado é comprometer fornecedores de software ou serviços confiáveis para, através deles, infectar centenas de organizações simultaneamente.

**3. Inteligência Artificial ofensiva**
Os atacantes já usam IA para gerar e-mails de phishing hiper-realistas, identificar vulnerabilidades de forma automatizada e evadir sistemas de detecção tradicionais.

## Como proteger sua organização

A defesa eficaz requer uma abordagem em múltiplas camadas:

- **Arquitetura Zero Trust**: nunca confiar implicitamente em nenhum usuário ou dispositivo, validar continuamente.
- **EDR/XDR**: soluções de detecção e resposta em endpoints que vão além do antivírus tradicional.
- **Treinamento contínuo**: o fator humano continua sendo o elo mais fraco; programas de conscientização reduzem até 70% os incidentes por phishing.
- **Plano de resposta a incidentes**: ter um playbook documentado e testado antes de precisar dele.

Na Dajek Network, realizamos auditorias de segurança abrangentes, simulações de ataque (red team) e design de arquiteturas Zero Trust adaptadas ao contexto de empresas latino-americanas.`,
    },
  },
  {
    id: "2",
    slug: "5g-iot-industrial",
    category: "Networking",
    date: "28 Feb, 2025",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: {
      es: "5G y el Impacto en IoT Industrial",
      en: "5G and Its Impact on Industrial IoT",
      pt: "5G e o Impacto na IoT Industrial",
    },
    excerpt: {
      es: "Cómo la conectividad de alta velocidad está revolucionando la manufactura, la logística y los procesos industriales en toda la región.",
      en: "How high-speed connectivity is revolutionizing manufacturing, logistics and industrial processes throughout the region.",
      pt: "Como a conectividade de alta velocidade está revolucionando a manufatura, a logística e os processos industriais em toda a região.",
    },
    content: {
      es: `La llegada del 5G a México y LATAM no es solo una actualización de velocidad: representa un cambio de paradigma en cómo las industrias conectan, monitorizan y automatizan sus operaciones.

## ¿Qué cambia con 5G en entornos industriales?

La tecnología 5G ofrece tres ventajas fundamentales sobre sus predecesoras:

**Latencia ultra-baja (<1ms)**: Fundamental para el control en tiempo real de maquinaria, robots colaborativos (cobots) y sistemas de seguridad crítica en plantas de manufactura.

**Densidad de conexión masiva**: Hasta 1 millón de dispositivos por km². Hace viable el despliegue de sensores IoT en toda una planta sin saturar la red.

**Velocidades simétricas**: Tanto descarga como subida de hasta 10 Gbps, clave para la transmisión de video 4K en tiempo real para inspección de calidad y mantenimiento predictivo.

## Casos de uso que ya son realidad

- **Mantenimiento predictivo**: Sensores vibracionales con conectividad 5G envían datos continuos a plataformas de IA que predicen fallos antes de que ocurran.
- **Almacenes autónomos**: Robots AGV coordinados por redes 5G privadas que operan sin interrupciones y con latencia milimétrica.
- **Inspección visual automatizada**: Cámaras de alta resolución conectadas por 5G alimentan sistemas de visión artificial que detectan defectos de manufactura al 99.7% de precisión.

En Dajek Network diseñamos e implementamos redes 5G privadas y soluciones de conectividad industrial adaptadas a las necesidades operativas de cada cliente.`,
      en: `The arrival of 5G in Mexico and LATAM is not just a speed upgrade: it represents a paradigm shift in how industries connect, monitor and automate their operations.

## What changes with 5G in industrial environments?

5G technology offers three fundamental advantages over its predecessors:

**Ultra-low latency (<1ms)**: Essential for real-time control of machinery, collaborative robots (cobots) and critical safety systems in manufacturing plants.

**Massive connection density**: Up to 1 million devices per km². Makes it viable to deploy IoT sensors throughout a plant without saturating the network.

**Symmetric speeds**: Both download and upload up to 10 Gbps, key for real-time 4K video streaming for quality inspection and predictive maintenance.

## Use cases that are already a reality

- **Predictive maintenance**: Vibrational sensors with 5G connectivity send continuous data to AI platforms that predict failures before they occur.
- **Autonomous warehouses**: AGV robots coordinated by private 5G networks that operate without interruptions and with millisecond latency.
- **Automated visual inspection**: High-resolution cameras connected by 5G feed artificial vision systems that detect manufacturing defects at 99.7% accuracy.

At Dajek Network we design and implement private 5G networks and industrial connectivity solutions adapted to the operational needs of each client.`,
      pt: `A chegada do 5G no México e na LATAM não é apenas uma atualização de velocidade: representa uma mudança de paradigma em como as indústrias conectam, monitoram e automatizam suas operações.

## O que muda com o 5G em ambientes industriais?

A tecnologia 5G oferece três vantagens fundamentais sobre suas predecessoras:

**Latência ultra-baixa (<1ms)**: Fundamental para o controle em tempo real de máquinas, robôs colaborativos (cobots) e sistemas de segurança crítica em plantas de manufatura.

**Densidade de conexão massiva**: Até 1 milhão de dispositivos por km². Torna viável o deployment de sensores IoT em toda uma planta sem saturar a rede.

**Velocidades simétricas**: Tanto download quanto upload de até 10 Gbps, chave para transmissão de vídeo 4K em tempo real para inspeção de qualidade e manutenção preditiva.

## Casos de uso que já são realidade

- **Manutenção preditiva**: Sensores vibracionais com conectividade 5G enviam dados contínuos para plataformas de IA que preveem falhas antes que ocorram.
- **Armazéns autônomos**: Robôs AGV coordenados por redes 5G privadas que operam sem interrupções e com latência milimétrica.
- **Inspeção visual automatizada**: Câmeras de alta resolução conectadas por 5G alimentam sistemas de visão artificial que detectam defeitos de manufatura com 99,7% de precisão.

Na Dajek Network projetamos e implementamos redes 5G privadas e soluções de conectividade industrial adaptadas às necessidades operacionais de cada cliente.`,
    },
  },
  {
    id: "3",
    slug: "migracion-nube-estrategias",
    category: "Cloud",
    date: "10 Ene, 2025",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    title: {
      es: "Migración a la Nube: Estrategias Exitosas",
      en: "Cloud Migration: Successful Strategies",
      pt: "Migração para a Nuvem: Estratégias de Sucesso",
    },
    excerpt: {
      es: "Guía paso a paso para minimizar riesgos y maximizar el ROI durante la transición digital de su infraestructura hacia la nube.",
      en: "Step-by-step guide to minimize risks and maximize ROI during the digital transition of your infrastructure to the cloud.",
      pt: "Guia passo a passo para minimizar riscos e maximizar o ROI durante a transição digital da sua infraestrutura para a nuvem.",
    },
    content: {
      es: `La migración a la nube sigue siendo uno de los proyectos de transformación digital más complejos y de mayor impacto para cualquier organización. Un estudio de Gartner estima que el 60% de las migraciones superan en costo y tiempo sus estimaciones originales. Sin embargo, con la metodología correcta, el proceso puede ser predecible y exitoso.

## Las 6R de la migración

El framework más utilizado para categorizar cargas de trabajo es el modelo de las 6R:

**Rehost (Lift & Shift)**: Mover la aplicación tal cual a la nube, sin modificaciones. Rápido pero no optimizado para la nube.

**Replatform**: Pequeñas optimizaciones durante la migración (ej. migrar de MySQL on-premise a RDS). Equilibrio entre velocidad y optimización.

**Refactor / Re-architect**: Rediseñar la aplicación para aprovechar nativamente la nube (microservicios, serverless). Mayor esfuerzo, mayor beneficio a largo plazo.

**Repurchase**: Reemplazar por un SaaS equivalente (ej. migrar un ERP custom a SAP Cloud).

**Retire**: Identificar aplicaciones que ya no se necesitan y descontinuarlas.

**Retain**: Mantener on-premise por razones regulatorias o técnicas (latencia, datos sensibles).

## Factores críticos de éxito

1. **Inventario exhaustivo**: Documentar todas las dependencias antes de mover cualquier cosa.
2. **Migración por fases**: Comenzar con cargas de trabajo de baja criticidad para ganar experiencia.
3. **Seguridad desde el diseño**: Implementar IAM, cifrado en tránsito y reposo, y grupos de seguridad desde el primer día.
4. **Monitoreo de costos**: Las sorpresas en la factura cloud son la principal queja post-migración. Implementar presupuestos y alertas desde el inicio.
5. **Plan de rollback**: Siempre tener un plan B documentado.

En Dajek Network acompañamos todo el ciclo de migración: desde el assessment inicial hasta la optimización post-migración, garantizando continuidad operativa y cumplimiento regulatorio.`,
      en: `Cloud migration remains one of the most complex and highest-impact digital transformation projects for any organization. A Gartner study estimates that 60% of migrations exceed their original cost and time estimates. However, with the right methodology, the process can be predictable and successful.

## The 6R's of migration

The most widely used framework for categorizing workloads is the 6R model:

**Rehost (Lift & Shift)**: Move the application as-is to the cloud, without modifications. Fast but not cloud-optimized.

**Replatform**: Small optimizations during migration (e.g. migrating from on-premise MySQL to RDS). Balance between speed and optimization.

**Refactor / Re-architect**: Redesign the application to natively leverage the cloud (microservices, serverless). More effort, greater long-term benefit.

**Repurchase**: Replace with an equivalent SaaS (e.g. migrating a custom ERP to SAP Cloud).

**Retire**: Identify applications that are no longer needed and discontinue them.

**Retain**: Keep on-premise for regulatory or technical reasons (latency, sensitive data).

## Critical success factors

1. **Exhaustive inventory**: Document all dependencies before moving anything.
2. **Phased migration**: Start with low-criticality workloads to gain experience.
3. **Security by design**: Implement IAM, encryption in transit and at rest, and security groups from day one.
4. **Cost monitoring**: Cloud bill surprises are the main post-migration complaint. Implement budgets and alerts from the start.
5. **Rollback plan**: Always have a documented Plan B.

At Dajek Network we accompany the entire migration cycle: from the initial assessment to post-migration optimization, guaranteeing operational continuity and regulatory compliance.`,
      pt: `A migração para a nuvem continua sendo um dos projetos de transformação digital mais complexos e de maior impacto para qualquer organização. Um estudo do Gartner estima que 60% das migrações superam suas estimativas originais de custo e tempo. No entanto, com a metodologia correta, o processo pode ser previsível e bem-sucedido.

## Os 6R da migração

O framework mais utilizado para categorizar cargas de trabalho é o modelo dos 6R:

**Rehost (Lift & Shift)**: Mover o aplicativo como está para a nuvem, sem modificações. Rápido, mas não otimizado para a nuvem.

**Replatform**: Pequenas otimizações durante a migração (ex: migrar do MySQL on-premise para RDS). Equilíbrio entre velocidade e otimização.

**Refactor / Re-architect**: Redesenhar o aplicativo para aproveitar nativamente a nuvem (microsserviços, serverless). Maior esforço, maior benefício a longo prazo.

**Repurchase**: Substituir por um SaaS equivalente (ex: migrar um ERP personalizado para SAP Cloud).

**Retire**: Identificar aplicativos que não são mais necessários e descontinuá-los.

**Retain**: Manter on-premise por razões regulatórias ou técnicas (latência, dados sensíveis).

## Fatores críticos de sucesso

1. **Inventário exaustivo**: Documentar todas as dependências antes de mover qualquer coisa.
2. **Migração por fases**: Começar com cargas de trabalho de baixa criticidade para ganhar experiência.
3. **Segurança desde o design**: Implementar IAM, criptografia em trânsito e em repouso, e grupos de segurança desde o primeiro dia.
4. **Monitoramento de custos**: Surpresas na fatura cloud são a principal reclamação pós-migração. Implementar orçamentos e alertas desde o início.
5. **Plano de rollback**: Sempre ter um Plano B documentado.

Na Dajek Network acompanhamos todo o ciclo de migração: desde a avaliação inicial até a otimização pós-migração, garantindo continuidade operacional e conformidade regulatória.`,
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
