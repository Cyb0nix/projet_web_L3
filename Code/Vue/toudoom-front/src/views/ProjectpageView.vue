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
                <input type="button" class="btn btn-primary btn-toudoom position-absolute top-1 end-0 add " value="Edit" @click="edit(project.projectID)">
              </div>
            </div>

            <div class="container" style="margin-right: -5%; margin-left:4%; height: auto">
              <table class="table table-striped table-hover" style="color: white">
                <div class="row">
                  <div class="col" style="background-color: #110C36; width: 48%; height: auto; border-radius: 15px 15px 15px 15px">
                    <div>
                      <div class="row">
                        <div class="col cat mb-3">INFORMATION</div>
                      
                      </div>
                      <div class="row">
                        <div class="col mb-2 info-name">Name : <span class="info">{{project.projectName}}</span></div>
                        
                      </div>
                      <div class="row">
                        <div class="col mb-2 info-name">Type : <span class="info">{{project.type}}</span></div>
                        
                      </div>
                      <div class="row">
                        <div class="col mb-2 info-name">Client : <span class="info">{{project.client}}</span></div>
                        
                      </div>
                      <div class="row">
                        <div class="col mb-2 info-name">Start Date : <span class="info">{{project.startingDate.split("T")[0]}}</span></div>
                        
                      </div>
                      <div class="row">
                        <div class="col mb-2 info-name">End Date : <span class="info">{{project.endingDate.split("T")[0]}}</span></div>
                        
                      </div>
                      <div class="row">
                        <div class="col mb-2 info-name">State : <span class="info">{{project.state}}</span></div>
                        
                      </div>
                      <div class="row" v-if="project.isPaid">
                        <div class="col mb-2 info-name">Benefits : <span class="info">{{project.benefits + "€"}}</span></div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="col" style="background-color: #110C36; width: 48%; border-radius: 15px 15px 15px 15px; margin-left: 3%; height: 270px;">
                    <div class="col">
                      <div class="row">
                        <div class="col-1" style="margin-left: 0%; margin-top: 0.6%;">
                          <img src="@/assets/image/Frame.svg" alt="Icon_staff" class="staffimg" />
                        </div>
                        <div class="col cat" style=" margin-left: -2.5%;">STAFF</div>
                      </div>
                      <table class="table table-striped table-hover" style="color: white; text-align: center">
                          <thead>
                            <tr class="1" style="font-size: 15px; font-family: NOMA">
                              <th scope="col">Last Name</th>
                              <th scope="col">First Name</th>
                              <th scope="col">Role</th>
                            </tr>
                            <tr class="data" v-for="s of staff" v-bind:key="s.staffID" @click="openStaff(s.staffID)">
                              <td>{{ s.staffID }}</td>
                              <td>{{ s.name }}</td>
                              <td>{{ s.role }}</td>
                            </tr>
                          </thead>
                        </table>
                    </div>
                  </div>
                </div>
                  

                  <div class="col" style="background-color: #110C36; width: 102%; min-height:270px; height: auto; border-radius: 15px 15px 15px 15px;margin-top: 3%; margin-left: -1%;">
                    <div class="col" style="margin-left: 2%; margin-right:2%;">
                      <div class="row">
                        <div class="col cat">EQUIPMENT</div>
                      </div>
                        <table class="table table-striped table-hover" style="color: white;text-align: center">
                          <thead>
                            <tr class="2" style="font-size: 15px; font-family: NOMA">
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Type</th>
                              <th scope="col">Condition</th>
                              <th scope="col">Storage place</th>
                              <th scope="col">Available</th>
                            </tr>
                            <tr class="data" v-for="e of equipments" v-bind:key="e.equipmentID" @click="openEquipment(e.equipmentID)">
                              <td>{{ e.equipmentID }}</td>
                              <td>{{ e.name }}</td>
                              <td>{{ e.type }}</td>
                              <td>{{ e.state}}</td>
                              <td>{{ e.storagePlace}}</td>
                              <td>{{ e.available }}</td>
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
</template>

<script>
export default {
  name: "projectPage",
  data() {
    return {
      equipments: [],
      staff : [],
      project : {
            projectID : null,
            projectName : null,
            type: null,
            isPaid : null,
            startingDate : null,
            endingDate : null,
            benefits : null,
            state : null,
            client : null
      }
    };
  },
  methods: {
    async logout() {
      try {
        let logoutResponse = await this.$http.get("http://localhost:9000/toudoomapi/auth/logout");
        this.$router.push({ name: "home" });
      } catch (error) {}
    },

    async getAllData() {

      try {

        let listEquipment = await this.$http.get("http://localhost:9000/toudoomapi/project/equipmentList/"+this.$route.params.id);
        this.equipments = listEquipment.data;
        let listStaff = await this.$http.get("http://localhost:9000/toudoomapi/project/staffList/"+this.$route.params.id);
        this.staff = listStaff.data;
        let projectInfo =await this.$http.get("http://localhost:9000/toudoomapi/project/show/"+this.$route.params.id);
        this.project = projectInfo.data;
      } catch (error) {
        
      }
      
    },

    async openEquipment(id){
      this.$router.push({ name: 'equipment', params: {id : id.toString()}});
    },

    async openStaff(id){
      this.$router.push({ name: 'staff', params: {id : id.toString()}});
    },

    async edit(id){
      this.$router.push({ name: 'projectEdit', params: {id : id.toString()}});
    }
  },

  created() {
    this.getAllData();
    
  }
};
</script>

<style scoped>


.add{
    margin-top: 1.7%; 
    margin-right: 3.8%; 
}

.btn-toudoom {
--bs-btn-color: #fff;
--bs-btn-bg: #d82367;
--bs-btn-border-color: #d82367;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #ea095f;
--bs-btn-hover-border-color: #ea095f;
--bs-btn-focus-shadow-rgb: 49, 132, 253;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #d82367;
--bs-btn-active-border-color: #d82367;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #fff;
--bs-btn-disabled-bg: #dd6090;
--bs-btn-disabled-border-color: #dd6090;
}
</style>