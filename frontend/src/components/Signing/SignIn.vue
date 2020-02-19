<template>
<v-app>
  <v-card width="600" class="mx-auto mt-12">
    <v-card-title class="pb-0">
      <h1 class="display-2 text-center pt-2 pb-2 font-weight-thin">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form method="post" @submit.prevent="signIn">
        <v-text-field
          v-model="credentials.email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          data-vv-name="email"
          class="font-weight-light title"
          label="Email address"
          prepend-icon="mdi-account-circle"
          required
        />
        <v-text-field
          v-model="credentials.password"
          v-validate="'required|min:8|max:32'"
          :counter="32"
          :error-messages="errors.collect('password')"
          data-vv-name="password"
          class="font-weight-light title"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          required
        />
        <v-card-actions class="justify-center">
          <v-btn text class="black--text subtitle font-weight-light" @click="clear">Clear</v-btn>
          <VerticalDivider class="mx-2" vertical inset color="black" />
          <v-btn
            text
            class="black--text subtitle font-weight-light"
            type="submit"
            @click="validate"
          >Send</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</v-app>
</template>


<script>
import Vue from "vue";
Vue.use(ValidationProvider)
import { ValidationProvider } from "vee-validate";
Vue.component('ValidationProvider', ValidationProvider);
import VerticalDivider from "../MainPageSmallComponents/VerticalDivider";

export default {
  $_veeValidate: {
    validator: "new",
  },
  name: "SignIn",
  components: {
    VerticalDivider, VeeValidate
  },
  data() {
    return {
      showPassword: false,
      credentials: {
        email: "",
        password: ""
      },
      exceptionRequest: null,
      dictionary: {
        attributes: {
          email: "E-mail Address",
          password: "Password"
          // custom attributes
        },
        custom: {
          email: {
            required: () => "Email can not be empty",
            max: "The name field may not be greater than 10 characters"
            // custom messages
          },
          password: {
            required: () => "Password can not be empty",
            max: "The password field may not be greater than 32 characters",
            min: "The password field must be greater than 8 characters"
            // custom messages
          }
        }
      }
    };
  },
  methods: {
    async signIn() {
      try {
        await this.$store.dispatch("signIn", this.credentials);
        alert("Signed in");
        this.$router.push("/");
      } catch (err) {
        this.exceptionRequest = err.data;
      }
    },
    clear() {
      this.credentials.email = "";
      this.credentials.password = "";
      this.showPassword = false;
    },
    validate() {
      this.$validator.validateAll();
    }
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  }
};
</script>