<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md3>
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar dark color="steel">
              <v-toolbar-title>Logowane</v-toolbar-title>
            </v-toolbar>
            <v-alert
              color="error"
              :value="error"
              icon="close"
            >
              Nazwa użytkownika lub hasło jest nieprawidłowe.
            </v-alert>
            <v-card-text>
              <v-text-field v-model="username" name="login" label="Nazwa użytkownika" type="text"></v-text-field>

              <v-text-field v-model="password" name="password" label="Hasło" type="password"></v-text-field>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn to="/signup" rounded color="steel" dark>Załóż konto</v-btn>
              <v-spacer></v-spacer>
              <v-btn rounded color="steel" dark @click.prevent="login()">
                Zaloguj
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    username: '',
    password: '',
    error: false
  }),
  methods: {
    login() {
      this.$store.dispatch("LOGIN", {
        username: this.username,
        password: this.password
      })
      .then(success => {
        this.$router.push("/")
      })
      .catch(error => {
        this.error = true;
      })
    }
  }
};
</script>