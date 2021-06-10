<template>
  <label :for="uuid">
    {{ label }}
  </label>
  <input
    :aria-invalid="error ? true : false"
    :id="uuid"
    :type="type"
    :placeholder="label"
    :value="modelValue"
    @input="handleChange"
    class="field"
    :aria-describedat="error ? `${uuid}-error` : null"
  />
  <p
    v-if="error"
    aria-live="assertive"
    :id="`${uuid}-error`"
    class="errorMessage"
  >
    {{ error }}
  </p>
</template>

<script lang="ts">
import UniqueId from "@/features/UniqueId"
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    error: {
      type: String,
      default: "",
    },
  },

  setup(props, { emit }) {
    const uuid = UniqueId().getId()

    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement
      emit("update:modelValue", target.value)
    }

    return {
      uuid,
      handleChange,
    }
  },
})
</script>

<style></style>
