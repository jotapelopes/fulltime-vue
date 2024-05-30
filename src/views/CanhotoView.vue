<script setup>
import Canhoto from '../components/Canhotos.vue';
import Sidebar from '@/components/Sidebar.vue';
import '@/assets/style/home.css';
import axios from 'axios';
import {onMounted, reactive, ref} from "vue";

let personagens = reactive(ref())

onMounted(() => {
    const body = document.querySelector("body");
    const sidebar = body.querySelector(".sidebar");
    const toggle = body.querySelector(".toggle");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });

    axios.get('http://localhost:5104/api/Status')  // Note the changed URL
    .then(response => {
      personagens.value = response.data;

    })
    .catch(error => {
      console.error('Erro ao localizar dados do canhoto', error);
    });

  console.log(personagens);

});
</script>

<template>
  <main>
    <Sidebar/>
    <Canhoto
    />
  </main>
</template>
