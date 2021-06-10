<template>
  <input
    :id="uuid"
    v-bind="$attrs"
    type="checkbox"
    :checked="modelValue"
    @change="handleChange"
    class="field"
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
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const uuid = UniqueId().getId()
    const handleChange = (event: Event): void => {
      const target = event.target as HTMLInputElement
      emit("update:modelValue", target.checked)
    }

    return {
      uuid,
      handleChange,
    }
  },
})
</script>

<style></style>
