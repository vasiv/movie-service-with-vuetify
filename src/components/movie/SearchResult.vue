<template>
    <div>
        <div>
            <movieItem v-for="movie in pageOfMovies" :movies="movies" :key="movie.Id" :movie="movie"/>
        </div>

        <div class="text-center" v-if="movies.length > 0" >
            <v-pagination
            v-model="page"
            :length="Math.ceil(movies.length/5)"
            circle
            ></v-pagination>
        </div>

        <div class="text-center" v-if="movies.length == 0">
            Lista filmów jest pusta!
        </div>
    </div>
</template>

<script>
import MovieItem from './MovieItem.vue'

export default {
    name: 'searchResult',
    components: {
        MovieItem
    },
    computed: {
        movies() {
            return this.$store.getters.movies
        },
        pageOfMovies() {
            return this.movies.slice((this.page - 1) * 5, this.page * 5)
        }
    },

    // data: () => ({
       
    // }),

     data: function() {
        return {
            movieTitle: this.$route.params.movieTitle,
            page: 1
        }
    },

    created: function() {

        this.$store.dispatch('queryMovies', {
            movieTitle: this.movieTitle
        })
    },

    methods: {
        onChangePage(page) {
            this.page = page;
        }
    }
}
</script>