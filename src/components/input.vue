<template>
  <div>
    <label for="">input框</label>
    <input
      type="text"
      :value="dataVal"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
export default {
  name: "iInput",
  inject: ["div"],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dataVal: this.value
    };
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.dataVal = value;
      this.$emit("input", value);
    },
    handleBlur() {
      const ff = this.div.model;
      console.log(ff);
    }
  }
};
</script>
<style scoped lang="scss"></style>
