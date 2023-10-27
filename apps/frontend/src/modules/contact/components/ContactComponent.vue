
<template>
  <v-row align="center" justify="center" style="height: 75vh">
    <v-col cols="4" v-for="item in items" :key="item.title">
      <v-card
        class="mx-auto pb-4"
        width="400"
        :elevation="item.elevation"
        @mouseover="item.elevation = '10'"
        @mouseleave="item.elevation = '2'"
      >
        <iframe 
          :src="item.googlemaps" 
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <v-card-title>
          <v-icon start>mdi-map-marker-circle</v-icon>{{ item.title }}
        </v-card-title>

        <v-card-text>
          {{ item.subtitle }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default{
  name: 'ContactComponent',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    show: false,
    elevation: '2'
  }),
}
</script>
