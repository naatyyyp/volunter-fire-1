<template>
    <v-row class="mt-5">
        <v-col cols="12" class="text-center">
            <v-btn color="primary" variant="text" :active="section==='contact'"
                @click="section='contact'"
            >Contacto</v-btn>
            <v-btn 
                color="primary" variant="text" :active="section==='history'"
                @click="section='history'"    
            >Historia</v-btn>
        </v-col>
        <v-col cols="12">
            <contact-administration v-if="section==='contact'"/>
            <history-administration v-if="section==='history'"/>
        </v-col>
    </v-row>
</template>

<script>
    import ContactAdministration from './ContactAdministration.vue'
    import HistoryAdministration from './HistoryAdministration.vue'

    export default {
        name: 'AdminComponent',
        components: {
            ContactAdministration,
            HistoryAdministration
        },
        data: () => ({
            section: 'contact'
        })
    }
</script>

<style lang="scss" scoped>

</style>