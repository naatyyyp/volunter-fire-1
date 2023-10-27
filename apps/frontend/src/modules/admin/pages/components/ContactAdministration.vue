<template>
    <v-card class="pa-4">
        <v-row>
            <v-col cols="10">
                <v-card-title>Administración de contactos</v-card-title>
            </v-col>
            <v-col cols="2" class="text-end">
                <v-btn color="primary" icon="mdi-plus" size="60" @click="openCreateModal = true"></v-btn>
            </v-col>
        </v-row>
        <contact-create-modal :value="openCreateModal" @input="value => openCreateModal = value" @created="item => items.unshift(item)"/>
        <v-card-text>
            <v-data-table :items="items" :headers="headers" :loading="loading">
                <template v-slot:item.actions="{ item }">
                    <v-btn color="purple" icon="mdi-pencil" size="40" class="mx-1"></v-btn>
                    <v-btn color="red" icon="mdi-delete" size="40" class="mx-1"></v-btn>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
    import axios from 'axios'
import ContactCreateModal from './ContactCreateModal.vue'

    export default {
        name: 'contact-administration',
        components: {
            ContactCreateModal
        },
        data: () => ({
            headers: [
                {
                    title: 'Titulo',
                    key: 'title'
                },
                {
                    title: 'Descripción',
                    key: 'subtitle'
                },
                {
                    title: 'Acciones',
                    key: 'actions'
                }
            ],
            items: [],
            openCreateModal: false,
            loading: false
        }),
        methods: {
            async fetchContacts(){
                try {
                    this.loading = true
                    const URL = 'http://localhost:4040/api/contact'

                    const { data } = await axios.get(URL)

                    this.items = data.reverse()
                } catch (error) {
                    console.error(error)
                } finally {
                    this.loading = false
                }
            }
        },
        mounted(){
            this.fetchContacts()
        }
    }
</script>

<style lang="scss" scoped>

</style>