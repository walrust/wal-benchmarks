<template>
  <div>
    <p>{{ count }}</p>
    <NestedComponent :depth="100" @button-clicked="handleButtonClick" />
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
