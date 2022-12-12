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
          <button type="button" class="add-button">
            <span class="text20"><span>ADD</span></span>
            <img src="@/assets/image/+.svg" alt="+" class="plus" />
          </button>
        <span class="text22"><span>STAFF</span></span>
      </div>
    </div>
  </div>
</template>