<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >

      <v-app-bar-nav-icon></v-app-bar-nav-icon>


    <v-container>
      <v-img
      src="./assets/logo.png"
      class="mx-auto"
      contain
      max-height="60"
      max-width="60"
      ></v-img>
    </v-container>

    <v-container>
      <v-form>
              <v-text-field
                  label="Szukaj"
                  placeholder="Szukaj"
              ></v-text-field>
            </v-form>
      </v-container>

    <v-container>
      <v-btn rounded>
        Baza filmów
      </v-btn>
    </v-container>

      <v-btn depressed>
        Zaloguj się
      </v-btn>
  </v-app-bar>

  <v-main>
  <v-container>
        <v-row>
          <v-col
            v-for="n in 9"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>IUI - Serwis Filmowy</strong>
    </v-col>
  </v-footer>

  </v-app>
</template>



<script>
  export default {
    //
  }
</script>