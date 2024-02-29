<template>
  <v-form v-model="form" @submit.prevent="onSubmit">
    <v-text-field
      v-model="name"
      class="mb-2 mt-2"
      :readonly="loading"
      :rules="[required]"
      clearable
      label="Full name"
      placeholder="Enter your name"
      variant="outlined"
      rounded="0"
      flat
    ></v-text-field>
    <v-text-field
      v-model="email"
      :readonly="loading"
      :rules="[required]"
      class="mb-2"
      clearable
      label="Email"
      variant="outlined"
      rounded="0"
      flat
    ></v-text-field>

    <v-text-field
      v-model="password"
      :readonly="loading"
      :rules="[required]"
      clearable
      label="Password"
      placeholder="Enter your password"
      variant="outlined"
      rounded="0"
      flat
    ></v-text-field>

    <br />

    <v-btn
      :disabled="!form"
      :loading="loading"
      block
      color="primary"
      size="large"
      type="submit"
      variant="elevated"
      class="mb-5"
    >
      Sign In
    </v-btn>
  </v-form>
</template>
<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import Swal from "sweetalert2";
import axios from "axios";

import { useRouter } from "vue-router";
const router = useRouter();

const userStore = useUserStore();

const tab = ref("Login");

const form = ref(false);
const email = ref(null);
const password = ref(null);
const name = ref(null);
const loading = ref(false);

const login = async (email, password, name) => {
  try {
    loading.value = true;
    await axios.post("http://localhost:3001/auth/register", {
      email,
      password,
      name,
    });
    router.push("/home");
  } catch (error) {
    if (error.response) {
      Swal.fire({
        title: error.response.data.error.message, // Using the error message returned from the server
        icon: "error",
        confirmButtonText: "Cool",
        confirmButtonColor: "#00cd96",
      });
    } else {
      Swal.fire({
        title: error,
        icon: "error",
        confirmButtonText: "Cool",
        confirmButtonColor: "#00cd96",
      });
    }
  } finally {
    loading.value = false;
  }
};
const onSubmit = async () => {
  if (!form.value) return;

  login(email.value, password.value, name.value);
};

const required = (v) => {
  return !!v || "Field is required";
};
</script>
