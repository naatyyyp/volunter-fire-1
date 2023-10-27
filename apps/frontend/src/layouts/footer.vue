<template>
  <v-footer color="red" width="100vw" :height="!$vuetify.display.smAndDown? '13%' : '70'" class="pa-0 ma-0">
    <v-row align="center" class="ma-0 pa-0">
      <v-col cols="12" md="4" v-if="!$vuetify.display.smAndDown">
        <v-img src="../assets/logob.png" cover width="95"></v-img>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <span v-if="!$vuetify.display.smAndDown">© 2023. Todos los derechos reservados.</span><br/>
        <span v-if="!$vuetify.display.smAndDown">Bomberos Voluntarios de Lanús</span><br/>
        <h2>4241-2211 / 4241-6874</h2>
      </v-col>
      <v-col cols="12" md="4" v-if="!$vuetify.display.smAndDown">
        <v-row class="ma-0 pa-0">
          <v-col cols="12" class="text-end" align-self="center">
            <v-btn variant="text" @click="goToInstagram">
              @bomberosvoluntariosdelanus <v-icon end size="large">mdi-instagram</v-icon>
            </v-btn>
            <v-btn variant="text" @click="goToFacebook">
              Soc. Bomberos Voluntarios de Lanús - Sitio Oficial <v-icon end size="large">mdi-facebook</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default{
    name: 'footerView',
    methods: {
      goToInstagram(){
        window.open('https://www.instagram.com/bomberosvoluntariosdelanus/')
      },
      goToFacebook(){
        window.open('https://www.facebook.com/bomberosvoluntariosdelanus/')
      }
    }
  }
</script>