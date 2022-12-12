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
            
            <input type="button" style="background-color: #110c35; border:0px;" @click="login()" class="nav-link active" value="Login">
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
          <!-- <iframe
            src="https://www.youtube.com/embed/-lXaAgf7f8I?start=0&autoplay=O&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&playlist=-lXaAgf7f8I&vq=hd1080"
          ></iframe> -->
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

<script>
export default {
  name: "Home",
  data() {
    return {
      isAuth : false
    };
  },
  methods: {
    async login() {
      try {
        
        let auth = await this.$http.get("http://localhost:9000/toudoomapi/auth/protected");

        this.isAuth = auth.data

        console.log(this.isAuth);
         
        if (this.isAuth) {
        
          this.$router.push({ name: 'projectList'});

        } else {
          this.$router.push({ name: 'login'});
        }

      } catch (error) {
      }
    },
  },

  created() {},
};
</script>

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
