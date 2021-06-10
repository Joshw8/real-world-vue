<template>
  <input
    :id="uuid"
    v-bind="$attrs"
    type="radio"
    :name="name"
    :checked="modelValue === value"
    :value="value"
    @change="handleChange(value)"
  />
  <label v-if="label" :for="uuid">{{ label }}</label>
</template>

<script lang="ts">
import UniqueId from "@/features/UniqueId"
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
    const uuid = UniqueId().getId()
    const handleChange = (value: number | string): void => {
      emit("updated:modelValue", value)
    }

    return {
      uuid,
      handleChange,
    }
  },
})
</script>

<style></style>
