<template>
  <input
    v-bind="$attrs"
    type="checkbox"
    :checked="modelValue"
    @change="handleChange"
    class="field"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const handleChange = (event: Event): void => {
      const target = event.target as HTMLInputElement
      emit("update:modelValue", target.checked)
    }

    return {
      handleChange,
    }
  },
})
</script>

<style></style>
