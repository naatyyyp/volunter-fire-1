<template>
    <v-card height="100%" class="mt-5">
        <v-alert
            type="warning"
            title="Ayúdanos a salvar vidas"
            text="Tu generosidad puede hacer una gran diferencia en la capacidad de los bomberos voluntarios para proteger a las personas y propiedades en momentos de crisis."
        ></v-alert>
        <Carrousel />
        <v-card-text>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card height="400">
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbvlanusoficial%2Fposts%2Fpfbid02QBWQRtdmoFB7MxzeGeLGVEQCjUgAm86D2BGhiKsukSFyrqcZPvMtDFcFpxBT5bFRl&show_text=true&width=500" width="500" height="665" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card height="400">
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbvlanusoficial%2Fposts%2Fpfbid0iWERyGrqC7XKt9jU7nELrRcNHmJhavrUxkW3drW5YWASBfrAhAUscxQfuPtPXBBKl&show_text=true&width=500" width="500" height="486" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card height="400">
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbvlanusoficial%2Fposts%2Fpfbid0iFvepizMaUGmTiKSgz27eP7TRACy4XrWZSnRstaQQ9Cu5BF59JL6sgVZXduWmRXQl&show_text=true&width=500" width="500" height="684" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import Carrousel from '../components/Carrousel.vue'

export default {
    name: 'HomePage',
    components: {
        Carrousel
    }
}
</script>

<style lang="scss" scoped>

</style>