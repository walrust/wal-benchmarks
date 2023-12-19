<template>
    <button id="button" @click="onClick">Click me</button>
    <div
      v-for="index in value"
      :key="index"
    > index </div>
</template>

<script>

export default {
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    onClick() {
      this.value++;
    }
  }
};
</script>
