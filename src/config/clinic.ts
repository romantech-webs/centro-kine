export const clinic = {
  name: "Centro Kine",
  logo: "/images/logo.png",
  tagline: "Fisioterapia especializada en Ciudad Real",
  description: "Centro Kine es tu clínica de fisioterapia especializada en Ciudad Real, con valoración de 5 estrellas en Google. Dirigida por Mercedes, fisioterapeuta experta en suelo pélvico, preparación al parto, drenaje linfático y técnicas manuales avanzadas. Ofrecemos tratamientos personalizados con tecnología de diagnóstico preciso y un enfoque cercano que garantiza resultados desde la primera sesión.",
  colors: {
    primary: "#0964ff",
    secondary: "#031e4d",
    accent: "#005aff",
    neutral: "#ebf3ff"
  },
  phone: "600 07 15 36",
  whatsapp: "+34600071536",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. Virgen de Gracia, 51, 13200 Manzanares, Ciudad Real, España",
    city: "Ciudad Real",
    province: "Toledo",
    postalCode: "13200",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=16138950971573434751&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Centro%20Kine%20%4039.0001%2C-3.36923&z=16&output=embed",
  coordinates: {
    lat: 39.0001,
    lng: -3.36923
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–20:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 20,
    url: "https://maps.google.com/?cid=16138950971573434751&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Alba Lm",
        rating: 5,
        text: "Mercedes es súper profesional.\nEstoy en mi tercer trimestre de embarazo y me recomendaron la preparación con ella y estoy encantada. Adapta cada sesión a la persona, te aconseja y te guía de manera super clara. Ademas sus clases son divertidas y el tiempo que pasas es genial!\nElla es una chica muy agradable y sabe muy bien de su trabajo!!\n¡Sin duda repetiré mil veces mas!",
        date: "Hace 11 meses"
      },
      {
        author: "Judith-Delfina Aparicio Sanchez-Maroto",
        rating: 5,
        text: "Tengo problemas de retención de líquidos por lo que necesito que me realicen drenajes linfáticos periódicamente. Por experiencia sé que es muy difícil encontrar a alguien que los haga bien pero Mercedes es excelente con estos tratamientos. Además es muy divertida y agradable, algo que siempre es un plus. Estoy muy agradecida.",
        date: "Hace 2 años"
      },
      {
        author: "Natalia Diaz-Cano Gomez-Pimpollo",
        rating: 5,
        text: "Muy muy recomendable. Trato excepcional, cercano y sobre todo profesionalidad. Muy buen manejo de las técnicas manuales, gran conocimiento en diversas ramas de la fisioterapia con explicaciones sencillas y completas. Cuenta también con varias máquinas para dar un diagnóstico preciso. Muchas gracias por todo Mercedes! 😁",
        date: "Hace 6 meses"
      },
      {
        author: "Alexandra Lopez",
        rating: 5,
        text: "Acabo de terminar la cuarentena y he ido a revisar mi suelo pélvico y los puntos del parto, tenía miedo a empezar a trabajarlo y ha sido todo un acierto ir, he mejorado desde el primer momento. La profesionalidad y especialización de Mercedes es espectacular. Muchas gracias por todo.",
        date: "Hace 4 años"
      },
      {
        author: "Mamen Ruiz",
        rating: 5,
        text: "Estuve hace unas semanas por un dolor de espalda que tengo de forma recurrente, después de haber visitado varios centros en Córdoba donde resido habitualmente,  ha sido en CENTRO KINE donde tras una sola  sesión me han resuelto mi problema. Trato excelente. Lo recomiendo 100%.",
        date: "Hace 6 meses"
      }
    ]
  },
  services: [
    {
      id: "suelo-pelvico",
      name: "Fisioterapia de Suelo Pélvico",
      description: "Tratamiento especializado para disfunciones del suelo pélvico en todas las etapas de la vida. Valoración postparto, recuperación de cesáreas y partos, incontinencia urinaria y problemas pélvicos. Trabajamos con técnicas manuales avanzadas y seguimiento personalizado para una recuperación completa y segura.",
      benefits: [
        "Recuperación postparto efectiva desde la primera sesión",
        "Tratamiento de incontinencia y disfunciones pélvicas",
        "Valoración profesional con tecnología de diagnóstico preciso"
      ],
      icon: "Heart"
    },
    {
      id: "preparacion-parto",
      name: "Preparación al Parto",
      description: "Sesiones adaptadas a cada trimestre de embarazo para preparar tu cuerpo de forma óptima. Trabajamos el suelo pélvico, la respiración y técnicas específicas para un parto más consciente y controlado. Clases divertidas y personalizadas donde te guiamos de manera clara en cada etapa.",
      benefits: [
        "Sesiones adaptadas a tu trimestre y necesidades específicas",
        "Preparación física y mental para el momento del parto",
        "Ambiente agradable con profesional especializada"
      ],
      icon: "Heart"
    },
    {
      id: "drenaje-linfatico",
      name: "Drenaje Linfático Manual",
      description: "Técnica manual especializada para tratar la retención de líquidos y mejorar la circulación linfática. Realizamos drenajes terapéuticos con maniobras precisas y efectivas, perfectos para piernas cansadas, postoperatorios y problemas circulatorios. Tratamiento relajante con resultados inmediatos.",
      benefits: [
        "Reducción efectiva de retención de líquidos",
        "Mejora visible de la circulación desde la primera sesión",
        "Técnica manual experta difícil de encontrar bien ejecutada"
      ],
      icon: "Activity"
    },
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual Avanzada",
      description: "Técnicas manuales especializadas para el tratamiento del dolor de espalda, contracturas y problemas musculoesqueléticos. Gran dominio de técnicas manuales con explicaciones claras y sencillas sobre tu problema. Resolvemos dolores recurrentes que otros centros no han conseguido tratar.",
      benefits: [
        "Resultados desde la primera sesión en dolores crónicos",
        "Explicaciones completas y comprensibles de tu problema",
        "Técnicas manuales expertas y precisas"
      ],
      icon: "Hand"
    },
    {
      id: "tratamiento-dolor",
      name: "Tratamiento del Dolor",
      description: "Abordaje integral del dolor crónico y agudo mediante técnicas manuales avanzadas y tecnología terapéutica. Tratamos dolores de espalda recurrentes, cervicalgias, lumbalgias y contracturas musculares. Diagnóstico preciso con equipos especializados para identificar el origen del problema.",
      benefits: [
        "Solución efectiva para dolores recurrentes",
        "Diagnóstico preciso con tecnología avanzada",
        "Tratamiento personalizado según tu patología"
      ],
      icon: "Target"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu lesión o patología. Combinamos técnicas manuales, ejercicio terapéutico y tecnología para acelerar tu recuperación. Seguimiento continuo con adaptación del tratamiento según tu evolución.",
      benefits: [
        "Plan de tratamiento adaptado a tu evolución",
        "Combinación de técnicas para mejores resultados",
        "Seguimiento profesional hasta tu recuperación completa"
      ],
      icon: "Activity"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Prevención y tratamiento de lesiones deportivas con técnicas especializadas. Recuperación de esguinces, sobrecargas, tendinitis y lesiones musculares. Trabajamos para que vuelvas a tu actividad deportiva de forma segura y en el menor tiempo posible.",
      benefits: [
        "Recuperación rápida y segura de lesiones deportivas",
        "Prevención de recaídas con pautas personalizadas",
        "Vuelta progresiva a tu actividad física"
      ],
      icon: "Dumbbell"
    },
    {
      id: "electroterapia",
      name: "Electroterapia y Tecnología Avanzada",
      description: "Tecnología de vanguardia para complementar el tratamiento manual. Utilizamos equipos de diagnóstico preciso y corrientes terapéuticas para acelerar la recuperación y reducir el dolor. Tratamientos no invasivos y efectivos.",
      benefits: [
        "Diagnóstico preciso con equipos especializados",
        "Aceleración del proceso de recuperación",
        "Complemento perfecto al tratamiento manual"
      ],
      icon: "Zap"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 600 07 15 36 o escríbenos por WhatsApp. Te atenderemos personalmente para conocer tu situación y agendar tu cita de valoración en el horario que mejor te venga."
    },
    {
      step: 2,
      title: "Valoración Profesional",
      description: "Mercedes realizará una evaluación completa de tu caso utilizando técnicas de diagnóstico preciso. Te explicaremos de forma clara y sencilla qué te ocurre y diseñaremos un plan de tratamiento adaptado a tus necesidades específicas."
    },
    {
      step: 3,
      title: "Tratamiento Personalizado",
      description: "Aplicamos las técnicas manuales más adecuadas y tecnología avanzada para tu recuperación. Cada sesión se adapta a tu evolución, con explicaciones completas sobre lo que hacemos y por qué lo hacemos."
    },
    {
      step: 4,
      title: "Recuperación y Seguimiento",
      description: "Te acompañamos durante todo el proceso con seguimiento continuo hasta tu completa recuperación. Te damos pautas y consejos para mantener los resultados y prevenir futuras recaídas."
    }
  ],
  whyUs: [
    {
      title: "Valoración 5 Estrellas en Google",
      description: "Con 20 reseñas que destacan nuestra profesionalidad, trato cercano y resultados desde la primera sesión. Nuestras clientas confirman que resolvemos problemas que otros centros no han conseguido tratar, gracias a nuestro dominio excepcional de técnicas manuales avanzadas.",
      icon: "Heart"
    },
    {
      title: "Especialización en Fisioterapia de la Mujer",
      description: "Mercedes es experta en suelo pélvico, preparación al parto, recuperación postparto y drenaje linfático. Áreas especializadas donde la técnica y experiencia marcan la diferencia. Sesiones personalizadas, adaptadas a cada trimestre o fase de recuperación, con explicaciones claras y ambiente agradable.",
      icon: "Heart"
    },
    {
      title: "Técnicas Manuales Expertas",
      description: "Gran dominio y manejo de técnicas manuales que garantizan resultados efectivos. Tratamos dolores crónicos, contracturas y lesiones con maniobras precisas difíciles de encontrar bien ejecutadas. Te explicamos de forma sencilla y completa qué te ocurre y cómo te ayudamos a solucionarlo.",
      icon: "Hand"
    },
    {
      title: "Tecnología de Diagnóstico Preciso",
      description: "Combinamos la experiencia manual con equipos avanzados de diagnóstico para identificar con exactitud el origen de tu problema. Esta tecnología nos permite diseñar tratamientos más efectivos y hacer seguimiento objetivo de tu evolución, garantizando los mejores resultados terapéuticos.",
      icon: "Zap"
    }
  ],
  team: [
    {
      name: "Mercedes",
      role: "Fisioterapeuta Especialista",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Centro Kine nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Centro Kine - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Centro Kine - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Centro Kine - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Centro Kine - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Centro Kine - Imagen 5"
    }
  ],
  faq: [
    {
      question: "¿Cuándo debo acudir a fisioterapia de suelo pélvico después del parto?",
      answer: "En Centro Kine recomendamos realizar una valoración del suelo pélvico después de la cuarentena, aproximadamente a las 6-8 semanas del parto. Es fundamental revisar el estado de los puntos, la musculatura y detectar posibles disfunciones antes de retomar la actividad física. Muchas clientas mejoran desde el primer momento con nuestro tratamiento especializado, tanto si ha sido parto vaginal como cesárea."
    },
    {
      question: "¿Cómo sé si los drenajes linfáticos están bien hechos?",
      answer: "Un drenaje linfático bien realizado debe ser suave, con maniobras específicas y ritmo lento, siguiendo el recorrido del sistema linfático. En Centro Kine, Mercedes está especializada en esta técnica y muchas clientas con experiencia previa confirman la excelencia del tratamiento. Notarás reducción de la hinchazón, sensación de ligereza y mejora visible desde la primera sesión. Es una técnica difícil de dominar y por eso es importante acudir con profesionales expertos."
    },
    {
      question: "¿Desde qué mes de embarazo puedo empezar la preparación al parto?",
      answer: "En Centro Kine adaptamos las sesiones de preparación al parto a cada trimestre de embarazo. Puedes comenzar en cualquier momento, aunque muchas embarazadas inician en el segundo o tercer trimestre. Mercedes personaliza cada sesión según tu estado, semana de gestación y necesidades específicas. Las clases son divertidas, el ambiente es agradable y recibirás consejos claros y prácticos para el día del parto."
    },
    {
      question: "¿Cuántas sesiones necesito para recuperarme de mi lesión?",
      answer: "El número de sesiones depende de tu patología, tiempo de evolución y respuesta al tratamiento. En Centro Kine realizamos una valoración inicial completa para darte un pronóstico realista. Muchos de nuestros pacientes experimentan mejoras significativas desde la primera sesión, incluso en dolores crónicos que no se habían resuelto en otros centros. Durante el tratamiento vamos ajustando el plan según tu evolución."
    },
    {
      question: "¿Qué diferencia a Centro Kine de otras clínicas de fisioterapia?",
      answer: "Centro Kine cuenta con valoración de 5 estrellas en Google con 20 reseñas que destacan la profesionalidad de Mercedes, su dominio excepcional de técnicas manuales y su especialización en áreas como suelo pélvico, drenaje linfático y tratamiento del dolor. Ofrecemos trato cercano y divertido, explicaciones claras y comprensibles, tecnología de diagnóstico preciso y resultados visibles desde la primera sesión. Nuestras clientas destacan que resolvemos problemas que otros centros no han conseguido tratar."
    },
    {
      question: "¿Necesito que me derive el médico para acudir a fisioterapia?",
      answer: "No es necesario tener derivación médica para acudir a Centro Kine. Puedes solicitar cita directamente llamando al 600 07 15 36 o por WhatsApp. Realizaremos una valoración profesional completa de tu caso y si consideramos necesario coordinarnos con tu médico, te lo indicaremos. Trabajamos de forma autónoma pero siempre en coordinación con otros profesionales sanitarios cuando el caso lo requiere."
    },
    {
      question: "¿Tratáis solo a mujeres o también a hombres?",
      answer: "En Centro Kine tratamos tanto a mujeres como a hombres. Aunque somos especialistas en fisioterapia de la mujer, suelo pélvico y preparación al parto, también atendemos todo tipo de lesiones musculoesqueléticas, dolores de espalda, rehabilitación deportiva y problemas crónicos en pacientes de ambos sexos. Cada tratamiento se personaliza según las necesidades específicas de cada persona."
    },
    {
      question: "¿Qué tecnología utilizáis para el diagnóstico?",
      answer: "Centro Kine cuenta con equipos de tecnología avanzada que nos permiten realizar diagnósticos precisos y complementar el tratamiento manual. Utilizamos aparatos especializados para valorar tu patología de forma objetiva y aplicamos electroterapia cuando es necesario para acelerar la recuperación. Esta combinación de técnicas manuales expertas y tecnología de vanguardia nos permite ofrecer los mejores resultados terapéuticos."
    }
  ],
  seo: {
    titleTemplate: "%s | Centro Kine",
    defaultTitle: "Centro Kine | Fisioterapia Especializada en Ciudad Real",
    defaultDescription: "Clínica de fisioterapia en Ciudad Real especializada en suelo pélvico, preparación al parto y drenaje linfático. Valoración 5★ en Google. Resultados desde la 1ª sesión. ☎ 600 07 15 36",
    keywords: [
      "fisioterapia Ciudad Real",
      "Centro Kine",
      "fisioterapia suelo pélvico Ciudad Real",
      "preparación al parto Ciudad Real",
      "drenaje linfático Ciudad Real",
      "fisioterapeuta Ciudad Real",
      "recuperación postparto Ciudad Real",
      "tratamiento dolor espalda Ciudad Real",
      "fisioterapia de la mujer Ciudad Real",
      "clínica fisioterapia Ciudad Real",
      "fisioterapia manual Ciudad Real",
      "rehabilitación Ciudad Real"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Centro Kine",
    cif: "",
    registeredAddress: "C. Virgen de Gracia, 51, 13200 Manzanares, Ciudad Real, España, Ciudad Real, Toledo"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Ciudad Real"
  ],
  heroDescription: "En Centro Kine combinamos profesionalidad y cercanía para tu recuperación. Especialistas en fisioterapia de suelo pélvico, preparación al parto, drenaje linfático y tratamiento del dolor. Con Mercedes, fisioterapeuta experta y tecnología avanzada, conseguimos resultados reales desde la primera sesión.",
  specialty: "Suelo Pélvico y Fisioterapia de la Mujer",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Solicita tu cita de valoración en Centro Kine. Te atenderemos de forma personalizada y diseñaremos el tratamiento más adecuado para ti. Primera sesión con resultados visibles.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
