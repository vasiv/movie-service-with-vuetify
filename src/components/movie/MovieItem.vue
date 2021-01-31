<template>
  <v-card
class="mx-auto my-4" max-width="700"
  >
    <v-row justify="space-between">
      <v-col cols="8">
        <v-card-title>
          <div>
            <div class="headline">
              <b>{{movie.Name}}</b>
            </div>
            <div><p> {{categories}} </p></div>
            <div>reż. {{movie.Director}}, {{movie.Origin}}</div>
            <div>{{ movie.PremiereDate }}</div>
          </div>
        </v-card-title>
      </v-col>

      <v-img
        class="shrink ma-2"
        contain
        height="150px"
         v-bind:src="movie.ImageURL"
        style="flex-basis: 125px"
      ></v-img>
    </v-row>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-4">
      Ocena użytkowników:
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 caption mr-2">
        ({{ movie.Rating }})
      </span>
      <v-rating
        :value=movie.Rating
        background-color="black"
        color="yellow accent-4"
        dense
        half-increments
        hover
        readonly
        size="14"
      ></v-rating>
      
    </v-card-actions>

    <v-card-actions v-if="loggedIn" class="pa-4">
      Twoja ocena:
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 caption mr-2">
        ({{ userRating }})
      </span>
      <v-rating
        v-model="userRating"
        :value=userRating
        background-color="black"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="14"
      ></v-rating>
    </v-card-actions>

    <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip :to="{ path: '/wantToWatch/add/'+ movie.Id}">Chcę obejrzeć!</v-chip>
      </v-chip-group>
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

    computed: {
      categories() {
        var movieCategories = [];
        console.log(this.movie.Categories)
        this.movie.Categories.forEach(element => {
          movieCategories.push(element.Name)
        });
        return movieCategories.join()
      },
      userRating() {
        return 3
      },
      loggedIn() {
        return this.$store.getters.loggedIn
      },
    },

    data: () => ({
      
    })

}
</script>