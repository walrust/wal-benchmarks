<template>
    <div v-if="counter !== 0">
        <NestedComponent :counter="counter - 1" :value="value" />
    </div>
    <div v-else>
        {{ value }}
    </div>
</template>
  
  <script>
  export default {
    props: {
      counter: Number,
      value: Number
    }
  };
  </script>
  