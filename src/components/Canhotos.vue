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
                Canhotos
            </h6>

            <div class="row cards-principal">

                <div class="col-md-8 mt-5 bg-white dados-canhoto-table table-responsive">

                    <div class="text-table">
                        <h4 class="mt-4 ms-3 mb-3 canhotos-table-title">Últimos canhotos</h4>
                    </div>

                    <DataTable :value="canhotos" paginator :rows="5">
                        <Column field="id" header="ID" filterField="id"></Column>
                        <Column field="valorCanhoto" header="Valor">
                            <template #body="slotProps">
                                {{ this.formataValor(slotProps.data.valorCanhoto) }}
                            </template>
                        </Column>
                        <Column field="numNf" header="NF"></Column>
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
                                    class="d-flex justify-content-center" 
                                    :value="slotProps.data.imagemCanhoto && slotProps.data.imagemCanhoto !== 'dW5kZWZpbmVk' ? 'SIM' : 'NÃO'"
                                    :severity="slotProps.data.imagemCanhoto && slotProps.data.imagemCanhoto !== 'dW5kZWZpbmVk' ? 'success' : 'danger'">
                                </Badge>
                            </template>
                        </Column>
                        <Column header="Opções">
                            <template #body="slotProps">
                                <i class='bx bxs-edit' @click="editCanhoto(slotProps.data.id)"></i>
                            </template>
                        </Column>
                        <Column header="Obter canhoto">
                            <template #body="slotProps">
                                <i class='bx bxs-file-export' 
                                :style="{ color: slotProps.data.imagemCanhoto && slotProps.data.imagemCanhoto !== 'dW5kZWZpbmVk' ? 'green' : 'red' }" 
                                @click="verImagem(slotProps.data.id)">
                                </i>
                            </template>
                        </Column>
                    </DataTable>
                </div>

                <div class="col-md-3 ms-2 mt-5 bg-white dados-canhoto-container-2">

                    <div class="busca-canhoto-container-2">

                        <Button label="Novo Canhoto +" @click="newCanhoto"
                            class="btn btn-outline-danger busca-canhoto-container-2-text" />

                        <div class="input-group mr-5">
                            <input class="busca-canhoto-container-2-input" type="text" name="Buscar canhotos" id="buscaCanhotoId" placeholder="Buscar canhoto via NF">
                        </div>
                        <div class="busca-canhoto-container-2-cards">

                            <div class="card card-styles busca-canhoto-container-2-card-div">
                                <div class="card-body d-flex align-items-start justify-content-between">
                                    <div>
                                        <h5 class="card-title mt-3">Canhotos do mês</h5>
                                        <h1 class="card-text mt-3"> {{ totalCanhotosDoMes }}</h1>
                                        <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">{{
                                            totalCanhotosHoje }}
                                            </span> Hoje</h6>
                                    </div>
                                    <img src="@/assets/img/icone-canhotos-mes.png" class="mt-2">
                                </div>
                            </div>

                            <div class="card card-styles busca-canhoto-container-2-card-div">
                                <div class="card-body d-flex align-items-start justify-content-between">
                                    <div>
                                        <h5 class="card-title mt-3">Total de canhotos</h5>
                                        <h1 class="card-text mt-3">{{ totalCanhotos }}</h1>
                                    </div>
                                    <img src="@/assets/img/icone-total-canhotos.png" class="mt-2">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Dialog v-model:visible="visible" modal :header="isEditMode ? 'Atualizar canhoto' : 'Novo Canhoto'" :style="{ width: isEditMode ? '73rem' : '75rem', height: isEditMode ? '30rem' : '33.9rem' }">
                    <div v-if="!isEditMode" class="flex align-items-center gap-4 mb-3">
                        <label for="empresa" class="font-semibold mb-2">Empresa</label><br>
                        <InputText id="empresa" class="flex-auto w-100" v-model="post.empresa" :value=empresaRelacionada disabled />
                    </div>

                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="valor" class="mb-2">Valor do canhoto <span class="text-danger">*</span></label><br>
                            <InputNumber class="mb-2" inputId="locale-brazil" locale="pt-BR" :minFractionDigits="2" v-model="post.valor" />
                        </div>

                        <div class="col-md-4 mb-3">
                            <label for="numNf" class="mb-2">Número da Nota fiscal <span class="text-danger">*</span></label><br>
                            <InputNumber id="numNf" class="flex-auto w-100" v-model="post.numeroNota" required/>
                        </div>

                        <div class="col-md-4 mb-3">
                            <label for="chaveNf" class="mb-2">Número da Chave da Nota Fiscal <span class="text-warning">(Opcional)</span></label><br>
                            <InputNumber id="chaveNf" class="flex-auto w-100" v-model="post.chaveNf" required/>
                        </div>

                        <div class="col-md-4 mb-3" v-if="!isEditMode">
                            <label for="colaborador" class="font-semibold mb-2">Gerado por</label><br>
                            <InputText id="colaborador" class="w-100" disabled v-model="post.colaborador" :value=nomeUsuario />
                        </div>

                        <div class="col-md-8 mb-3">
                            <label for="status" class="font-semibold mb-2">Status <span class="text-danger">*</span></label><br>
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
import PostStatusDataService from '@/services/PostStatusDataService';
import Swal from 'sweetalert2';
import PostUsuarioDataService from '@/services/PostUsuarioDataService';
import PostEmpresaDataService from '@/services/PostEmpresaDataService';
import { getCanhotosHoje, getQuantidadeCanhotosDoMes, formatarData, formatarValorBrasil } from '@/services/utils';
import { useAuth } from "@/stores/auth.js";


