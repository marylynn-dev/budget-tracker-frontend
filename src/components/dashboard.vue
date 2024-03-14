<template>
  <div>
    <!-- Main container -->
    <v-container>
      <!-- Row for transaction form and summary -->
      <transaction />
      <!-- Row for budgets -->
      <v-row>
        <v-col>
          <v-card variant="outlined" rounded="0">
            <v-card-text>
              <v-row class="d-flex justify-space-between">
                <v-col><p>Budegets | View all</p></v-col>
                <v-col class="text-right"><p>Budegets | View all</p></v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import transaction from "./transaction.vue";
import axios from "axios";

const addTransaction = async () => {
  try {
    const res = await axios.post('')
  } catch (err) {
    console.log(err);
  }
};
</script>
