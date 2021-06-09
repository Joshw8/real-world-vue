<template>
  <label v-if="label">{{ label }}</label>
  <select
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
    const handleChange = (event: Event): void => {
      const target = event.target as HTMLSelectElement
      emit("update:modelValue", target.value)
    }

    return {
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