export default {

    name: "list",
    data() {
        return {
            post: {
                empresa: "",
                valor: "",
                colaborador: "",
                fileContent: "",
                selectedStatus: null,
                chaveNf: 0,
                numeroNota: 0
            },
            totalCanhotos: 0,
            totalCanhotosDoMes: 0,
            totalCanhotosHoje: 0,
            usuarioId: 0,
            visible: false,
            showUpload: false,
            isEditMode: false,
            nomeColaborador: "",
            empresaRelacionada: "",
            nomeUsuario: "",
            status: [],
            canhotos: []
        }
    },
    watch: {
        'post.selectedStatus': function (newVal) {

            this.showUpload = newVal.code == 3;
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

            })

        },
        async verImagem(id) {

            try {

                const response = await PostCanhotoDataService.getImagemCanhoto(id);

                if (response.status !== 200) {

                    throw new Error('Erro ao obter a imagem: ' + response.statusText);
                }
        
                const base64Image = `data:image/jpeg;base64,${response.data}`;
                const blob = await fetch(base64Image).then(res => res.blob());
                const url = window.URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `canhoto_${id}.jpg`;
                a.target = '_blank';
                document.body.appendChild(a);
                a.click();
                
                window.URL.revokeObjectURL(url);

            } catch (error) {

                console.error('Erro ao obter a imagem:', error);
            }
        },
        newCanhoto() {
            this.isEditMode = false;
            this.visible = true;
        },
        editCanhoto(id) {

            this.isEditMode = true;
            this.canhotoId = id;

            PostCanhotoDataService.getCanhotoId(id).then(response => {

                PostStatusDataService.getStatusId(response.data.statusId).then(responseStatus => {

                    this.post = {
                        ...response.data,
                        selectedStatus: this.status.find(s => s.name === responseStatus.data),
                        valor: response.data.valorCanhoto
                    };

                    this.visible = true;
                });
            });

            
        },
        saveCanhoto() {

            const {valor, selectedStatus, fileContent, chaveNf, numeroNota} = this.post;

            var empresaId = 0;
            var colaboradorId = 0;

            colaboradorId = this.usuarioId;

            PostEmpresaDataService.getEmpresa(this.empresaRelacionada).then(responseEmpresa => {

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

                    imagem: fileContent || "",
                    colaboradorId: colaboradorId,
                    empresaId: empresaId,
                    statusId: selectedStatus.code,
                    valor: valor,
                    chaveNf: chaveNf,
                    numNf: numeroNota,
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

            this.visible = false;

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos obrigatórios.'
            })

            return false;

        },
        updateCanhoto(id) {

            const { valor, selectedStatus, fileContent, chaveNf, numeroNf } = this.post;

            PostCanhotoDataService.getCanhotoId(id).then(response => {

                if (response.data) {
                    
                    var empresaId = response.data.empresaId;
                    var colaboradorId = response.data.colaboradorId;

                    var data = {

                        id: id,
                        imagemCanhoto: fileContent || "",
                        colaboradorId: colaboradorId,
                        empresaId: empresaId,
                        statusId: selectedStatus.code,
                        valorCanhoto: valor,
                        chaveNf: chaveNf,
                        numeroNf: numeroNf
                    }

                    PostCanhotoDataService.update(data).then(response => {

                        this.visible = false;

                        Swal.fire({
                            icon: 'success',
                            title: 'Concluído!',
                            text: 'Canhoto atualizado com sucesso!'
                        })

                        this.getAllCanhotos();

                        return true;

                    }).catch(e => {

                        this.visible = false;

                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `Ocorreu um erro ao atualizar os dados. Tente novamente mais tarde. Erros: ${e}`
                        });

                        return false;
                    });

                }
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
                const base64Data = e.target.result.split(',')[1];
                this.post.fileContent = base64Data;
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
                this.nomeColaborador =  response.data;
            });

            return this.nomeColaborador;
        },
        getEmpresaId() {

            const auth = useAuth();

            auth.getUser().then(response => {

                var responseUser = JSON.parse(response);

                PostEmpresaDataService.getEmpresaPorId(responseUser.empresaId).then(response => {

                    console.log(responseUser);
                    this.empresaRelacionada = response.data;
                    this.nomeUsuario = responseUser.name;
                    this.usuarioId = responseUser.id;
                });
            });
        }
    },
    mounted() {
        this.getEmpresaId(),
        this.getStatus(),
        this.getAllCanhotos(),
        this.getQuantidadeCanhotosDoMesAtual(),
        this.getTodosCanhotosHoje()
    }
}

</script>