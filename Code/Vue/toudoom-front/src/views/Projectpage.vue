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
        <div class="case-equipement">
          <span class="text14"><span>EQUIPEMENT</span></span>
          <span class="text23"
            ><span
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio
              temporibus voluptas error distinctio hic quae corrupti vero doloribus optio!
              Inventore ex quaerat modi blanditiis soluta maiores illum, ab velit.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Ut odio temporibus
              voluptas error distinctio hic quae corrupti vero doloribus optio! Inventore
              ex quaerat modi blanditiis soluta maiores illum, ab velit.Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Ut odio temporibus voluptas error
              distinctio hic quae corrupti vero doloribus optio! Inventore ex quaerat modi
              blanditiis soluta maiores illum, ab velit.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ut odio temporibus voluptas error distinctio
              hic quae corrupti vero doloribus optio! Inventore ex quaerat modi blanditiis
              soluta maiores illum, ab velit.</span
            ></span
          >
        </div>
        <div class="case-staff">
          <span class="text16"><span>STAFF</span></span>
          <span class="text21">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio
              temporibus voluptas error distinctio hic quae corrupti vero doloribus optio!
              Inventore ex quaerat modi blanditiis soluta maiores illum, ab velit.</span>
            </span>
          <img src="@/assets/image/Frame.png" alt="Icon_staff" class="frame" />
        </div>
        <div class="case-information">
          <span class="text18"><span>INFORMATION</span></span>
          <span class="text19">
            <span>
              <ul>
                <li>Name :</li>
                <li>Type :</li>
                <li>Client :</li>
                <li>Start Date :</li>
                <li>End Date :</li>
                <li>Benefits :</li>
                <li>State :</li>
              </ul>
            </span>
          </span>
        </div>
        <div class="edit-button">
          <span class="text20"><span>EDIT</span></span>
          <img src="@/assets/image/Vector.svg" alt="Icon_edit" class="editimg" />
        </div>
        <span class="text22"><span>PROJECT</span></span>
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
  color: #d82367;
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}
.text :hover {
  color: #ffffff;
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
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

.text04 :hover {
  color: #d82367;
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

.case-information {
  top: 10%;
  left: 0px;
  width: 60%;
  height: 216px;
  display: flex;
  position: absolute;
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(17, 12, 54, 1);
}

.text18 {
  top: 3%;
  left: 3%;
  color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

.text18 :hover {
  color: #d82367;
}

@media only screen and (max-width: 500px) {
  .text18 {
    left: 10.5%;
  }
}

.text19 {
  top: 20%;
  left: 3%;
  max-width: 500px;
  max-height: 150px;
  margin-right: 8%;
  margin-left: 3%;
  color: rgb(255, 255, 255);
  position: relative;
  font-size: 12px;
  font-family: NOMA;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 15;
  -webkit-box-orient: vertical;
  line-height: 180%;
}

.case-staff {
  top: 10%;
  left: 65%;
  width: 60%;
  height: 216px;
  display: flex;
  padding: 0;
  position: absolute;
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(17, 12, 54, 1);
}

.frame {
  top: 3%;
  left: 2.5%;
  width: 5%;
  height: 25px;
  position: absolute;
}

@media only screen and (max-width: 1300px) {
  .frame {
    display: none;
  }
}

.text16 {
  top: 3%;
  left: 8%;
  color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

@media only screen and (max-width: 1300px) {
  .text16 {
    left: 5%;
  }
}

@media only screen and (max-width: 500px) {
  .text16 {
    left: 8%;
  }
}

.text16 :hover {
  color: #d82367;
}

.text23 {
  top: 20%;
  left: 3%;
  max-width: 1500px;
  max-height: 192px;
  margin-right: 6%;
  margin-left: 0;
  color: rgb(255, 255, 255);
  position: relative;
  font-size: 12px;
  font-family: NOMA;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 15;
  -webkit-box-orient: vertical;
}

.case-equipement {
  top: 55%;
  left: 0px;
  width: 125%;
  height: 260px;
  display: flex;
  position: absolute;
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(17, 12, 54, 1);
}

.text14 {
  top: 3%;
  left: 1.5%;
  color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

.text14 :hover {
  color: #d82367;
}

@media only screen and (max-width: 500px) {
  .text14 {
    left: 4%;
  }
}

.text21 {
  top: 20%;
  left: 3%;
  max-width: 500px;
  max-height: 150px;
  margin-right: 8%;
  margin-left: 3%;
  color: rgb(255, 255, 255);
  position: relative;
  font-size: 12px;
  font-family: NOMA;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 15;
  -webkit-box-orient: vertical;
}

.text22 {
  top: 0%;
  color: rgb(255, 255, 255);
  width: 15%;
  position: absolute;
  font-size: 32px;
  font-family: NOMA;
}

.edit-button {
  top: 1.5%;
  right: -25%;
  width: 90px;
  height: 32px;
  display: block;
  position: absolute;
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(17, 12, 54, 1);
}

.editimg {
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