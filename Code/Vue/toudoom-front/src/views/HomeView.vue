<script setup>
import NavbarVue from '../components/Navbar.vue';
</script>

<template>
  

  <div class="container-fluid" style="--bs-gutter-x: 0rem">
    <NavbarVue/>
    <div>
      <img src="@/assets/image/bg_1.png" class="bg-image" alt="">
    </div>
    
    <!-- <h1>Association de production vidéo de l'Efrei</h1> -->


  </div>
</template>

<style>
.bg-image{
  position: relative;
  width: 102%;
  height: 816px;
  top: -4px;
  object-fit: contain;
    
    
  
  background: url(@/assets/image/bg_1.png);
  filter: blur(10px);
}

</style>
