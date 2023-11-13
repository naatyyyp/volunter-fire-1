<template>
    <v-dialog v-model="dialog" persistent width="1200">
        <v-card>
            <v-toolbar color="primary">
                <v-row class="ma-0 pa-0">
                    <v-col cols="10">
                        <v-card-title>{{ form.id ? 'Editar' : 'Crear' }} un nuevo contacto</v-card-title>
                    </v-col>
                    <v-col cols="2" class="text-end">
                        <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
                    </v-col>
                </v-row>
            </v-toolbar>
            <v-card-text>
                <v-text-field label="Titulo" v-model="form.title"></v-text-field>
                <v-text-field label="Subtitulo" v-model="form.subtitle"></v-text-field>
                <v-text-field label="Url google maps" v-model="form.googleMapsUrl"></v-text-field>
                <v-btn block color="primary" @click="createContact" :loading="loading">Crear</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'ContactCreateModal',
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            loading: false,
            form: {
                title: null,
                subtitle: null,
                googleMapsUrl: null
            }
        }),
        computed: {
            dialog: {
                get(){
                    return this.value
                },
                set(value){
                    this.$emit('input', value)
                }
            }
        },
        methods: {
            async createContact(){
                try {
                    this.loading = true
                    const URL = 'http://localhost:4040/api/contact'

                    const { data } = await axios.post(URL, this.form)
                    
                    this.$emit('created', data)

                    this.form = {
                        title: null,
                        subtitle: null,
                        googleMapsUrl: null
                    }
                } catch (error) {
                    console.error(error)
                } finally {
                    this.loading = false
                    this.dialog = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>