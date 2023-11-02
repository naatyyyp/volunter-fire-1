<template>
    <v-card heigth="100%" class="ma-4" elevation="0">
        <v-tabs
            v-model="tab"
        >
            <v-tab value="donations">Donaciones</v-tab>
            <v-tab value="stepToStep">¿Cómo donar?</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item value="donations">
                <donations />
            </v-window-item>

            <v-window-item value="stepToStep">
                <v-row align="center" justify="center">
                    <v-col cols="12" class="text-center">
                        <step-to-step />
                    </v-col>
                </v-row>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script>
import Donations from './Donations'
import StepToStep from './StepToStep'

export default{
    name: 'DonationPage',
    components: {
        Donations, StepToStep
    },
    data: () => ({
        tab: 'donations'
    })
    
}
</script>

