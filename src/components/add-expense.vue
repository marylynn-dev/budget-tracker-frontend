<template>
  <v-card rounded="0" flat>
    <v-card-text>
      <v-row
        ><v-col><h3 class="text-primary">Add Expense</h3></v-col></v-row
      >
      <!-- row for title -->
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
      <!-- Row for description -->
      <v-row>
        <v-col>
          <p>Description</p>
          <v-textarea
            v-model="description"
            variant="outlined"
            rounded="0"
            clearable
            clear-icon="mdi-close-circle"
          ></v-textarea>
        </v-col>
      </v-row>

      <!-- Row for category and date -->
      <v-row>
        <v-col>
          <p>Category</p>
          <v-select
            v-if(categories)
            v-model="category"
            :items="categories"
            :item-title="(item) => `${item.title}`"
            return-object
            variant="outlined"
            rounded="0"
            density="compact"
          ></v-select>
        </v-col>
        <v-col>
          <p>Date</p>
          <v-text-field
            v-model="date"
            type="date"
            variant="outlined"
            rounded="0"
            density="compact"
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- Row for bank and amount -->
      <v-row>
        <v-col>
          <p>Amount</p>
          <v-text-field
            v-model="amount"
            density="compact"
            variant="outlined"
            rounded="0"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <!-- Card actions -->
    <v-card-actions>
      <!-- Button to submit transaction -->
      <v-btn color="primary" variant="flat" @click="addExpense">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { get } from "../services/category";
import { create } from "../services/expense";

const title = ref();
const description = ref();
const category = ref();
const date = ref();
const amount = ref();

const categories = ref();

const addExpense = () => {
  create(
    title.value,
    amount.value,
    category.value,
    date.value,
    description.value
  );
  title.value = "";
  amount.value = "";
  category.value = "";
  date.value = "";
  description.value = "";
};
onMounted(async () => {
  const res = await get();
  categories.value = res;
});
</script>
../services/expense
