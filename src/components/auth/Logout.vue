<template>
    
</template>

<script>
import Router from 'vue-router'

export default {
    created() {
        this.$store.dispatch('destroyToken')
            .then(response => {
                this.$router.push('/')
        })
    }
}
</script>