<template>
  <!-- Month and year selection -->
  <div>
    <v-row>
      <!-- Month select -->
      <v-col cols="12" md="3">
        <v-select
          v-model="month"
          :items="months"
          density="compact"
          label="Month"
          variant="solo"
          flat
        ></v-select>
      </v-col>

      <!-- Year select -->
      <v-col cols="12" md="3">
        <v-select
          v-model="year"
          :items="years"
          density="compact"
          label="Year"
          variant="solo"
          flat
        ></v-select>
      </v-col>
    </v-row>

    <!-- Chart -->
    <v-row>
      <v-col>
        <Chart
          v-if="data.length > 0"
          :size="{ width: 1000, height: 420 }"
          :data="data"
          :margin="margin"
          :direction="direction"
          :axis="axis"
        >
          <!-- Layers -->
          <template #layers>
            <!-- Bar component for rendering bars -->
            <Bar
              :dataKeys="['date', 'amount']"
              :barStyle="{ fill: '#90e0ef' }"
              max-width="50"
            />

            <!-- Marker -->
            <Marker
              :value="1000"
              label="Avg."
              color="primary"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </template>

          <!-- Widgets -->
          <template #widgets>
            <!-- Tooltip -->
            <Tooltip
              borderColor="#48CAE4"
              :config="{
                pl: { color: '#90e0ef' },
              }"
            />
          </template>
        </Chart>
        <div v-else>
          <v-img
            src="../assets/icons8-image-not-available-50.png"
            width="70px"
            height="70px"
            class="mx-auto"
          ></v-img>
          <p class="text-center" style="font-weight: 900">Wow, such empty!</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// Imports
import { ref, onMounted, watch } from "vue";
import { Chart, Bar, Marker, Tooltip } from "vue3-charts";
import { useExpenseStore } from "@/store/expense";
import { getMonthNumber, formatDate, months, years } from "@/services/utils";

// Store setup
const expenseStore = useExpenseStore();

// Data
const data = ref([]);
const month = ref("February");
const year = ref("2024");

// Bar styles
const direction = ref("horizontal");
const margin = ref({
  left: 0,
  top: 10,
  right: 2,
  bottom: 0,
});
const axis = ref({
  primary: {
    type: "band",
  },
  secondary: {
    domain: ["dataMin", "dataMax + 50"],
    type: "linear",
    ticks: 8,
  },
});

// Function to filter expenses and sum amounts for same date:
function getExpensesForDate(dateString) {
  if (expenseStore.expenses && expenseStore.expenses[dateString]) {
    const formattedData = expenseStore.expenses[dateString].reduce(
      (acc, expense) => {
        const existingEntry = acc.find(
          (entry) => entry.date === formatDate(expense.date)
        );
        if (existingEntry) {
          existingEntry.amount += expense.amount;
        } else {
          acc.push({ date: formatDate(expense.date), amount: expense.amount });
        }
        return acc;
      },
      []
    );
    data.value = formattedData;
  } else {
    data.value = [];
  }
}

// Function to update data based on selected month and year:
function filter([newMonth, newYear]) {
  const formattedDate = `${getMonthNumber(newMonth)}-${newYear}`;
  getExpensesForDate(formattedDate); // Call getExpensesForDate to get and sum data
}

// Watchers
watch([month, year], filter, { deep: true });

// Fetch expenses when component is mounted
onMounted(async () => {
  await expenseStore.getExpenses();
  filter([month.value, year.value]); // Pass current month and year to filter
});
</script>
