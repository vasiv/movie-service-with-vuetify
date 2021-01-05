<template>
        <v-container>
            <v-card class="elevation-5 flex d-flex flex-column"
                    :href=item.href
                    target="_blank">
                    <v-img v-bind:src="item.imgSrc"/>
                    <v-card-title class="text-center"/>
            </v-card>
        </v-container>
</template>

<script>
  export default {
    name: 'NewsItem',   

    props: ['item']
  }
</script>
