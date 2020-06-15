<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">TrainBookingPlatform</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/tutorials" class="nav-link">Tutorials</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
        <li class="nav-item">
          <a href="/eticket" class="nav-link">E-Ticket</a>
        </li>
        <li class="nav-item">
          <a href="/routings" class="nav-link">Routings</a>
        </li>
        <li class="nav-item">
          <a href="/vuextester" class="nav-link">Vuex Tester</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
