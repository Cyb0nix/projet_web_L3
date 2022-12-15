<script setup>
</script>

<template>
  <div style="background-color: #0c0923">
    <div class="row" style="--bs-gutter-x: 0">
      <div class="col-auto">
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
                class="nav-link active text-white"
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
                class="nav-link text-white"
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
              <strong>USER</strong>
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
      <!-- panels -->
      <div class="col-9">
        <div class="row">
          <div class="col">
            <h2 class="p-3" style="margin-left: 8%">Projects</h2>
          </div>
          <div class="col p-3">
            <input
              type="button"
              class="btn btn-primary position-absolute top-1 end-0 add btn-toudoom"
              value="ADD"
              data-bs-toggle="modal"
              data-bs-target="#projectAddModal"
            />
          </div>
        </div>

        <div
          class="container" style="
                  background-color: #110c36;
                  border-radius: 15px 15px 15px 15px;
                  height: 85%;
                margin-top: 1.5%; margin-right: -5%; margin-left: 4%">
          <table class="table table-striped table-hover" style="color: white; text-align: center;">
            <thead>
              <tr class="2" style="font-size: 15px; font-family: NOMA">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">StartDate</th>
                <th scope="col">EndDate</th>
                <th scope="col">Client</th>
                <th scope="col">State</th>
                <th scope="col" v-if="this.isAdmin">...</th>
              </tr>
              <tr
                class="data"
                v-for="p of projects"
                v-bind:key="p.projectID"
                
              >
                <td @click="openProject(p.projectID)">{{ p.projectID }}</td>
                <td @click="openProject(p.projectID)">{{ p.projectName }}</td>
                <td @click="openProject(p.projectID)">{{ p.type }}</td>
                <td @click="openProject(p.projectID)">{{ p.startingDate.split("T")[0] }}</td>
                <td @click="openProject(p.projectID)">{{ p.endingDate.split("T")[0] }}</td>
                <td @click="openProject(p.projectID)">{{ p.client }}</td>
                <td @click="openProject(p.projectID)">{{ p.state }}</td>
                <td v-if="this.isAdmin">   
                  <img src="@/assets/trash-ico.svg" alt="" style="height: 2.5vh" class="edit" @click="delProject(p)"/>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="projectAddModal"
    tabindex="-1"
    aria-labelledby="ProjectAddModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="background-color: #0c0923; color: white">
        <div class="modal-header">
          <h5 class="modal-title" id="ProjectAddModalLabel">Add a new project</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            style="color: #ffff; opacity: 1"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form action="">
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="projectName" class="form-label">Project Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="projectName"
                    v-model="project.projectName"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="projectStartingDate" class="form-label"
                    >Starting Date</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="projectStartingDate"
                    v-model="project.startingDate"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="projectClient" class="form-label">Client</label>
                  <input
                    type="text"
                    class="form-control"
                    id="projectClient"
                    v-model="project.client"
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="projectType" class="form-label">Type</label>
                  <input
                    type="text"
                    class="form-control"
                    id="projectType"
                    v-model="project.type"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="projectEndingDate" class="form-label">Ending Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="projectEndingDate"
                    v-model="project.endingDate"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="projectState" class="form-label">State</label>
                  <select
                    id="projectState"
                    v-model="project.state"
                    placeholder="Project State"
                    required
                    class="form-select"
                  >
                    <option value="Stand By">Stand By</option>
                    <option value="Preparation">Preparation</option>
                    <option value="Started">Started</option>
                    <option value="Finish">Finish</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary btn-toudoom"
              @click="addOneProject()"
              data-bs-dismiss="modal"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectList",
  data() {
    return {
      projects: [],

      isAdmin: false,

      project: {
        projectID: null,
        projectName: null,
        type: null,
        isPaid: 0,
        startingDate: null,
        endingDate: null,
        benefits: 0,
        state: null,
        client: null,
      },
    };
  },
  methods: {
    async logout() {
      try {
        let logoutResponse = await this.$http.get("http://localhost:9000/toudoomapi/auth/logout");
        localStorage.removeItem('LoggedUser')
        this.$router.push({ name: "home" });
      } catch (error) {}
    },


    async getAllProjects() {
      let list = await this.$http.get("http://localhost:9000/toudoomapi/project/list");
      this.projects = list.data;
     
      if (localStorage.role == 'ADMIN') {
        this.isAdmin = true;
      }

    },



    async openProject(id) {
      this.$router.push({ name: "project", params: { id: id.toString() } });
    },

    async delProject(id) {
      let listp = await this.$http.get("http://localhost:9000/toudoomapi/project/del/"+id.projectID);
      this.getAllProjects();
    },

    async addOneProject() {
      try {
        let postResponse = await this.$http.post(
          "http://localhost:9000/toudoomapi/project/update/0",
          this.project
        );
        this.getAllProjects();
      } catch (error) {}
    },
  },

  created() {
    this.getAllProjects();
  },
};
</script>

<style scoped>
.add {
  margin-right: 5%;
  margin-top: 0.6%;
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
