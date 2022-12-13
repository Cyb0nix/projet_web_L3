<script setup></script>

<template>
  <div style="background-color: #0C0923;">
    <div class="back">
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
              <hr />
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
                <h2 class="p-3" style="margin-left: 6%; margin-top: 5%;">Project</h2>
              </div>
              <div class="col p-3">
                <input type="button" class="btn btn-primary position-absolute top-1 end-0 add" style="margin-top: 1.7%; margin-right: 3.8%;" value="Edit">
              </div>
            </div>

            <div class="container" style="margin-right: -5%; margin-left:4%">
              <table class="table table-striped table-hover" style="color: white">
                <div class="row">
                  <div class="col" style="background-color: rgb(11, 8, 36); width: 102%; height: 270px; border-radius: 15px 15px 15px 15px">
                    <div class="col" style="font-family: NOMA">
                      <div class="row">
                        <div class="col" style="font-size: 20px; margin-bottom: 3%;">INFORMATION</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col" style="background-color: rgb(11, 8, 36); width: 102%; height: 270px; border-radius: 15px 15px 15px 15px;margin-top: 3%; margin-left: -1%;">
                  <div class="col" style="margin-left: 2%; margin-right:2%;font-family: NOMA">
                    <div class="row">
                      <div class="col" style="font-size: 20px">PROJECT HISTORY</div>
                    </div>
                      <table class="table table-striped table-hover" style="color: white;text-align: center">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">StartDate</th>
                            <th scope="col">EndDate</th>
                            <th scope="col">Client</th>
                            <th scope="col">State</th>
                          </tr>
                          <tr class="data" v-for="p of projects" v-bind:key="p.projectID" @click="openProject()">
                            <td>{{ p.projectID }}</td>
                            <td>{{ p.projectName }}</td>
                            <td>{{ p.type }}</td>
                            <td>{{ p.startingDate.split("T")[0]}}</td>
                            <td>{{ p.endingDate.split("T")[0] }}</td>
                            <td>{{ p.clientID }}</td>
                            <td>{{ p.state }}</td>
                          </tr>
                        </thead>
                      </table>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "equipmentPage",
  data() {
    return {
      projects: []
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

    async getAllProjects() {
      let list = await this.$http.get("http://localhost:9000/toudoomapi/equipment/page");
      this.projects = list.data;
      console.log(this.projects);
    },

    async openProject(){
      
    }
  },

  created() {
    this.getAllProjects();
  },
};
</script>

<style scoped>

.back {
  width: 100%;
  height: 721px;
  color: #0c0923;
}
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