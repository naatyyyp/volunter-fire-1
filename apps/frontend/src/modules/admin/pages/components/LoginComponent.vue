<template>
    <v-row class="mt-16" justify="center">
        <v-col cols="12" md="6" class="text-center mt-16">
            <v-row>
                <v-col cols="12">
                    <v-alert closable type="error" v-if="errorMessage" @click:close="errorMessage = ''">{{errorMessage}}</v-alert>
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-card variant="outlined" color="blue" class="text-grey-darken-4 pa-4">
                        <v-card-title>Iniciar sesión</v-card-title>
                        <v-text-field label="Nombre de usuario" prepend-inner-icon="mdi-account" v-model="username"></v-text-field>
                        <v-text-field 
                            :type="showPassword ? 'text' : 'password'" 
                            label="Contraseña" 
                            prepend-inner-icon="mdi-key" 
                            v-model="password"
                            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:appendInner="showPassword = !showPassword"
                        ></v-text-field>
                        <v-btn color="blue" :loading="loading" @click="login">Iniciar Sesión</v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'LoginComponent',
        data: () => ({
            username: '',
            password: '',
            loading: false,
            showPassword: false,
            errorMessage: ''
        }),
        methods: {
            async authorization(token){
                const URL = 'http://localhost:4040/api/user/auth'

                try {
                    this.loading = true

                    const { data } = await axios.post(URL, {

                    }, {
                        headers: {
                            Authorization: token
                        }
                    })

                    this.$emit('logueado', data.user)
                } catch (error) {
                    this.errorMessage = error
                    console.error(error)
                } finally {
                    this.loading = false
                }
            },
            async login(){
                const URL = 'http://localhost:4040/api/login'

                try {
                    this.loading = true
                    const { data } = await axios.post(URL, {
                        username: this.username,
                        password: this.password
                    })

                    localStorage.setItem('token', data.token);

                    await this.authorization(data.token)
                } catch (error) {
                    this.errorMessage = error
                    console.error(error)
                } finally {
                    this.loading = false
                }
            }
        },
        mounted(){
            const token = localStorage.getItem('token')
            if(token) this.authorization(token)
        }
    }
</script>

<style lang="scss" scoped>

</style>