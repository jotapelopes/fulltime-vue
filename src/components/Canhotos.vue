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
                Canhotos
            </h6>

            <div class="row cards-principal">

                <div class="col-md-8 mt-5 bg-white dados-canhoto-table table-responsive">

                    <div class="text-table">
                        <h4 class="mt-4 ms-3 mb-3 usuarios-table-title">Últimos canhotos</h4>
                    </div>

                    <table id="tableUsuarios" class="table table-responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data de Upload</th>
                                <th>Valor do recibo</th>
                                <th>Gerador</th>
                                <th>Autenticado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0001</td>
                                <td>01/01/2024</td>
                                <td>R$254,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>01/01/2024</td>
                                <td>R$254,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>01/01/2024</td>
                                <td>R$254,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>01/01/2024</td>
                                <td>R$254,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>01/01/2024</td>
                                <td>R$254,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>01/01/2024</td>
                                <td>R$254,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>01/01/2024</td>
                                <td>R$254,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>01/01/2024</td>
                                <td>R$254,30</td>
                                <td>
                                    <img src="@/assets/img/amanda.png" alt="">
                                    Amanda Vieira
                                </td>
                                <td>OK</td>
                            </tr>
                        </tbody>

                    </table>

                </div>

                <div class="col-md-3 ms-5 mt-5 bg-white dados-canhoto-container-2">

                        <div class="busca-canhoto-container-2">
                            <a class="btn btn-outline-danger busca-canhoto-container-2-text">Novo canhoto +</a>
                            <div class="search-container">
                                <input class="busca-canhoto-container-2-input" type="search" name="Buscar canhotos"
                                    id="buscaCanhotoId" placeholder="Buscar canhotos">
                                <i class='bx bx-search'></i>
                            </div>

                            <div class="busca-canhoto-container-2-cards">

                                <div class="card card-styles busca-canhoto-container-2-card-div">
                                    <div class="card-body d-flex align-items-start justify-content-between">
                                        <div>
                                            <h5 class="card-title mt-3">Canhotos do mês</h5>
                                            <h1 class="card-text mt-3">132</h1>
                                            <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">28
                                                </span>Hoje</h6>
                                        </div>
                                        <img src="@/assets/img/icone-canhotos-mes.png" class="mt-2">
                                    </div>
                                </div>

                                <div class="card card-styles busca-canhoto-container-2-card-div">
                                    <div class="card-body d-flex align-items-start justify-content-between">
                                        <div>
                                            <h5 class="card-title mt-3">Total de canhotos</h5>
                                            <h1 class="card-text mt-3">1.432.235</h1>
                                            <h6 class="card-subtitle mb-2 text-body-secondary">Plano Gold</h6>
                                        </div>
                                        <img src="@/assets/img/icone-total-canhotos.png" class="mt-2">
                                    </div>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
</script>