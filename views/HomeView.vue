<script setup>
import HomeSite from '../components/Home.vue';
import '@/assets/style/home.css';
import { onMounted } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

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
    <HomeSite
    />
  </main>
</template>
