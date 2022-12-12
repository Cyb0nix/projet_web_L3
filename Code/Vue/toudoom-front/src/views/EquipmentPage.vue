<script setup>
  import NavbarVue from "../components/Navbar.vue";
</script>

<template>
  <div style="background-color: #0C0923;">
    <div class="back">
      <div style="background-color: #0C0923;">
          <!-- SideBar -->
            <div class="d-flex flex-column flex-shrink-0 p-3" style="width: 280px; height:100vh; background-color:#110C36;">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
              <span class="fs-4"><img src="@/assets/image/logo.svg" alt="" width="85%"></span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item" style="--bs-nav-pills-link-active-bg: #D82367;">
                <a href="#" class="nav-link active" aria-current="page">
                  <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"/></svg>
                  Project
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
                  Staff
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"/></svg>
                  Equipment
                </a>
              </li>
            </ul>
            <hr>
            <div class="dropdown">
              <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" width="32" height="32" class="rounded-circle me-2">
                <strong>User</strong>
              </a>
              <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      <div class="all-case-project">
        <div class="case-equipement">
          <span class="text14"><span>Project History</span></span>
          <span class="text23">
            <span>
                Text..
            </span>
          </span>
        </div>
        <div class="case-information">
          <span class="text18"><span>INFORMATION</span></span>
          <span class="text19">
            <span>
              Text.
            </span>
          </span>
        </div>
        <button type="button" class="edit-button">
          <span class="text20"><span>EDIT</span></span>
          <img src="@/assets/image/Vector.svg" alt="Icon_edit" class="editimg" />
        </button>
        <span class="text22"><span>EQUIPMENT</span></span>
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

.case-information {
  top: 10%;
  left: 0px;
  width: 125%;
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
  vertical-align: center;
}

.text20 :hover {
  color: #d82367;
}
</style>