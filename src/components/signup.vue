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
    >
      Sign In
    </v-btn>
  </v-form>
</template>
<script setup>
import { ref } from "vue";

const tab = ref("Login");

const form = ref(false);
const email = ref(null);
const password = ref(null);
const loading = ref(false);

const onSubmit = () => {
  if (!form.value) return;

  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
};

const required = (v) => {
  return !!v || "Field is required";
};
</script>
