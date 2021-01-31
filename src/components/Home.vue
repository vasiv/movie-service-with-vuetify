<template>
  <v-main>

    <v-container v-if="loggedIn">
      Polecane dla Ciebie:
      <v-row>
        <v-col
          md="3"
          v-for="movie in recommendations"
          :key="movie.Id"
          cols="4">
          <MovieItem :movie = "movie"/>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          md="4"
          v-for="item in news"
          :key="item.href"
          cols="4">
          <NewsItem :item = "item"/>
        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

<script>
import NewsItem from './NewsItem.vue'
import MovieItem from './movie/MovieItem.vue'

  export default {
    name: 'Home',

    components: {
        NewsItem,
        MovieItem    
    },

    created() {
      this.$store.dispatch('retrieveRecommendations')
    },

    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      },
      recommendations() {
        return this.$store.getters.recommendations.slice(0, 4)
      }
    },

    data: () => ({
      news: [
        {
          title: 'Festiwal z horroru - w latarni morskiej, dla jednej osoby',
          imgSrc: 'https://fwcdn.pl/nph/875720/2021/29419_1.10.jpg',
          href: 'https://www.filmweb.pl/news/Festiwal%2C+jakiego+nie+by%C5%82o+-+na+odizolowanej+wyspie%2C+w+latarni+morskiej.-140788',
        },
        {
          title: 'Michael Keaton jako nowy Batman?',
          imgSrc: 'https://fwcdn.pl/nph/1985708/2021/29418_1.10.jpg',
          href: 'https://www.filmweb.pl/news/Michael+Keaton+b%C4%99dzie+jednym+z+dw%C3%B3ch+g%C5%82%C3%B3wnych+Batman%C3%B3w-140785',
        },
                {
          title: 'Barbara Shelley, gwiazda studia Hammer, nie żyje',
          imgSrc: 'https://fwcdn.pl/nph/867323/2021/29413_1.10.jpg',
          href: 'https://www.filmweb.pl/news/Barbara+Shelley%2C+gwiazda+film%C3%B3w+studia+Hammer%2C+nie+%C5%BCyje-140779',
        },
      ]
    }),
  }
</script>
