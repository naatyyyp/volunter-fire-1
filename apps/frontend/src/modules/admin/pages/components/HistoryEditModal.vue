<template>
    <v-dialog v-model="dialog" persistent width="1200">
        <v-card>
            <v-toolbar color="primary">
                <v-row class="ma-0 pa-0">
                    <v-col cols="10">
                        <v-card-title>Editar historia</v-card-title>
                    </v-col>
                    <v-col cols="2" class="text-end">
                        <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
                    </v-col>
                </v-row>
            </v-toolbar>
            <v-card-text>
                <v-text-field label="Fotografía" v-model="form.photo"></v-text-field>
                <v-img :src="form.photo"></v-img>
                <v-text-field label="Titulo" v-model="form.title"></v-text-field>
                <v-text-field label="Descripcion" v-model="form.description"></v-text-field>
                <v-btn block color="primary" @click="updateHistoryHistory" :loading="loading">Guardar</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
  </template>
  
  <script>
  import axios from 'axios';
export default {
  name: 'HistoryEditModal',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    history: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    dialog: false,
    loading: false,
    form: {
      title: null,
      description: null,
      photo: null,
    },
  }),
  watch: {
    history: {
      immediate: true,
      handler(newValue) {
        console.log('Nueva historia seleccionada:', newValue);
        // Actualiza el formulario cuando se selecciona una nueva historia
        this.form = {
          title: newValue ? newValue.title : null,
          description: newValue ? newValue.description : null,
          photo: newValue ? newValue.photo : null,
        };
      },
    },
  },
  methods: {
    async updateHistory() {
      try {
        this.loading = true;
        console.log('Actualizar historia:', this.form);
        const URL = `http://localhost:4040/api/history/${this.history._id}`;
        const { data } = await axios.put(URL, this.form);

        this.$emit('updated', data);

        this.form = {
          title: null,
          description: null,
          photo: null,
        };
      } catch (error) {
        console.error('Error al actualizar historia:', error);
      } finally {
        this.loading = false;
        this.$emit('input', false); // Cierra el modal después de la edición
      }
    },
  },
};

</script>
  