<template>
  <v-main>
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

  export default {
    name: 'Home',

    components: {
        NewsItem     
    },

    data: () => ({
      news: [
        {
          title: 'Festiwal z horroru - w latarni morskiej, dla jednej osoby',
          imgSrc: 'https://fwcdn.pl/nph/875720/2021/29419_1.10.jpg',
          href: 'https://www.filmweb.pl/news/Festiwal%2C+jakiego+nie+by%C5%82o+-+na+odizolowanej+wyspie%2C+w+latarni+morskiej.-140788',
        },
        {
          title: 'Michael Keaton będzie jednym z dwóch głównych Batmanów?',
          imgSrc: 'https://fwcdn.pl/nph/1985708/2021/29418_1.10.jpg',
          href: 'https://www.filmweb.pl/news/Michael+Keaton+b%C4%99dzie+jednym+z+dw%C3%B3ch+g%C5%82%C3%B3wnych+Batman%C3%B3w-140785',
        },
                {
          title: 'Barbara Shelley, gwiazda filmów studia Hammer, nie żyje',
          imgSrc: 'https://fwcdn.pl/nph/867323/2021/29413_1.10.jpg',
          href: 'https://www.filmweb.pl/news/Barbara+Shelley%2C+gwiazda+film%C3%B3w+studia+Hammer%2C+nie+%C5%BCyje-140779',
        },
      ],
    }),
  }
</script>
