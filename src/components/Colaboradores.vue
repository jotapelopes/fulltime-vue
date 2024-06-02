<template>
    <section class="home">
        <nav class="navbar principal-nav navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid d-flex justify-content-end align-items-center">


                <div class="image-profile rounded-circle">
                    <img src="@/assets/img/profile.png" alt="Imagem de perfil">
                </div>
            </div>
        </nav>

        <div class="background-colors">
            <h6 class="text p-5 ms-5">
                Usuários
            </h6>

            <div class="row cards-principal">

                <div class="col-md-12 mt-5 bg-white dados-canhoto-table table-responsive">

                    <div class="text-table">
                        <h4 class="mt-4 ms-3 mb-3 usuarios-table-title">Colaboradores cadastrados</h4>
                    </div>


                    <DataTable :value="colaboradores" paginator :rows="5">
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

            </div>
        </div>

    </section>
</template>

<script>

import PostUsuarioDataService from '@/services/PostUsuarioDataService';
import { formatarData } from '@/services/utils';


export default {
    name: "colaboradores",
    data() {
        return {
            colaboradores: []
        }
    },
    methods: {
        getAllColaboradores() {
            PostUsuarioDataService.getAll().then(response => {
                this.colaboradores = response.data;
            });

        },
        formataData(data) {
            return formatarData(data);
        }
    },
    mounted() {
        this.getAllColaboradores();
    }
}
</script>