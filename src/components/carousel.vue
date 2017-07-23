<template>
<div>
  <h1>Carousel 3d example </h1>
  <div id="example">
  <carousel-3d :controls-visible="true" :clickable="false">
    <slide v-for="(slide, i) in slides" :index="i" :key="i">
      <figure>
        <img src="https://placehold.it/360x270">
        <figcaption>
          The sky is the limit only for those who aren't afraid to fly!
                    The sky is the limit only for those who aren't afraid to fly!

        </figcaption>
      </figure>
    </slide>
  </carousel-3d>
</div>

</div>

</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  data(){
    return {
      slides:7
    }

  },
  components:{
    Carousel3d,
    Slide
  }

}
</script>

<style scoped>
.carousel-3d-container figure {
  margin:0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

</style>
