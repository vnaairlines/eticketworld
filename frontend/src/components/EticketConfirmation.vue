<template>
  <div> 
  <div v-if="currentTutorial.eticketno">
      <h3>Your E-Ticket has been created</h3>
      <h4>The id is: {{ currentTutorial.id  }}</h4>
      <h4>The e-ticket number is: {{ currentTutorial.eticketno }}</h4>
  </div>
  <div v-else>
      <h3>Sorry, there is no e-ticket in the system</h3>
      <h4>The id is: {{ currentTutorial.id  }}</h4>
  </div>

  <div>
    <h4>E-Ticket valid: </h4>
      <button type="submit" class="badge badge-success" @click="validate">
      Validate
    </button>
      <button type="submit" class="badge badge-danger mr-2" @click="invalidate">
      Invalidate
    </button>
  </div>
    <div>
    <h4>All personal e-ticket numbers</h4>
      <ul>
        <li v-for="(single_eticketno, index) in eticketno" v-bind:key="index">
          {{ single_eticketno }}
        </li>
      </ul>
  </div>
 </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "eticket",
  data() {
    return {
      currentTutorial: {
        id: "",
        title: "",
        description: "",
        published: false,
        trainno: "",
        fromcity: "",
        tocity: "",
        eticketno: ""
      },
      message: ""
    };
  },

  computed: {
    ...mapState(["id", "eticketno", "published"]),
    ...mapGetters(["eticketvalidity"])
  },

  methods: {
    getTutorialdata(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
          console.log("what is going on?");
        });
    },
    ...mapActions(["INVALIDATE_ETICKET"]),
    invalidate() {
      this.INVALIDATE_ETICKET(1);
    },
    ...mapActions(["VALIDATE_ETICKET"]),
    validate() {
      this.VALIDATE_ETICKET(1);
    }
  },
  mounted() {
    this.message = "";
    this.getTutorialdata(this.$route.params.id);
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>



