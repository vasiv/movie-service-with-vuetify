<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >

      <v-app-bar-nav-icon></v-app-bar-nav-icon>


    <v-container >
      <router-link to="/"> 
        <v-img
        src="./assets/logo.png"
        class="mx-auto"
        contain
        max-height="90"
        max-width="90"
        ></v-img>
      </router-link>
    </v-container>

    <v-container>
      <v-form>
              <v-text-field
                  label="Szukaj"
                  placeholder="Tytuł filmu">
              </v-text-field>
            </v-form>
      </v-container>

    <v-container>
      <v-btn rounded dark color="steel" to="movies">
        Baza filmów
      </v-btn>
    </v-container>

      <v-btn to="/login"  rounded depressed dark color="steel">
        Zaloguj się
      </v-btn>
  </v-app-bar>

  <v-main>
    <router-view></router-view>
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
  }
</script>