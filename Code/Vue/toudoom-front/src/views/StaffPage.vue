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
          <span class="text14"><span>PROJECT HISTORY</span></span>
          <span class="text23">
            <span> Lorem Ipsum </span>
          </span>
        </div>
        <div class="case-skills">
          <span class="text18"><span>SKILLS</span></span>
          <span class="text19">
            <span>Lorem Ipsum</span>
          </span>
        </div>
        <div class="case-information">
          <span class="text18"><span>INFORMATION</span></span>
          <span class="text19">
            <span> Lorem Ipsum </span>
          </span>
        </div>
        <button type="button" class="edit-button">
          <span class="text20"><span>EDIT</span></span>
          <img src="@/assets/image/Vector.svg" alt="Icon_edit" class="editimg" />
        </button>
        <span class="text22"><span>STAFF</span></span>
      </div>
    </div>
  </div>
</template>