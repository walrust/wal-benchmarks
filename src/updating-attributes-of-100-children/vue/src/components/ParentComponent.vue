<template>
  <div>
    <button id="button" @click="onClick">Click me</button>
    <ChildComponent
      v-for="index in 100"
      :key="index"
      :value="value"
    ></ChildComponent>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
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
