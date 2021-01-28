<template>
    <div>
        <div>
            <movieItem v-for="movie in pageOfMovies" :movies="movies" :key="movie.Id" :movie="movie"/>
        </div>

    <div class="text-center">
        <v-pagination
        v-model="page"
        :length="Math.ceil(movies.length/5)"
        circle
        ></v-pagination>
    </div>
    </div>
</template>


<script>
import MovieItem from './MovieItem.vue'

export default {
    name: 'wantToSee',
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

    data: () => ({
        page: 1
    }),

    created() {
        this.$store.dispatch('retrieveWantToMovies')
    },

    methods: {
        onChangePage(page) {
            this.page = page;
        }
    }
}
</script>