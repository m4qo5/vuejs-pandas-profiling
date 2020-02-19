<template>
    <v-card width="600" class="mx-auto mt-12">
      <v-card-title class="pb-0">
        <h1 class="display-2 text-center pt-2 pb-2 font-weight-thin">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form method="post" @submit.prevent="signIn">
          <v-text-field 
            v-model="credentials.email"
            class="font-weight-light title"
            label="Email address" 
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            v-model="credentials.password"
            class="font-weight-light title"
            :type="showPassword ? 'text' : 'password'" 
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
      <v-card-actions class="justify-center">
        <v-btn text class="black--text subtitle font-weight-light" type="submit">Send</v-btn>
      </v-card-actions>
        </v-form>
      </v-card-text>
      
    </v-card>
</template>


<script>
export default {
  name: "SignIn",
  data () {
    return {
      showPassword: false,
      credentials: {
                email: '',
                password: ''
      },
      exceptionRequest: null,
    }
  },
  methods: {
      async signIn () {
       try {
          await this.$store.dispatch('signIn', this.credentials)
        } catch (err) {
          this.exceptionRequest = err.data
        }
      if (!this.exceptionRequest) {
        alert('Signed in')
        this.$router.push('/');
      }
    },
  }
};
</script>