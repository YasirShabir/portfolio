<template>
  <navv />
  <RouterView />
  <footerr />
</template>
<script setup>
import navv from "./components/navbar.vue";
import footerr from "./components/footer.vue";
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins";
  scroll-behavior: smooth;
}
h1,
h2,
h3,
h5,
h6,
p {
  margin-bottom: 0;
}
</style>
