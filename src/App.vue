<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >

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

      <v-btn v-if="!loggedIn" to="/login"  rounded depressed dark color="steel">
        Zaloguj się
      </v-btn>

      <v-btn v-if="loggedIn" to="/wantToSee"  rounded depressed dark color="steel">
        Chcę obejrzeć
      </v-btn>

      <v-btn v-if="loggedIn" to="/watched"  rounded depressed dark color="steel">
        Obejrzane
      </v-btn>

      <v-btn v-if="loggedIn" to="/logout"  rounded depressed dark color="steel">
        Wyloguj się
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
      {{ new Date().getFullYear() }} — <strong>PIOD - Serwis Filmowy</strong>
    </v-col>
  </v-footer>

  </v-app>
</template>



<script>
  export default {
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      },
      currentUser() {
            return this.$store.getters.currentUser
        },
    }
  }
</script>