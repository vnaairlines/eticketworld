<template>
  <div class="Eticketstat">
    <h1>E-Ticket statistics overview</h1>
    <p>There are currently {{ return_no_of_eticket }} E-Tickets.</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Eticketstat",
  computed: {
    ...mapGetters(["return_no_of_etickets"])
  }
};
</script>

