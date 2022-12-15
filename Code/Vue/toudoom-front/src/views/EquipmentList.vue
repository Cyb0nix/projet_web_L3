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
            <h2 class="p-3" style="margin-left: 8%;">Equipments</h2>
          </div>
          <div class="col p-3">
            <input
              type="button"
              class="btn btn-primary btn-toudoom position-absolute top-1 end-0 add "
              value="ADD"
              data-bs-toggle="modal"
              data-bs-target="#equipmentAddModal"
            />
          </div>
        </div>
        <div
          class="container"
          style="background-color: #110c36;border-radius: 15px 15px 15px 15px;height: 85%;margin-top: 1.5%; margin-right: -5%; margin-left: 4%"
        >
          <table class="table table-striped table-hover" style="text-align: center; color: white">
            <thead>
              <tr class="info-name">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Condition</th>
                <th scope="col">Storage Place</th>
                <th scope="col">Available</th>
                <th scope="col" v-if="this.isAdmin">...</th>
              </tr>
              <tr
                class="data"
                v-for="e of equipments"
                v-bind:key="e.equipmentID"
              >
                <td @click="openEquipment(e.equipmentID)">{{ e.equipmentID }}</td>
                <td @click="openEquipment(e.equipmentID)">{{ e.name }}</td>
                <td @click="openEquipment(e.equipmentID)">{{ e.type }}</td>
                <td @click="openEquipment(e.equipmentID)">{{ e.state }}</td>
                <td @click="openEquipment(e.equipmentID)">{{ e.storagePlace }}</td>
                <td @click="openEquipment(e.equipmentID)">{{ e.available }}</td>
                <td @click="openEquipment(e.equipmentID)">   
                  <img v-if="this.isAdmin" src="@/assets/trash-ico.svg" alt="" style="height: 2.5vh" class="edit" @click="delEquipment(e)"/>
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
    id="equipmentAddModal"
    tabindex="-1"
    aria-labelledby="equipmentAddModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="background-color: #0c0923; color: white">
        <div class="modal-header">
          <h5 class="modal-title" id="staffAddModalLabel">Add a new equipment</h5>
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
                    <label for="projectName" class="form-label">Equipment Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="projectName"
                      placeholder="name"
                      v-model="equipment.name"
                      required
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="projectType" class="form-label">Type</label>
                    <input
                      type="text"
                      placeholder="Type"
                      class="form-control"
                      id="projectType"
                      v-model="equipment.type"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="projectStartingDate" class="form-label"
                      >Condition</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="projectStartingDate"
                      placeholder="Condition"
                      v-model="equipment.state"
                      required
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="projectEndingDate" class="form-label">Purchase Date</label>
                    <input
                      type="date"
                      class="form-control"
                      id="projectEndingDate"
                      placeholder=""
                      v-model="equipment.purchaseDate"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="projectClient" class="form-label">Renting Rate</label>
                    <input
                      placeholder="xx €"
                      type="number"
                      class="form-control"
                      id="projectClient"
                      v-model="equipment.rentingRate"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="projectState" class="form-label">Bail Rate</label>
                    <input
                      type="number"
                      class="form-control"
                      id="projectEndingDate"
                      v-model="equipment.bailRate"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="m-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="isFormed" v-model="equipment.available">
                      <label class="form-check-label" for="isFormed">
                        Available
                      </label>
                    </div>
                  </div> 
                </div>

                <div class="col">
                  <div class="mb-3">
                    <label for="projectState" class="form-label">Storage Place</label>
                    <input
                      type="text"
                      class="form-control"
                      id="projectEndingDate"
                      v-model="equipment.storagePlace"
                      required
                    />
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
              @click="addEquipment()"
              data-bs-dismiss="modal"
            >
              Add New Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "equipmentList",
  data() {
    return {
      equipments: [],

      isAdmin : false,

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
        let logoutResponse = await this.$http.get("http://localhost:9000/toudoomapi/auth/logout");
        localStorage.removeItem('LoggedUser')
        this.$router.push({ name: "home" });
      } catch (error) {}
    },


    async getAllEquipments() {
      let list = await this.$http.get("http://localhost:9000/toudoomapi/equipment/list");
      this.equipments = list.data;
      if (localStorage.role == 'ADMIN') {
        this.isAdmin = true;
      }
    },

    async delEquipment(id) {
      let listp = await this.$http.get("http://localhost:9000/toudoomapi/equipment/del/"+id.equipmentID);
      this.getAllEquipments();
    },

    async addEquipment() {
      try {
        this.equipment.purchaseDate = this.equipment.purchaseDate.split("T")[0];
        let postResponse = await this.$http.post("http://localhost:9000/toudoomapi/equipment/update/0",this.equipment);
        this.getAllEquipments();
      } catch (error) {}
    },

    async openEquipment(id) {
      console.log(id);
      this.$router.push({ name: "equipment", params: { id: id.toString() } });
    },
  },


  created() {
    this.getAllEquipments();
  },
};
</script>

<style scoped>

.add {
  margin-top: 0.5%;
  margin-right: 5%;
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
