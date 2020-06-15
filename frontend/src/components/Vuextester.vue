

<template>
  <div class="left">
      <div>
         <h1>Vuex State Testing</h1>
         <h4>E-Ticket statistics overview</h4>
         <p>There are currently {{ return_no_of_etickets }} E-Tickets.</p>
         <p>There are currently {{ return_valid_etickets }} valid E-Tickets.</p>
         <p>There are currently {{ return_invalid_etickets }} invalid E-Tickets.</p>
         <button class="badge badge-danger mr-2" @click="invalidate_tickets" >
              Invalidate Tickets
         </button>
          <button class="badge badge-danger mr-2" @click="validate_tickets" >
              Validate Tickets
         </button>
      </div>
      <div>
      <ul>
        <li v-for="eticket in etickets" :key="eticket.id">
          From: {{ eticket.fromcity }} To: {{ eticket.tocity }} with E-Ticket No: {{ eticket.eticketno }}
        </li>
      </ul>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "vuextester",
  data() {
    return {
      eticket_id: 3
    };
  },
  computed: {
    ...mapState(["etickets"]),
    ...mapGetters([
      "return_invalid_etickets",
      "return_valid_etickets",
      "return_no_of_etickets"
    ])
  },

  methods: {
    ...mapMutations(["INVALIDATE_ETICKET", "VALIDATE_ETICKET"]),
    ...mapActions(["invalidate_eticket", "validate_eticket"]),
    validate_tickets: function() {
      console.log("eticket_id: " + this.eticket_id);
      this.validate_eticket(this.eticket_id);
    },

    invalidate_tickets: function() {
      console.log("eticket_id: " + this.eticket_id);
      this.invalidate_eticket(this.eticket_id);
    }
  }
};
</script>


<style scoped>
</style>