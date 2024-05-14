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

                <div class="col-md-8 mt-5 bg-white usuarios-table table-responsive">

                    <div class="text-table">
                        <h4 class="mt-4 ms-3 mb-3 usuarios-table-title">Últimos canhotos</h4>
                    </div>

                    <table id="tableUsuarios" class="table table-responsive table-striped">
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
            </div>
        </div>

    </section>
</template>

<script setup>
</script>