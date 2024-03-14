<template>
  <v-row>
    <v-col><h3 class="text-primary">Add Category</h3></v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <p>Title</p>
      <v-text-field
        v-model="title"
        density="compact"
        variant="outlined"
        rounded="0"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-btn
        color="primary"
        variant="flat"
        @click="createCategory"
        :loading="isLoading"
        >Add</v-btn
      >
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

// Project imports
import { create } from "@/services/category apis/category";

// Data
const title = ref("");
const isLoading = ref(false);

// Methods
const createCategory = async () => {
  isLoading.value = true;
  await create(title.value);
  isLoading.value = false;
  title.value = "";
};
</script>
