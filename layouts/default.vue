<template>
<body id="page-top">
  <div id="wrapper">
    <sidebar/>

    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <top-bar/>

        <div class="container">
          <div class="mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit, autem natus eum animi iure. </p>
          </div>         
          <div>
            <nuxt/>
          </div>
        </div>
      </div>
      <foot/>
    </div>
  </div>

  <script src="/jquery/jquery.min.js"></script>
  <script src="/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import TopBar from '~/components/TopBar.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Sidebar,
    TopBar,
    Foot
  }
}
</script>


<style>
</style>
