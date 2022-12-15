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
            <h2 class="p-3" style="margin-left: 6%; margin-top: 5%">Project</h2>
          </div>
          <div class="col p-3">
            <input
              type="button"
              class="btn btn-primary btn-toudoom position-absolute top-1 end-0 add"
              value="SAVE"
              @click="save()"
            />
          </div>
        </div>

        <div class="container" style="margin-right: -5%; margin-left: 4%">
          <table class="table table-striped table-hover" style="color: white">
            <div class="row">
              <div
                class="col"
                style="background-color: #110c36; width: 48%;height: 270px;border-radius: 15px 15px 15px 15px;"
              >
                <div class="col">
                  <div class="row">
                    <div class="col mb-2 cat">INFORMATION</div>
                    <div class="col-1" style="margin-right: -2%">
                      <img
                        src="@/assets/image/Vector.svg"
                        alt="Icon_edit"
                        class="edit"
                        data-bs-toggle="modal"
                        data-bs-target="#projectEditModal"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-2 info-name">
                      Name : <span class="info">{{ project.projectName }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-2 info-name">
                      Type : <span class="info">{{ project.type }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-2 info-name">
                      Client : <span class="info">{{ project.client }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-2 info-name">
                      Start Date : <span class="info">{{ project.startingDate }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-2 info-name">
                      End Date : <span class="info">{{ project.endingDate }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-2 info-name">
                      State : <span class="info">{{ project.state }}</span>
                    </div>
                  </div>
                  <div class="row" v-if="project.isPaid">
                    <div class="col mb-2 info-name">
                      Benefits : <span class="info">{{ project.benefits + "€" }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col"
                style="
                  background-color: #110c36;
                  width: 48%;
                  border-radius: 15px 15px 15px 15px;
                  margin-left: 3%;
                  height: 270px;
                "
              >
                <div class="col">
                  <div class="row">
                    <div class="col-1" style="margin-left: 0%; margin-top: 0.6%">
                      <img src="@/assets/image/Frame.svg" alt="Icon_edit" class="edit" />
                    </div>
                    <div class="col cat" style="margin-left: -2.5%">STAFF</div>
                    <div class="col-1" style="margin-right: -2%">
                      <img
                        src="@/assets/image/Vector.svg"
                        alt="Icon_staff"
                        class="edit"
                        data-bs-toggle="modal"
                        data-bs-target="#staffAddModal"
                      />
                    </div>
                  </div>
                  <table
                    class="table table-striped table-hover"
                    style="color: white; text-align: center"
                  >
                    <thead>
                      <tr class="1" style="font-size: 15px; font-family: NOMA">
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">task</th>
                        <th scope="col">...</th>
                      </tr>
                      <tr class="data" v-for="s of staff" v-bind:key="s.staffID">
                        <td>{{ s.name }}</td>
                        <td>{{ s.role }}</td>
                        <td>{{ s.task }}</td>
                        <td>
                          <img
                            src="@/assets/trash-ico.svg"
                            alt=""
                            style="height: 2.5vh"
                            class="edit"
                            @click="delstaff(s)"
                          />
                        </td>
                      </tr>
                    </thead>
                  </table>
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
              <div class="col" style="margin-left: 2%; margin-right: 2%">
                <div class="row">
                  <div class="col cat">EQUIPMENT</div>
                  <div class="col-1" style="margin-right: -6%">
                    <img
                      src="@/assets/image/Vector.svg"
                      alt="Icon_edit"
                      class="edit"
                      data-bs-toggle="modal"
                      data-bs-target="#equipmentAddModal"
                    />
                  </div>
                </div>
                <table
                  class="table table-striped table-hover"
                  style="color: white; text-align: center"
                >
                  <thead>
                    <tr class="2" style="font-size: 15px; font-family: NOMA">
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Condition</th>
                      <th scope="col">Storage place</th>
                      <th scope="col">Available</th>
                      <th scope="col">...</th>
                    </tr>
                    <tr class="data" v-for="e of equipments" v-bind:key="e.equipmentID">
                      <td>{{ e.equipmentID }}</td>
                      <td>{{ e.name }}</td>
                      <td>{{ e.type }}</td>
                      <td>{{ e.state }}</td>
                      <td>{{ e.storagePlace }}</td>
                      <td>{{ e.available }}</td>
                      <td>
                        <img
                          src="@/assets/trash-ico.svg"
                          alt=""
                          style="height: 2.5vh"
                          class="edit"
                          @click="delEquipment(e)"
                        />
                      </td>
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

  <!-- Modal -->
  <div
    class="modal fade"
    id="projectEditModal"
    tabindex="-1"
    aria-labelledby="ProjectAddModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="background-color: #0c0923; color: white">
        <div class="modal-header">
          <h5 class="modal-title" id="ProjectAddModalLabel">Edit project</h5>
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
              @click="editProject()"
              data-bs-dismiss="modal"
            >
              Edit Informations
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="staffAddModal"
    tabindex="-1"
    aria-labelledby="ProjectAddModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="background-color: #0c0923; color: white">
        <div class="modal-header">
          <h5 class="modal-title" id="ProjectAddModalLabel">Add Staff</h5>
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
              <div class="m-3">
                <label for="projectState" class="form-label">Staff</label>
                <select
                  id="projectState"
                  v-model="assignment.staffID"
                  placeholder="Project State"
                  required
                  class="form-select"
                >
                  <option v-for="s of allStaff" v-bind:key="s.staffID" :value="s.staffID">
                    {{ s.name }} - {{ s.role }}
                  </option>
                </select>
              </div>
              <div class="m-3">
                <label for="task" class="form-label">Task</label>
                <input
                  type="text"
                  class="form-control"
                  id="task"
                  v-model="assignment.task"
                  required
                />
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
              @click="addStaff()"
              data-bs-dismiss="modal"
            >
              Add to project
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="equipmentAddModal"
    tabindex="-1"
    aria-labelledby="EquipmentAddModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="background-color: #0c0923; color: white">
        <div class="modal-header">
          <h5 class="modal-title" id="ProjectAddModalLabel">Add Equipment</h5>
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
              <div class="p-3">
                <label for="projectState" class="form-label">Equipment</label>
                <select
                  id="projectState"
                  v-model="equipmentUsed.equipmentID"
                  placeholder="Project State"
                  required
                  class="form-select"
                >
                  <option
                    v-for="e of allEquipment"
                    v-bind:key="e.equipmentID"
                    :value="e.equipmentID"
                  >
                    {{ e.type }} - {{ e.name }}
                  </option>
                </select>
              </div>
              <div class="p-3">
                <label for="startCondition" class="form-label">Start Condition</label>
                <input
                  type="text"
                  class="form-control"
                  id="startCondition"
                  v-model="equipmentUsed.startCondition"
                  required
                />
              </div>
              <div class="p-3">
                <label for="endCondition" class="form-label">End Condition</label>
                <input
                  type="text"
                  class="form-control"
                  id="endCondition"
                  v-model="equipmentUsed.endCondition"
                  required
                />
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
              @click="addEquipment()"
              data-bs-dismiss="modal"
            >
              Add to project
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectEdit",
  data() {
    return {
      assignment: {
        staffID: null,
        task: null,
      },
      equipmentUsed: {
        equipmentID: null,
        startCondition: null,
        endCondition: null,
      },
      allStaff: [],
      allEquipment: [],
      equipments: [],
      staff: [],
      project: {
        projectID: null,
        projectName: null,
        type: null,
        isPaid: null,
        startingDate: null,
        endingDate: null,
        benefits: null,
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


    async save() {
      this.$router.push({ name: "project", params: { id: this.$route.params.id } });
    },

    async getAllData() {
      try {
        let listEquipment = await this.$http.get(
          "http://localhost:9000/toudoomapi/project/equipmentList/" +
            this.$route.params.id
        );
        this.equipments = listEquipment.data;
        let listStaff = await this.$http.get(
          "http://localhost:9000/toudoomapi/project/staffList/" + this.$route.params.id
        );
        this.staff = listStaff.data;
        let projectInfo = await this.$http.get(
          "http://localhost:9000/toudoomapi/project/show/" + this.$route.params.id
        );
        this.project = projectInfo.data;
        this.project.startingDate = this.project.startingDate.split("T")[0];
        this.project.endingDate = this.project.endingDate.split("T")[0];
        let listAllEquipment = await this.$http.get(
          "http://localhost:9000/toudoomapi/equipment/list"
        );
        this.allEquipment = listAllEquipment.data;
        let listAllStaff = await this.$http.get(
          "http://localhost:9000/toudoomapi/staff/list"
        );
        this.allStaff = listAllStaff.data;
      } catch (error) {}
    },

    async delEquipment(equipment) {
      let postResponse = await this.$http.post(
        "http://localhost:9000/toudoomapi/project/delEquipment/" + this.$route.params.id,
        equipment
      );
      this.getAllData();
    },

    async delstaff(staff) {
      let postResponse = await this.$http.post(
        "http://localhost:9000/toudoomapi/project/delstaff/" + this.$route.params.id,
        staff
      );
      this.getAllData();
    },

    async addEquipment() {
      let postResponse = await this.$http.post(
        "http://localhost:9000/toudoomapi/project/addEquipment/" + this.$route.params.id,
        this.equipmentUsed
      );
      this.getAllData();
    },

    async addStaff() {
      let postResponse = await this.$http.post(
        "http://localhost:9000/toudoomapi/project/addstaff/" + this.$route.params.id,
        this.assignment
      );
      this.getAllData();
    },

    async editProject() {
      this.project.startingDate = this.project.startingDate.split("T")[0];
      this.project.endingDate = this.project.endingDate.split("T")[0];
      let postResponse = await this.$http.post(
        "http://localhost:9000/toudoomapi/project/update/" + this.$route.params.id,
        this.project
      );
      this.getAllData();
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
