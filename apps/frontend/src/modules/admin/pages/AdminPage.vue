<template>
    <div>
        <login-component v-if="!user" @logueado="logueado"/>
        <admin-component v-if="user"></admin-component>
    </div>
</template>

<script>
    import LoginComponent from './components/LoginComponent.vue'
    import AdminComponent from './components/AdminComponent.vue'

    export default {
        name: 'AdminPage',
        components: {
            LoginComponent,
            AdminComponent
        },
        data: () => ({
            user: null
        }),
        methods: {
            logueado(payload){
                this.user = payload
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>