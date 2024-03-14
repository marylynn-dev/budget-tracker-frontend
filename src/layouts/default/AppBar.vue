<template>
  <v-app-bar flat height="80">
    <div class="w-100">
      <div
        class="d-flex pa-2 justify-space-between w-100"
        style="border-bottom: 2px solid #f8f8f8"
      >
        <p>Some more content here</p>
        <div class="d-flex justify-space-between">
          <v-avatar color="primary">
            <v-icon icon="mdi-account-circle"></v-icon>
          </v-avatar>
          <div class="my-auto mx-5">
            <p style="font-weight: 500; font-size: 18px">{{ name && name }}</p>
            <p style="font-weight: 700; font-size: 12px; color: #9b6ab2">
              SETTINGS | LOGOUT
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getUser } from "../../services/user-apis/user";

const name = ref(null);

onMounted(async () => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    const res = await getUser(token);
    name.value = res.name;
  } else {
    console.log("Access token not found in localStorage");
  }
});
</script>
