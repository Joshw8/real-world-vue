<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        label="Select a category"
        v-model="event.category"
        :options="categories"
      />

      <h3>Name & describe your event</h3>

      <!-- Title -->
      <BaseInput v-model="event.title" label="Title" type="text" />

      <!-- Description -->
      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>
      <!-- Location -->
      <BaseInput v-model="event.location" label="Location" type="text" />

      {{ event }}
      <h3>Are pets allowed?</h3>
      <div>
        <BaseRadioGroup
          v-model="event.pets"
          name="pets"
          :options="radioOptions"
        />
        <!-- vertical -->
        <!-- <BaseRadio :label="'Yes'" v-model="event.pets" name="pets" :value="1" /> -->
      </div>

      <div>
        <!-- <BaseRadio :label="'No'" v-model="event.pets" name="pets" :value="0" /> -->
      </div>

      <h3>Extras</h3>
      <div>
        <BaseCheckbox :label="'Catering'" v-model="event.extras.catering" />
      </div>

      <div>
        <BaseCheckbox :label="'Live music'" v-model="event.extras.music" />
      </div>

      <button class="button -fill-gradient" type="submit">Submit</button>
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
    // Methods
    const sendForm: () => {}
    return {
      ...toRefs(state),
      sendForm,
    }
  },
})
</script>
