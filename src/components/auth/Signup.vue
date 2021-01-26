<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md3>
        <v-card class="elevation-12">
          <v-toolbar dark color="steel">
            <v-toolbar-title>Załóż konto</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form action="#" @submit.prevent="register">

              <v-text-field
                name="email"
                v-model="email"
                label="Email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <v-text-field
                name="password"
                label="Hasło"
                :rules="[rules.required]"
                type="password"
                v-model="password"
              ></v-text-field>

              <v-text-field
                name="password"
                label="Potwórz hasło"
                :rules="[rules.required]"
                type="password"
                v-model="confirm_password"
                :error="!valid()"
              ></v-text-field>

            </v-form>
          </v-card-text>
          <v-divider light></v-divider>

          <v-card-actions>
            <v-btn to="/login" rounded dark color="black">Zaloguj</v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded dark color="black" @click.prevent="register()">
              Załóż konto
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "signup",
  data: () => ({
    email: '',
    password: "",
    confirm_password: "",
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Email ma niepoprawny format.";
      }
    }
  }),
  methods: {
    register() {
      if (this.valid()) {
        this.$store.dispatch('register', {
          email: this.email,
          password: this.password
        })
        .then(({ status }) => {
          this.$router.push('/login')
        })
      }
    },
    valid() {
      return this.password === this.confirm_password;
    }
  }
};
</script>