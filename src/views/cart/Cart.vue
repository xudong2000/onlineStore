<template>
  <div id="cart">
    <visitor />
  </div>
</template>

<script>
import Visitor from "../../components/visitor/Visitor";

export default {
  name: "Cart",
  components: {
    Visitor,
  },
};
</script>

<style scoped>
#cart {
  width: 100%;
  height: 100%;
}
</style>