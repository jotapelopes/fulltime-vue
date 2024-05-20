<template>
  <div class="card d-flex justify-content-center mt-5 w-75 mx-auto stepper__principal">
    <Stepper class="mt-5">
      <StepperPanel header="Dados cadastrais">
        <template #content="{ nextCallback }">
          <div class="flex flex-column h-12rem">
            <div
              class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              <p>Dados cadastrais</p>

              <section class="inputs">
                <section class="bloco">
                  <label for="nome">Nome da Empresa</label>
                  <input ref="nome" type="text" />
                </section>

                <section class="bloco">
                  <label for="telefone">Telefone comercial</label>
                  <input ref="telefone" type="text" />
                </section>

                <section class="bloco">
                  <label for="email">E-mail</label>
                  <input ref="email" type="email" />
                </section>

                <section class="bloco">
                  <label for="cnpj">CNPJ da Empresa</label>
                  <input ref="cnpj" type="tel" />
                </section>
              </section>
            </div>
          </div>

          <div class="botoes flex pt-4 justify-content-end">
            <Button class="avancar" @click="validateStep1(nextCallback)"> Avançar </Button>
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="Dados de logística">
        <template #content="{ prevCallback, nextCallback }">
          <div class="flex flex-column h-12rem">
            <div
              class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              <div class="dados">
                <p>Dados de logística</p>
                <section class="inputs">
                  <section class="bloco">
                    <label for="localizacao">Localização da sede</label>
                    <input ref="localizacao" type="text" />
                  </section>

                  <section class="bloco">
                    <label for="modoTrabalho"> Modo de trabalho </label>
                    <input ref="modoTrabalho" type="text" />
                  </section>

                  <section class="bloco">
                    <label for="quantidadeFuncionarios"> Quantidade de funcionários </label>
                    <input ref="quantidadeFuncionarios" type="text" />
                  </section>

                  <section class="bloco">
                    <label for="porteIndustrial">Porte Industrial</label>
                    <input ref="porteIndustrial" type="text" />
                  </section>

                  <section class="bloco">
                    <label for="ramoIndustrial">Ramo Industrial</label>
                    <input ref="ramoIndustrial" type="text" />
                  </section>
                </section>
              </div>
            </div>
          </div>
          <div class="botoes flex pt-4 justify-content-end">
            <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> Voltar</Button>
            <Button class="avancar" @click="validateStep2(nextCallback)"> Avançar </Button>
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="Dados de cobrança">
        <template #content="{ prevCallback, nextCallback }">
          <div class="flex flex-column h-12rem">
            <div
              class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              <div class="dados">
                <p>Dados de cobrança</p>
                <section class="inputs">
                  <section class="bloco">
                    <label for="conta">Conta Bancária</label>
                    <input ref="conta" type="text" />
                  </section>
                  <section class="bloco">
                    <label for="enderecoCobranca">Endereço de Cobrança</label>
                    <input ref="enderecoCobranca" type="text" />
                  </section>
                  <section class="bloco">
                    <label for="receita">Receita Estimada</label>
                    <input ref="receita" type="number" />
                  </section>
                </section>
              </div>
            </div>
          </div>
          <div class="botoes flex pt-4 justify-content-end">
            <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> Voltar</Button>
            <Button class="avancar" @click="validateStep3(nextCallback)"> Avançar </Button>
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="Imagem da Empresa">
        <template #content="{ prevCallback }">
          <div>
            <label for="formFileLg" class="dados">Upload de imagem da empresa</label>
            <input ref="imagem" class="form-control form-control-lg" id="formFileLg" type="file">
          </div>
          <div class="botoes flex pt-4 justify-content-end">
            <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> Voltar</Button>
            <Button class="avancar" @click="validateStep4"> Finalizar </Button>
          </div>
        </template>
      </StepperPanel>
    </Stepper>
  </div>
</template>

<script>

import Swal from 'sweetalert2';

export default {
  methods: {
    validateStep1(nextCallback) {
      const nome = this.$refs.nome.value;
      const email = this.$refs.email.value;
      const cnpj = this.$refs.cnpj.value;

      if (nome && email && cnpj) {
        nextCallback();
        return true;
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios.'
      });
    },
    validateStep2(nextCallback) {

      const localizacao = this.$refs.localizacao.value;
      const modoTrabalho = this.$refs.modoTrabalho.value;
      const quantidadeFuncionarios = this.$refs.quantidadeFuncionarios.value;
      const porteIndustrial = this.$refs.porteIndustrial.value;
      const ramoIndustrial = this.$refs.ramoIndustrial.value;

      if (localizacao && modoTrabalho && quantidadeFuncionarios && porteIndustrial && ramoIndustrial) {

        nextCallback();
        return true;

      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios.'
      });
    },
    validateStep3(nextCallback) {

      const enderecoCobranca = this.$refs.enderecoCobranca.value;

      if (enderecoCobranca) {
        nextCallback();
        return true;
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios.'
      });
    },
    validateStep4() {
      
      const imagem = this.$refs.imagem.files.length;

      if (imagem) {
        Swal.fire({
          icon: 'success',
          title: 'Concluído!',
          text: 'Empresa cadastrada com sucesso!'
        }).then(() => {
          this.$router.push({ name: 'usuario' });
        });
        return;
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios.'
      });

    }
  }
};
</script>

<style scoped>
</style>
