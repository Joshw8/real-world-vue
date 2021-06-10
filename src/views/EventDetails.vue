<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script lang="ts">
import EventService from "@/services/EventService"
import { EventItem } from "@/types"
import { AxiosResponse } from "axios"
import { defineComponent, reactive, toRefs } from "vue"

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const state = reactive({
      event: {} as EventItem,
    })

    EventService.getEvent(props.id)
      .then((res: AxiosResponse) => {
        state.event = res.data
      })
      .catch((error) => {
        console.error(error)
      })

    return {
      ...toRefs(state),
    }
  },
})
</script>
