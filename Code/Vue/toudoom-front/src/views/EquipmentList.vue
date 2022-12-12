<script setup></script>

<template>
  <div style="background-color: #0C0923;">
    <div class="row" style="--bs-gutter-x: 0">
      <div class="col-md-auto">
        <!-- SideBar -->
        <div class="d-flex flex-column flex-shrink-0 p-3" style="width: 280px; height: 100vh; background-color: #110c36">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="bi pe-none me-2" width="40" height="32">
              <use xlink:href="#bootstrap" />
            </svg>
            <span class="fs-4"
              ><img src="@/assets/image/logo.svg" alt="" width="150px"/>
            </span>
          </a>
          <hr/>
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item" style="--bs-nav-pills-link-active-bg: #d82367">
              <a href="#" class="nav-link active" aria-current="page">
                <svg class="bi pe-none me-2" width="16" height="16">
                  <use xlink:href="#home" />
                </svg>
                Project
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi pe-none me-2" width="16" height="16">
                  <use xlink:href="#speedometer2" />
                </svg>
                Staff
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi pe-none me-2" width="16" height="16">
                  <use xlink:href="#table" />
                </svg>
                Equipment
              </a>
            </li>
          </ul>
          <hr />
          <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <strong>User</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" style="--bs-dropdown-bg: #d82367">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" @click="logout()">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col">
            <h2 class="p-3">Equipments</h2>
          </div>
          <div class="col p-3">
            <input type="button" class="btn btn-primary position-absolute top-1 end-0 add" value="Add">
          </div>
        </div>
        <div class="container" style="margin-top:1.5%; margin-right: -5%; margin-left:4%">
          <table class="table table-striped table-hover" style="color: white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Condition</th>
                <th scope="col">Storage Place</th>
                <th scope="col">Available</th>
              </tr>
              <tr class="data" v-for="e of equipments" v-bind:key="p.equipmentID" @click="openEquipment()">
                <td>{{ e.projectID }}</td>
                <td>{{ e.projectName }}</td>
                <td>{{ e.type }}</td>
                <td>{{ e.Condition }}</td>
                <td>{{ e.Available }}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div> 
    </div>
  </div>
</template>


<script>
export default {
  name: "equipmentList",
  data() {
    return {
      equipments: []
    };
  },
  methods: {
    async logout() {
      try {
        // console.log("test");
        // let logoutResponse = await this.$http.get("http://localhost:9000/toudoomapi/auth/logout");
        // console.log(logoutResponse);
        this.$router.push({ name: "home" });
      } catch (error) {}
    },

    async getAllEquipments() {
      let list = await this.$http.get("http://localhost:9000/toudoomapi/equipment/list");
      this.equipments = list.data;
      console.log(this.equipments);
    },

    async openEquipment(){
      
    }
  },

  created() {
    this.getAllEquipments();
  },
};
</script>

<style scoped>
.data:hover {
    color: #d82367;
    background-color: rgba(255, 255, 255, 0.05);
}

.add{
    margin-right: 5%; 
    margin-top: 0.6%; 
    background-color: #d82367; 
    border-color: #d82367;
}

.add:hover{
    background-color: #d823686e;
    border-color: #d823686e;
}

</style>
