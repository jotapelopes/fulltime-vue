<template>

    <section class="home">
        <nav class="navbar principal-nav navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid d-flex justify-content-end align-items-center">


                <div class="image-profile rounded-circle">
                    <img src="@/assets/img/profile.png" alt="Imagem de perfil">
                </div>
            </div>
        </nav>

        <div class="container-fluid background-colors">
            <h6 class="text p-5 text-visao-geral">
                Visão geral da empresa
            </h6>

            <div class="row">

                <div class="col-lg-3 cards-colunas">
                    <div class="card me-3">
                        <div class="card-body d-flex align-items-start justify-content-between">
                            <div>
                                <h5 class="card-title mt-3">Usuários</h5>
                                <h1 class="card-text mt-3">18</h1>
                                <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">28 </span> Hoje
                                </h6>
                            </div>
                            <img src="@/assets/img/icone-usuarios.png" alt="" class="mt-2 img-fixed">
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 cards-colunas">
                    <div class="card ">
                        <div class="card-body d-flex align-items-start justify-content-between">
                            <div>
                                <h5 class="card-title mt-3">Canhotos do mês</h5>
                                <h1 class="card-text mt-3"> {{ totalCanhotosDoMes }}</h1>
                                <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">{{
                                        totalCanhotosHoje }}</span> Hoje</h6>
                            </div>
                            <img src="@/assets/img/icone-canhotos-mes.png" class="mt-2 img-fixed">
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 cards-colunas">
                    <div class="card">
                        <div class="card-body d-flex align-items-start justify-content-between">
                            <div>
                                <h5 class="card-title mt-3">Total de canhotos</h5>
                                <h1 class="card-text mt-3"> {{ totalCanhotos }}</h1>
                                <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">{{
                                        totalCanhotosHoje }} </span> Hoje</h6>
                            </div>
                            <img src="@/assets/img/icone-total-canhotos.png" class="mt-2 img-fixed">
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 cards-colunas card-planos">
                    <div class="card me-2">
                        <div class="card-body d-flex align-items-start justify-content-between">
                            <div>
                                <h5 class="card-title mt-3">Plano Gold</h5>
                                <h5 class="card-text mt-4 mb-4">Próx fatura: 28/06/2024</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Ver fatura</h6>
                            </div>
                            <img src="@/assets/img/icone-plano-gold.png" class="mt-2 img-fixed">
                        </div>
                    </div>
                </div>

                <div class="col-md-12 ms-3 mt-4 bg-white usuarios-table table-responsive">

                    <div class="text-table d-flex text-table-botoes">
                        <h4 class="mt-4 ms-3 mb-3 usuarios-table-title">Gestão de usuários</h4>

                        <RouterLink to="/novo-usuario"
                            class="btn btn-sm btn-outline-danger mt-3 ms-5 mb-3 add-canhoto-text text-decoration-none d-flex justify-content-center align-items-center ml-auto novo-canhoto">
                            Novo Usuário <i
                                class='bx bx-plus arrow-footer-table d-flex justify-content-center align-items-center'></i>
                        </RouterLink>

                    </div>

                    <DataTable :value="colaboradores" paginator :rows="7">
                        <Column field="id" header="ID"></Column>
                        <Column field="nome" header="Nome"></Column>
                        <Column field="email" header="Email"></Column>
                        <Column field="dataNascimento" header="Data de Nascimento"></Column>
                        <Column field="usuarioAdmin" header="É admin">

                            <template #body="slotProps">
                                <Badge 
                                class="d-flex justify-content-center" 
                                :value="slotProps.data.usuarioAdmin ? 'SIM' : 'NÃO'"
                                :severity="slotProps.data.usuarioAdmin ? 'success' : 'danger'"
                                ></Badge>
                            </template>
                            
                        </Column>
                        <Column field="dataInclusao" header="Data de inclusão">
                            <template #body="slotProps">
                                {{ this.formataData(slotProps.data.dataInclusao) }}
                            </template>
                        </Column>
                        <Column header="Opções">
                            <template #body="slotProps">
                                <i class='bx bxs-edit' @click="editCanhoto(slotProps.data.id)"></i>
                            </template>
                        </Column>
                    </DataTable>
                </div>

                <div class="col-md-12 mt-4 ms-3 mb-3 bg-white usuarios-table table-responsive">

                    <div class="text-table d-flex text-table-botoes">
                        <h5 class="mt-4 ms-3 mb-3 canhotos-table-title mr-auto">Últimos canhotos</h5>
                    </div>

                    <DataTable :value="canhotos" paginator :rows="7" :sortOrder="1">
                        <Column field="id" header="ID" filterField="id"></Column>
                        <Column field="valorCanhoto" header="Valor do Recibo">
                            <template #body="slotProps">
                                {{ this.formataValor(slotProps.data.valorCanhoto) }}
                            </template>
                        </Column>
                        <Column field="colaboradorId" header="Gerador">
                            <template #body="slotProps">
                                {{ this.buscaColaborador(slotProps.data.colaboradorId) }}
                            </template>
                        </Column>
                        <Column field="dataInclusao" header="Data de Inclusão">
                            <template #body="slotProps">
                                {{ this.formataData(slotProps.data.dataInclusao) }}
                            </template>
                        </Column>
                        <Column field="autenticado" header="Autenticado">
                            <template #body="slotProps">
                                <Badge class="justify-content-center text-center"
                                    :value="slotProps.data.imagemCanhoto && slotProps.data.imagemCanhoto !== 'dW5kZWZpbmVk' ? 'SIM' : 'NÃO'"
                                    :severity="slotProps.data.imagemCanhoto && slotProps.data.imagemCanhoto !== 'dW5kZWZpbmVk' ? 'success' : 'danger'">
                                </Badge>
                            </template>
                        </Column>
                    </DataTable>

                    <div class="text-footer-div">

                        <RouterLink to="/canhotos"
                            class="btn btn-sm btn-outline-danger mt-2 mb-3 add-canhoto-text text-decoration-none d-flex justify-content-center align-items-center">
                            Ver todos os canhotos <i
                                class='bx bx-right-arrow-alt arrow-footer-table d-flex justify-content-center align-items-center'></i>
                        </RouterLink>

                    </div>

                </div>

                <Dialog v-model:visible="visible" modal header="Novo Canhoto" :style="{ width: '55rem', height: '30rem' }">
                    <div class="flex align-items-center gap-4 mb-3">
                        <label for="empresa" class="font-semibold mb-2">Empresa</label><br>
                        <InputText id="empresa" class="flex-auto w-100" v-model="post.empresa" :value=empresaRelacionada disabled />
                    </div>  

                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="valor" class="mb-2">Valor do canhoto</label><br>
                            <InputNumber class="mb-2" inputId="locale-brazil" locale="pt-BR" :minFractionDigits="2" v-model="post.valor" />
                        </div>

                        <div class="col-md-3 mb-3" v-if="!isEditMode">
                            <label for="colaborador" class="font-semibold mb-2">Gerado por</label><br>
                            <InputText id="colaborador" class="w-100" disabled v-model="post.colaborador" />
                        </div>

                        <div class="col-md-5 mb-3">
                            <label for="status" class="font-semibold mb-2">Status</label><br>
                            <Dropdown v-model="post.selectedStatus" :options="status" optionLabel="name" placeholder="Selecione o status" checkmark :highlightOnSelect="false" class="w-100" />
                        </div>
                    </div>

                    <div class="flex align-items-center gap-3 mb-5" v-show="showUpload">
                        <label for="image" class="font-semibold mb-2">Selecione a imagem do canhoto</label><br>
                        <FileUpload mode="basic" name="demo[]" accept="image/*" :maxFileSize="1000000" @select="onSelect" class="w-15" chooseLabel="Upload" />
                    </div>

                    <div class="d-flex justify-content-end gap-2 mt-5">
                        <Button type="button" severity="secondary" @click="visible = false" class="btn btn-danger me-1">Cancelar</Button>
                        <Button type="button" @click="isEditMode ? updateCanhoto(canhotoId) : saveCanhoto()" class="btn btn-success">{{ isEditMode ? 'Salvar Alterações' : 'Salvar' }}</Button>
                    </div>
                </Dialog>

            </div>


        </div>

    </section>

