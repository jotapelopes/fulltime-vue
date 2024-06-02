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
                                <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">{{ totalCanhotosHoje }}</span> Hoje</h6>
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
                                <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">{{ totalCanhotosHoje }} </span> Hoje</h6>
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

                        <RouterLink to="/novo-usuario" class="btn btn-sm btn-outline-danger mt-3 ms-5 mb-3 add-canhoto-text text-decoration-none d-flex justify-content-center align-items-center ml-auto novo-canhoto">
                            Novo Usuário <i class='bx bx-plus arrow-footer-table d-flex justify-content-center align-items-center'></i>
                        </RouterLink>

                    </div>

                    <table id="tableUsuarios" class="table table-responsive table-striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Setor</th>
                                <th>Permissões</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>UX/UI Design</td>
                                <td>Total</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/daniel.png" alt="">
                                    Daniel Oliveira
                                </td>
                                <td>Back-end</td>
                                <td>Total</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/eduardo.png" alt="">
                                    Eduardo Evaristo
                                </td>
                                <td>Back-end</td>
                                <td>Edição</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/giovana.png" alt="">
                                    Giovana Colombo
                                </td>
                                <td>Product Owner</td>
                                <td>Cadastro</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Jenifer Gonçalves
                                </td>
                                <td>Front-end</td>
                                <td>Cadastro</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    João Pedro Lopes
                                </td>
                                <td>Front-end</td>
                                <td>Cadastro</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                        </tbody>

                    </table>
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
                                <Badge 
                                class="justify-content-center text-center" 
                                :value="slotProps.data.imagemCanhoto && slotProps.data.imagemCanhoto !== 'dW5kZWZpbmVk' ? 'SIM' : 'NÃO'"
                                :severity="slotProps.data.imagemCanhoto && slotProps.data.imagemCanhoto !== 'dW5kZWZpbmVk' ? 'success' : 'danger'"
                                ></Badge>
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
            </div>


        </div>

    </section>

</template>

<script>

import PostCanhotoDataService from '@/services/PostCanhotoDataService';
import PostUsuarioDataService from '@/services/PostUsuarioDataService';
import { getCanhotosHoje, getQuantidadeCanhotosDoMes, formatarData, formatarValorBrasil } from '@/services/utils';
import { Text } from 'vue';

export default {

    name: "home",
    data() {
        return {
            canhotos: [],
            totalCanhotos: 0,
            totalCanhotosDoMes: 0,
            totalCanhotosHoje: 0,
            dataFormatada: "",
            nomeColaborador: "",
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
        formataData(data) {
            return formatarData(data);
        },
        formataValor(valor) {
            return formatarValorBrasil(valor);
        },
        buscaColaborador(id) {
            PostUsuarioDataService.getUsuarioId(id).then(response => {
                this.nomeColaborador =  response.data;
            });

            return this.nomeColaborador;
        }
        

    },
    mounted() {
        this.getAllCanhotos(),
        this.getQuantidadeCanhotosDoMesAtual(),
        this.getTodosCanhotosHoje()
    }
}

</script>