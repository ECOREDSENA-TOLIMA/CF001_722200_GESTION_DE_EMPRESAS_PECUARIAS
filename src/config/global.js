export default {
  global: {
    componenteFormativo:
      'Consideraciones para el establecimiento y operación de unidades productivas pecuarias',
    descripcionCurso:
      'Conseguir unidades pecuarias organizadas conforme a los parámetros técnicos requiere de un trabajo previo que implica, entre otras cosas, la identificación del tipo de explotación que se llevará a cabo, el conocimiento de la normatividad aplicable, la definición de los recursos disponibles y el conocimiento de los procesos que conlleva la implementación de este tipo de sistemas en diversos entornos rurales. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas productivos pecuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Componentes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Principales explotaciones pecuarias',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Parámetros productivos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Buenas prácticas pecuarias',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Aspectos normativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Salud y seguridad en el trabajo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Manejo ambiental',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planificación de la unidad productiva pecuari',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Instalaciones pecuarias',
            hash: 't_3_1',
          },
          {
            numero: '3.1.1',
            titulo: 'Diseños y características',
            hash: 't_3_1_1',
          },
          {
            numero: '3.1.2',
            titulo: 'Áreas mínimas',
            hash: 't_3_1_2',
          },
          {
            numero: '3.1.3',
            titulo: 'Dimensiones',
            hash: 't_3_1_3',
          },
          {
            numero: '3.1.4',
            titulo: 'Instalaciones',
            hash: 't_3_1_4',
          },
          {
            numero: '3.1.5',
            titulo: 'Elección de materiales de construcción',
            hash: 't_3_1_5',
          },
          {
            numero: '3.2',
            titulo: 'Equipos empleados en explotaciones pecuarias',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Organización de recursos de la unidad productiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Recursos técnicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Recursos humanos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Recursos ambientales',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Elaboración de cronogramas',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mantenimiento de equipos e instalaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Manuales de operación de equipos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Protocolos de mantenimiento de equipos e instalaciones',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Protocolos de desinfección',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Manejo seguro de residuos',
            hash: 't_5_4',
          },
          {
            numero: '5.4.1',
            titulo: 'Clasificación de residuos',
            hash: 't_5_4_1',
          },
          {
            numero: '5.4.2',
            titulo: 'Disposición final',
            hash: 't_5_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Sistemas productivos pecuarios',
      referencia:
        'Pertuz, C. A. (2021). Análisis ambiental de las fuentes generadoras de pollinaza, porquinaza y bovinaza objeto de control y seguimiento ambiental por parte de la Corporación Autónoma Regional del Atlántico -CRA-. (Tesis de grado). Universidad de la Costa, Barranquilla, Colombia.',
      tipo: 'Tesis',
      link:
        'https://repositorio.cuc.edu.co/bitstream/handle/11323/8393/An%C3%A1lisis%20ambiental%20de%20las%20fuentes%20generadoras%20de%20pollinaza%2C%20porquinaza%20y%20bovinaza%20objeto%20de%20control%20y%20seguimiento%20ambiental%20por%20parte%20de%20la%20Corporaci%C3%B3n%20Aut%C3%B3noma%20Regional%20del%20Atl%C3%A1ntico%20-CRA.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: '1.6. Buenas prácticas pecuarias',
      referencia:
        'Organización Panamericana de la Salud. (2015). Buenas Prácticas Agropecuarias (BPA) y de Manufactura (BPM).',
      tipo: 'Guía',
      link:
        'https://www.paho.org/es/documentos/buenas-practicas-agropecuarias-bpa-manufactura-bpm',
    },
  ],
  glosario: [
    {
      termino: 'Aforo',
      significado:
        'Medición de la cantidad de forraje disponible por unidad de área de pradera.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Condiciones y medidas necesarias que garantizan que un alimento no va a afectar la salud de las personas.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para rastrear los procesos que se dan durante la actividad productiva.',
    },
  ],
  referencias: [
    {
      referencia:
        'Estrada, L., I., Esparza, J., S., Albarrán, P., B., Yong Á., G., Rayas, A., A. A., García, M., A. (2018). Evaluación productiva y económica de un sistema silvopastoril intensivo en bovinos doble propósito en Michoacán, México. CIENCIA ergo-sum, 25(3).',
      link: 'https://cienciaergosum.uaemex.mx/article/view/9349',
    },
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura. (2018). Buenas prácticas pecuarias en la producción de ganado bovino. Instituto Interamericano de Cooperación para la Agricultura.',
      link: '',
    },
    {
      referencia:
        'Organismo Internacional Regional de Salud Agropecuaria. (2016). Manual de buenas prácticas pecuarias en bovinos, porcinos y aves. Organismo Internacional Regional de Salud Agropecuaria.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Marcela Luis Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñadora y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyborad e Ilustración',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelsón Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Livtin',
          cargo: 'Animador',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
