<template>
  <div>
    <v-sheet class="bg-primary pa-12" rounded>
      <v-card max-width="500px" class="mx-auto">
        <div>
          <p
            v-if="tab === 'Login'"
            class="text-center my-10"
            style="font-weight: 600; font-size: 50px"
          >
            Login form
          </p>
          <p
            v-else
            class="text-center my-10"
            style="font-weight: 600; font-size: 50px"
          >
            Signup form
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
          >
            {{ category }}
          </v-tab>
        </v-tabs>

        <v-card-text style="background-color: #f8f8f8">
          <v-window v-model="tab">
            <v-window-item value="Login"> <login /></v-window-item>
            <v-window-item value="Sign up"> <signUp /></v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import login from "@/components/login.vue";
import signUp from "@/components/signup.vue";

const categories = ["Login", "SignUp"];

let tab = ref(categories[0]);
</script>
