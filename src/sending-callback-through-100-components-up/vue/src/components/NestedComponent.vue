<template>
    <div v-if="depth != 0">
      <NestedComponent :depth="depth - 1" @button-clicked="handleButtonClick" />
    </div>
    <button v-else id="button" @click="handleButtonClick">Click me</button>
</template>

<script>
export default {
  name: 'NestedComponent',
  props: {
    depth: Number,
  },
  methods: {
    handleButtonClick() {
      this.$emit('button-clicked');
    },
  },
};
</script>
