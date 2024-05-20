<script setup>
import Sidebar from '@/components/Sidebar.vue';
import NovoCanhoto from '@/components/NovoCanhoto.vue';

import { onMounted } from 'vue';

onMounted(() => {
    const body = document.querySelector("body");
    const sidebar = body.querySelector(".sidebar");
    const toggle = body.querySelector(".toggle");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });
});
</script>

<template>
  <main>
    <Sidebar/>
    <NovoCanhoto/>
  </main>
</template>
