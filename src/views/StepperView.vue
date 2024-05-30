<script setup>
import Stepper from '@/components/Stepper.vue';
import '@/assets/style/stepper.css';

function handleFormCompleted(formData) {

  axios.post('http://localhost:5104/api/Empresa', formData).then(response => {

      Swal.fire({
        icon: 'success',
        title: 'Concluído!',
        text: 'Empresa cadastrada com sucesso!'
      }).then(() => {

        router.push({ name: 'usuario' });

      });

    }).catch(errors => {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Ocorreu um erro ao enviar os dados. Tente novamente mais tarde. Erros: ${errors}`
      });

    });

  return;

}
</script>

<template>
  <main>
    <Stepper @form-completed="handleFormCompleted" />
  </main>
</template>

<script></script>
<style></style>
