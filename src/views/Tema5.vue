<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mantenimiento de equipos e instalacionesa

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El mantenimiento de los equipos y de instalaciones de la unidad productiva pecuaria son necesarios para asegurar su durabilidad y buen funcionamiento. Para el desarrollo de estas actividades, es necesario establecer protocolos en los cuales se definen la periodicidad de las actividades de mantenimiento y limpieza, los procedimientos para la utilización y almacenamiento de equipos, el tipo de aseo y limpieza que se debe hacer, la clase de productos de limpieza a emplear y la identificación de las señales de deterioro de estos elementos. 

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1. Manuales de operación de equipos

    p Para la utilización de los equipos es importante seguir las recomendaciones del fabricante y asegurarse de cumplir todas y cada una de ellas, pues es una de las formas de asegurar su durabilidad y buen uso. Estas recomendaciones están consignadas en los manuales de operación, por lo que es necesario tenerlos siempre disponibles. Igualmente, para evitar daños es importante establecer protocolos para el uso de estos elementos y realizar jornadas de inducción y de capacitación al personal para su operación. 
    p.mb-5 Para la utilización de los equipos es importante seguir las recomendaciones del fabricante y asegurarse de cumplir todas y cada una de ellas, pues es una de las formas de asegurar su durabilidad y buen uso. Estas recomendaciones están consignadas en los manuales de operación, por lo que es necesario tenerlos siempre disponibles. Igualmente, para evitar daños es importante establecer protocolos para el uso de estos elementos y realizar jornadas de inducción y de capacitación al personal para su operación.

    .tarjeta.color-primario.mb-5(data-aos="fade-down-left")
      .row.justify-content-center.align-items-center
        .col-md-4.ps-4.py-3
          img(src="@/assets/curso/temas/tema5/img-2.svg")
        .col-md-8.p-3.px-5
          ul.lista-ul.mb-3
            li 
              i.fas.fa-atom
              | Una tabla de contenido donde se especifican los ítems que se tratan en el manual. 
            li 
              i.fas.fa-atom
              | Un glosario en el cual se definen conceptos técnicos que no se manejan frecuentemente. 
            li  
              i.fas.fa-atom
              | Una descripción de los componentes del equipo, sus funciones y ubicación. 
            li  
              i.fas.fa-atom
              | Planos detallados de los componentes del equipo. 
            li  
              i.fas.fa-atom
              | Recomendaciones generales para poner en funcionamiento el equipo. 
            li  
              i.fas.fa-atom
              | Un listado de las fallas más frecuentes que se presentan durante la operación y sus posibles causas. 
            li  
              i.fas.fa-atom
              | Un aparte con las generalidades relacionadas con el mantenimiento del equipo, como cambio de baterías, reemplazo de partes, cuidados en el almacenamiento, aseo y limpieza. 

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2. Protocolos de mantenimiento de equipos e instalaciones

    p.mb-5 A continuación, se verán los protocolos mantenimiento de equipos:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UQ3yq_lsbNg" title="Consideraciones para el establecimiento y operación de unidades productivas pecuarias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3. Protocolos de desinfección
    
    p.mb-5 Una de las formas de asegurar el cumplimiento de las normas de bioseguridad al interior de la explotación pecuaria, es vigilando los protocolos de desinfección, tanto de equipos como de instalaciones. A continuación, se presentan los principales aspectos que se deben considerar para el diseño e implementación de protocolos de desinfección en las explotaciones pecuarias. 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-3.svg' alt='AvatarTop')
        h2 Limpieza en seco
        p Se utiliza una escoba o un cepillo para barrer todas las impurezas y agentes contaminantes presentes en las superficies de la unidad pecuaria. 
      
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-4.svg' alt='AvatarTop')
        h2 Enjuague previo
        p Con la ayuda del agua se quitan pequeñas partículas que no fueron retiradas en la fase de lavado en seco.
      
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.svg' alt='AvatarTop')
        h2 Aplicación de detergente
        p Con la ayuda del detergente se desprenden la suciedad y las películas bacterianas, y las mantienen en solución o suspensión.
      
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-6.svg' alt='AvatarTop')
        h2 Enjuague posterior
        p Con la ayuda del agua se retiran los restos de partículas contaminantes que aún permanezcan sobre la superficie. Es igualmente importante retirar los restos de detergente, ya que estos pueden disminuir la eficacia de los agentes desinfectantes que se usen posteriormente. 

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-7.svg' alt='AvatarTop')
        h2 Aplicación de desinfectante
        p Una vez se retiren las partículas de suciedad y los restos de detergente, se procede a desinfectar las superficies.

    .row.mb-4
      .col-lg-5
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h3(data-aos="fade-left")(style="color:#ffff") Detergentes y desinfectantes 

    p.mb-5 Los detergentes facilitan la remoción de las partículas de suciedad, por lo que son recomendados en todos los procesos de limpieza y desinfección. 

    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- text-small se usa para que los títulos sean mas pequeños
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1")
          .col-md-6.mb-4.mb-md-0
            h3 Detergentes de uso general
            p Los detergentes de uso general son poco recomendados en superficies donde se hacen procedimientos, se recomienda, en su lugar, el uso de detergentes alcalinos o clorados.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-8.png', alt='Texto que describa la imagen')

        .row(titulo="2")
          .col-md-6.mb-4.mb-md-0
            h3 Detergentes clorados
            p Los detergentes clorados se emplean en superficies que, en ocasiones, resultan difíciles de limpiar, pero no se recomiendan en superficies como el aluminio, debido a que son altamente corrosivos. Es importante mencionar que, aunque los detergentes son fundamentales en los procesos de limpieza, no son desinfectantes.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-9.png', alt='Texto que describa la imagen')

        .row(titulo="3")
          .col-md-6.mb-4.mb-md-0
            h3 Factores que inciden en la eficacia de los detergentes
            p Dentro de la clasificación de los detergentes, existen de uso general, alcalino o clorados, ácidos y enzimáticos, la eficacia depende de los siguientes factores:
            p <strong>Tiempo de contacto:</strong> los detergentes requieren un tiempo prudente para actuar sobre la suciedad.
            p <strong>Temperatura:</strong> la mayoría de los detergentes mejoran su eficiencia en altas temperaturas.
            p <strong>Ruptura física</strong> de las partículas de suciedad.
            p <strong>Química del agua</strong> empleada en los procesos de limpieza.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-10.png', alt='Texto que describa la imagen')

        .row(titulo="4")
          .col-md-6.mb-4.mb-md-0
            h3 Desinfectantes
            p En cuanto a los desinfectantes es posible que no requieran enjuague antes de su uso, aunque esto depende del tipo de desinfectante y su concentración. Estos productos deben estar aprobados por la autoridad sanitaria y su empleo debe realizarse siguiendo las recomendaciones del fabricante.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-11.png', alt='Texto que describa la imagen')

        .row(titulo="5")
          .col-md-6.mb-4.mb-md-0
            h3 Desinfectantes con base de cloro
            p Los productos desinfectantes basados en cloro son los más utilizados en diversas industrias, debido a que toleran aguas calcáreas, son fáciles de conseguir y económicos, además contrarrestan una amplia variedad de hongos y bacterias.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-12.png', alt='Texto que describa la imagen')

        .row(titulo="6")
          .col-md-6.mb-4.mb-md-0
            h3 Otros compuestos
            p Además del cloro, existen otros compuestos basados en amonio cuaternario, pero tienen como desventaja que requieren mayor tiempo de exposición para aumentar su efectividad, lo cual concede un mayor efecto residual. Debido a que no son eficaces frente a algunos patógenos, es recomendable rotarlos con otros desinfectantes.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-13.png', alt='Texto que describa la imagen')

        .row(titulo="7")
          .col-md-6.mb-4.mb-md-0
            h3 Desinfectantes con base de iodo
            p En una tercera categoría, están los desinfectantes basados en iodo, denominados iodóforos, los cuales resultan altamente eficaces contra diversos patógenos, incluso hongos y levaduras incluso en bajas concentraciones. Otra de sus ventajas, es que son más estables, menos corrosivos, no irritan la piel y funcionan bien con aguas calcáreas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-14.png', alt='Texto que describa la imagen')

        .row(titulo="8")
          .col-md-6.mb-4.mb-md-0
            h3 Otros desinfectantes 
            p Otro grupo lo conforman los desinfectantes ácidos.  Estos poseen una estructura más estable a altas temperaturas o en presencia de materia orgánica, por lo que se utilizan especialmente en la limpieza de equipos.  Finalmente, existen otros agentes desinfectantes entre los cuales se destacan el ozono, la luz ultravioleta y el agua caliente.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-15.png', alt='Texto que describa la imagen')

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4. Manejo seguro de residuos

    p.mb-5(data-aos="fade-down-left") Para el almacenamiento de estas sustancias desinfectantes y detergentes, es importante tener en cuenta las siguientes recomendaciones, debido a que son sustancias peligrosas que pueden llegar a causar daños a la salud de las personas o los animales, si no se toman las debidas precauciones. 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-4.mb-3
        img(src="@/assets/curso/temas/tema5/img-16.svg")
      .col-md-8
        p Recomendaciones para almacenamiento de sustancias peligrosas
        ul.lista-ul.mb-3
          li 
            i.fas.fa-atom
            | Almacenamiento bajo llave en un lugar destinado únicamente para este tipo de sustancias. 
          li 
            i.fas.fa-atom
            | Rotulado de los recipientes en los que se guardan los desinfectantes y los detergentes. 
          li  
            i.fas.fa-atom
            | Señalización de las áreas en las que se almacenan este tipo de productos. 
          li  
            i.fas.fa-atom
            | Conservar las hojas de seguridad de estos elementos para saber cómo actuar en caso de emergencia. 
          li  
            i.fas.fa-atom
            | Mantener la bodega en buenas condiciones de ventilación, humedad e iluminación. 

    p.mb-5(data-aos="fade-down-left") Como en todas las actividades humanas, las explotaciones pecuarias también son generadoras de residuos de toda índole, y cuando no reciben un manejo apropiado terminan convirtiéndose en foco de contaminación y de proliferación de especies indeseadas. 

    .tarjeta.color-acento-contenido1.p-4.mb-5(data-aos="fade-down")
      p <strong>Manejo seguro de residuos</strong>
      p.mb-0 Para lograr una eficiente gestión de los residuos sólidos, es necesario, en primer lugar, diferenciarlos unos de otros, de acuerdo con los parámetros de clasificación existentes. En segunda instancia, es imperativo definir el sistema o los sistemas a emplear para hacer una gestión integral de los residuos, de manera que los impactos que estos puedan generar no trasciendan de la unidad productiva. 

    .row.mb-4
      .col-lg-4
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h3(data-aos="fade-left")(style="color:#ffff") Clasificación de residuos

    p.mb-5 Los criterios para la clasificación de los residuos sólidos son variados, pero los más utilizados son los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right", alt="")
        figure
          img(src='@/assets/curso/temas/tema5/img-17-1.svg', alt='La imagen nos muestra que los residuos sólidos se clasifican en: residuos reciclables, no reciclables, orgánicos y especiales, estos últimos corresponde a los empaques de productos agroquímicos, residuos de medicamentos, restos anatomo patológicos, empaques de sustancias corrosivas, etc.')
          figcaption Nota. Elaboración propia con base en Ministerio de Comercio, Industria y Turismo    
    
    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right", alt="")
        figure
          img(src='@/assets/curso/temas/tema5/img-17-2.svg', alt='La imagen nos muestra que los residuos sólidos se clasifican en: residuos reciclables, no reciclables, orgánicos y especiales, estos últimos corresponde a los empaques de productos agroquímicos, residuos de medicamentos, restos anatomo patológicos, empaques de sustancias corrosivas, etc.')

    .row.mb-4
      .col-lg-3
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h3(data-aos="fade-left")(style="color:#ffff") Disposición final

    .row.mb-5(data-aos="fade-left")
      .col-md-9 
        p La actividad productiva pecuaria, al igual que otras explotaciones, genera una gran cantidad de residuos, la mayoría de ellos orgánicos, los cuales deben manejarse adecuadamente para evitar la proliferación de patógenos, la contaminación de suelos y aguas y la generación de olores ofensivos. La disposición final de los residuos se realiza de acuerdo con el tipo de material que se genere, conforme a la clasificación establecida en la explotación pecuaria. 
        p Respecto a los métodos para la disposición final de estos residuos se tiene lo siguiente:
      .col-md-3
        img(src="@/assets/curso/temas/tema5/img-18.svg")

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Residuos reciclables:")
        .col-md-12.mb-4.mb-md-0
          p estos se depositan en recipientes ubicados dentro de la explotación pecuaria los cuales deben estar debidamente rotulados y dispuestos en un área específica. El sitio de almacenamiento de los residuos debe estar bien ventilado, tener fácil acceso, estar construido con materiales que permitan la limpieza de sus superficies y que disponga de los medios para evitar la entrada de vectores (Decreto 1140 de 2003). 

      .row(titulo="Residuos no reciclables:")
        .col-md-12.mb-4.mb-md-0
          p estos materiales también se almacenan en contenedores debidamente rotulados, los cuales deben indicar claramente qué tipo de materiales se pueden depositar allí. Estos materiales se almacenarán en un lugar destinado para tal fin, el cual debe permitir su fácil limpieza, tener buen acceso y restringir el paso de vectores. 
      
      .row(titulo="Residuos orgánicos:")
        .col-md-12.mb-4.mb-md-0
          p este tipo de residuos pueden recibir un manejo especial al interior de la explotación pecuaria, pues son totalmente biodegradables y pueden transformarse en abono fácilmente. La gestión de estos residuos comienza con la separación en la fuente. Los residuos orgánicos se disponen en áreas de compostaje o lombricultivo en las cuales mediante procesos enteramente naturales se degradan. Es importante capacitar al personal sobre la importancia de separar los residuos y hacer una correcta disposición de estos. 

      .row(titulo="Residuos especiales: ")
        .col-md-12.mb-4.mb-md-0
          p este tipo de residuos requieren de un manejo distinto debido a que, por su naturaleza y los componentes que los integran, resultan peligrosos para los animales y para el personal que labora en la unidad productiva. Los envases de plaguicidas deben someterse en primera instancia a un proceso conocido como triple lavado, el cual consiste en enjuagar con agua tres veces el recipiente antes de perforarlo y almacenarlo. En relación con los residuos de vacunas se inactivan sumergiéndolos en soluciones desinfectantes por 24 horas. Por su parte las agujas empleadas para la inyección de medicamentos se disponen en “guardianes”, para su posterior disposición. 
          p En algunas explotaciones avícolas el manejo de las mortalidades es uno de los temas más complejos, por lo que en muchas de ellas se opta por enterrar los animales, y así se reducen los riesgos de transmisión de enfermedades y olores ofensivos. 

      








</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
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
