<template>
    <div class="containerLogin mx-auto">
        <div class="containerInfos container-user">
            <div class="logo">
                <img src="@/assets/img/fulltime-ecanhoto-logo.png" alt="Logo do Fulltime E-canhoto" width="150" />
            </div>
            <div class="inputsLogin">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Insira seu e-mail</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Insira sua senha</label>
                </div>
                <a class="text-decoration-none" href="#"><p class="p-2">Esqueceu seu acesso?</p></a>
            </div>

            <div class="d-flex col-lg-12">
                <RouterLink to="/home" id="btnLogin" class="btn btn-sm  w-75 d-flex justify-content-center">Login</RouterLink>
                <RouterLink to="/site" id="btnLogin" class="btn btn-sm  w-25 ms-2 d-flex justify-content-center">Voltar <i class='bx bx-undo'></i></RouterLink>
            </div>
        </div>
    </div>    
</template>
