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
      <h1 class="subtitle">Efrei Video Production Association</h1>
    </div>
    <div class="classique" id="live" style="margin-top: -2vh">
      <div style="padding-left: 20%; padding-right: 20%; padding-top: 19vh">
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/-lXaAgf7f8I?start=0&autoplay=O&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&playlist=-lXaAgf7f8I&vq=hd1080"
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
            <h2>What is Toudoom ?</h2>
            <p class="left">
              Besides its name recalling a famous video streaming platform, Toudoom
              is the video production association of the Efrei, this association
              will allow you to attend many Efreien events live on the
              campus and off. Our team takes care of making recordings
              videos, broadcasts and live streaming of school news and
              of student life. With his passion for video and material
              semi-professional audio-visual, it will offer you immersive content from
              quality to make sure you don't miss any major moments.
            </p>
          </div>
        </div>
        <div class="row" style="padding: 2%">
          <div class="col-sm-7">
            <h2>Recordings</h2>
            <p>
              What would Toudoom be without its recordings of all school events?
              Whether concerts, shows, debates or competitions,
              Toudoom's 4K cameras are here to record those moments for you
              memorable in the best possible conditions. And because you
              have not necessarily been able to attend live on Twitch, you can
              no longer find them on replay to be sure not to miss anything.
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
            <h2>Video control rooms</h2>
            <p>
              But, what would our recordings be without our management? Our dedicated team
              is active behind the cameras to provide you with an achievement worthy of the
              biggers. Whether it's setting up the set, audio mixing,
              camera changes, assets passing, moderation and all the
              upstream preparation, Toudoom strives to provide you with the best
              possible services.
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
