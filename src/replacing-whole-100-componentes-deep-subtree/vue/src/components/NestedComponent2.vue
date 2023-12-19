<template>
    Second version of nested component
    <span v-if="counter !== 0">
        <NestedComponent2 :counter="counter - 1" />
    </span>
</template>
  
<script>
  export default {
    props: {
      counter: Number
    }
  };
</script>
  