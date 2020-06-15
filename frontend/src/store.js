import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialState = {
  etickets: [
    {
      id: 1,
      title: "EuroNight",
      description: "Croatia",
      published: false,
      trainno: "465",
      fromcity: "Zagreb",
      tocity: "Zuerich",
      eticketno: 802883929,
    },
    {
      id: 2,
      title: "Regiojet",
      description: "Adria",
      published: true,
      trainno: "6021",
      fromcity: "Prague",
      tocity: "Rijeka",
      eticketno: 802883921,
    },
    {
      id: 3,
      title: "Nightjet",
      description: "Belgium",
      published: false,
      trainno: "322",
      fromcity: "Vienna",
      tocity: "Bruxelles",
      eticketno: 802883925,
    },
    {
      id: 4,
      title: "CityNightLine",
      description: "Semperoper",
      published: false,
      trainno: "450",
      fromcity: "Zuerich",
      tocity: "Dresden",
      eticketno: 802883922,
    },
  ],
};

export const eticket_id2 = 2;

export default new Vuex.Store({
  state: initialState,

  getters: {
    return_invalid_etickets: (state) => {
      return state.etickets.filter((eticket) => !eticket.published).length;
    },
    return_valid_etickets: (state) => {
      return state.etickets.filter((eticket) => eticket.published).length;
    },
    return_no_of_etickets: (state) => {
      return state.etickets.filter((eticket) => eticket).length;
    },
  },
  mutations: {
    INVALIDATE_ETICKET(state, eticket_id) {
      console.log("mutation: " + eticket_id);
      console.log("state: " + state.etickets[eticket_id].eticketno);

      const eticketarray = state.etickets;
      const new_eticket = {
        id: 5,
        title: "RZD",
        description: "Rossiya",
        published: true,
        trainno: "002",
        fromcity: "Moscow",
        tocity: "Vladivostok",
        eticketno: 802883954,
      };
      console.log("new eticket: " + new_eticket.eticketno);

      const eticketentries = Object.values(eticketarray);
      console.log("entries1: " + eticketentries);

      Object.keys(new_eticket).forEach(function(key) {
        if (key == "published") {
          console.log(key, new_eticket);
          Vue.set((key, new_eticket), key.published, "werden");
          console.log(key, new_eticket);
        }
      });
      //eticketentries.foreach(iteratethrough);

      //function iteratethrough(item, index) {
      //  console.log("each item: " + item + index);
      // }
      //this.$set(this.item.published, index, false);
      //Vue.set(item.eticketno, index, 7777777777);
      //  Vue.set(this.item.eticketno, index, 1234);
      // }
    },
    VALIDATE_ETICKET(state, eticket_id) {
      console.log("mutation: " + eticket_id);
      console.log("state: " + state.eticketdata.etickets[eticket_id].eticketno);
      Vue.set(state.published, eticket_id, true);
    },
  },
  actions: {
    invalidate_eticket: (context, eticket_id) => {
      console.log("action: " + eticket_id);
      context.commit("INVALIDATE_ETICKET", eticket_id);
    },
    validate_eticket: (context, eticket_id) => {
      console.log("action: " + eticket_id);
      context.commit("VALIDATE_ETICKET", eticket_id);
    },
  },
});
