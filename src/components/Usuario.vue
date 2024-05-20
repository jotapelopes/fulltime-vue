<template>

    <div class="container-lg mt-5">

        <div class="row">
            <h1 class="text-center mb-5 mt-5 text-cadastro">Cadastro de Usuário</h1>
            <div class="col-lg-3">
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="rounded-circle-container rounded-circle">
                        <img src="https://via.placeholder.com/200" alt="Imagem de exemplo">
                    </div>
                </div>

                <div class="text-center mt-2">
                    <FileUpload chooseLabel="Upload Imagem Perfil" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />

                </div>

            </div>
            <div class="col-lg-9">
                <form class="row g-3">

                    <div class="row">
                        <div class="col-md-6">
                            <label for="inputNome" class="form-label">Seu nome</label>
                            <input type="text" class="form-control" id="inputNome" placeholder="Ex: Eduardo">
                        </div>
                        <div class="col-md-6">
                            <label for="inputSobrenome" class="form-label">Sobrenome</label>
                            <input type="text" class="form-control" id="inputSobrenome" placeholder="Ex: Evaristo">
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-6">
                            <label for="inputEmail" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="inputEmail"
                                placeholder="Ex: seuemail@gmail.com" </div>
                            <div class="col-md-6">
                                <label for="inputSenha" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="inputSenha">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label for="inputNascimento" class="form-label">Data de Nascimento</label>
                                <input type="date" class="form-control" id="inputNascimento">
                            </div>
                            <div class="col-md-6">
                                <label for="inputEndereco" class="form-label">Endereço atual</label>
                                <input type="text" class="form-control" id="inputEndereco"
                                    placeholder="Ex: Rua Thomas Alcade, 170 - Jardim Alguma coisa">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label for="inputEnderecoNasc" class="form-label">Endereço de Nascimento</label>
                                <input type="text" class="form-control" id="inputEnderecoNasc"
                                    placeholder="Ex: Rua Thomas Alcade, 170 - Jardim Alguma coisa">
                            </div>
                            <div class="col-md-6">
                                <label for="inputCidade" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="inputCidade" placeholder="Ex: Marília">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label for="inputCEP" class="form-label">CEP</label>
                                <input type="text" class="form-control" id="inputCEP" placeholder="Ex: 00000-000">
                            </div>
                            <div class="col-md-6">
                                <label for="inputPais" class="form-label">País</label>
                                <input type="text" class="form-control" id="inputPais" placeholder="Ex: Brasil">
                            </div>
                        </div>

                        <div class="col-12">

                            <RouterLink to="/home" class="btn btn-primary botao-cadastrar">
                                Cadastrar
                            </RouterLink>

                        </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>