</template>

<script>

import PostCanhotoDataService from '@/services/PostCanhotoDataService';
import PostUsuarioDataService from '@/services/PostUsuarioDataService';
import PostStatusDataService from '@/services/PostStatusDataService';
import PostEmpresaDataService from '../services/PostEmpresaDataService';
import Swal from 'sweetalert2';
import { getCanhotosHoje, getQuantidadeCanhotosDoMes, formatarData, formatarValorBrasil } from '@/services/utils';
import { Text } from 'vue';

export default {

    name: "home",
    data() {
        return {
            post: {
                empresa: "",
                valor: "",
                colaborador: "",
                fileContent: "",
                selectedStatus: null
            },
            status: [],
            canhotos: [],
            colaboradores: [],
            totalCanhotos: 0,
            totalCanhotosDoMes: 0,
            totalCanhotosHoje: 0,
            dataFormatada: "",
            nomeColaborador: "",
            empresaRelacionada: "",
            visible: false,
            showUpload: false,
            isEditMode: false,
        }
    },
    watch: {
        'post.selectedStatus': function (newVal) {

            this.showUpload = newVal.code !== 1 && newVal.code !== 2;
        }
    },
    methods: {
        getTodosCanhotosHoje(canhotos) {

            if (canhotos) {
                const getTotalDeCanhotosHoje = getCanhotosHoje(canhotos);
                this.totalCanhotosHoje = getTotalDeCanhotosHoje;
            }

        },
        getAllCanhotos() {

            PostCanhotoDataService.getAll().then(response => {

                this.canhotos = response.data;
                this.totalCanhotos = this.canhotos.length;
                this.getQuantidadeCanhotosDoMesAtual(this.canhotos);
                this.getTodosCanhotosHoje(this.canhotos);

            });

        },
        getQuantidadeCanhotosDoMesAtual(canhotos) {

            if (canhotos) {
                const getQuantidaddeCanhotosDoMesAtual = getQuantidadeCanhotosDoMes(canhotos);
                this.totalCanhotosDoMes = getQuantidaddeCanhotosDoMesAtual;
            }

        },
        getStatus() {
            PostStatusDataService.getAll().then(response => {

                this.status = response.data.map(st => ({
                    name: st.nome,
                    code: st.id
                }));

            }).catch(e => {
                console.log(e)
            }).finally( () => {}
            );

        },
        newCanhoto() {
            this.isEditMode = false;
            this.visible = true;
        },
        saveCanhoto() {

            const { empresa, valor, colaborador, selectedStatus, fileContent } = this.post;

            var empresaId = 0;
            var colaboradorId = 0;

            PostUsuarioDataService.getUsuario(colaborador).then(responseColaborador => {

                colaboradorId = responseColaborador.data;

                PostEmpresaDataService.getEmpresa(empresa).then(responseEmpresa => {

                    empresaId = responseEmpresa.data;

                    if (colaboradorId === 0) {

                        this.visible = false;

                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Não foi possível criar o canhoto: Colaborador não localizado.'
                        });

                        return false;
                    }

                    if (empresaId === 0) {

                        this.visible = false;

                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Não foi possível criar o canhoto: Empresa não localizada.'
                        });

                        return false;
                    }

                    var data = {
                        imagem: fileContent == "" ? null : btoa(fileContent),
                        colaboradorId: colaboradorId,
                        empresaId: empresaId,
                        statusId: selectedStatus.code,
                        valor: valor,
                    }

                    PostCanhotoDataService.create(data).then(response => {

                        this.visible = false;

                        Swal.fire({
                            icon: 'success',
                            title: 'Concluído!',
                            text: 'Canhoto cadastrado com sucesso!'
                        })

                        this.getAllCanhotos();

                        return true;

                    }).catch(e => {

                        this.visible = false;

                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `Ocorreu um erro ao enviar os dados. Tente novamente mais tarde. Erros: ${e}`
                        });

                        return false;
                    });
                });
            });

            this.visible = false;

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos obrigatórios.'
            })

            return false;

        },
        onSelect(event) {
            const file = event.files[0];
            const reader = new FileReader();

            reader.onload = e => {
                this.post.fileContent = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        formataData(data) {
            return formatarData(data);
        },
        formataValor(valor) {
            return formatarValorBrasil(valor);
        },
        buscaColaborador(id) {
            PostUsuarioDataService.getUsuarioId(id).then(response => {
                this.nomeColaborador = response.data;
            });

            return this.nomeColaborador;
        },
        getAllColaboradores() {
            PostUsuarioDataService.getAll().then(response => {
                this.colaboradores = response.data;
            }).catch(e => {
                console.log(e)
            });;
        },
        getEmpresa() {
            PostEmpresaDataService.getAll().then(response => {
                this.empresaRelacionada = response.data[0].nome;
            }).catch(e => {
                console.log(e)
            });;
        }


    },
    mounted() {
        this.getEmpresa();
        this.getStatus(),
        this.getAllColaboradores(),
        this.getAllCanhotos(),
        this.getQuantidadeCanhotosDoMesAtual(),
        this.getTodosCanhotosHoje()
    }
}

</script>