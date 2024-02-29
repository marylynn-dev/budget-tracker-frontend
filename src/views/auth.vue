<template>
  <v-sheet class="bg-primary pa-12" rounded>
    <v-card max-width="500px" class="mx-auto">
      <div>
        <p
          class="text-center my-5"
          :style="{ 'font-weight': 600, 'font-size': '50px' }"
        >
          {{ tab === "Login" ? "Login form" : "Signup form" }}
        </p>
      </div>
      <v-tabs
        v-model="tab"
        align-tabs="start"
        color="primary"
        style="border-bottom: 2px solid #f8f8f8"
        class="mb-7"
      >
        <v-tab
          v-for="category in categories"
          :key="category"
          :value="category"
          >{{ category }}</v-tab
        >
      </v-tabs>
      <v-card-text style="background-color: #f8f8f8">
        <v-window v-model="tab">
          <v-window-item value="Login"><login /></v-window-item>
          <v-window-item value="SignUp"><signUp /></v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import login from "@/components/login.vue";
import signUp from "@/components/signup.vue";

const categories = ["Login", "SignUp"];
const tab = ref(categories[0]);
</script>
