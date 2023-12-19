<template>
  <div>
    <NestedComponent :depth="100" @button-clicked="handleButtonClick" />
    <p>{{ count }}</p>
  </div>
</template>

<script>
import NestedComponent from './NestedComponent.vue';

export default {
  name: 'RootComponent',
  components: {
    ChildComponent,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleButtonClick() {
      this.count++;
    },
  },
};
</script>
