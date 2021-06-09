<template>
  <input
    v-bind="$attrs"
    type="radio"
    :name="name"
    :checked="modelValue === value"
    :value="value"
    @change="handleChange(value)"
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
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const handleChange = (value: number | string): void => {
      emit("updated:modelValue", value)
    }

    return {
      handleChange,
    }
  },
})
</script>

<style></style>
