export const headerTextContent = (lang = true) => {
  if (lang) {
    return {
      one: "Reparaciones navales",
      two: "Trabajos en muelle",
      three: "Montajes en plantas industriales",
      four: "Clientes",
      five: "Localización",
      six: "Contacto",
    };
  } else {
    return {
      one: "Ship Repairs",
      two: "Dock Work",
      three: "Assemblies in Industrial Plants",
      four: "Customers",
      five: "Location",
      six: "Contact",
    };
  }
};

export const aboutTextContent = (lang = true) => {
  if (lang) {
    return {
      title: "Naval Paraná",
      subtitle:
        "Brindamos soluciones integrales en el ámbito portuario, con foco en",
    };
  } else {
    return {
      title: "Naval Paraná",
      subtitle:
        "We provide comprehensive solutions in the port sector, focusing on",
    };
  }
};

export const cardTextContentShip = (lang = true) => {
  if (lang) {
    return {
      title: "Alquiler de embarcaciones",
      description: "para transporte y carga con hidrogrúa.",
    };
  } else {
    return {
      title: "Boat rental",
      description: "for transport and loading with a hydrocrane.",
    };
  }
};

export const cardTextContentAnchor = (lang = true) => {
  if (lang) {
    return {
      title: "Reparaciones navales",
      description: "especializados en calderería.",
    };
  } else {
    return {
      title: "Ship repairs",
      description: "specialized in boilermaking.",
    };
  }
};

export const cardTextContentDroplets = (lang = true) => {
  if (lang) {
    return {
      title: "Trabajos subacuáticos",
      description: " con buzos profesionales.",
    };
  } else {
    return {
      title: "Underwater work",
      description: " with professional divers.",
    };
  }
};

export const cardTextContentShield = (lang = true) => {
  if (lang) {
    return {
      title: "Servicio de dragado",
      description: "para navegar con seguridad.",
    };
  } else {
    return {
      title: "Dredging service",
      description: "to browse safely.",
    };
  }
};

export const cardTextContentSettings = (lang = true) => {
  if (lang) {
    return {
      title: "Mantenimiento y montaje",
      description: "en muelles y terminales portuarias.",
    };
  } else {
    return {
      title: "Maintenance and assembly",
      description: "in docks and port terminals.",
    };
  }
};

export const textContent = (lang: boolean) => ({
  gallerySections: {
    one: {
      title: lang ? "Reparaciones navales" : "Ship Repairs",
      cta: lang ? "Ver más imágenes" : "View more images",
      works: [
        lang ? "Boiler" : "Calderas",
        lang
          ? "Welding on deck or Hull structures performed by Qualified welders & procedure qualification"
          : "Soldadura en cubierta o casco realizada por soldadores calificados y calificación de procedimiento",
        lang
          ? "Search, rescue & replacement of lost anchor & chain by Qualified divers"
          : "Búsqueda, rescate y reemplazo de anclas y cadenas por buzos calificados",
        lang
          ? "Welding of shackles (anchor, swivel & link shackles)"
          : "Soldadura de grilletes (ancla, giratorio y de unión)",
      ],
    },
    two: {
      title: lang ? "Trabajos en muelle" : "Dock Work",
      cta: lang ? "Ver más imágenes" : "View more images",
      works: [
        lang ? "Port defenses" : "Defensas portuarias",
        lang ? "Bollards" : "Bolardos",
        lang ? "Dolphins" : "Delfines",
        lang
          ? "Fire line pipes, inspection and certification of lifting equipments"
          : "Tuberías contra incendio, inspección y certificación de equipos de izado",
        // ... resto
      ],
    },
    three: {
      title: lang ? "Montajes industriales" : "Industrial Assemblies ",
      cta: lang ? "Ver más imágenes" : "View more images",
      works: [
        lang ? "Engineering" : "Ingeniería",
        lang
          ? "Industrial assemblies (general maintenance of boilers)"
          : "Montajes industriales (mantenimiento general de calderas)",
        lang
          ? "Manufacturing, assembly and maintenance of pipes in general"
          : "Fabricación, montaje y mantenimiento de tuberías en general",
        lang
          ? "Inspection: Non-destructive tests"
          : "Inspección: Ensayos no destructivos",
        // ... resto
      ],
    },
  },
});

