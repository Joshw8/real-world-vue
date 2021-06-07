<template>
  <div>
    <h1>Create an event</h1>
    <form>

      <label>Select a category</label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >{{ option }}</option>
      </select>

      <h3>Name & describe your event</h3>

        <!-- Title -->
        <BaseInput v-model="event.title" label="Title" type="text"/>

        <!-- Description -->
        <BaseInput v-model="event.description" label="Description" type="text"/>

      <h3>Where is your event?</h3>
      <!-- Location -->
      <BaseInput v-model="event.location" label="Location" type="text"/>

      <h3>Are pets allowed?</h3>
      <div>
        <input
            type="radio"
            v-model="event.pets"
            :value="1"
            name="pets"
          />
        <label>Yes</label>
      </div>

      <div>
        <input
          type="radio"
          v-model="event.pets"
          :value="0"
          name="pets"
        />
        <label>No</label>
      </div>

      <h3>Extras</h3>
      <div>
        <input
          type="checkbox"
          v-model="event.extras.catering"
          class="field"
        />
        <label>Catering</label>
      </div>

      <div>
        <input
          type="checkbox"
          v-model="event.extras.music"
          class="field"
        />
        <label>Live music</label>
      </div>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { NewEventItem } from '@/types'
import { defineComponent, reactive, toRefs } from 'vue'

import BaseInput from '@/components/BaseInput.vue';

export default defineComponent({
    components: {
      BaseInput
    },

    setup(){
        const state = reactive({
            // Dropdown options
            categories: [
                'sustainability',
                'nature',
                'animal welfare',
                'housing',
                'education',
                'food',
                'community'] as string[],
            // Esentially formData
            event: {
                category: '',
                title: '',
                description: '',
                location: '',
                pets: 1,
                extras: {
                    catering: false,
                    music: false
                }
            } as NewEventItem
        })
        return {
            ...toRefs(state)
        }
    }
})
</script>
