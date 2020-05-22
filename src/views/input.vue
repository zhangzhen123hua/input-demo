<template>
  <div>
    <i-div :model="dataDiv">
      <i-input v-model="dataDiv.name"></i-input>
    </i-div>
  </div>
</template>
<script>
import iInput from "../components/input";
import iDiv from "../components/big";
export default {
  components: { iInput, iDiv },
  data() {
    return {
      dataDiv: {
        name: ""
      }
    };
  }
};
</script>
