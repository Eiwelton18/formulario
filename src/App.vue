<template>
  <div id="app">
    <formulario> </formulario>
  </div>
</template>

<script>
import Formulario from "./main/Formulario.vue";

export default {
  name: "App",
  components: { Formulario },
  mounted() {
    this.$toast.add({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted",
      life: 3000,
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
