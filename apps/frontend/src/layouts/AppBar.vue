<template>
  <v-app-bar color="red" height="100" class="px-4">
    <v-app-bar-title>
      <v-img cover src="src\assets\logob.png" width="70" height="70"></v-img>
    </v-app-bar-title> <H3>BOMBEROS VOLUNTARIOS DE LANÚS</H3>
    <v-spacer></v-spacer>
    <v-btn text v-for="item in menu" :key="item.icon" :to="item.path" :color="item.color">
      <v-icon :icon="item.icon" start></v-icon>
      {{item.text}}
    </v-btn>
    <v-spacer />
  </v-app-bar>
</template>

<style>
.blue-button {
  background-color: red !important;
  color: white !important;
}
</style>

<script>


  export default{
    name: 'AppBar',
    data(){
      return{
        menu: [
          {
            path: '/home',
            icon: 'mdi-home',
            text: 'Inicio',
            color: 'white'
          },
          {
            path: '/contact',
            icon: 'mdi-card-account-mail',
            text: 'Contacto',
            color: 'white'
          },
          {
            path: '/history',
            icon: 'mdi-file-document',
            text: 'Historia',
            color: 'white'
          },
          {
            path: '/donations',
            icon: 'mdi-hand-heart-outline',
            text: 'Donaciones',
            
          }
          
        ]
      }
    }
  }
</script>
