<template>
  <div>
    <v-card>
      <v-tabs v-model="tab" color="primary">
        <v-tab v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="expenses">
            <expenses />
          </v-window-item>
          <v-window-item value="budget">
            <budget />
          </v-window-item>
          <v-window-item value="category">
            <category />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import expenses from "./add-expense.vue";
import budget from "./add-budget.vue";
import category from "./add-category.vue";

import axios from "axios";
import { onMounted, ref } from "vue";

const categories = ["expenses", "budget", "category"];

let tab = ref(categories[0]); // Set the default tab

onMounted(() => {
  axios
    .get("http://localhost:1573/vote")
    .then((response) => {})
    .catch((error) => {
      console.error("Error:", error);
    });
});
</script>
