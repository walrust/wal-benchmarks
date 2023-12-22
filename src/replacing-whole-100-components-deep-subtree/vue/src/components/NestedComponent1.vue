<template>
    First version of nested component
    <div v-if="counter !== 0">
        <NestedComponent1 :counter="counter - 1" />
    </div>
</template>
  
<script>
  export default {
    props: {
      counter: Number
    }
  };
</script>
  