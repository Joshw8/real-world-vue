<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="vertical ? '' : 'horizontal'"
  >
    <BaseRadio
      :label="option.label"
      :name="name"
      :value="option.value"
      :modelValue="modelValue"
      @updated:modelValue="handleChange"
    >
    </BaseRadio>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import BaseRadio from "@/components/BaseRadio.vue"
import { RadioOptionsTypes } from "@/types"

export default defineComponent({
  components: {
    BaseRadio,
  },
  props: {
    options: {
      type: Array as PropType<RadioOptionsTypes>,
      default: () => [""],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const handleChange = (event: Event): void => {
      emit("update:modelValue", event as Event)
    }

    return {
      handleChange,
    }
  },
})
</script>

<style scoped>
.horizontal {
  margin-right: 25px;
}
</style>
