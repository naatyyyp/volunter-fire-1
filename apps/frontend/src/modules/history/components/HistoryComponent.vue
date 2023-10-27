<template>
    <v-card height="100%" width="100%">  
        <v-row justify="center" align="center" style="height: 90%" v-if="loading">
            <v-col cols="12" class="text-center">
                <v-progress-circular :size="73" :width="7" indeterminate color="red"></v-progress-circular>
            </v-col>
        </v-row>   
        <v-row align="center" justify="center" class="ma-4" v-else>
            <v-col cols="12" lg="6" v-for="history in histories" :key="history._id">
                <v-card elevation="10" class="pa-10">
                    <v-row>
                        <v-col cols="12" lg="4"> 
                            <v-img cover height="400" :src="history.photo"> </v-img> </v-col>
                        <v-col cols="12" lg="8">
                            <h2 :class="$vuetify.display.mdAndDown ? 'text-center' : 'text-start'">{{history.title}}</h2>
                            <v-card-text :class="$vuetify.display.mdAndDown ? 'text-center' : 'text-start'">
                                {{ history.description }}
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import axios from 'axios'
    export default{
        name: 'HistoryComponent',
        data: () => ({
            histories: [],
            loading: false
        }),
        methods: {
            async historyFetch(){
                try {
                    this.loading = true
                    const URL = 'http://localhost:4040/api/history'
                    const { data } = await axios.get(URL)
                    this.histories = data
                } catch (error) {
                    
                } finally {
                    this.loading = false
                }
            }
        },
        mounted(){
            this.historyFetch()
        }
    }
</script>