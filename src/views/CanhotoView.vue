<script setup>
import Canhoto from '../components/Canhotos.vue';
import Sidebar from '@/components/Sidebar.vue';
import '@/assets/style/home.css';
import '@/assets/style/canhoto.css';
import {onMounted, reactive, ref} from "vue";

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
    <Canhoto
    />
  </main>
</template>
