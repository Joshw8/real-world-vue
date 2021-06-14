<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        label="Select a category"
        v-model="event.category"
        :options="categories"
      />

      <fieldset>
        <legend>Name & describe your event</legend>

        <!-- Title -->
        <BaseInput
          v-model="event.title"
          label="Title"
          type="text"
          :error="''"
        />

        <!-- Description -->
        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
          :error="''"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>
        <!-- Location -->
        <BaseInput v-model="event.location" label="Location" type="text" />
      </fieldset>

      <!-- <fieldset>
        <legend>Are pets allowed?</legend>
        <div>
          <BaseRadioGroup
            v-model="event.pets"
            name="pets"
            :options="radioOptions"
            vertical
          />
        </div>
      </fieldset> -->
      <!--
      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox :label="'Catering'" v-model="event.extras.catering" />
        </div>

        <div>
          <BaseCheckbox :label="'Live music'" v-model="event.extras.music" />
        </div>
      </fieldset> -->

      <fieldset>
        <legend>Date & Time</legend>

        <!-- Title -->
        <BaseInput v-model="event.date" label="Date" type="text" :error="''" />

        <!-- Description -->
        <BaseInput v-model="event.time" label="Time" type="text" :error="''" />
      </fieldset>

      <button
        class="button -fill-gradient"
        style="margin-top: 20px"
        type="submit"
      >
        Submit
      </button>
    </form>
    {{ store.state.events }}
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex"
import { NewEventItem, RadioOptionsTypes } from "@/types"
import { defineComponent, reactive, toRefs } from "vue"

import BaseInput from "@/components/BaseInput.vue"
import BaseSelect from "@/components/BaseSelect.vue"
// import BaseCheckbox from "@/components/BaseCheckbox.vue"
// import BaseRadioGroup from "@/components/BaseRadioGroup.vue"

import EventService from "@/services/EventService"
import { AxiosResponse } from "axios"
import { v4 as uuidv4 } from "uuid"

export default defineComponent({
  components: {
    BaseInput,
    BaseSelect,
    // BaseCheckbox,
    // BaseRadioGroup,
  },

  setup() {
    const store = useStore()
    const state = reactive({
      // Dropdown options
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ] as string[],
      // Esentially formData
      event: {
        id: "",
        category: "",
        title: "",
        description: "",
        location: "",
        organinser: "",
        date: "",
        time: "",
      } as NewEventItem,
      radioOptions: [
        {
          label: "yes",
          value: 1,
        },
        {
          label: "no",
          value: 0,
        },
      ] as RadioOptionsTypes,
    })

    const clearEventForm = (): NewEventItem => {
      return (state.event = {
        id: "",
        category: "",
        title: "",
        description: "",
        location: "",
        organinser: "",
        date: "",
        time: "",
      })
    }

    const sendForm = () => {
      const event = {
        ...state.event,
        id: uuidv4(),
        organinser: store.state.user,
      }
      EventService.postEvent(event)
        .then((response: AxiosResponse) => {
          store.commit("ADD_EVENT", event)

          console.log(response)
          clearEventForm()
        })
        .catch((error: Error) => {
          console.log(error)
        })
    }

    return {
      ...toRefs(state),
      sendForm,
      store,
    }
  },
})
</script>
<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
