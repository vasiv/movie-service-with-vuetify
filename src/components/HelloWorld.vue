<template>


  <v-main>
  <v-container>
        <v-row>
          <v-col
            v-for="n in news"
            :key="n"
            cols="4"
          >
            <v-card height="200"
            :href=n.href
            target="_blank">
              <v-img v-bind:src="n.img"></v-img>
              <v-card-title>{{n.title}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>


</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      news: [
        {
          title: 'Elliot Page dostanie rolę w widowisku Marvela?',
          img: 'https://fwcdn.pl/nph/867323/2021/29415_1.10.jpg',
          href: 'https://www.filmweb.pl/news/Elliot+Page+dostanie+rol%C4%99+w+widowisku+Marvela-140781',
        },
        {
          title: 'Czy na pewno Elliot Page dostanie rolę w widowisku Marvela?',
          img: 'https://fwcdn.pl/nph/867323/2021/29415_1.10.jpg',
          href: 'https://www.filmweb.pl/news/Elliot+Page+dostanie+rol%C4%99+w+widowisku+Marvela-140781',
        },
                {
          title: 'Czy aby Elliot Page dostanie rolę w widowisku Marvela?',
          img: 'https://fwcdn.pl/nph/867323/2021/29415_1.10.jpg',
          href: 'https://www.filmweb.pl/news/Elliot+Page+dostanie+rol%C4%99+w+widowisku+Marvela-140781',
        },
      ],
    }),
  }
</script>
