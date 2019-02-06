<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
      </button>
      <!-- Topbar Navbar -->
      <div class="navbar-nav ml-auto">
        <b-dropdown variant="button" no-caret>
          <template slot="button-content">
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
            <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/40x40">
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">Logout</b-dropdown-item>
        </b-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
