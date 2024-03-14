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
            variant="outlined"
            rounded="0"
            clearable
            clear-icon="mdi-close-circle"
            model-value="Add a Description"
          ></v-textarea>
        </v-col>
      </v-row>

      <!-- Row for category and date -->
      <v-row>
        <v-col>
          <p>Category</p>
          <v-select variant="outlined" rounded="0" density="compact">
            ggg
          </v-select>
        </v-col>
        <v-col>
          <p>Date</p>
          <v-text-field
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
          <p>Bank</p>
          <v-select density="compact" variant="outlined" rounded="0">
            ggg
          </v-select>
        </v-col>
        <v-col>
          <p>Amount</p>
          <v-text-field
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
      <v-btn color="primary" variant="flat">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup></script>
