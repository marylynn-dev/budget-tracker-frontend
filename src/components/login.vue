<template>
  <v-form v-model="form" @submit.prevent="onSubmit">
    <v-text-field
      v-model="email"
      :readonly="loading"
      :rules="[required]"
      class="mb-2 mt-4"
      clearable
      label="Email"
      variant="outlined"
      rounded="0"
      flat
    ></v-text-field>
    <div class="text-right">
      <a
        class="text-caption text-decoration-none text-blue"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        Forgot login password?</a
      >
    </div>
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
const loading = ref(false);

const login = async (email, password) => {
  try {
    loading.value = true;
    await axios.post("http://localhost:3001/auth/log-in", {
      email,
      password,
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

  login(email.value, password.value);
};

const required = (v) => {
  return !!v || "Field is required";
};
</script>
