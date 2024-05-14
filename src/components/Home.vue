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
                Visão geral da empresa
            </h6>

            <div class="row cards-principal col-lg-12">
                <div class="card">
                    <div class="card-body d-flex align-items-start justify-content-between">
                        <div>
                            <h5 class="card-title mt-3">Usuários</h5>
                            <h1 class="card-text mt-3">18</h1>
                        </div>
                        <img src="@/assets/img/icone-usuarios.png" alt="" class="mt-2">
                    </div>
                </div>

                <div class="card card-styles">
                    <div class="card-body d-flex align-items-start justify-content-between">
                        <div>
                            <h5 class="card-title mt-3">Canhotos do mês</h5>
                            <h1 class="card-text mt-3">132</h1>
                            <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">28 </span>Hoje</h6>
                        </div>
                        <img src="@/assets/img/icone-canhotos-mes.png" class="mt-2">
                    </div>
                </div>

                <!-- <div class="card card-styles">
                    <div class="card-body d-flex align-items-start justify-content-between">
                        <div>
                            <h5 class="card-title mt-3">Total de canhotos (não autenticados)</h5>
                            <h1 class="card-text mt-3">1.432.235</h1>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Plano Gold</h6>
                        </div>
                        <img src="@/assets/img/icone-total-canhotos.png" alt="" class="mt-2">
                    </div>
                </div> -->

                <div class="card card-styles">
                    <div class="card-body d-flex align-items-start justify-content-between">
                        <div>
                            <h5 class="card-title mt-3">Total de canhotos</h5>
                            <h1 class="card-text mt-3">1.432.235</h1>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Plano Gold</h6>
                        </div>
                        <img src="@/assets/img/icone-total-canhotos.png" class="mt-2">
                    </div>
                </div>

                <div class="card card-styles">
                    <div class="card-body d-flex align-items-start justify-content-between">
                        <div>
                            <h5 class="card-title mt-3">Plano Gold</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Próxima fatura: 28 Abril 2024</h6>
                        </div>
                        <img src="@/assets/img/icone-plano-gold.png" class="mt-2">
                    </div>
                </div>

            </div>

            <div class="row cards-principal">

                <div class="col-md-5 mt-4 bg-white usuarios-table">


                    <div class="text-table">
                        <h4 class="mt-4 ms-3 mb-3 usuarios-table-title">Gestão de usuários</h4>
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


                <div class="col-md-6 ms-5 mt-4 bg-white usuarios-table">

                    <div class="text-table d-flex">
                        <h5 class="mt-4 ms-3 mb-3 canhotos-table-title mr-auto">Últimos canhotos</h5>
                        <a class="btn btn-sm btn-outline-danger mt-3 ms-3 mb-3 add-canhoto-text text-decoration-none d-flex justify-content-center align-items-center ml-auto novo-canhoto">
                            Novo Canhoto <i class='bx bx-plus arrow-footer-table d-flex justify-content-center align-items-center'></i>
                        </a>
                    </div>

                    <table id="tableCanhotos" class="table table-responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data de Upload</th>
                                <th>Valor do Recibo</th>
                                <th>Gerador</th>
                                <th>Autenticado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0005</td>
                                <td>01/01/2024</td>
                                <td>R$524,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>01/01/2024</td>
                                <td>R$524,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>01/01/2024</td>
                                <td>R$524,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>01/01/2024</td>
                                <td>R$524,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>01/01/2024</td>
                                <td>R$524,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>

                        </tbody>

                    </table>

                    <div class="text-footer-div">

                        <RouterLink to="/canhotos" class="btn btn-sm btn-outline-danger mt-2 mb-3 add-canhoto-text text-decoration-none d-flex justify-content-center align-items-center">
                            Ver todos os canhotos <i class='bx bx-right-arrow-alt arrow-footer-table d-flex justify-content-center align-items-center'></i>
                        </RouterLink>

                    </div>

                </div>

            </div>
        </div>

    </section>

</template>