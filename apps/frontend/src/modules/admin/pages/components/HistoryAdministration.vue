<template>
    <v-card class="pa-4">
        <v-row>
            <v-col cols="10">
                <v-card-title>Administración de historia</v-card-title>
            </v-col>
            <v-col cols="2" class="text-end">
                <v-btn color="primary" icon="mdi-plus" size="60" @click="openCreateModal = true"></v-btn>
            </v-col>
        </v-row>
        <history-create-modal :value="openCreateModal" @input="value => openCreateModal = value" @created="item => items.unshift(item)"/>
        <v-card-text>
            <v-data-table :items="items" :headers="headers" :loading="loading">
                <template v-slot:[`item.photo`]="{ item }">
                    <v-img :src="item.photo" width="200"></v-img>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-btn color="purple" icon="mdi-pencil" size="40" class="mx-1" @click="editHistory(item)"></v-btn>
                    <history-edit-modal :value="openEditModal" :history="selectedHistory" @input="value => openEditModal = value" @updated="fetchHistories"></history-edit-modal>
                    <v-btn color="red" icon="mdi-delete" size="40value" class="mx-1" @click="deleteHistory(item)"></v-btn>
                </template>
            
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
    import axios from 'axios'
    import HistoryCreateModal from './HistoryCreateModal.vue'
    import HistoryEditModal from './HistoryEditModal.vue'

    export default {
        name: 'history-administration',
        components: {
            HistoryCreateModal,
            HistoryEditModal
        },
        data: () => ({
            headers: [
                {
                    title: 'Foto',
                    key: 'photo',
                },
                {
                    title: 'Titulo',
                    key: 'title',
                },
                {
                    title: 'Descripción',
                    key: 'description',
                },
                {
                    title: 'Acciones',
                    key: 'actions',
                    align: 'center'
                }
            ],
            items: [],
            openCreateModal: false,
            loading: false,
            selectedHistory: null,
            openEditModal: false,

        }),
        methods: {
            async fetchHistories(){
                try {
                    this.loading = true
                    const URL = 'http://localhost:4040/api/history'

                    const { data } = await axios.get(URL)

                    this.items = data.reverse()
                } catch (error) {
                    console.error(error)
                } finally {
                    this.loading = false
                }
            },
            editHistory(item) {
            console.log('Editar historia:', item);
            this.selectedHistory = item;
            this.openEditModal = true;
            },
            async deleteHistory(item) {
                try {
                console.log('ID a eliminar:', item._id);
                const URL = `http://localhost:4040/api/history/${item._id}`;
                await axios.delete(URL);
                // Actualiza la lista de historias después de la eliminación
                this.fetchHistories();
            } catch (error) {
                console.error(error);
             }
            },
        },
        mounted(){
            this.fetchHistories()   
        }
    }
</script>

<style lang="scss" scoped>

</style>