<template>
    <v-row justify="center" align="center" style="height: 90%">
        <v-col cols="12">
            <v-row class="ma-0 pa-0" align="center" justify="center">
                <v-col cols="12" md="4" v-if="$vuetify.display.mdAndUp">
                    <v-card height="200" 
                        color="error"
                        class="text-center pa-4"
                        >
                        <v-card-title class="text-h6 text-md-h5 text-lg-h4">¡Ayúdanos a salvar vidas!</v-card-title>
                        <v-spacer/>
                        <v-card-text>
                                Tu generosidad puede proporcionarles los medios, la capacitación y los recursos
                                que requieren para continuar su trabajo con compromiso y excelencia.
                                Cada aporte, sin importar cuán pequeño, marca un gran impacto en la seguridad de todos.
                                ¡Haz tu donación ahora y respalda a nuestros bomberos!
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" v-if="$vuetify.display.mdAndUp">
                    <v-row class="pa-0 ma-0" align="center" justify="center">
                        <v-col md="3" v-if="$vuetify.display.mdAndUp"></v-col>
                        <v-col cols="12" md="3">
                            <v-img
                                src="../../assets/bombero.JPG"
                                cover
                            ></v-img>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-img
                                src="../../assets/bombero2.JPG"
                                cover
                            ></v-img>
                        </v-col>
                        <v-col md="3" v-if="$vuetify.display.mdAndUp"></v-col>
                        <v-col cols="12" md="9">
                            <v-alert
                                color="error"
                                text="'Ninguno de nosotros solos es tan bueno como todos nosotros juntos'">
                            </v-alert>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" class="text-center">
            <v-row align="center" justify="center">
                <v-col cols="12" md="3" class="text-center">
                    <h3 class="mb-4">¡Escaneá el QR y doná!</h3>
                    <v-img class="mx-auto" width="200" height="200" cover src="../../assets/qr.png"></v-img>
                </v-col>
                <v-col cols="12" md="3">
                    <h2 class="mb-4 text-center">Datos de transacción</h2>
                    <v-text-field variant="outlined" label="Alias" readonly :model-value="alias" />
                    <v-text-field variant="outlined" label="Nombre" readonly :model-value="name" />
                    <v-text-field variant="outlined" label="CBU" readonly :model-value="cbu" />
                </v-col>
            </v-row>  
        </v-col>
    </v-row>   
</template>

<script>
    export default {
        name: 'Donations-Component',
        data: () => ({
            instagram: false,
            alias: 'bomberos.lanus.mp',
            name: 'Bomberos Voluntarios Lanús',
            cbu: '0000003100076208932278',
            rating: 0,
            formValue: true,
        })
    }
</script>

<style lang="scss" scoped>

</style>