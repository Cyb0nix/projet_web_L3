
<template>
  <div id="app">
    <img v-bind:src="require('./views/image/Back.png')" alt="background" class="back"/>
    <div class="pagemenu">
            <span class="text"><span>Projects</span></span>
            <span class="text02"><span>Staffs</span></span>
            <span class="text04"><span>Equipment</span></span>
            <span class="text06"><span>MENU</span></span>
          </div>
          <div class="menu">
            <img
            v-bind:src="require('./views/image/image 1.png')"
              alt="logo"
              class="logo"
            />
          </div>
          <div class="navTab">
            <span class="text08"><span>VOD</span></span>
            <span class="text10"><span>Event</span></span>
            <span class="text12"><span>Home</span></span>
            <img
            v-bind:src="require('./views/image/Ellipse 1.png')"
              alt="pp"
              class="pp"/>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
.body {
  width: 95%;
  height: 100%;
}

.back {
  width: 100%;
  height: 721px;
  color: #0C0923;
}
.pagemenu {
  top: 11%;
  left: 0px;
  width: 230px;
  height: 89%;
  display: flex;
  position: absolute;
  border-radius: 0px 5px 0px 0px;
  background-color: rgba(17, 12, 54, 1);
}

@media only screen and (max-width: 1300px){
  .pagemenu{
      display: none;
  }
}

.menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 75px;
  display: flex;
  position: absolute;
  background-color: rgba(17, 12, 53, 0.949999988079071);
}

.logo {
  top: 15%;
  left: 1%;
  width: 186px;
  height: 53px;
  position: absolute;
  border-color: transparent;
}

@media only screen and (max-width: 600px){
  .logo{
      display: none;
  }
}

.navTab {
  top: 1.7%;
  right: 1%;
  height: 50px;
  display: flex;
  padding: 0;
  position: absolute; 
  background-color: transparent;
}

@media only screen and (max-width: 1500px){
  .navTab{
      top:2.7%;
  }
}

.text {
  top: 15%;
  left: 6%;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}
.text :hover{
  color: #D82367;
}

.text02 {
  top: 20%;
  left: 6%;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

.text02 :hover{
  color: #D82367;
}
.text04 {
  top: 25%;
  left: 6%;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

.text04 :hover{
  color: #D82367;
}
.text06 {
  top: 5%;
  left: 6%;
  color: #D82367;
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

.text06 :hover{
  color: #ffffff;
}

.text08 {
  top: 21%;
  left: 45%;
  color: rgba(255, 255, 255, 1);
  position: relative;
  font-size: 24px;
  font-family: NOMA;
}

.text10 {
  top: 21%;
  left: -15%;
  color: rgba(255, 255, 255, 1);
  position: relative;
  font-size: 24px;
  font-family: NOMA;
}

.text12 {
  top: 21%;
  left: -85%;
  color: #D82367;
  position: relative;
  font-size: 24px;
  font-family: NOMA;  
}

</style>