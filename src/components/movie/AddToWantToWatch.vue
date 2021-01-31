<template>
    
</template>

<script>
export default {

    name: 'addToWantToWatch',

    data: function() {
        return {
            movieId: this.$route.params.movieId
        }
    },

    created: function() {
        this.$store.dispatch('addToMyMovies', {
            movieId: this.movieId
        })
    }
}
</script>