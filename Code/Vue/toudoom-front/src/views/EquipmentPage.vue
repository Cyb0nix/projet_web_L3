<script setup></script>

<template>
  <div style="background-color: #0c0923">
    <div class="row" style="--bs-gutter-x: 0">
      <div class="col-md-auto">
        <!-- SideBar -->
        <div
          class="d-flex flex-column flex-shrink-0 p-3"
          style="width: 280px; height: 100vh; background-color: #110c36"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg class="bi pe-none me-2" width="40" height="32">
              <use xlink:href="#bootstrap" />
            </svg>
            <span class="fs-4"
              ><img src="@/assets/image/logo.svg" alt="" width="150px"
            /></span>
          </a>
          <hr />
          <ul
            class="nav nav-pills flex-column mb-auto"
            style="--bs-nav-pills-link-active-bg: #d82367"
          >
            <li>
              <router-link
                to="/admin/projectList"
                class="nav-link text-white"
                style="text-align: center"
                >project</router-link
              >
            </li>

            <li>
              <router-link
                to="/admin/staffList"
                class="nav-link text-white"
                style="text-align: center"
                >Staff</router-link
              >
            </li>

            <li>
              <router-link
                to="/admin/equipmentList"
                class="nav-link text-white active"
                style="text-align: center"
                >Equipment</router-link
              >
            </li>
          </ul>
          <hr />
          <div class="dropdown">
            <a
              href=""
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <strong>User</strong>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark text-small shadow"
              style="--bs-dropdown-bg: #d82367"
            >
              <!-- <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider" /></li> -->
              <li><a class="dropdown-item" @click="logout()">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col">
            <h2 class="p-3" style="margin-left: 6%; margin-top: 5%">Equipment</h2>
          </div>
          <div class="col p-3">
            <input
              type="button"
              class="btn btn-primary position-absolute top-1 end-0 add btn-toudoom"
              value="EDIT"
              @click="edit(this.$route.params.id)"
            />
          </div>
        </div>

        <div class="container" style="margin-right: -5%; margin-left: 4%">
          <table class="table table-striped table-hover" style="color: white">
            <div class="row">
              <div
                class="col"
                style=" 
                  background-color: #110c36;
                  width: 102%;
                  height: 270px;
                  border-radius: 15px 15px 15px 15px;
                "
              >
                <div class="col">
                  <div class="row">
                    <div class="col cat" style="font-size: 20px; margin-bottom: 3%">
                      INFORMATION
                    </div>
                  </div>
                  <div class="row">
                    <div class="col info-name mb-2">
                      Name : <span class="info">{{ equipment.name }}</span>
                    </div>
                    <div class="col info-name mb-2">
                      Purchase Date : <span class="info">{{ equipment.purchaseDate }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col info-name mb-2">
                       Type : <span class="info">{{ equipment.type }}</span>
                    </div>
                    <div class="col info-name mb-2">
                      Storage Place : <span class="info">{{ equipment.storagePlace }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col info-name mb-2">
                      Condition : <span class="info">{{ equipment.state }}</span>
                    </div>
                    <div class="col info-name mb-2">
                      Renting Rate : <span class="info">{{ equipment.rentingRate }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col info-name mb-2">
                      Available : <span class="info">{{ equipment.available }}</span>
                    </div>
                    <div class="col info-name mb-2">
                      Bail Rate: <span class="info">{{ equipment.bailRate }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col"
              style="
                background-color: #110c36;
                width: 102%;
                height: 270px;
                border-radius: 15px 15px 15px 15px;
                margin-top: 3%;
                margin-left: -1%;
              "
            >
              <div
                class="col"
                style="margin-left: 2%; margin-right: 2%;"
              >
                <div class="row">
                  <div class="col cat">PROJECT HISTORY</div>
                </div>
                <table
                  class="table table-striped table-hover"
                  style="color: white; text-align: center"
                >
                  <thead>
                    <tr class="info-name">
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">StartDate</th>
                      <th scope="col">EndDate</th>
                      <th scope="col">Client</th>
                      <th scope="col">State</th>
                    </tr>
                    <tr
                      class="data"
                      v-for="p of projects"
                      v-bind:key="p.projectID"
                      @click="openProject(p.projectID)"
                    >
                      <td>{{ p.projectID }}</td>
                      <td>{{ p.projectName }}</td>
                      <td>{{ p.type }}</td>
                      <td>{{ p.startingDate.split("T")[0] }}</td>
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
</template>

<script>
export default {
  name: "equipmentPage",
  data() {
    return {
      projects: [],
      equipment:{
        equipmentID: null,
        type: null,
        name: null,
        state: null,
        available: null,
        purchaseDate: null,
        storagePlace : null,
        rentingRate : null,
        bailRate : null,
      }
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

    async getAllData() {

      let list = await this.$http.get("http://localhost:9000/toudoomapi/equipment/getprojects/"+this.$route.params.id);
      this.projects = list.data;
      let thisEquipment = await this.$http.get("http://localhost:9000/toudoomapi/equipment/show/"+this.$route.params.id);
      this.equipment = thisEquipment.data;
      this.equipment.purchaseDate = this.equipment.purchaseDate.split("T")[0];
    },

    async openProject(id) {
      this.$router.push({ name: "project", params: { id: id.toString() } });
    },

    async edit(id) {
      this.$router.push({ name: "equipmentEdit", params: { id: id.toString() } });
    },
  },

  created() {
    this.getAllData();
  },
};
</script>

<style scoped>


.add {
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
