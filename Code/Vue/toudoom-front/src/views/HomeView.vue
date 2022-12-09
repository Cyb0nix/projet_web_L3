<script setup>
import NavbarVue from "../components/Navbar.vue";
</script>

<template>
  <div class="container-fluid" style="--bs-gutter-x: 0rem">
    <NavbarVue />
    <img src="@/assets/image/bg_1.png" class="bg-image" alt="" />
    <div class="title">
      <img class="toudoom" src="@/assets/image/logo.svg" alt=""/>
      <h1 class="subtitle">Association de production vidéo de l'Efrei</h1>
    </div>
    <div class="classique player">
      <div class="container-xl">
        <div class="ratio ratio-16x9" style="margin-top: -7vw;">
          <iframe src="https://www.youtube.com/embed/-lXaAgf7f8I?start=0&autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&playlist=-lXaAgf7f8I&vq=hd1080"></iframe>
        </div>
      </div>
      
    </div>
    
    
  </div>
</template>

<style>

.player{
  padding: 10%;
}

.classique{
  margin-top: -2vh;
  position: relative;
  width: 100%;
  height: 760px;
  background: #110C35;
}

.title{
  position: absolute;
  top: 18vw;
  width: 100%;
  height: 100vh;
}
.toudoom {
width: 100%;
height: 15vw;
margin-bottom: 2%;
text-align: center;
filter: drop-shadow(8px 8px 18px rgba(0, 0, 0, 0.3));
}
.subtitle {
  width: 100%;
  font-family: "NOMA";
  font-style: normal;
  font-weight: 400;
  font-size: 2.5vw;
  line-height: 10%;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.bg-image {
  position: relative;
  width: 100%;
  height: 50vw;
  top: -4px;
  object-fit: cover;
  object-position: center;

  background: url(@/assets/image/bg_1.png);
  filter: blur(10px);
}
</style>
