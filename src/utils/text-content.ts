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
    },
    two: {
      title: lang ? "Trabajos en muelle" : "Dock Work",
      cta: lang ? "Ver más imágenes" : "View more images",
    },
    three: {
      title: lang ? "Montajes industriales" : "Industrial Assemblies ",
      cta: lang ? "Ver más imágenes" : "View more images",
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
