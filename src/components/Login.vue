<template>
    <div class="containerLogin mx-auto">
      <div class="containerInfos container-user">
        <div class="logo">
          <img src="@/assets/img/fulltime-ecanhoto-logo.png" alt="Logo do Fulltime E-canhoto" width="150" />
        </div>
        <div class="inputsLogin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="user.email"
              @input="hideLabel('floatingInputLabel')"
            />
            <label for="floatingInput" id="floatingInputLabel">Insira seu e-mail</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="user.password"
              @input="hideLabel('floatingPasswordLabel')"
            />
            <label for="floatingPassword" id="floatingPasswordLabel">Insira sua senha</label>
          </div>
          <a class="text-decoration-none" href="#">
            <p class="p-2">Esqueceu seu acesso?</p>
          </a>
        </div>
  
        <div v-if="errorMessage" class="alert alert-danger">
          {{ errorMessage }}
        </div>
  
        <div class="d-flex col-lg-12">
          <RouterLink to="/home" id="btnLogin" class="btn btn-sm w-75 d-flex justify-content-center" @click.prevent="login">
            Login
          </RouterLink>
          <RouterLink to="/" id="btnLogin" class="btn btn-sm w-25 ms-2 d-flex justify-content-center">
            Voltar <i class='bx bx-undo'></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import http from '@/http-common';
  import { useAuth } from '@/stores/auth.js';
  
  const auth = useAuth();
  
  const user = reactive({
    email: '',
    password: '',
  });
  
  const errorMessage = ref('');
  
  async function login() {
    try {
      const { data } = await http.post('/Users/authenticate', user);
      auth.setToken(data.token);
      auth.setUser(data.user);
      errorMessage.value = ''; 
    } catch (error) {
      errorMessage.value = 'Dados incorretos. Por favor, tente novamente.';
    }
  }
  
  function hideLabel(labelId) {
    const label = document.getElementById(labelId);
    if (label) {
      label.classList.add('hidden-label');
    }
  }
  </script>
  
  <style scoped>
  .hidden-label {
    display: none;
  }
  .alert-danger {
    color: red;
  }
  </style>
  