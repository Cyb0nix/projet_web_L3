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
        <div class="all-case-staff">
          <div class="case-project">
            <img src="@/assets/image/Vector.svg" alt="Icon_edit" class="editimg" />
            <span class="text14"><span>PROJECT HISTORY</span></span>
            <span class="text23"><span>Lorem ipum</span></span>
          </div>
          <div class="case-skills">
            <span class="text16"><span>SKILLS</span></span>
            <img src="@/assets/image/Vector.svg" alt="Icon_edit" class="editimg" />
            <span class="text21"><span>Lastname Firstname Role</span></span>
            <img src="@/assets/image/Frame.png" alt="Icon_skills" class="frame" />
          </div>
          <div class="case-information">
            <span class="text18"><span>INFORMATION</span></span>
            <img src="@/assets/image/Vector.svg" alt="Icon_edit" class="editimg" />
            <span class="text19"><span></span></span>
          </div>
          <button type="button" class="save-button">
            <span class="text20"><span>SAVE</span></span>
            <img src="@/assets/image/save.svg" alt="Icon_save" class="saveimg" />
          </button>
        <span class="text22"><span>STAFFS</span></span>
      </div>
    </div>
  </div>
</template>