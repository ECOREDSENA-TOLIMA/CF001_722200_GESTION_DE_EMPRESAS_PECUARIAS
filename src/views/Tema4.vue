<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Organización de recursos de la unidad productiva

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez identificados los recursos disponibles en la unidad productiva, es necesario desarrollar un inventario de al interior de ella. Un inventario es una relación esquematizada y con alto grado de detalle de los recursos disponibles al interior de la empresa pecuaria. En ese orden de ideas, es importante definir los formatos que permitan realizar esta labor para proceder a organizar los recursos en función de las metas de producción. 

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1. Recursos técnicos

    .row.mb-4(data-aos="fade-left")
      .col-md-10 
        p Como toda empresa, la unidad pecuaria para su funcionamiento requiere de recursos que al organizarse y articularse definen el éxito de la explotación, cualquiera que esta sea. Dentro de estos sistemas productivos, se han definido básicamente tres clases de recursos sobre los cuales se basa toda la actividad, por lo que el análisis detallado de cada uno de ellos en el entorno productivo es una tarea fundamental en el proceso de planeación. 
      .col-md-2
        img(src="@/assets/curso/temas/tema4/img-2.svg")

    #titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Recursos técnicos

    p.mb-5 Estos hacen referencia a los medios físicos o materiales de los que dispone la empresa pecuaria para el desarrollo de su actividad productiva. Estos se pueden dividir en tangibles, cuando se pueden encontrar en una forma física, o intangibles cuando están representados en tecnología o cualquier otro bien inmaterial. 

    .col-10.col-md-10.col-lg-10(data-aos="fade-right", alt="Se presenta figura descriptiva de dos tipos de recursos presentes en la empresa pecuaria: Recursos técnicos Equipos. Maquinaria. Insumos. Herramientas. Pie de cría. Instalaciones. Terrenos. Edificios. Artículos de oficina. Recursos tecnológicos Equipos de cómputo. Equipos de comunicación. Programas computacionales. Aplicaciones. Sistemas. Redes informáticas. Sensores remotos.")
      .titulo-sexto.color-acento-contenido
        p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Tipos de recursos presentes en la empresa pecuaria </em> 

    .row(data-aos="fade-down-left") 
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img-3.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4 Recursos técnicos
              p Equipos.
                br
                | Maquinaria.
                br
                | Insumos.
                br
                | Herramientas.
                br
                | Pie de cría.
                br
                | Instalaciones.
                br
                | Terrenos.
                br
                | Edificios.
                br
                | Artículos de oficina.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img-4.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4 Recursos tecnológicos
              p Equipos de cómputo.
                br
                | Equipos de comunicación.
                br
                | Programas computacionales.
                br
                | Aplicaciones.
                br
                | Sistemas.
                br
                | Redes informáticas.
                br
                | Sensores remotos.

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2. Recursos humanos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-md-8
        p <strong>Recurso humano</strong> 
        p Es tal vez el recurso más importante con el que cuenta la unidad pecuaria, puesto que todas y cada una de las labores que se desarrollan al interior de la unidad productiva requieren de la intervención del equipo de trabajo. En este punto es importante considerar las labores que se realizan en la unidad productiva y estimar la demanda de mano de obra con base en ellas (tiempos y movimientos en la empresa). 
        p Para lograr estimaciones más precisas, es importante identificar las tareas y medir el tiempo que demanda cada una de ellas. De esta forma, es posible obtener promedios que posteriormente se pueden emplear para la programación de actividades. 
      .col-md-4
        img(src="@/assets/curso/temas/tema4/img-5.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right", alt="")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Elementos que se pueden tener en cuenta al momento de seleccionar el personal (recurso humano) </em>
        figure
          img(src='@/assets/curso/temas/tema4/img-6-1.svg', alt='Se presenta figura con tres elementos requeridos al momento de seleccionar personal: Habilidades y competencias Habilidades para trabajo en equipo. Habilidad analítica y de resolución de problemas. Capacidad para tomar decisiones. Comportamiento cordial, respetuoso y colaborativo. Competencias fundamentales Profesionalismo. Transparencia. Eficiencia. Habilidades generales Aprendizaje continuo. Liderazgo. Trabajo en equipo.')  
    
    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right", alt="")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Elementos que se pueden tener en cuenta al momento de seleccionar el personal (recurso humano) </em>
        figure
          img(src='@/assets/curso/temas/tema4/img-6-2.svg', alt='Se presenta figura con tres elementos requeridos al momento de seleccionar personal: Habilidades y competencias Habilidades para trabajo en equipo. Habilidad analítica y de resolución de problemas. Capacidad para tomar decisiones. Comportamiento cordial, respetuoso y colaborativo. Competencias fundamentales Profesionalismo. Transparencia. Eficiencia. Habilidades generales Aprendizaje continuo. Liderazgo. Trabajo en equipo.')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-md-8
        p Buena parte del éxito de las explotaciones pecuarias radica en el entrenamiento que recibe el talento humano, como también del grado de preparación con el que cuenta para la ejecución de las labores y de haber desarrollado las competencias necesarias para desempeñarse en determinada actividad. Es así como en las actividades de planeación es importante identificar las habilidades, capacidades y destrezas de cada uno de los miembros de la planta de personal, con el fin de coordinar las acciones pertinentes para aprovechar esos talentos individuales. 
      .col-md-4
        img(src="@/assets/curso/temas/tema4/img-7.png")

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3. Recursos ambientales

    p <strong>Recursos ambientales</strong>
    p.mb-5 Otro de los recursos necesarios para adelantar la actividad productiva de manera eficiente, es la identificación de los recursos ambientales, en términos de materiales aprovechables, pero también de servicios ecosistémicos. Para caracterizar la oferta de servicios ambientales, es necesario identificar las condiciones agroecológicas de la zona. 

    .col-10.col-md-10.col-lg-10(data-aos="fade-right", alt="Se presenta imagen con tres condiciones agroecológicas, y cada una de estas se describe: Condiciones climáticas Temperatura, humedad relativa, brillo solar, precipitación, vientos. El conocimiento de estas variables permite identificar a qué fenómenos climáticos se puede enfrentar la explotación pecuaria para poder actuar en consecuencia. Condiciones edáficas La edafología hace referencia al suelo. En este aspecto es clave identificar las propiedades físicas del suelo (infiltración, textura, porosidad) así como sus propiedades químicas (acidez, salinidad, conductividad eléctrica). Las condiciones del suelo se relacionan directamente con la disponibilidad de alimento en sistemas de pastoreo. Biodiversidad El conocimiento de la biodiversidad del entorno, permite identificar recursos aprovechables bien sea para la construcción de instalaciones o para la obtención de servicios ambientales como bosques protectores de fuentes hídricas.")
      .titulo-sexto.color-acento-contenido
        p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Condiciones agroecológicas</em> 

    .row.justify-content-center.align-items-center(data-aos="fade-down-left") 
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img-8.svg' alt='')
          .tarjeta.tarjeta--azul1
            .p-4
              h4 Condiciones climáticas
              p Temperatura, humedad relativa, brillo solar, precipitación, vientos. El conocimiento de estas variables permite identificar a qué fenómenos climáticos se puede enfrentar la explotación pecuaria para poder actuar en consecuencia.
      
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img-9.svg' alt='')
          .tarjeta.tarjeta--azul1
            .p-4
              h4 Condiciones edáficas
              p La edafología hace referencia al suelo. En este aspecto es clave identificar las propiedades físicas del suelo (infiltración, textura, porosidad) así como sus propiedades químicas (acidez, salinidad, conductividad eléctrica). Las condiciones del suelo se relacionan directamente con la disponibilidad de alimento en sistemas de pastoreo. 
      
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img-10.svg' alt='')
          .tarjeta.tarjeta--azul1
            .p-4
              h4 Biodiversidad
              p El conocimiento de la biodiversidad del entorno, permite identificar recursos aprovechables bien sea para la construcción de instalaciones o para la obtención de servicios ambientales como bosques protectores de fuentes hídricas.  

    p.mb-5 De acuerdo con sus características, los inventarios en una explotación pecuaria pueden clasificarse de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-md-8
        ul.lista-ul.mb-5
          li 
            i.fas.fa-atom
            | Inventario de materias primas e insumos.
          li 
            i.fas.fa-atom
            | Inventario de animales.
          li 
            i.fas.fa-atom
            | Inventario de cobertura del suelo.
          li 
            i.fas.fa-atom
            | Inventario de equipos y herramientas.
          li 
            i.fas.fa-atom
            | Inventario de instalaciones.
      .col-md-4
        img(src="@/assets/curso/temas/tema4/img-11.png")

    p.mb-5 Para la elaboración de inventarios acordes con las necesidades de la explotación pecuaria, es clave identificar en primera instancia qué se quiere cuantificar y cómo clasificar. Algunos ejemplos de las columnas que pueden llevar los inventarios de materias primas, animales, herramientas y suelos son los siguientes. 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12(data-aos="fade-right", alt="")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 4.] <em>Inventarios requeridos</em>
        .tabla-b.color-acento-contenido.mb-5
          table
            caption Inventario de materias primas e insumos
            thead
              tr
                th(style="background-color:#E0E5EC").text-center Uso
                th(style="background-color:#E0E5EC").text-center Descripción
                th(style="background-color:#E0E5EC").text-center Marca
                th(style="background-color:#E0E5EC").text-center Fecha de vencimiento
                th(style="background-color:#E0E5EC").text-center Unidad
                th(style="background-color:#E0E5EC").text-center Cantidad
                th(style="background-color:#E0E5EC").text-center Valor comercial unitario
                th(style="background-color:#E0E5EC").text-center Valor total
            tbody
              tr
                td Fertilizante
                td Urea, bulto 50 kilogramos
                td Yara
                td 23-12-2025
                td Bulto
                td 30
                td 90.000
                td 2.700.000

        .tabla-b.color-acento-contenido.mb-5
          table
            caption Inventario de animales  
            thead
              tr
                th(style="background-color:#E0E5EC").text-center Código animal
                th(style="background-color:#E0E5EC").text-center(colspan="2") Sexo <br>Macho Hembra
                th(style="background-color:#E0E5EC").text-center Edad meses
                th(style="background-color:#E0E5EC").text-center Número de Partos
                th(style="background-color:#E0E5EC").text-center Peso en kilogramos
                th(style="background-color:#E0E5EC").text-center Vacunado
            tbody
              tr
                td 0001
                td x 
                td 
                td 22
                td N.A
                td 90
                td Sí
              tr
                td 0002
                td 
                td x
                td 24
                td 1
                td 87
                td Sí

        .tabla-b.color-acento-contenido.mb-5
          table
            caption Inventario de cobertura del suelo 
            thead
              tr
                th(style="background-color:#E0E5EC").text-center Número de lote
                th(style="background-color:#E0E5EC").text-center Área en hectáreas
                th(style="background-color:#E0E5EC").text-center Uso actual
                th(style="background-color:#E0E5EC").text-center Uso anterior
                th(style="background-color:#E0E5EC").text-center(colspan="2") Análisis de suelos <br> Si No
                th(style="background-color:#E0E5EC").text-center Kilogramos de forraje por m²
                th(style="background-color:#E0E5EC").text-center(colspan="2") Riego <br> Si No
            tbody
              tr
                td 01
                td 12
                td Pasto brachiaria
                td Maíz
                td x
                td 
                td 2,8
                td x 
                td
        
        .tabla-b.color-acento-contenido.mb-5
          table
            caption Inventario herramientas y equipos
            thead
              tr
                th(style="background-color:#E0E5EC").text-center Descripción
                th(style="background-color:#E0E5EC").text-center Marca
                th(style="background-color:#E0E5EC").text-center(colspan="2") Operativo <br> Si No
                th(style="background-color:#E0E5EC").text-center Unidad
                th(style="background-color:#E0E5EC").text-center Cantidad
                th(style="background-color:#E0E5EC").text-center(colspan="2") Valor comercial unitario
                th(style="background-color:#E0E5EC").text-center Valor total
            tbody
              tr
                td Machete 22 pulgadas
                td Incolma
                td x
                td 
                td Bulto
                td 
                td 10
                td 20.000
                td 200.000
        
        .tabla-b.color-acento-contenido.mb-5
          table
            caption Inventario de instalaciones
            thead
              tr
                th(style="background-color:#E0E5EC").text-center Tipo de instalación
                th(style="background-color:#E0E5EC").text-center Área en m²
                th(style="background-color:#E0E5EC").text-center Uso actual
                th(style="background-color:#E0E5EC").text-center(colspan="3") Estado general <br> Bueno Regular Malo
                th(style="background-color:#E0E5EC").text-center Valor comercial unitario
                th(style="background-color:#E0E5EC").text-center(colspan="3") Agua <br> Si No 
                th(style="background-color:#E0E5EC").text-center(colspan="3") Electricidad <br> Si No 
            tbody
              tr
                td Corral
                td 64
                td Ordeño
                td x
                td
                td
                td 20.000
                td x
                td
                td x
                td 

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4. Elaboración de cronogramas

    p Con base en el análisis de recursos disponibles, se procede a la elaboración de los cronogramas de trabajo que son herramientas gráficas, esenciales en la planeación, y en las cuales se plasman las actividades a realizar y se estiman los tiempos necesarios para cumplirlas. 
    p.mb-5 Para la elaboración de un cronograma en una empresa pecuaria es importante conocer lo siguiente:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-16.svg' alt='AvatarTop')
        h2 Tiempo de labores
        p El tiempo que puede invertir una persona en determinadas actividades. Por ejemplo, alimentación de peces, montaje de cercas, etc.   

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-17.svg' alt='AvatarTop')
        h2 Ciclos Productivos
        p Ciclos productivos de las diferentes especies. Es decir, por ejemplo, el tiempo que se requiere entre nacimiento y destete, entre inseminación y nacimiento, entre siembra de alevinos y recolección de adultos.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-18.svg' alt='AvatarTop')
        h2 Condiciones Climáticas
        p El comportamiento de las condiciones climáticas en la unidad productiva: corresponde con las temporadas secas, temporadas lluviosas, épocas de mayor incidencia de vientos, entre otras.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-19.svg' alt='AvatarTop')
        h2 Festividades
        p Festividades y actividades socioculturales de los habitantes de la región.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-20.svg' alt='AvatarTop')
        h2 Desplazamiento
        p Tiempos de desplazamiento entre la unidad productiva y los principales centros de consumo.  

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-21.svg' alt='AvatarTop')
        h2 Transporte 
        p Tipo de transporte predominante empleado en la zona.

    p Un ejemplo clásico de cronograma es el que se presenta a continuación, donde las actividades se presentan mes a mes.
    p.mb-5 <strong>Inventario de materias primas e insumos</strong>

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.text-center
                th(colspan="4")(style="background-color:#E0E5EC")  Actividades
                th(style="background-color:#E0E5EC") Mes 1
                th(style="background-color:#E0E5EC") Mes 2
                th(style="background-color:#E0E5EC")  Mes 3
                th(style="background-color:#E0E5EC")  Mes 4
                th(style="background-color:#E0E5EC")  Mes 5
                th(style="background-color:#E0E5EC")  Mes 6
                th(style="background-color:#E0E5EC")  Mes 7
                th(style="background-color:#E0E5EC")  Mes 8
                th(style="background-color:#E0E5EC")  Mes 9
            tbody
              tr
                td(colspan="4").text-center Preparación del terreno
                td
                  i.fas.fa-calendar-check
                td 
                td
                td
                td
                td
                td
                td
                td
              tr
                td(colspan="4").text-center Siembra de semilla de brachiaria 
                td 
                td
                  i.fas.fa-calendar-check
                td
                td
                td
                td
                td
                td
                td 
              tr
                td(colspan="4").text-center Fertilización de la pradera
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                td
                td
                td
                td
                td
              tr
                td(colspan="4").text-center Adecuación de cercas
                td
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                td
                td
                td
                td
              tr
                td(colspan="4").text-center Siembra de barreras vivas
                td
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                  i.fas.fa-calendar-check
                td
                td
                td
                td
              tr
                td(colspan="4").text-center Compra de novillas
                td
                td
                td
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                td
                td
              tr
                td(colspan="4").text-center Rotación de potreros
                td
                td
                td
                td
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                  i.fas.fa-calendar-check
                td
                  i.fas.fa-calendar-check

    p En algunos cronogramas, es posible combinar las actividades que se van a desarrollar en la explotación con eventos externos a la unidad productiva, lo cual es de mucha utilidad cuando se están programando las actividades mensuales o semanales, pues permite prepararse para eventuales contingencias. 
    p.mb-5 <strong>Ejemplo de cronograma de actividades con eventos programados</strong>

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.text-center
                th(colspan="4")(style="background-color:#E0E5EC") Actividades
                th(style="background-color:#E0E5EC")  Mes 1
                th(style="background-color:#E0E5EC")  Mes 2
                th(style="background-color:#E0E5EC")  Mes 3
                th(style="background-color:#E0E5EC")  Mes 4
                th(style="background-color:#E0E5EC")  Mes 5
                th(style="background-color:#E0E5EC")  Mes 6
                th(style="background-color:#E0E5EC")  Mes 7
                th(style="background-color:#E0E5EC")  Mes 8
                th(style="background-color:#E0E5EC")  Mes 9
            tbody
              tr
                td(colspan="4").text-center Excavación de reservorios
                td
                  i.fas.fa-calendar-check
                td
                  i.fas.fa-calendar-check 
                td
                td
                td
                td
                td
                td
                td
              tr
                td(colspan="4").text-center Adecuación de instalaciones para peces 
                td 
                td
                td
                  i.fas.fa-calendar-check
                td
                td
                td
                td
                td
                td 
              tr
                td(colspan="4").text-center Siembra de alevinos
                td
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                td
                td
                td
                td
              tr
                td(colspan="4").text-center Alimentación de peces
                td
                td
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                  i.fas.fa-calendar-check
                td
                  i.fas.fa-calendar-check
                td
                  i.fas.fa-calendar-check
                td
                  i.fas.fa-calendar-check
              tr
                td(colspan="4").text-center Mantenimiento de estanques
                td
                td
                td
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                td
                  i.fas.fa-calendar-check
                td
              tr
                td(colspan="4").text-center Fiestas patronales
                td
                td
                td
                td
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                td
              tr
                td(colspan="4").text-center Inicio de temporada seca
                td
                td
                td
                td
                td
                td
                td
                  i.fas.fa-calendar-check
                td
                  i.fas.fa-calendar-check
                td

    p.mb-5 Si bien en la explotación pecuaria se cuenta con un cronograma de actividades que indica los tiempos en los cuales se desarrollarán las actividades, es importante hacer una buena gestión de contingencias. Una contingencia es una situación fuera de lo común, que puede presentarse o no, con la capacidad de alterar el normal funcionamiento de la unidad pecuaria. Las contingencias no son evitables, pero sus impactos se pueden minimizar.   

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right", alt="")
        figure
          img(src='@/assets/curso/temas/tema4/img-22-1.svg', alt='')  
    
    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right", alt="")
        figure
          img(src='@/assets/curso/temas/tema4/img-22-2.svg', alt='')














