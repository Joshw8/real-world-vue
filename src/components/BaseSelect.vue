<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <select
    :id="uuid"
    :value="modelValue"
    class="field upperCase"
    @change="handleChange"
    v-bind="$attrs"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
      class="upperCase"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { SelectOptions } from "@/types"

import UniqueId from "@/features/UniqueId"

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

    options: {
      type: Array as PropType<SelectOptions>,
      default: () => [],
      required: true,
    },
  },
  setup(props, { emit }) {
    const uuid = UniqueId().getId()
    const handleChange = (event: Event): void => {
      const target = event.target as HTMLSelectElement
      emit("update:modelValue", target.value)
    }

    return {
      uuid,
      handleChange,
    }
  },
})
</script>

<style scoped>
.upperCase {
  text-transform: capitalize;
}
</style>
