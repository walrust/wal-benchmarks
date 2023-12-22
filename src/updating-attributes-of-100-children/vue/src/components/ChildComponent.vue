<template>
  <div :style="divStyle">
    <p> Const text </p>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
  },
  computed: {
    divStyle() {
      return {
        color: this.value % 2 == 0 ? 'red' : 'blue'
      };
    }
  },
};
</script>
