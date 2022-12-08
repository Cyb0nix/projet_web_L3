<template>
    
  <div class="body">
      <div class="back">
        <div class="all-case-project">
          <div class="case-equipement">
            <span class="text14"><span>EQUIPEMENT</span></span>
            <span class="text23"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio temporibus voluptas error distinctio hic quae corrupti vero doloribus optio! Inventore ex quaerat modi blanditiis soluta maiores illum, ab velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio temporibus voluptas error distinctio hic quae corrupti vero doloribus optio! Inventore ex quaerat modi blanditiis soluta maiores illum, ab velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio temporibus voluptas error distinctio hic quae corrupti vero doloribus optio! Inventore ex quaerat modi blanditiis soluta maiores illum, ab velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio temporibus voluptas error distinctio hic quae corrupti vero doloribus optio! Inventore ex quaerat modi blanditiis soluta maiores illum, ab velit.</span></span>
          </div>
          <div class="case-staff">
            <span class="text16"><span>STAFF</span></span>
            <span class="text21"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio temporibus voluptas error distinctio hic quae corrupti vero doloribus optio! Inventore ex quaerat modi blanditiis soluta maiores illum, ab velit.</span></span>
            <img
            v-bind:src="require('./image/Frame.png')"
              alt="Icon_staff"
              class="frame"
            />
          </div>
          <div class="case-information">
            <span class="text18"><span>INFORMATION</span></span>
            <span class="text19"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio temporibus voluptas error distinctio hic quae corrupti vero doloribus optio! Inventore ex quaerat modi blanditiis soluta maiores illum, ab velit.</span></span>
          </div>
          <div class="edit-button">
            <span class="text20"><span>EDIT</span></span>
          </div>
          <span class="text22"><span>PROJECT</span></span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Back',
  props: {},
}
</script>

<style scoped>


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
  border-radius: 0px 0px 0px 0px;
  background-color: rgba(17, 12, 53, 0.95);
}

.image1 {
  top: 15%;
  left: 1%;
  width: 186px;
  height: 53px;
  position: absolute;
  border-color: transparent;
}

@media only screen and (max-width: 600px){
  .image1{
      display: none;
  }
}
.text {
  top: 15%;
  left: 6%;
  color: #D82367;
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
  background-color:rgba(17, 12, 53, 0.95);
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

@media only screen and (max-width: 1300px){
  .all-case-project{
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

.text18 :hover{
  color: #D82367;
}

@media only screen and (max-width:500px){
  .text18{
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

@media only screen and (max-width:1300px){
  .frame{
      display: none;
  }
}

.text16{
  top: 3%;
  left: 8%;
  color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
  position: absolute;
  font-size: 20px;
  font-family: NOMA;
}

@media only screen and (max-width:1300px){
  .text16{
      left: 5%;
  }
}

@media only screen and (max-width:500px){
  .text16{
      left: 8%;
  }
}

.text16 :hover{
  color: #D82367;
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

.text14 :hover{
  color: #D82367;
}

@media only screen and (max-width:500px){
  .text14{
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
  left: 17%;
  width: 70px;
  height: 32px;
  display: block;
  position: absolute;
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(17, 12, 54, 1);
}

@media only screen and (max-width:1500px){
  .edit-button{
      display: none;
  }
}
@media only screen and (max-width:600px){
  .edit-button{
      top: -15%;
      left: -7%;
      display: block;
      background-color: #0C0923;
  }
}
.text20 {
  top: 14%;
  left: 25%;
  color: rgba(255, 255, 255, 1);
  width: 42px;
  height: auto;
  position: absolute;
  font-size: 16px;
  font-family: NOMA;
}

.text20 :hover{
  color: #D82367;
}
</style>