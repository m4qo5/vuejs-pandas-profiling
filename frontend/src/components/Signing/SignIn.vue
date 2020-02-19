<template>
    <v-card width="600" class="mx-auto mt-12">
      <v-card-title class="pb-0">
        <h1 class="display-2 text-center pt-2 pb-2 font-weight-thin">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            class="font-weight-light title"
            label="Email address" 
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            class="font-weight-light title"
            :type="showPassword ? 'text' : 'password'" 
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn text class="black--text subtitle font-weight-light">Send</v-btn>
      </v-card-actions>
    </v-card>
</template>


<script>
export default {
  name: "SignIn",
  data () {
    return {
      showPassword: false
    }
  }
};
</script>