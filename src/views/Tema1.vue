<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistemas productivos pecuarios

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Clasificación

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-8
        p En el caso de la producción pecuaria son múltiples los factores que se deben analizar antes de cualquier emprendimiento, por lo que es necesario tomarse el tiempo suficiente para identificar el tipo de explotación, determinar los recursos necesarios y disponibles, conocer el tipo de instalaciones que se requieren y, sobre todo, hacer una programación detallada de las actividades que se llevarán a cabo al interior de la unidad pecuaria, con lo cual será posible darle un orden lógico al sistema, conseguir la productividad esperada y contribuir a la sostenibilidad del proyecto productivo.
      .col-md-4
        img(src="@/assets/curso/temas/tema1/img-1.svg")

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2.	Características

    .cajon-b.color-acento-contenido.p-3.mb-5(data-aos="fade-right")
      p.mb-0 Para conseguir unidades pecuarias organizadas conforme a los parámetros técnicos es necesario implementar procesos acordes a la normatividad aplicable, definiendo los recursos disponibles y conociendo los procesos que conlleva la implementación de sistemas en diversos entornos rurales para controlar el funcionamiento de la unidad pecuaria, a continuación, se verán sus características.

    .row.justify-content-center.mb-5
      .col-sm-3.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img-2.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #FFF198")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>Versatilidad</strong>
            p.mb-0.text-small Es una actividad que se adapta fácilmente a una variedad de condiciones que pueden ser de tipo agroecológico, económico, sociocultural y tecnológico, entre otras. 
      .col-sm-3.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img-3.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #FFF198")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>Generación de subproductos</strong>
            p.mb-0.text-small En la actividad pecuaria es común la obtención de subproductos los cuales son empleados tanto al interior de la unidad productiva como fuera de ella.  
      .col-sm-3.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img-4.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #FFF198")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>Individuos y poblaciones</strong>
            p.mb-0.text-small Este tipo de explotaciones, dependiendo de la especie animal, se puede hacer un manejo enfocado en los individuos (como en el caso de los bovinos o los equinos) o en las poblaciones (como ocurre con las aves, conejos o cuyes). 

    .row.justify-content-center.mb-5
      .col-sm-3.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img-5.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #FFF198")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>Movilidad</strong>
            p.text-small Dependiendo de las condiciones ambientales o la disponibilidad de alimento, algunas de las explotaciones pecuarias pueden trasladarse de un lugar a otro. 
            p.mb-0.text-small Esto se da sobre todo en la producción ganadera, donde es común la migración de animales según las épocas de abundancia o escasez de pasturas.
      .col-sm-3.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img-6.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #FFF198")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>Alojamiento e infraestructura asociada</strong>
            p.mb-0.text-small Siempre que se desarrolla un sistema productivo pecuario es necesario asegurar unas instalaciones mínimas para el alojamiento de los animales, igualmente una infraestructura complementaria que facilite las labores que demande su manejo.    

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3. Componentes 
      
    p.mb-5 Los sistemas productivos pecuarios están integrados por diversos componentes que se deben articular de manera precisa para conseguir los resultados esperados en materia de rendimientos y calidad del producto final. En términos generales, los elementos que componen cualquier sistema productivo pecuario son la especie animal, el alimento, las instalaciones, los equipos y herramientas, las condiciones agroecológicas y el manejo. 

    .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Especie animal
            p Entre las especies animales más empleadas en sistemas pecuarios están los ovinos, caprinos, equinos, porcinos y aves, igualmente mamíferos pequeños como conejos y cuyes. También se encuentran insectos, reptiles y anélidos, como la lombriz de tierra.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-7.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Alimento
            p Es la fuente de energía que sostiene a los animales que hacen parte del sistema productivo. Puede ser natural, como en el caso de las praderas, o suplementada como se hace en sistemas intensivos avícolas, por ejemplo. 
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-8.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Instalaciones
            | Alcance de la medición
            p Son las construcciones o adecuaciones de infraestructura para el alojamiento de los animales o para facilitar labores de manejo como ordeño, alimentación, manejo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-9.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            h2 Equipos y herramientas
            p Son elementos que facilitan el manejo de la explotación pecuaria y que se utilizan para diversas labores. Tipos de equipos: ordeño mecánico, nebulización de medicamentos o ensilaje. Herramientas: fumigadora, tijera, pala, martillo.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-10.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            h2 Manejo
            p Corresponde al factor humano y consiste en la forma en que se organizan, administran y disponen los componentes del sistema productivo. Igualmente, se relaciona con el desarrollo de las labores necesarias para su sostenimiento. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-11.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-4.mb-3
        img(src="@/assets/curso/temas/tema1/img-23.png")
      .col-md-8
        p Las explotaciones pecuarias son tan diversas como las especies animales, pues son múltiples las iniciativas de crianza y beneficio que se han desarrollado en diferentes latitudes. Incluso algunas de ellas pueden resultar exóticas dependiendo del contexto en el que se desarrollen. No obstante, de acuerdo con su importancia económica y el volumen de la producción, en el ámbito nacional las principales explotaciones pecuarias podrían agruparse en las siguientes categorías:

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4. Principales explotaciones pecuarias

    .row.justify-content-center.mt-5 
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-1.svg' alt='AvatarTop')
          h2.text-center Ganado Bovino
          p.text-center Es tal vez una de las explotaciones pecuarias más difundida en el mundo y se dedica principalmente a la producción de carne y leche. Se efectúa en sistemas intensivos, semi-intensivos y extensivos en múltiples condiciones agroecológicas.

        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-2.svg' alt='AvatarTop')
          h2.text-center Porcinos
          p.text-center La producción porcícola se desarrolla en múltiples climas y altitudes, en sistemas que pueden ser extensivos e intensivos.
            br
            br
            | Estas explotaciones se orientan principalmente a la producción de carne, con destino al consumo directo y a la industria. Igualmente, es común la producción de lechones.

        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-3.svg' alt='AvatarTop')
          h2.text-center Avícola
          p.text-center Esta es una de las industrias más grandes que existen en el mundo, pues es una de las proteínas de origen animal más consumidas. En la industria avícola destacan la producción de huevo, pollo de engorde y pollo de levante.

        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-4.svg' alt='AvatarTop')
          h2.text-center Búfalos
          p.text-center La producción de carne y leche de búfalo se desarrolla, principalmente, en zonas de trópico bajo, donde se dan condiciones de alta temperatura. Son una fuente importante de proteína. 
          
        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-5.svg' alt='AvatarTop')
          h2.text-center Equinos
          p.text-center A este grupo pertenecen, principalmente, caballos, asnos y mulares. Estos animales se utilizan a menudo como apoyo en las labores del campo, en el deporte, las exposiciones, la producción de genética, la recreación y la producción de carne. 

        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-6.svg' alt='AvatarTop')
          h2.text-center Ovinos
          p.text-center Es uno de los sistemas de ganadería más antiguos y conocidos del mundo. Estos animales, por lo general se destinan para la obtención de carne, especialmente los camuros, y lana, como en el caso de las ovejas. Estos animales poseen un amplio rango de adaptación climática.

        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-7.svg' alt='AvatarTop')
          h2.text-center Caprinos
          p.text-center Junto con los ovinos, los caprinos también pertenecen al grupo de los pequeños rumiantes y son una de las explotaciones pecuarias más populares debido a su gran capacidad adaptativa. En este grupo se destaca la producción de cabras doble propósito. 
        
        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-8.svg' alt='AvatarTop')
          h2.text-center Otras aves
          p.text-center Además del pollo de engorde y la gallina ponedora, existen otras aves que igualmente se consideran de importancia económica debido a su participación en el ámbito comercial. Entre estas se encuentran pavos, patos, codornices, gansos, palomas y aves ornamentales. Estos animales se encuentran en múltiples rangos de altitud y temperatura, lo cual resulta muy favorable desde el punto de vista técnico.  
        
        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-9.svg' alt='AvatarTop')
          h2.text-center Otras especies menores
          p.text-center Dentro de este grupo de especies menores destacan actividades productivas como la cunicultura y la producción de cuy. 
            br
            br
            | Estos animales se constituyen en fuente importante de alimento a muy bajo costo. Además de la carne, su piel también es aprovechable. 
        
        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-10.svg' alt='AvatarTop')
          h2.text-center Peces
          p.text-center Este es otro de los grandes grupos de especies animales capaces de constituir proyectos productivos con altos niveles de rentabilidad. 
            br
            br
            | Este tipo de proteínas tienen una alta demanda en diversos espacios, además que estos montajes se adaptan a diversas condiciones agroecológicas. 

        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-11.svg' alt='AvatarTop')
          h2.text-center Especies no convencionales
          p.text-center Recientemente, algunas especies animales han empezado a adquirir relevancia en el escenario productivo debido a su potencial alimenticio. 
            br
            br
            | Dentro de este grupo destacan reptiles como iguanas, babillas y tortugas hicoteas. También se existen explotaciones de caracoles, avestruces, llamas y alpacas.  
        
        .tarjeta.color-secundario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-12.svg' alt='AvatarTop')
          h2.text-center Insectos y anélidos
          p.text-center Existen iniciativas de cría de mariposas con fines ornamentales; explotación apícola para la obtención de miel y polen; larvas de gusano de seda; lombriz roja californiana para la producción de proteína animal o para la transformación de los subproductos de la industria agropecuaria. 
        
    .row.mb-5
      .col-lg-5
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h3(data-aos="fade-left")(style="color:#ffff") Aplicabilidad de los registros

    p.mb-5 Los registros son muy útiles para evaluar y monitorear la situación ambiental del agroecosistema, entre otras aplicaciones:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-3.mb-3
        img(src="@/assets/curso/temas/tema1/img-12.svg")
      .col-md-9
        ul.lista-ul.mb-3
          li 
            i.fas.fa-atom
            | Sirven como historial ambiental del agroecosistema.
          li 
            i.fas.fa-atom
            | Permite medir el impacto positivo o negativo de las prácticas de manejo ecológico o agroecológico, o el avance del agroecosistema cuando se avanza en un proceso de reconversión o transición. 
          li  
            i.fas.fa-atom
            | Permiten observar cambios bruscos en el agroecosistema y analizar la fuente del problema. Por ejemplo: un descenso en la población de abejas puede indicar alguna fuente de contaminación con agroquímicos. 
          li  
            i.fas.fa-atom
            | Son documentos válidos tenidos en cuenta en procesos de certificación ecológica o de esquemas de sostenibilidad. 
          li  
            i.fas.fa-atom
            | Sirven para comparar el agroecosistema con otros aledaños.
          li  
            i.fas.fa-atom
            | Son evidencias útiles para procesos pedagógicos o de investigación. 
          li  
            i.fas.fa-atom
            | Son un insumo esencial para graficar y procesar la información ambiental del agroecosistema, y en general del plan de manejo aplicado.

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5. Parámetros productivos

    p.mb-5 Dependiendo de lo que se quiera medir al interior de la explotación pecuaria se pueden identificar y cuantificar cuantos parámetros productivos se consideren necesarios, para lo cual es necesario diseñar y diligenciar registros que permitan hacer un seguimiento detallado del comportamiento de estos importantes indicadores.

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Parámetros Productivos")
        h4 Parámetros Productivos 
        
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img-13.png', alt='Texto que describa la imagen')
          .col-xl-6
            p Los parámetros productivos son variables cuantificables y observables que permiten analizar detalladamente el comportamiento de las unidades pecuarias en cualquiera de sus etapas, lo cual permite evaluar los rendimientos y, además, facilitar la toma de decisiones administrativas teniendo en cuenta factores técnicos y productivos. Algunos de los parámetros productivos que se pueden medir al interior de las principales explotaciones pecuarias son los siguientes:

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Parámetros bovinos", alt='')
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Parámetros productivos bovinos, bufalinos, ovinos y caprinos</em> 

        .row.justify-content-center.align-items-center.mb-5
          .col-10.col-md-10.col-lg-12(alt="Tabla 1 Parámetros productivos bovinos, bufalinos, ovinos y caprinos En la tabla se observan los parámetros productivos para bovinos, bufalinos, ovinos y caprinos.")
            .tabla-b.color-secundario
              table(style="min-width:auto")
                thead
                  tr.cabecera-a.text-center
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(style="background-color:#FFF") <strong>Bovinos - bufalinos - ovinos - caprinos</strong>
                    td.p-2(style="background-color:#FFF")
                      p.mb-0 Peso promedio al nacer
                      p.mb-0 Peso promedio al destete
                      p.mb-0 Edad promedio al destete
                      p.mb-0 Número de terneros
                      p.mb-0 Número de terneras
                      p.mb-0 Porcentaje de nacimiento de hembras
                      p.mb-0 Mortalidad anual de lactantes
                      p.mb-0 Mortalidad anual de adultos
                      p.mb-0 Producción de leche diaria
                      p.mb-0 Número mensual de partos
                      p.mb-0 Ganancia de peso mensual
                    td.p-2(style="background-color:#FFF") 
                      p.mb-0 Kg
                      p.mb-0 Kg
                      p.mb-0 Meses
                      p.mb-0 Número de animales
                      p.mb-0 Número de animales
                      p.mb-0 Porcentaje
                      p.mb-0 Número de animales
                      p.mb-0 Número de animales
                      p.mb-0 Litros
                      p.mb-0 Número de partos
                      p.mb-0 Kilogramos / mes
                 
                  
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Parámetros aves")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 2.] <em>Parámetros productivos para aves</em> 
        
        .row.justify-content-center.align-items-center.mb-5
          .col-10.col-md-10.col-lg-12(alt="Tabla 2 Parámetros productivos para aves En la tabla se observan los parámetros productivos para aves.")
            .tabla-b.color-secundario
              table(style="min-width:auto")
                thead
                  tr.cabecera-a.text-center
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(style="background-color:#FFF") <strong>Parámetros productivos para aves</strong>
                    td.p-2(style="background-color:#FFF")
                      p.mb-0 Aves que inician - aves que finalizan
                      p.mb-0 Mortalidad diaria
                      p.mb-0 Mortalidad acumulada
                      p.mb-0 Peso corporal
                      p.mb-0 Longitud del pico
                      p.mb-0 Longitud del tarso
                      p.mb-0 Consumo de alimento diario
                      p.mb-0 Conversión de alimento
                      p.mb-0 Masa del huevo
                      p.mb-0 Huevos día
                      p.mb-0 Porcentaje de pérdida de huevos
                    td.p-2(style="background-color:#FFF") 
                      p.mb-0 Número de animales
                      p.mb-0 Número de animales
                      p.mb-0 Porcentaje
                      p.mb-0 Gramos
                      p.mb-0 Milímetros
                      p.mb-0 Centímetros
                      p.mb-0 Gramos
                      p.mb-0 Kilogramo / Kilogramo
                      p.mb-0 Gramos
                      p.mb-0 Número de huevos
                      p.mb-0 Porcentaje


      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Parámetros porcinos")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 3.] <em>Parámetros productivos para porcinos</em> 
        
        .row.justify-content-center.align-items-center.mb-5
          .col-10.col-md-10.col-lg-12(alt="Tabla 3 Parámetros productivos para porcinos En la tabla se observan los parámetros productivos para porcinos.")
            .tabla-b.color-secundario
              table(style="min-width:auto")
                thead
                  tr.cabecera-a.text-center
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(style="background-color:#FFF") <strong>Porcinos</strong>
                    td.p-2(style="background-color:#FFF")
                      p.mb-0 Edad a la primera monta
                      p.mb-0 Peso corporal
                      p.mb-0 Conversión de alimento
                      p.mb-0 Edad al sacrificio
                      p.mb-0 Intervalo destete monta
                      p.mb-0 Abortos
                      p.mb-0 Porcentaje de partos
                      p.mb-0 Lechones nacidos vivos por camada
                      p.mb-0 Lechones nacidos muertos
                      p.mb-0 Partos/Cerda/Año
                    td.p-2(style="background-color:#FFF") 
                      p.mb-0 Meses
                      p.mb-0 Kilogramos
                      p.mb-0 Kilogramos
                      p.mb-0 Días
                      p.mb-0 Meses
                      p.mb-0 Número de abortos
                      p.mb-0 Porcentaje
                      p.mb-0 Número de lechones
                      p.mb-0 Número de lechones
                      p.mb-0 Número de partos


      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Parámetros especies menores")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 4.] <em>Parámetros productivos para especies menores</em> 
        
        .row.justify-content-center.align-items-center.mb-5
          .col-10.col-md-10.col-lg-12(alt="Tabla 4 Parámetros productivos para especies menores En la tabla se observan los parámetros productivos para especies menores")
            .tabla-b.color-secundario
              table(style="min-width:auto")
                thead
                  tr.cabecera-a.text-center
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(style="background-color:#FFF") <strong>Especies menores (conejos - cuyes)</strong>
                    td.p-2(style="background-color:#FFF")
                      p.mb-0 Edad destete
                      p.mb-0 Peso crías al nacer 
                      p.mb-0 Número de crías al año 
                      p.mb-0 Partos al año
                      p.mb-0 Peso
                      p.mb-0 Camadas/hembra/año
                      p.mb-0 Peso crías al destete
                      p.mb-0 Edad al sacrificio 
                      p.mb-0 Madurez sexual machos
                      p.mb-0 Madurez sexual hembras 
                    td.p-2(style="background-color:#FFF") 
                      p.mb-0 Días
                      p.mb-0 Gramos
                      p.mb-0 Número de animales
                      p.mb-0 Número de partos
                      p.mb-0 Kilogramos
                      p.mb-0 Número de camadas
                      p.mb-0 Gramos
                      p.mb-0 Días
                      p.mb-0 Días
                      p.mb-0 Días


      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Parámetros peces")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 5.] <em>Parámetros productivos para peces</em> 
        
        .row.justify-content-center.align-items-center.mb-5
          .col-10.col-md-10.col-lg-12(alt="Tabla 5 Parámetros productivos para peces En la tabla se observan los parámetros productivos para peces")
            .tabla-b.color-secundario
              table(style="min-width:auto")
                thead
                  tr.cabecera-a.text-center
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(style="background-color:#FFF") <strong>Peces</strong>
                    td.p-2(style="background-color:#FFF")
                      p.mb-0 Peso inicial
                      p.mb-0 Peso final
                      p.mb-0 Edad al sacrificio
                      p.mb-0 Densidad por metro cúbico
                      p.mb-0 Ingesta total individuo
                      p.mb-0 Longitud total final individuo
                      p.mb-0 Mortalidad
                    td.p-2(style="background-color:#FFF") 
                      p.mb-0 Kilogramos
                      p.mb-0 Kilogramos
                      p.mb-0 Días
                      p.mb-0 Peces / m³
                      p.mb-0 Gramos
                      p.mb-0 Centímetros
                      p.mb-0 Porcentaje
             
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6. Buenas prácticas pecuarias
    
    p.mb-5 Las buenas prácticas agrícolas y las buenas prácticas pecuarias son acciones encaminadas a la reducción de riesgos de deterioro del medio ambiente y de la contaminación cruzada de los productos agropecuarios; a través de prácticas de manejo higiénicas y seguras por parte de los trabajadores, contando con los elementos necesarios para tener procesos productivos donde se conserven los productos inocuos y saludables.

    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- text-small se usa para que los títulos sean mas pequeños
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Paso 1")
          .col-md-12.mb-4.mb-md-0.col-ipad
            h3.mb-4 Principales aspectos de las Buenas Prácticas Pecuarias - BPP
            p De acuerdo con la FAO, consisten en “la aplicación del conocimiento disponible a la utilización sostenible de los recursos naturales básicos para la producción, en forma benévola, de productos agrícolas alimentarios y no alimentarios inocuos y saludables, a la vez que se procuran la viabilidad económica y la estabilidad social”. 
          
          .row.justify-content-center.align-items-center
            .col-10.col-md-10.col-lg-8 
              figure
                img(src='@/assets/curso/temas/tema1/img-14.png', alt='Texto que describa la imagen')


        .row(titulo="Paso 2")
          .col-md-12.mb-4.mb-md-0.col-ipad
            h3.mb-4 Buenas Prácticas Pecuarias  - BPP
            p De acuerdo con el Instituto Colombiano Agropecuario -ICA, estas se relacionan con las prácticas que se deben llevar a cabo en los sistemas pecuarios para disminuir los riesgos físicos, químicos y biológicos que puedan llegar a afectar la salud de los consumidores.

          .row.justify-content-center.align-items-center
            .col-10.col-md-10.col-lg-8 
              figure
                img(src='@/assets/curso/temas/tema1/img-15.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 3")
          .row.justify-content-center.align-items-center.col-ipad
            .col-10.col-md-10.col-lg-8
              .titulo-sexto.color-acento-contenido.mb-5
                p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Principales aspectos de las Buenas Prácticas Pecuarias  - BPP</em> 
              figure
                img(src='@/assets/curso/temas/tema1/img-16.svg', alt='La figura muestra los principales aspectos de las buenas prácticas pecuarias, entre los que se tienen: Seguridad de las apersonas, medio ambiente, bienestar animal, inocuidad alimentaria.')

        .row(titulo="Paso 4")
          .col-md-12.mb-4.mb-md-0.col-ipad
            h3.mb-4 Marco normativo de las Buenas Prácticas Pecuarias (BPP) - Buenas Prácticas Ganaderas (BPG)
            p De acuerdo con lo expuesto por el Instituto Colombiano Agropecuario, existe un marco normativo para todos los aspectos relacionados con las buenas prácticas (sean pecuarias o ganaderas) el cual contribuye a la disminución de los riesgos a la salud asociados con el consumo de alimentos de origen animal. 

          .row.justify-content-center.align-items-center
            .col-10.col-md-10.col-lg-8 
              figure
                img(src='@/assets/curso/temas/tema1/img-17.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 5")
          .col-md-12.mb-4.mb-md-0.col-ipad
            h4.mb-4.text-center Marco normativo de las Buenas Prácticas Pecuarias (BPP) - Buenas Prácticas Ganaderas (BPG)

            .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
              .col-md-6.col-lg-8.col-12.px-md-5.mb-3
                .tarjeta.p-4(style="border-radius: 0px; background-color:#E0E5EC")
                  .row.justify-content-center
                    .col-2
                      img(src='@/assets/curso/temas/tema1/img-18.svg')
                    .col-10
                      h4 CONPES 3675, 3376, 3676 DE 2010. Política sanitaria y de inocuidad de alimentos.
                .tarjeta.p-4(style="border-radius: 0px; background-color:#FFFF")
                  .row.justify-content-center
                    .col-2
                      img(src='@/assets/curso/temas/tema1/img-19.svg')
                    .col-10
                      h4 Decreto 1500. Resoluciones ICA 76509/20 - 68167/20 - 20277/20
                .tarjeta.p-4(style="border-radius: 0px; background-color:#E0E5EC")
                  .row.justify-content-center
                    .col-2
                      img(src='@/assets/curso/temas/tema1/img-20.svg')
                    .col-10
                      h4 Decreto 616. Resolución ICA: 67449/20
                .tarjeta.p-4(style="border-radius: 0px; background-color:#FFFF")
                  .row.justify-content-center
                    .col-2
                      img(src='@/assets/curso/temas/tema1/img-21.svg')
                    .col-10
                      h4 Ley 1774. Resolución ICA 7953/17

        .row(titulo="Paso 6")
          .row.justify-content-center.align-items-center.col-ipad
            .col-10.col-md-10.col-lg-12.desktop
              .titulo-sexto.color-acento-contenido.mb-5
                p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Protocolos para acceder a la certificación</em> 
              figure
                img(src='@/assets/curso/temas/tema1/img-22.svg', alt='La imagen nos indica los aspectos centrales de la gestión integral de la salud y la seguridad en el trabajo, en donde se contemplan tres aspectos básicos: •	Riesgos laborales. •	Elementos de protección •	Dotación a los trabajadores de la granja pecuaria')

          .row.justify-content-center.align-items-center
            .col-10.col-md-10.col-lg-12.movil
              .titulo-sexto.color-acento-contenido.mb-5
                p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Protocolos para acceder a la certificación</em> 
              figure.mb-4
                img(src='@/assets/curso/temas/tema1/img-22.svg', alt='La imagen nos indica los aspectos centrales de la gestión integral de la salud y la seguridad en el trabajo, en donde se contemplan tres aspectos básicos: •	Riesgos laborales. •	Elementos de protección •	Dotación a los trabajadores de la granja pecuaria')
              .row
                .col-lg-6
                  a.anexo.mb-4(:href="obtenerLink('/downloads/clasificacion_de_productos.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p <strong>Descargar infografía.</strong> Marco normativo de las Buenas Prácticas Pecuarias.
      
    p.mb-5 Para complementar la información sobre buenas prácticas pecuarias, lo invitamos a ver el siguiente vídeo:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/GzFgWjrzxwc" title="Consideraciones para el establecimiento y operación de unidades productivas pecuarias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)







</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
