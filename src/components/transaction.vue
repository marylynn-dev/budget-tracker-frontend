<template>
  <v-row>
    <v-col style="background-color: white">
      <addExpense />
    </v-col>
    <!-- Column for summary -->
    <v-col>
      <!-- Card for summary -->
      <v-card flat rounded="0">
        <v-card-text v-if="chartData.data.labels.length > 0">
          <v-row><v-col><h3 class="text-primary">Expenses</h3></v-col></v-row>
          <v-row>
            <v-col>
              <Pie :data="chartData.data" :options="chartData.options" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import addExpense from "./add-expense.vue";
import { get } from "../services/expense";
import { ref, onMounted, reactive } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ref([]);
const expenseData = ref([]);

const fetchData = async () => {
  const expenses = await get();

  expenses.forEach((expense) => {
    labels.value.push(expense.title);
    expenseData.value.push(expense.amount);
  });

  // Update chartData after fetching data
  chartData.data.labels = labels.value;
  chartData.data.datasets[0].data = expenseData.value;
};

onMounted(async () => {
  await fetchData();
});

const chartData = reactive({
  data: {
    labels: [],
    datasets: [
      {
        backgroundColor: ["#ff7eb0", "#E46651", "#00D8FF", "#DD1B16"],
        data: [],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
</script>
