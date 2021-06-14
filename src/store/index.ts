// import axios, { AxiosResponse } from "axios"
import { NewEventItem } from "@/types"
import { createStore } from "vuex"

export default createStore({
  state: {
    // loadingStatus: "notLoading" as string,
    user: "Joshua Waite",
    events: [] as NewEventItem[],
  },
  mutations: {
    ADD_EVENT(state, event: NewEventItem) {
      state.events.push(event)
    },
  },
  actions: {},
  getters: {},
  modules: {},
})
