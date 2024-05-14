<style scoped>

</style>

<template>
  <div class="body">
    <div class="containerLogin mx-auto">
        <div class="containerInfos">
            <div class="logo">
                <img src="@/assets/img/fulltime-ecanhoto-logo.png" alt="Logo do Fulltime E-canhoto" width="150" />
            </div>
            <h2>Selecione seu usuário</h2>
            <RouterLink to="/loginempresa"><button id="btnLogin" class="btn btn-sm">Empresa</button></RouterLink>
            <RouterLink to="/loginusuario"><button id="btnLogin" class="btn btn-sm">Colaborador</button></RouterLink>
        </div>
    </div>
  </div>
</template>

<script setup>
</script>
