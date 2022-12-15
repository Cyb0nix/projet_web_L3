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
                class="nav-link text-white active"
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
            <h2 class="p-3" style="margin-left: 8%">Staffs</h2>
          </div>
          <div class="col p-3">
            <input
              type="button"
              class="btn btn-primary btn-toudoom position-absolute top-1 end-0 add"
              value="ADD"
              data-bs-toggle="modal"
              data-bs-target="#staffAddModal"
            />
          </div>
        </div>
        <div
          class="container"
          style="background-color: #110c36;border-radius: 15px 15px 15px 15px;height: 85%;margin-top: 1.5%; margin-right: -5%; margin-left: 4%"
        >
          <table class="table table-striped table-hover" style="color: white; text-align: center;">
            <thead>
              <tr class="2" style="font-size: 15px; font-family: NOMA">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Discord ID</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Role</th>
                <th scope="col">Joining Date</th>
                <th scope="col">Is Formed</th>
                <th scope="col" v-if="this.isAdmin">...</th>
              </tr>
              <tr
                class="data"
                v-for="s of staffs"
                v-bind:key="s.staffID"
                
              >
                <td @click="openStaff(s.staffID)">{{ s.staffID }}</td>
                <td @click="openStaff(s.staffID)">{{ s.name }}</td>
                <td @click="openStaff(s.staffID)">{{ s.discordID }}</td>
                <td @click="openStaff(s.staffID)">{{ s.email }}</td>
                <td @click="openStaff(s.staffID)">{{ s.phone }}</td>
                <td @click="openStaff(s.staffID)">{{ s.role }}</td>
                <td @click="openStaff(s.staffID)">{{ s.joinDate.split("T")[0] }}</td>
                <td @click="openStaff(s.staffID)">{{ s.isFormed }}</td>
                <td>   
                  <img src="@/assets/trash-ico.svg" v-if="this.isAdmin" alt="" style="height: 2.5vh" class="edit" @click="delStaff(s)"/>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="staffAddModal"
    tabindex="-1"
    aria-labelledby="staffAddModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="background-color: #0c0923; color: white">
        <div class="modal-header">
          <h5 class="modal-title" id="staffAddModalLabel">Add a new staff</h5>
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
                  <label for="projectName" class="form-label">Staff Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="projectName"
                    placeholder="Prénom Nom"
                    v-model="staff.name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="projectStartingDate" class="form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="projectStartingDate"
                    placeholder="prénom.nom@toudoom.fr"
                    v-model="staff.email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="projectClient" class="form-label">Discord</label>
                  <input
                    placeholder="Discord#3209"
                    type="text"
                    class="form-control"
                    id="projectClient"
                    v-model="staff.discordID"
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="projectType" class="form-label">Role</label>
                  <input
                    type="text"
                    placeholder="Membre"
                    class="form-control"
                    id="projectType"
                    v-model="staff.role"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="projectEndingDate" class="form-label">Phone</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="projectEndingDate"
                    placeholder="06XXXXXXXX"
                    v-model="staff.phone"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="projectState" class="form-label">Join Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="projectEndingDate"
                    v-model="staff.joinDate"
                    required
                  />
                </div>
              </div>
              <div class="row">
              <div class="col">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="isFormed" v-model="staff.isFormed">
                  <label class="form-check-label" for="isFormed">
                    is Formed
                  </label>
                </div>
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
              @click="addOneStaff()"
              data-bs-dismiss="modal"
            >
              Add New Staff
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
      staffs: [],

      isAdmin: false,

      staff: {
        staffID : null,
        name : null,
        discordID : null,
        email : null,
        phone : null,
        role : null,
        joinDate : null,
        isFormed : null,
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


    async getAllStaffs() {
      let list = await this.$http.get("http://localhost:9000/toudoomapi/staff/list");
      this.staffs = list.data;
      if (localStorage.role == 'ADMIN') {
        this.isAdmin = true;
      }
    },

    async openStaff(id) {
      this.$router.push({ name: "staff", params: { id: id.toString() } });
    },

    async addOneStaff() {
      try {
        let postResponse = await this.$http.post("http://localhost:9000/toudoomapi/staff/update/0",this.staff);
        console.log(postResponse);
        
        this.getAllStaffs();
      } catch (error) {}
    },

    async delStaff(id) {
      let listp = await this.$http.get("http://localhost:9000/toudoomapi/staff/del/"+id.staffID);
      this.getAllStaffs();
    },
  },

  created() {
    this.getAllStaffs();
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
