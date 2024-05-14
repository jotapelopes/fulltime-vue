<template>
    <section class="home">
        <nav class="navbar principal-nav navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid d-flex justify-content-end align-items-center">
                <div class="me-3">
                    <button class="btn btn-sm btn-default">
                        <i class='bx bx-bell position-relative icon-notification'>
                            <span
                                class="position-absolute start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                <span class="visually-hidden">2</span>
                            </span>
                        </i>
                    </button>
                </div>

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

                    <table id="tableColaboradores" class="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th class="text-center">Setor</th>
                                <th class="text-center">Permissões</th>
                                <th class="text-center">Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td class="text-center">UX/UI Design</td>
                                <td class="text-center">Total</td>
                                <td class="text-center"><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/daniel.png" alt="">
                                    Daniel Oliveira
                                </td>
                                <td class="text-center">Back-end</td>
                                <td class="text-center">Total</td>
                                <td class="text-center"><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/eduardo.png" alt="">
                                    Eduardo Evaristo
                                </td>
                                <td class="text-center">Back-end</td>
                                <td class="text-center">Edição</td>
                                <td class="text-center"><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/giovana.png" alt="">
                                    Giovana Colombo
                                </td>
                                <td class="text-center">Product Owner</td>
                                <td class="text-center">Cadastro</td>
                                <td class="text-center"><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Jenifer Gonçalves
                                </td>
                                <td class="text-center">Front-end</td>
                                <td class="text-center">Cadastro</td>
                                <td class="text-center"><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    João Pedro Lopes
                                </td>
                                <td class="text-center">Front-end</td>
                                <td class="text-center">Cadastro</td>
                                <td class="text-center"><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                        </tbody>

                    </table>

                </div>
                
            </div>
        </div>

    </section>
</template>

<script setup>
</script>