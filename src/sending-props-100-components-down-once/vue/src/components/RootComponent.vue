<template>
    <div>
        <button id="button" @click="onClick">Click me</button>
        <NestedComponent :counter="100" :value="value" />
    </div>
</template>
  
  <script>
  import NestedComponent from './NestedComponent.vue';
  
  export default {
    components: {
      NestedComponent
    },
    data() {
      return {
        value: 0
      };
    },
    methods: {
      onClick() {
        this.value += 1;
      }
    }
  };
  </script>
  