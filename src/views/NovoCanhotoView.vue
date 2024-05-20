<script setup>
import Sidebar from '@/components/Sidebar.vue';
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
  </main>
</template>
