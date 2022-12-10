<template>
  <nav
    class="navbar sticky-top navbar-expand-lg navbar-dark"
    style="background-color: #110c35; opacity: 95"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/image/logo.svg"
          alt="Toudoom"
          width="40%"
          style="margin: -8px; margin-left: 1px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
nav {
  background: rgba(17, 12, 53, 0.95);
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
}

li {
  font-family: Toudoom;
}
</style>
