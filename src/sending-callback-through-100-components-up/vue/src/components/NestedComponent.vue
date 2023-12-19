<template>
  <div>
    <div v-if="depth != 0">
      <NestedComponent :depth="depth - 1" @button-clicked="handleButtonClick" />
    </div>
    <div v-else>
      <button @click="handleButtonClick">Click me</button>
    </div>
  </div>
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
