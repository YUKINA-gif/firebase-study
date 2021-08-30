import firebase from "@/plugins/firebase";

export const state = () => ({
  auth: "",
  user: ""
});

export const mutations = {
  auth(state, result) {
    state.auth = result;
  },
  userData(state, data) {
    state.user = data;
  }
};

export const actions = {};
