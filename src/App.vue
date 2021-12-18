<template>
  <base-header></base-header>
  <router-view></router-view>
</template>

<script>
import BaseHeader from "./components/Header.vue";
export default {
  components: {
    BaseHeader,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
