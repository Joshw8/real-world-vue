<template>
  <router-link :to="{ name: 'EventDetails', params: {id: event.id} }" class="event-link">
    <div class="event-card">
      <span> @ {{ event.time }} on {{ event.date }} </span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { EventItem } from "@/types";

export default defineComponent({
  name: "EventCard",
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true,
    },
  },
});
</script>

<style scoped>
.event-card {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px grey solid;
  border-radius: 3px;
  padding: 3em 0em;
  margin-bottom: 1em;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  /* transition: 5000; */
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
