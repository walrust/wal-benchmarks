<template>
    <div>
        <button id="button" @click="onClick">Click me</button>
        <NestedComponent1 v-if="value % 2 == 0" :counter="100" />
        <NestedComponent2 v-else :counter="100" />
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
  