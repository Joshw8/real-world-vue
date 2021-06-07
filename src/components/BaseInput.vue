<template>
    <label>
        {{ label }}
    </label>
    <input
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="field" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true
        },
        modelValue: {
            type: [String, Number],
            required: true
        }
    },
})
</script>

<style>

</style>