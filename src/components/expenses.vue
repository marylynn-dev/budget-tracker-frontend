<template>
  <div>
    <v-row
      ><v-col cols="12" md="3">
        <v-select
          v-model="month"
          :items="months"
          density="compact"
          label="Month"
          variant="solo"
          flat
          @update:modelValue="
            (newValue, oldValue) => {
              if (newValue !== oldValue) {
                console.log('heyy!', newValue);
              }
            }
          "
        ></v-select> </v-col
      ><v-col cols="12" md="3">
        <v-select
          v-model="year"
          :items="years"
          density="compact"
          label="Year"
          variant="solo"
          flat
          @update:modelValue="
            (newValue, oldValue) => {
              if (newValue !== oldValue) {
                console.log('heyy!', newValue);
              }
            }
          "
        ></v-select> </v-col
    ></v-row>
    <v-row
      ><v-col>
        <Chart
          v-if="data.length > 0"
          :size="{ width: 1000, height: 420 }"
          :data="data"
          :margin="margin"
          :direction="direction"
          :axis="axis"
        >
          <template #layers>
            <Grid strokeDasharray="2,2" />
            <!-- Use Bar component for rendering bars -->
            <Bar
              :dataKeys="['date', 'amount']"
              :barStyle="{ fill: '#90e0ef' }"
              max-width="50"
            />
            <Marker
              :value="1000"
              label="Avg."
              color="#e76f51"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </template>

          <template #widgets>
            <Tooltip
              borderColor="#48CAE4"
              :config="{
                pl: { color: '#90e0ef' },
              }"
            />
          </template> </Chart></v-col
    ></v-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart, Grid, Bar, Marker, Tooltip } from "vue3-charts";
import { useExpenseStore } from "@/store/expense";
import moment from "moment";

const expenseStore = useExpenseStore();

// Define reactive reference for data
const data = ref([]);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const month = ref("");
const year = ref("");

const years = [2022, 2023, 2024];
// Define reactive reference for direction
const direction = ref("horizontal");

// Define reactive reference for margin
const margin = ref({
  left: 0,
  top: 20,
  right: 2,
  bottom: 0,
});

// Define reactive reference for axis
const axis = ref({
  primary: {
    type: "band",
  },
  secondary: {
    domain: ["dataMin", "dataMax + 100"],
    type: "linear",
    ticks: 8,
  },
});

onMounted(async () => {
  await expenseStore.getExpenses();
  data.value = expenseStore.expenses;
  console.log(expenseStore.expenses);
});
</script>
