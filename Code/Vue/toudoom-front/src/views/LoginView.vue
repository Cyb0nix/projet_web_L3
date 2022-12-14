<script setup>
import NavbarVue from "../components/Navbar.vue";
</script>

<template>
  <div class="back">
    <NavbarVue />
    <div class="center-correct">
      <div class="login-background">
        <h2>login</h2>
        <form style="text-align: start">
          <label for="basic-url" class="form-label">Username</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">@</span>
            <input
              id="username"
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              v-model="user.username"
            />
          </div>
          <label for="basic-url" class="form-label">Password</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                /></svg
            ></span>
            <input
              id="password"
              type="password"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              v-model="user.password"
            />
          </div>

          <div style="text-align: end; padding-top: 5%">
            <input
              class="btn btn-primary"
              style="
                background-color: #d82367;
                border-color: #d82367;
                font-family: 'toudoom-classic';
              "
              type="button"
              value="Login"
              @click="login()"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async login() {
      try {
        
          let loginResponse = await this.$http.post("http://localhost:9000/toudoomapi/auth/login",this.user);
          this.$router.push({ name: 'projectList'});
        

      } catch (error) {
      }
    },
  },

  created() {},
};
</script>

<style>

label {
  color: white;
  font-family: "toudoom-classic";
}
.center-correct {
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
}
.back {
  background: url(@/assets/image/bg_2.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.form-control:focus {
    border-color: #D82367;
    box-shadow: 0 0 0 0.2rem    rgba(40, 167, 69, 0.25);
} 

.login-background {
  padding: 1%;
  position: absolute;
  text-align: center;
  width: 490px;
  height: 320px;
  background: #110c36;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
