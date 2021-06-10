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

      <fieldset>
        <legend>Are pets allowed?</legend>
        <div>
          <BaseRadioGroup
            v-model="event.pets"
            name="pets"
            :options="radioOptions"
            vertical
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox :label="'Catering'" v-model="event.extras.catering" />
        </div>

        <div>
          <BaseCheckbox :label="'Live music'" v-model="event.extras.music" />
        </div>
      </fieldset>

      <button
        class="button -fill-gradient"
        style="margin-top: 20px"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { NewEventItem, RadioOptionsTypes } from "@/types"
import { defineComponent, reactive, toRefs } from "vue"

import BaseInput from "@/components/BaseInput.vue"
import BaseSelect from "@/components/BaseSelect.vue"
import BaseCheckbox from "@/components/BaseCheckbox.vue"
import BaseRadioGroup from "@/components/BaseRadioGroup.vue"

import EventService from "@/services/EventService"
import { AxiosResponse } from "axios"

export default defineComponent({
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup,
  },

  setup() {
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
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
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

    const sendForm = () => {
      EventService.postEvent(state.event)
        .then((response: AxiosResponse) => {
          console.log(response)
        })
        .catch((error: Error) => {
          console.log(error)
        })
    }

    return {
      ...toRefs(state),
      sendForm,
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
