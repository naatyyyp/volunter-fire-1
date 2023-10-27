<template>
    <iframe :width="width" :height="height" src="https://www.youtube.com/embed/xfjIzFVRN_c?si=boQCEsa-DvkiQcfb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</template>

<script>
    export default {
        name: 'StepToStep',
        computed: {
            width(){
                if(this.$vuetify.display.xs) return 310
                if(this.$vuetify.display.sm) return 570
                if(this.$vuetify.display.md) return 880
                if(this.$vuetify.display.lg) return 1100
                if(this.$vuetify.display.xl) return 1800
                return 880
            },
            height(){
                if(this.$vuetify.display.xs) return 200
                if(this.$vuetify.display.sm) return 300
                if(this.$vuetify.display.md) return 450
                if(this.$vuetify.display.lg) return 600
                if(this.$vuetify.display.xl) return 700
                return 450
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>