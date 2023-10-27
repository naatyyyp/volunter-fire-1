<template> 
<!--Aca hay que declarar las cosas que usamos para que se muestren-->
  <v-app> 
    <default-bar />>
    <default-view />
    <footerView/>
  </v-app>
</template>

<!--ACA SE IMPORTAN-->
<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import footerView from './footer.vue'
</script>