</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Estas instalaciones por lo general se encargan de dar confort a los animales, facilitar las labores y proporcionar los cuidados necesarios para su sostenibilidad. <br><br>Las instalaciones más comunes que se encuentran en las unidades pecuarias cumplen las siguientes funciones.',
        imagen: require('@/assets/curso/temas/tema3/img-16.png'),
      },
      {
        titulo: '',
        texto:
          'El <strong>control de temperatura</strong> es uno de los factores más críticos sobre todo en procesos de cría. Para esto se emplean cortinas las cuales, dependiendo de la necesidad, se pueden abrir o cerrar, según sea el caso. <br><br>También existen <strong>sistemas de calefacción</strong> que utilizan energía eléctrica o combustible para alimentar lámparas, por medio de los cuales se puede regular la temperatura en las camas, en el caso de cerdos, o en las jaulas en el caso de pollos recién nacidos.',
        imagen: require('@/assets/curso/temas/tema3/img-17.png'),
      },
      {
        titulo: '',
        texto:
          'La <strong>aireación y ventilación en sistemas intensivos.</strong> Es común que se requiera ventilar el lugar de alojamiento, especialmente en épocas calurosas, por lo que se deben adecuar instalaciones que faciliten la circulación del aire y la disipación de gases nocivos.',
        imagen: require('@/assets/curso/temas/tema3/img-18.png'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<strong>La oxigenación de estanques.</strong> En la cría de peces es necesario garantizar la oxigenación del agua, por lo que en algunos casos es necesario adecuar las instalaciones para la operación de estos equipos.',
        imagen: require('@/assets/curso/temas/tema3/img-19.png'),
      },
      {
        titulo: '',
        texto:
          'El <strong>manejo de residuos</strong> en todas las explotaciones pecuarias se producen residuos sólidos, por lo que es necesario adecuar espacios en los cuales se haga un manejo técnico de estos desechos bien sea para su disposición parcial o a su disposición final.',
        imagen: require('@/assets/curso/temas/tema3/img-20.png'),
      },
      {
        titulo: '',
        texto:
          'El <strong>bombeo de agua.</strong> En algunas explotaciones el acceso al agua puede llegar a ser limitante, por lo que una de las alternativas es el bombeo de agua. Teniendo en cuenta estas condiciones es necesario adecuar instalaciones que cumplan con este objetivo.',
        imagen: require('@/assets/curso/temas/tema3/img-21.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
