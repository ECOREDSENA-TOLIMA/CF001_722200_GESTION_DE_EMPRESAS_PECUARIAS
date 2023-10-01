<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 El conocimiento previo de los procesos que conlleva la implementación de una explotación agropecuaria minimiza los riesgos, reduce los costos y contribuye a asegurar que el producto final cumpla con las exigencias del mercado en términos de calidad e inocuidad. 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YHP2t8J54K8" title="Consideraciones para el establecimiento y operación de unidades productivas pecuarias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
