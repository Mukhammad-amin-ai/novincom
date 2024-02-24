<template>
  <div>
    <modal/>
    <HeaderDefault/>
      <RouterView/>
    <FooterDefault/>
  </div>
</template>
<script setup>
import HeaderDefault from './components/partial/headers/HeaderDefault.vue';
import FooterDefault from './components/partial/footers/FooterDefault.vue';
import modal from './components/elements/flights/modal.vue';


</script>

<style scoped>

</style>