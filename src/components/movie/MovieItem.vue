<template>
  <v-card
    class="mx-auto my-7"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img v-bind:src="movie.ImageURL"> </v-img>

    <v-card-title>{{movie.Name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value=movie.Rating
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          {{movie.Rating}}
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        {{movie.Director}}, {{movie.Origin}}
      </div>
    </v-card-text>

    <v-card-text>
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Oceń</v-chip>
        <v-chip>Chcę obejrzeć!</v-chip>
      </v-chip-group>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
    name: 'movieItem',

    props: {
        movie: {
            type: Object,
            required: true
        }
    },

    data: () => ({

  }),
}
</script>