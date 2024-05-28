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
                  <input v-model="formData.nome" type="text" />
                </section>

                <section class="bloco">
                  <label for="telefone">Telefone comercial</label>
                  <input v-model="formData.telefone" type="text" />
                </section>

                <section class="bloco">
                  <label for="email">E-mail</label>
                  <input v-model="formData.email" type="email" />
                </section>

                <section class="bloco">
                  <label for="cnpj">CNPJ da Empresa</label>
                  <input v-model="formData.cnpj" type="tel" />
                </section>

                <section class="bloco">
                  <label for="razaoSocial">Razão Social</label>
                  <input v-model="formData.razaoSocial" type="text" />
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
                    <input v-model="formData.localizacao" type="text" />
                  </section>

                  <section class="bloco">
                    <label for="quantidadeFuncionarios">Quantidade de funcionários</label>
                    <input v-model="formData.quantidadeFuncionarios" type="text" />
                  </section>

                  <section class="bloco">
                    <label for="porteIndustrial">Porte Industrial</label>
                    <input v-model="formData.porteIndustrial" type="text" />
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
                    <input v-model="formData.conta" type="text" />
                  </section>
                  <section class="bloco">
                    <label for="enderecoCobranca">Endereço de Cobrança</label>
                    <input v-model="formData.enderecoCobranca" type="text" />
                  </section>
                  <section class="bloco">
                    <label for="receita">Receita Estimada</label>
                    <input v-model="formData.receita" type="number" />
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
  data() {
    return {
      formData: {
        nome: '',
        telefone: '',
        email: '',
        cnpj: '',
        razaoSocial: '',
        localizacao: '',
        quantidadeFuncionarios: '',
        porteIndustrial: '',
        conta: '',
        enderecoCobranca: '',
        receita: ''
      }
    };
  },
  methods: {
    validateStep1(nextCallback) {
      const { nome, email, cnpj, razaoSocial } = this.formData;

      if (nome && email && cnpj && razaoSocial) {
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
      const { localizacao, quantidadeFuncionarios, porteIndustrial } = this.formData;

      if (localizacao && quantidadeFuncionarios && porteIndustrial) {
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
      const { enderecoCobranca } = this.formData;

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

        const dataToSend = { ...this.formData, imagem: this.$refs.imagem.files[0] };
        this.$emit('form-completed', dataToSend);
        return true;

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
