<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="trainno">Train No:</label>
        <input
          class="form-control"
          id="trainno"
          required
          v-model="tutorial.trainno"
          name="trainno"
        />
      </div>

      <div class="form-group">
        <label for="fromcity">From:</label>
        <input
          class="form-control"
          id="fromcity"
          required
          v-model="tutorial.fromcity"
          name="fromcity"
        />
      </div>

      <div class="form-group">
        <label for="tocity">To:</label>
        <input
          class="form-control"
          id="tocity"
          required
          v-model="tutorial.tocity"
          name="tocity"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
        trainno: "",
        fromcity: "",
        tocity: ""
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        trainno: this.tutorial.trainno,
        fromcity: this.tutorial.fromcity,
        tocity: this.tutorial.tocity
      };

      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          console.log("new id: " + this.tutorial.id);
          this.$router.push({
            name: "eticket",
            params: { id: this.tutorial.id }
          });
        })
        .catch(e => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
