<script setup>
import NavbarVue from "../components/Navbar.vue";
</script>

<template>
  <div style="background-color: #0C0923;">
      <NavbarVue />
      <div class="back">
        <div class="pagemenu">
            <span class="text"><span>Projects</span></span>
            <span class="text02"><span>Staffs</span></span>
            <span class="text04"><span>Equipment</span></span>
            <span class="text06"><span>MENU</span></span>
        </div>
        <div class="all-case-project">
          <div class="add-button">
          <span class="text20"><span>ADD</span></span>
          <img src="@/assets/image/+.svg" alt="+" class="plus" />
        </div>
        <span class="text22"><span>EQUIPMENTS</span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagemenu {
  left: 0px;
  width: 230px;
  height: 100vh;
  display: flex;
  position: absolute;
  background-color: rgba(17, 12, 54, 1);
}

@media only screen and (max-width: 1300px) {
  .pagemenu {
    display: none;
  }
}

.back {
  width: 100%;
  height: 721px;
  color: #0c0923;
}

.text {
  top: 15%;
  left: 6%;
  color: #ffffff;
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}
.text :hover {
  color: #d82367;
}

.text02 {
  top: 20%;
  left: 6%;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

.text02 :hover {
  color: #d82367;
}
.text04 {
  top: 25%;
  left: 6%;
  color: #d82367;
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

.text04 :hover {
  color: #ffffff;
}

.text06 {
  top: 5%;
  left: 6%;
  color: #d82367;
  position: absolute;
  font-size: 30px;
  font-family: NOMA;
}

.text06 :hover {
  color: #ffffff;
}
.all-case-project {
  top: 106px;
  left: 18%;
  width: 63%;
  height: 560px;
  display: flex;
  position: absolute;
  border-radius: 0px 0px 0px 0px;
  background-color: transparent;
}

@media only screen and (max-width: 1300px) {
  .all-case-project {
    margin-left: -8%;
  }
}

.text22 {
  top: 0%;
  color: rgb(255, 255, 255);
  width: 15%;
  position: absolute;
  font-size: 32px;
  font-family: NOMA;
}

.add-button {
  top: 1.5%;
  right: -25%;
  width: 90px;
  height: 32px;
  display: block;
  position: absolute;
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(17, 12, 54, 1);
}

.plus {
  top: 28%;
  right: 17%;
  width: 15%;
  height: auto;
  position: absolute;
}

.text20 {
  top: 17%;
  left: 19%;
  color: rgba(255, 255, 255, 1);
  width: 42px;
  height: auto;
  position: absolute;
  font-size: 16px;
  font-family: NOMA;
}

.text20 :hover {
  color: #d82367;
}
</style>