export const aboutNavalTextContent = (lang: boolean) => {
  if (lang) {
    return {
      h1: "En Naval Paraná, convertimos desafíos fluviales en resultados sólidos. Con años de experiencia y habilitación por Prefectura Naval Argentina, ofrecemos soluciones confiables, precisión técnica y compromiso real en cada operación.",
    };
  } else {
    return {
      h1: "At Naval Paraná, we turn river challenges into solid results. With years of experience and qualification by the Argentine Naval Prefecture, we offer reliable solutions, technical precision and real commitment in each operation.",
    };
  }
};

export const worksContent1 = {
  es: [
    {
      title:
        "Soldadura de chapa Naval en casco y cubierta (Soldadores calificados)",
    },
    {
      title: "Búsqueda y reposición de ancla y cadena con buzos especializados",
    },
    {
      title: "Especializados en calderería",
    },
    {
      title:
        "Soldadura de grilletes en linea de fondeo (unión, estalingadura, giratorio)",
    },
    {
      title:
        "Mantenimiento/Reparación de equipos de izaje (grúas, malacates, pastecas)",
    },
    {
      title:
        "Mantenimiento/reparación de cabrestantes eléctricos e hidráulicos",
    },
    {
      title:
        "Fabricación y reparación de cañerías (carga, sentinas, lastre, red de incendio)",
    },
    {
      title: "Rebobinado de motores eléctricos",
    },
    {
      title: "Procedimientos de Soldaduras (WPS – PQR)",
    },
    {
      title: "Proceso de Soldaduras (GTAW, SMAW y GMAW)",
    },
    {
      title: "Torqueado hidráulico",
    },
    {
      title: "Inspección: Ensayos no Destructivos",
    },
    {
      title: "Empresa y personal habilitados por P.N.A.",
    },
  ],
  en: [
    {
      title: "Naval Sheet Metal Welding on Hull and Deck (Qualified Welders)",
    },
    {
      title:
        "Finding and replenishing anchor and chain with specialized divers",
    },
    {
      title: "Specialized in boilermaking",
    },
    {
      title:
        "Welding of shackles in anchoring line (jointing, stelling, swiveling)",
    },
    {
      title:
        "Maintenance/Repair of lifting equipment (cranes, winches, pastecas)",
    },
    {
      title: "Maintenance/repair of electric and hydraulic winches",
    },
    {
      title:
        "Manufacture and repair of pipes (cargo, bilges, ballast, fire net)",
    },
    {
      title: "Electric Motor Rewinding",
    },
    {
      title: "Welding Procedures (WPS – PQR)",
    },
    {
      title: "Welding Process (GTAW, SMAW and GMAW)",
    },
    {
      title: "Hydraulic torqueing",
    },
    {
      title: "Inspection: Non-Destructive Testing",
    },
    {
      title: "Company and personnel authorized by P.N.A.",
    },
  ],
};

export const worksContent2 = {
  es: [
    { title: "Bitas" },
    { title: "Dolphin" },
    { title: "Cintas de embarques" },
    { title: "Pescantes" },
    { title: "Escala de acceso a buque" },
    { title: "Defensas" },
    { title: "Red de incendio" },
    { title: "Inspección y certificación de equipos de izaje" },
    { title: "Sistemas de anclajes" },
  ],
  en: [
    { title: "Bollards" },
    { title: "Dolphin" },
    { title: "Shipping Belts" },
    { title: "Davits" },
    { title: "Ship Access Ladder" },
    { title: "Defenses" },
    { title: "Fire Network" },
    { title: "Inspection and certification of lifting equipment" },
    { title: "Anchor systems" },
  ],
};

export const worksContent3 = {
  es: [
    { title: "Ingeniería" },
    { title: "Montajes Industriales (mantenimiento general de calderas)" },
    { title: "Fabricación, Montajes y mantenimiento de Cañerías en general" },
    { title: "Fabricación y Montajes de Estructuras Pesadas y Livianas" },
    { title: "Inspección: Ensayos no Destructivos" },
    { title: "Procedimientos de Soldaduras (WPS – PQR)" },
    { title: "Proceso de Soldaduras (GTAW, SMAW Y GMAW)" },
    { title: "Torqueado hidráulico" },
  ],
  en: [
    { title: "Engineering" },
    { title: "Industrial Assemblies (general boiler maintenance)" },
    { title: "Manufacture, Assembly and maintenance of pipes in general" },
    { title: "Manufacture and Assembly of Heavy and Light Structures" },
    { title: "Inspection: Non-Destructive Testing" },
    { title: "Welding Procedures (WPS – PQR)" },
    { title: "Welding Process (GTAW, SMAW and GMAW)" },
    { title: "Hydraulic torqueing" },
  ],
};
