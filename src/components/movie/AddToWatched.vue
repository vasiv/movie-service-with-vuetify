<template>
    
</template>

<script>
export default {

    name: 'addToWatched',

    data: function() {
        return {
            movieId: this.$route.params.movieId
        }
    },

    created: function() {
        this.$store.dispatch('addToMyMovies', {
            movieId: this.movieId
        })
        // .then(response => {
        //         this.$store.dispatch('setAsWatched')
        // })
    }
}
</script>