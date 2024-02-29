<template>
  <div>
    <!-- Main container -->
    <v-container>
      <!-- Row for transaction form and summary -->
      <v-row>
        <v-col style="background-color: white">
          <v-card rounded="0" variant="outlined">
            <v-card-text>
              <v-row><v-col>ADD TRANSACTION</v-col></v-row>

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
              <v-btn color="primary">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- Column for summary -->
        <v-col>
          <!-- Card for summary -->
          <v-card variant="outlined" rounded="0">ggggg</v-card>
        </v-col>
      </v-row>
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

<script setup></script>
