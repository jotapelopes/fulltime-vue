<template>
    <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="../assets/img/full-time-ecanhoto-logo-2.png" alt="logo">
                </span>
            </div>

            <i class="bx bx-chevron-right toggle"></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="nav-link">
                    <a href="#">
                        <i class="bx bxs-home icon"></i>
                        <span class="text nav-text">Dashboard</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#">
                        <i class="bx bxs-spreadsheet icon"></i>
                        <span class="text nav-text">Canhotos</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#">
                        <i class="bx bxs-user icon"></i>
                        <span class="text nav-text">Usuários</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#">
                        <i class="bx bxs-cog icon"></i>
                        <span class="text nav-text">Configurações</span>
                    </a>
                </li>
            </div>

            <div class="bottom-content mb-5">
                <li class="active">
                    <a href="#">
                        <i class="bx bx-log-out icon text-white"></i>
                        <span class="text nav-text text-white">Logout</span>
                    </a>
                </li>
            </div>
        </div>
    </nav>

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
                    <img src="../assets/img/profile.png" alt="Imagem de perfil">
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
                        <img src="../assets/img/icone-usuarios.png" alt="" class="mt-2">
                    </div>
                </div>

                <div class="card card-styles">
                    <div class="card-body d-flex align-items-start justify-content-between">
                        <div>
                            <h5 class="card-title mt-3">Canhotos do mês</h5>
                            <h1 class="card-text mt-3">132</h1>
                            <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">28 </span>Hoje</h6>
                        </div>
                        <img src="../assets/img/icone-canhotos-mes.png" alt="" class="mt-2">
                    </div>
                </div>

                <div class="card card-styles">
                    <div class="card-body d-flex align-items-start justify-content-between">
                        <div>
                            <h5 class="card-title mt-3">Total de canhotos</h5>
                            <h1 class="card-text mt-3">1.432.235</h1>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Plano Gold</h6>
                        </div>
                        <img src="../assets/img/icone-total-canhotos.png" alt="" class="mt-2">
                    </div>
                </div>

                <div class="card card-styles">
                    <div class="card-body d-flex align-items-start justify-content-between">
                        <div>
                            <h5 class="card-title mt-3">Plano Gold</h5>
                        </div>
                        <img src="../assets/img/icone-plano-gold.png" alt="" class="mt-2">
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="../assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>UX/UI Design</td>
                                <td>Total</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="../assets/img/daniel.png" alt="">
                                    Daniel Oliveira
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>Back-end</td>
                                <td>Total</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="../assets/img/eduardo.png" alt="">
                                    Eduardo Evaristo
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>Back-end</td>
                                <td>Edição</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="../assets/img/giovana.png" alt="">
                                    Giovana Colombo
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>Product Manager</td>
                                <td>Cadastro</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="../assets/img/amanda.png" alt="">
                                    Jenifer Gonçalves
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>Front-end</td>
                                <td>Cadastro</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="../assets/img/amanda.png" alt="">
                                    João Pedro Lopes
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>Front-end</td>
                                <td>Cadastro</td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                        </tbody>

                    </table>

                </div>


                <div class="col-md-6 ms-5 mt-4 bg-white usuarios-table">

                    <div class="text-table">
                        <h5 class="mt-4 ms-3 mb-3 canhotos-table-title">Últimos canhotos</h5>
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
                                    <img src="../assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>01/01/2024</td>
                                <td>R$524,30</td>
                                <td>
                                    <img src="../assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>01/01/2024</td>
                                <td>R$524,30</td>
                                <td>
                                    <img src="../assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>01/01/2024</td>
                                <td>R$524,30</td>
                                <td>
                                    <img src="../assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>01/01/2024</td>
                                <td>R$524,30</td>
                                <td>
                                    <img src="../assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                    <p class="text-muted ms-5">email@gmail.com</p>
                                </td>
                                <td>OK</td>
                            </tr>

                        </tbody>

                    </table>

                    <div class="text-footer-div">
                        <h4 class="text-footer-table">Ver todos os canhotos</h4>
                        <i class='bx bx-right-arrow-alt arrow-footer-table'></i>
                    </div>

                </div>

            </div>
        </div>

    </section>

</template>