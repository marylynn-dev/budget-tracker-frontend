<template>
  <v-row>
    <v-col style="background-color: white">
      <addExpense />
    </v-col>
    <!-- Column for summary -->
    <v-col>
      <!-- Card for summary -->
      <v-card variant="outlined" rounded="0">ggggg</v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import addExpense from "./add-expense.vue";
import { ref } from "vue";
</script>
