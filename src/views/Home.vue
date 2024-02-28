<template>
  <div>
    <v-card>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="primary"
        style="border-bottom: 2px solid #f8f8f8"
        class="mb-7"
      >
        <v-tab v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </v-tab>
      </v-tabs>

      <v-card-text style="background-color: #f8f8f8">
        <v-window v-model="tab">
          <v-window-item value="Dashboard"> <dashboard /> </v-window-item>
          <v-window-item value="Track Expenses"> <expenses /></v-window-item>
          <v-window-item value="Reports"> 3 </v-window-item>
          <v-window-item value="Tools"> <tools /></v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import dashboard from "../components/dashboard.vue";
import expenses from "../components/expenses.vue";
import tools from "../components/tools.vue";

const categories = ["Dashboard", "Track Expenses", "Reports", "Tools"];

let tab = ref(categories[0]);
</script>
