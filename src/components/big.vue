<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "iDiv",
  props: {
    model: {
      type: Object
    }
  },
  provide() {
    return {
      div: this
    };
  }
};
</script>
