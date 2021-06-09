<template>
  <div class="events">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- msg="Welcome to Your Vue.js + TypeScript App" -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
import EventCard from "@/components/EventCard.vue" // @ is an alias to /src
import { EventItem } from "@/types"

import EventService from "@/services/EventService"

export default defineComponent({
  name: "EventList",
  components: {
    EventCard,
  },
  setup() {
    const state = reactive({
      events: [] as EventItem[],
    })

    EventService.getEvents()
      .then((response) => {
        state.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    return {
      ...toRefs(state),
    }
  },
})
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
