<script setup>
import NavbarVue from "../components/Navbar.vue";
import Footer from '../components/Footer.vue';

</script>

<template>
  <div class="container-fluid" style="--bs-gutter-x: 0rem">
    <nav
    class="navbar sticky-top navbar-expand-lg navbar-dark"
    style="background-color: #110c35; opacity: 95"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/image/logo.svg"
          alt="Toudoom"
          width="130"
          style="margin: -8px; margin-left: 1px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#live">Live</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#vod">About</a>
          </li>
          <li class="nav-item">
            
            <router-link to="/login" class="nav-link active">Login<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg></span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <img src="@/assets/image/bg_1.png" class="bg-image-blur" alt="" />
    <div class="title">
      <img class="toudoom" src="@/assets/image/logo.svg" alt="" />
      <h1 class="subtitle">Association de production vidéo de l'Efrei</h1>
    </div>
    <div class="classique" id="live" style="margin-top: -2vh">
      <div style="padding-left: 20%; padding-right: 20%; padding-top: 19vh">
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/-lXaAgf7f8I?start=0&autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&playlist=-lXaAgf7f8I&vq=hd1080"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="classique" id="vod">
      <img src="@/assets/image/bg_2.png" class="bg-image" alt="">
      <div class="container" style="margin-top: -98vh; width: 100vw;">
        <div class="row" style="padding: 2%">
          <div class="col-sm-5">
            <img src="@/assets/image/logo.svg" style="margin-right: 3%" alt="" />
          </div>
          <div class="col-sm-7">
            <h2>Qu'est ce que Toudoom</h2>
            <p class="left">
              Outre son nom rappelant une célèbre plateforme de streaming vidéo, Toudoom
              est l'associaton de production vidéo de l'Efrei, cette association vous
              permettra d'assister en direct à de nombreux événements efreiens sur le
              campus et en dehors. Notre équipe s'occupe de réaliser des captations
              vidéos, des émissions et la diffusion en direct des actualités de l'école et
              de la vie étudiante. Avec sa passion pour la vidéo et un matériel
              audio-visuel semi-professionnel, elle vous proposera un contenu immersif de
              qualité pour être sûr que vous ne passiez à côté d'aucun moment majeur.
            </p>
          </div>
        </div>
        <div class="row" style="padding: 2%">
          <div class="col-sm-7">
            <h2>Des captations</h2>
            <p>
              Que serait Toudoom sans ses captations de tous les évènements de l’école ?
              Que ce soit des concerts, des spectacles, des débats ou des compétitions,
              les caméras 4K de Toudoom sont là pour enregistrer pour vous ces moments
              mémorables dans les meilleures conditions possibles. Et parce que vous
              n’avez pas forcément pu y assister en direct sur Twitch, vous pourrez en
              plus les retrouver en rediffusion pour être sûr de ne rien louper.
            </p>
          </div>
          <div class="col-sm-5">
            <img
              src="@/assets/image/photo_botb2.jpg"
              style="width: 1fr; max-width: 70%; min-width: 200px"
              alt=""
            />
          </div>
        </div>
        <div class="row" style="padding: 2%">
          <div class="col-sm-5">
            <img
              src="@/assets/image/test.jpg"
              style="width: 1fr; max-width: 65%; min-width: 200px; margin-left: 10%;"
              alt=""
            />
          </div>
          <div class="col-sm-7">
            <h2>Des Régies</h2>
            <p>
              Mais, que serait nos captations sans notre régie ? Notre équipe dévouée
              s’active derrière les caméras pour vous fournir une réalisation digne des
              plus grand. Que ce soit à l’installation du plateau, le mixage audio, les
              changements de caméras, le passage des assets, la modération et toute la
              préparation en amont, Toudoom s’évertue à vous fournir les meilleures
              prestations possibles.
            </p>
          </div>
        </div>
      </div>
      <img/>
    </div>
    <Footer/>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
.classique {
  position: relative;
  width: 100%;
  height: 98vh;
  background: #110c35;
}
body{
  background: #110c35;
}
.title {
  position: absolute;
  top: 35vh;
  width: 100%;
  height: 98vh;
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

.bg-image-blur {
  width: 100%;
  height: 98vh;

  object-fit: cover;
  object-position: center;

  background: url(@/assets/image/bg_1.png);
  filter: blur(10px);
}

.bg-image {
  width: 100%;
  height: 102vh;
  background: url(@/assets/image/bg_2.png);
    background-size: cover;
    background-position: center;
}
</style>
