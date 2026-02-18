export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  overview: string;
  challenge: string;
  results: string;
  tech: string[];
  image: string;
  screenshots: string[];
  link?: string;
  github?: string;
  hasDemo: boolean;
  client: string;
  duration: string;
  role: string;
  icon: string;
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: "darmax-gestion",
    title: "Ecosistema Darmax: Didi Food para Purificadoras",
    category: "Empresarial",
    date: "Noviembre 2025 - Actualidad",
    overview: "Un ecosistema digital completo concebido como el 'Didi Food' de las purificadoras. Diseñé e implementé un sistema multi-rol con 4 accesos independientes: Cliente (pedidos), Mostrador (POS), Repartidor (logística) y Administrador (gestión total).",
    challenge: "El mayor reto fue diseñar una arquitectura multi-rol sincronizada y una interfaz de punto de venta (POS) optimizada para la velocidad, implementando una dinámica de arrastrar y soltar para agilizar el despacho de garrafones en momentos de alta demanda.",
    results: "Centralización absoluta del negocio: desde el control de RH y finanzas hasta la logística de última milla, logrando una interfaz tan intuitiva que reduce drásticamente el tiempo de capacitación del personal.",
    tech: ["React", "Node.js", "MySQL", "Google Maps Integration", "Postal Code API", "Custom UX Logic"],
    image: "/img/proyectos/gestion.png",
    screenshots: ["/img/proyectos/gestion.png"],
    link: "https://ventas-darmax-gestion.vercel.app",
    hasDemo: true,
    client: "Soluciones Estratégicas MaxDar",
    duration: "4 Meses (En curso)",
    role: "Fullstack Developer",
    icon: "dashboard",
    features: [
      "Arquitectura multi-rol: Cliente, Mostrador, Repartidor y Admin",
      "Interfaz POS optimizada para despacho rápido",
      "Gestión administrativa: RH, Finanzas e Inventarios",
      "Logística de reparto con geolocalización",
      "Cotizadores dinámicos integrados"
    ]
  },
  {
    id: "darmax-agua",
    title: "Plataforma de Ingeniería & Vending Darmax",
    category: "Empresarial",
    date: "Enero 2024",
    overview: "Plataforma integral para la comercialización de equipos de purificación residencial e industrial (hoteles, escuelas, empresas) y el desarrollo del modelo de negocio Vending. Implementé un sistema que permite a los usuarios configurar paquetes de vending de agua y productos a su medida.",
    challenge: "El mayor reto fue desarrollar la lógica del backend para gestionar un catálogo técnico complejo y un configurador dinámico de paquetes de inversión, asegurando que la data fluya correctamente hacia el sistema de gestión interna.",
    results: "Un motor de ventas y captación B2B escalable con dominio propio, que procesa configuraciones personalizadas y pedidos de materiales industriales, convirtiéndose en el núcleo de ventas de la empresa.",
    tech: ["Node.js", "PostgreSQL", "React", "Next.js", "Stripe", "Skydropx"],
    image: "/img/proyectos/agua.png",
    screenshots: ["/img/proyectos/agua.png"],
    link: "https://darmaxagua.com.mx",
    hasDemo: true,
    client: "Soluciones Estratégicas MaxDar",
    duration: "4 Meses",
    role: "Backend-heavy Fullstack Developer",
    icon: "water_drop",
    features: [
      "Configurador dinámico de paquetes Vending",
      "E-commerce de equipos industriales y residenciales",
      "Lógica de negocio compleja para cotizaciones B2B",
      "Integración de pasarela de pagos y logística",
      "Arquitectura de base de datos para catálogos técnicos"
    ]
  },
  {
    id: "mi-empeno",
    title: "Portal Empresarial Mi Empeño",
    category: "Empresarial",
    date: "Octubre 2024 - Octubre 2025",
    overview: "Optimización y desarrollo de funcionalidades críticas para el portal corporativo partners.miempeno.com. Lideré la integración masiva de productos con Mercado Libre y la sincronización de datos entre ecosistemas distribuidos.",
    challenge: "El desafío principal fue optimizar la velocidad de respuesta del portal y garantizar la integridad de los datos al conectar el nuevo core en NestJS con un sistema externo en Laravel, cumpliendo estrictamente con los flujos de la API de Mercado Libre.",
    results: "Implementación exitosa del módulo de ventas en marketplace, mejora notable en el performance del sitio y una arquitectura de servicios más estable mediante la resolución de deuda técnica y bugs críticos.",
    tech: ["Next.js", "NestJS", "Laravel API", "Mercado Libre API", "TypeScript", "PostgreSQL"],
    image: "/img/proyectos/miempeno.png",
    screenshots: ["/img/proyectos/miempeno.png"],
    link: "https://partners.miempeno.com",
    hasDemo: true,
    client: "Mi Empeño",
    duration: "12 Meses",
    role: "Fullstack Developer",
    icon: "storefront",
    features: [
      "Integración masiva con API de Mercado Libre",
      "Conexión de endpoints NestJS con Laravel",
      "Optimización de velocidad y performance",
      "Desarrollo de nuevas funcionalidades en Next.js",
      "Corrección de bugs y debugging avanzado"
    ]
  },
  {
    id: "ecommerce-vinos",
    title: "Ecommerce de Vinos",
    category: "Personal",
    date: "2024",
    overview: "Sistema de venta en línea con carrito de compras y panel de administración para la gestión de productos vinícolas.",
    challenge: "Implementar toda la lógica de negocio (carrito, inventario, auth) utilizando PHP nativo para profundizar en los fundamentos del desarrollo web.",
    results: "Un sistema funcional que demuestra el dominio de las bases de datos relacionales y la lógica de negocio completa sin depender de frameworks pesados.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    image: "/img/proyectos/vinos.png",
    screenshots: ["/img/proyectos/vinos.png"],
    hasDemo: false,
    client: "Proyecto Académico",
    duration: "2 Meses",
    role: "Fullstack Developer",
    icon: "wine_bar",
    features: [
      "Carrito de compras persistente",
      "Panel de administración completo",
      "Gestión de stock en MySQL",
      "Autenticación de usuarios"
    ]
  },
  {
    id: "portfolio",
    title: "Portafolio",
    category: "Personal",
    date: "Febrero 2026",
    overview: "Diseño y desarrollo de este portafolio profesional utilizando las tecnologías más recientes del ecosistema React.",
    challenge: "Integrar Tailwind CSS v4 y un sistema de modo oscuro dinámico manteniendo la fidelidad visual de los diseños entregados.",
    results: "Un sitio web ultra rápido, con una experiencia de usuario premium y totalmente responsivo que sirve como mi carta de presentación.",
    tech: ["Next.js", "React", "Tailwind CSS v4", "TypeScript"],
    image: "/img/proyectos/portfolio.png",
    screenshots: ["/img/proyectos/portfolio.png"],
    hasDemo: true,
    link: "/",
    client: "Propio",
    duration: "1 Semana",
    role: "Designer & Developer",
    icon: "person_search",
    features: [
      "Páginas dinámicas con Next.js",
      "Tailwind CSS v4 con @theme",
      "Modo oscuro con next-themes",
      "Diseño responsivo adaptativo"
    ]
  }
];
