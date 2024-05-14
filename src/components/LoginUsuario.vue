<template>
    <div class="containerLogin mx-auto">
        <div class="containerInfos container-user">
            <div class="logo">
                <img src="@/assets/img/fulltime-ecanhoto-logo.png" alt="Logo do Fulltime E-canhoto" width="150" />
            </div>
            <div class="inputsLogin">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="" />
                    <label for="floatingInput">Insira o código da empresa</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Insira seu e-mail</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Insira sua senha</label>
                </div>
                <p class="p-2">Esqueceu seu acesso?</p>
            </div>

            <button id="btnLogin" class="btn btn-sm">Login</button>
        </div>
    </div>    
</template>
