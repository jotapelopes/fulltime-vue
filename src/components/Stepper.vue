<template>
  <div class="card d-flex justify-content-center mt-5 w-75 mx-auto stepper__principal">
    <Stepper class="mt-5">
      <StepperPanel header="Dados cadastrais">
        <template #content="{ nextCallback }">
          <div class="flex flex-column h-12rem">
            <div
              class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              <p>Dados cadastrais</p>

              <div class="row">

                <div class="col-lg-6 mt-2">
                  <div class="form-group">
                    <label for="nome">Nome da Empresa</label>
                    <input v-model="post.nome" type="text" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-6 mt-2">
                  <div class="form-group">
                    <label for="telefone">Telefone comercial</label>
                    <input v-model="post.telefone" type="text" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="form-group mt-3">
                    <label for="email">E-mail</label>
                    <input v-model="post.email" type="email" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="form-group mt-3">
                    <label for="cnpj">CNPJ da Empresa</label>
                    <input v-model="post.cnpj" type="tel" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="form-group mt-3">
                    <label for="razaoSocial">Razão Social</label>
                    <input v-model="post.razaoSocial" type="text" class="form-control" />
                  </div>
                </div>
              </div>

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
              <p>Dados de logística</p>
              <div class="row">

                <div class="col-lg-4 mt-2">
                  <div class="form-group">
                    <label for="localizacao">Localização da sede</label>
                    <input v-model="post.localizacao" type="text" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-4 mt-2">
                  <div class="form-group">
                    <label for="quantidadeFuncionarios">Quantidade de funcionários</label>
                    <input v-model="post.quantidadeFuncionarios" type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-4 mt-2">
                  <div class="form-group">
                    <label for="porteIndustrial">Porte Industrial</label>
                    <input v-model="post.porteIndustrial" type="text" class="form-control" />
                  </div>
                </div>
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
              <p>Dados de cobrança</p>

              <div class="row">

                <div class="col-lg-4 mt-3">
                  <div class="form-group">
                    <label for="conta">Conta Bancária</label>
                    <input v-model="post.conta" type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-4 mt-3">
                  <div class="form-group">
                    <label for="enderecoCobranca">Endereço de Cobrança</label>
                    <input v-model="post.enderecoCobranca" type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-4 mt-3">
                  <div class="form-group">
                    <label for="receita">Receita Estimada</label>
                    <input v-model="post.receita" type="number" class="form-control" />
                  </div>
                </div>
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

          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
            <label for="formFileLg" class="dados">Upload de imagem da empresa</label>
            <input ref="imagem" class="form-control" id="formFileLg" type="file">
          </div>
            </div>
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

import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import PostEmpresaDataService from '@/services/PostEmpresaDataService';
const router = useRouter();

export default {
  name: "new-empresa",
  data() {
    return {
      post: {
        nome: "",
        telefone: "",
        email: "",
        cnpj: "",
        razaoSocial: "",
        localizacao: "",
        quantidadeFuncionarios: "",
        porteIndustrial: "",
        conta: "",
        enderecoCobranca: "",
        receita: ""
      }
    }
  },
  methods: {

    validateStep1(nextCallback) {
      const { nome, email, cnpj, razaoSocial } = this.post;

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
      const { localizacao, quantidadeFuncionarios, porteIndustrial } = this.post;

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
      const { enderecoCobranca } = this.post;

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

        const dataToSend = { ...this.post, imagem: this.$refs.imagem.files[0] };
        this.savePost(dataToSend);
        return true;

      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatórios.'
      });
    },
    savePost(data) {
      var data = {
        nome: this.post.nome,
        telefone: this.post.telefone,
        email: this.post.email,
        cnpj: this.post.cnpj,
        razaoSocial: this.post.razaoSocial,
        localizacao: this.post.localizacao,
        quantidadeFuncionarios: this.post.quantidadeFuncionarios,
        porteIndustrial: this.post.porteIndustrial,
        conta: this.post.conta,
        enderecoCobranca: this.post.enderecoCobranca,
        receita: this.post.receita
      }

      PostEmpresaDataService.create(data).then(response => {
        
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
      })
    }
  }
}

</script>

<style scoped></style>
