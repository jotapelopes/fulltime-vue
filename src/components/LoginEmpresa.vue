<template>
    <div class="body">
        <div class="containerLogin mx-auto">
            <div class="containerInfos">
                <div class="logo">
                    <img src="@/assets/img/fulltime-ecanhoto-logo.png" alt="Logo do Fulltime E-canhoto" width="150" />
                </div>
                <div class="inputsLogin">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Insira o CNPJ da empresa</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Insira sua senha</label>
                    </div>
                    <p class="p-2">Esqueceu seu acesso?</p>
                </div>

                <button id="btnLogin" class="btn btn-sm">Login</button>

                <h6 class="mt-3 btn__cliente__texto"> Não possui acesso? <a href="#.html"
                    class="btn__cliente__texto__login">Cadastrar-se</a>
                </h6>
            </div>
        </div>
    </div>
    
</template>

<style>

</style>