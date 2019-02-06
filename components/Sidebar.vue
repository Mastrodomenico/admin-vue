<template>
  <div>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <!-- Sidebar - Brand -->
      <nuxt-link
        to="/dashboard"
        tag="a"
        class="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <a>
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">iVue Admin 1</div>
        </a>
      </nuxt-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <nuxt-link to="/dashboard" tag="li" class="nav-item">
        <a class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </nuxt-link>

      <div class="sidebar-heading">Configurações</div>
      <!-- Nav Item - Charts -->
      <nuxt-link to="/users" tag="li" class="nav-item">
        <a class="nav-link">
          <i class="fas fa-fw fa-users"></i>
          <span>Usuarios</span>
        </a>
      </nuxt-link>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
