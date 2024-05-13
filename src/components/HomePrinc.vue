<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

:root {
  --main-color: #ED1C26;
  --text-color: #FFF;
  --bg-button-main: #220707;
  --text-color-red: #F64B4B;
}

body {
  font-family: 'Montserrat', sans-serif !important;
}

.upper-case {
  text-transform: uppercase !important;
}

.nav-link {
  color: var(--text-color) !important;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.1px;
  font-weight: 600 !important;
}

.nav-link:hover {
  color: var(--text-color-red) !important;
}

.main__container {
  background-color: rgba(123, 25, 25, 0.5) !important;
  position: relative;
  width: 1600px;
  height: 800px;
  flex-shrink: 0;
}

.main__container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/Bitmap.png');
  background-size: cover;
  background-repeat: no-repeat !important;
  z-index: -1;
  mix-blend-mode: normal !important;
  width: 100%;
}

.btn__conheca__produto {
  color: var(--text-color) !important;
  background-color: var(--main-color) !important;
  font-weight: 600 !important;
  margin-right: 2% !important;
  width: 12rem;
  height: 3rem;
}

.btn__conheca__produto:hover {
  background-color: var(--bg-button-main) !important;

}



.btn__cliente__texto {
  color: var(--text-color) !important;
  text-decoration: none !important;
}

.btn__cliente__texto__login {
  color: var(--text-color) !important;
  text-decoration: underline !important;
}

.btn__comecar {
  font-weight: 600 !important;
  color: var(--text-color) !important;
  width: 12rem;
  height: 3rem;
  background-color: var(--bg-button-main) !important;
}

.btn__comecar:hover {
  background-color: #f35961 !important;
}

.p__main {
  line-height: 15.85px !important;
  letter-spacing: 1.63px !important;
  font-weight: 700 !important;
  font-size: 13px !important;
  color: var(--text-color) !important;
}

.h1__main {
  font-size: 48px;
  font-weight: 700;
  line-height: 65px;
  letter-spacing: -2px;
  text-align: left;
  color: var(--text-color) !important;

}

.h5__main {
  font-size: 19px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.20000000298023224px !important;
  text-align: left;
  color: var(--text-color) !important;
}

.img__main {
  margin-right: -160px !important;
}

.segundo__container {
  margin-top: 10% !important;
}

.p__segundo__text {
  font-size: 24px;
  font-weight: 700;
  line-height: 29.26px;
  letter-spacing: 1.625px;
  text-align: center;
  color: var(--text-color-red) !important;

}

.h6__segundo__text {
  font-size: 13px;
  font-weight: 400;
  line-height: 15.85px;
  letter-spacing: 1.625px;
  text-align: center;

}

.segundo__bloco__1 {
  width: Hug (396px)px;
  height: Fixed (433px)px;
  top: 1087px;
  left: 212px;
  padding: 50px 0px 0px 0px;
  gap: 31px;
  border-radius: 20px 0px 0px 0px;
  opacity: 0px;
  margin-right: 5rem !important;
  border-radius: 20px !important;
  background-color: #7B1919 !important;
}

.segundo__bloco__2 {
  width: Hug (396px)px;
  height: Fixed (433px)px;
  top: 1090px;
  left: 648px;
  padding: 40px 50px 50px 50px;
  gap: 49px;
  border-radius: 20px 0px 0px 0px;
  opacity: 0px;
  margin-right: 5rem !important;
  border-radius: 20px !important;
  background-color: #ED1C26 !important;
}

.segundo__bloco__3 {
  width: Hug (396px)px;
  height: Fixed (433px)px;
  top: 1090px;
  left: 648px;
  padding: 40px 50px 50px 50px;
  gap: 49px;
  border-radius: 20px 0px 0px 0px;
  opacity: 0px;
  border-radius: 20px !important;
  background-color: #220707 !important;
}

.img__icone__1 {
  color: var(--text-color) !important;
  text-align: center !important;
  margin-left: 35%;
  width: 30%;
}

.img__icone__2 {
  color: var(--text-color) !important;
  text-align: center !important;
  margin-left: 35%;
  width: 30%;
}

.img__icone__3 {
  color: var(--text-color) !important;
  text-align: center !important;
  margin-left: 35%;
  width: 30%;
}

.bloco__text__1 {
  color: var(--text-color) !important;
  margin-top: 2.4% !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.5px;
  text-align: center;
}

.bloco__text {
  color: var(--text-color) !important;
  margin-top: 10% !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.5px;
  text-align: center;
}

.bolhas__content {
  position: absolute;
  top: 100%;
  left: 90% !important;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.bloco__text__2 {
  font-size: 17px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: -0.20000000298023224px;
  text-align: center;
  color: var(--text-color) !important;
  margin-top: 10% !important;
}

.quarto__container {
  margin-top: 10% !important;
}

.h6__main__quarto__container {
  margin-top: 5% !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.5px;
  text-align: left;
  color: #000000 !important;
}

.p__main__quarto__texto {
  font-size: 17px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
}

.quinto__container {
  margin-top: 10% !important;
}

.text__quinto__container {
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: -1.7999999523162842px;
  text-align: center;
}

.bloco__texto__5 {
  font-size: 19px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.20000000298023224px;
  margin-left: 5% !important;
  text-align: start !important;

}


.p__sexto__text,
.p__setimo__text {
  font-size: 13px;
  font-weight: 600;
  line-height: 15.85px;
  letter-spacing: 1.625px;
  text-align: center;
  color: var(--text-color-red) !important;
}

.p__span__text__setimo {
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.85px;
  letter-spacing: 1.625px;
  text-align: center;
  color: var(--text-color-red) !important;
}

.h1__setimo__text {
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.2000000476837158px;
  text-align: center;
}

.h1__span__text__setimo {
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.2000000476837158px;
  text-align: center;
  color: var(--main-color) !important;
}

.h1__sexto__text {
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.2000000476837158px;
  text-align: center;
}

.sexto__container {
  margin-top: 10% !important;
}

.sexto__container__cards {
  margin-left: 5% !important;
}

.sexto__text__h6 {
  font-size: 21px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.5px;
  text-align: left;
}

.sexto__bloco__1 {
  display: flex !important;
  align-items: center !important;
}

.sexto__text__p {
  font-size: 17px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;

}

.sexto__container__cards {
  margin-top: 8% !important;
}

.linha {
  width: 1111px;
  height: 1px;
  top: 3189.5px;
  left: 245px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  margin-top: 10% !important;
  color: #bbbbbc;
}

.setimo__container__cards {
  margin-top: 5% !important;
}

.card-1 {
  width: 500px;
  height: 540px;
  gap: 0px;
  opacity: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(102, 102, 102, 0.2) 100%);
  border-radius: 10px;
  text-align: center !important;
}


.card-2 {
  width: 489px;
  height: 363px;
  gap: 0px;
  opacity: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(102, 102, 102, 0.2) 100%);
  border-radius: 10px;
  margin-top: 14% !important;
  text-align: center !important;
}

.card-3 {
  width: 500px;
  height: 346px;
  gap: 0px;
  opacity: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(102, 102, 102, 0.2) 100%);
  border-radius: 10px;
  margin-top: 18% !important;
  text-align: center !important;
}

.card-4 {
  width: 489px;
  height: 540px;
  gap: 0px;
  opacity: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(102, 102, 102, 0.2) 100%);
  border-radius: 10px;
  text-align: center !important;
  margin-left: 6% !important;
}

.img__cards__setimo__1 {
  margin-top: 25% !important;
}

.img__cards__setimo__2 {
  margin-top: 15% !important;
}

.img__cards__setimo__3 {
  margin-top: 15% !important;
}

.img__cards__setimo__4 {
  margin-top: 25% !important;
}

.setimo__conteudo__text__card__1 {
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.10000000149011612px;
  text-align: left;

}

.setimo__conteudo__text2__card__1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.5px;
  text-align: left;
  color: #7B1919 !important;
  margin-bottom: 10% !important;

}

.text__setimo {
  width: 100%;
  margin-left: 22% !important;
}

.text__setimo-2 {
  width: 100%;
  margin-left: 25% !important;
}

.text__setimo-3 {
  width: 100%;
  margin-left: 30% !important;
}

.text__card__setimo__cases {
  margin-top: 10% !important;
  margin-bottom: 10% !important;
  font-size: 21px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -1.2000000476837158px;
  text-align: left;
  color: #ED1C26 !important;
}

.oitavo__container {
  position: relative;
  width: 1600px;
  height: 800px;
  flex-shrink: 0;
}

.oitavo__container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/antes-footer.jpg');
  background-size: cover;
  background-repeat: no-repeat !important;
  z-index: -1;
  mix-blend-mode: normal !important;
}

.text__oitavo__p {
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.2000000476837158px;
  text-align: center;
  color: var(--text-color) !important;
  margin-top: 13% !important;
  text-align: justify;

}

.text__oitavo__p__2 {
  font-size: 17px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.20000000298023224px;
  text-align: center;
  color: var(--text-color) !important;

}

.text__oitavo__p__3 {
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.10000000149011612px;
  text-align: center;
  color: var(--text-color) !important;
}

.img__oitavo__container {
  width: 140px !important;
  height: 110px !important;
  gap: 0px;
  opacity: 0px;
  margin: auto;
  margin-top: 3% !important;

}

a.underline-hover {
  position: relative;
  text-decoration: none;
  color: black;
  display: inline-block;

}

a.underline-hover::before {
  content: "";
  position: absolute;
  width: 22%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: red;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.5s ease-in-out 0s;
  left: 0;
  right: 0;
  margin: 0 auto;
}

a.underline-hover:hover::before {
  visibility: visible;
  transform: scaleX(1);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.container__footer {
  background-color: #220707 !important;
}

.text__footer__principal {
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.10000000149011612px;
  text-align: left;
  color: var(--text-color) !important;

}

.text__footer__secundario {
  font-size: 17px;
  line-height: 40px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  color: var(--text-color) !important;

}</style>

<template>
<div class="container-fluid main__container">
<nav class="navbar navbar-expand-lg d-flex">
  <div class="container-lg mt-5">
    <a class="navbar-brand" href="#"><img src="@/assets/fulltime-ecanhoto-logo.png" alt="" width="100"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#beneficios">Benefícios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contato">Contato</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#servicos">Serviços</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#produtos">Nossos produtos</a>
        </li>
      </ul>
      <div class="d-flex">
        <a href=""
          class="btn btn-sm btn__conheca__produto me-4 d-flex align-items-center justify-content-center">Conheça o
          e-canhoto</a>
   
        <h6 class="mt-3 btn__cliente__texto"> Já é cliente? <RouterLink to="/direcionamento"
            class="btn__cliente__texto__login">Login </RouterLink>
        </h6>
      </div>
    </div>
  </div>
</nav>

<div class="container-sm">
  <div class="row mt-5">
    <div class="col-md-5 text__main__1 me-auto">
      <p class="p__main">ALAVANQUE SUAS NOTAS FISCAIS</p>
      <h1 class="h1__main">Impulsione a gestão de canhotos da sua empresa</h1>
      <h6 class="h5__main">Reduza a burocracia e o tempo gastos com gestão <br>de canhotos, notas fiscais e recibos
        em sua <br>empresa.</h6>
      <a href="" class="btn btn-sm btn__comecar d-flex align-items-center justify-content-center">Comece agora</a>
    </div>
    <div class="col-md-6 img__main">
      <img src="@/assets/img/Oval.png" alt="Logo da imagem 1" class="img-fluid">
    </div>
  </div>
</div>
</div>

<div class="container-fluid segundo__container" id="beneficios">
<div class="container-sm">
  <div class="row mt-5">
    <div class="col-md-12">
      <h6 class="p__segundo__text">BENEFÍCIOS DO E-CANHOTO FULLTIME</h6>
      <h6 class="h6__segundo__text upper-case mt-5 mb-5">Aplicativo com plataforma Web integrada, desenvolvido para
        otimizar a gestão de entregas,
        substituindo o comprovante de entrega físico por uma solução inteligente com armazenamento online.</h6>
    </div>

  </div>
</div>
</div>

<div class="container-fluid d-flex justify-content-center position-relative mt-5">
<div class="col-md-3 segundo__bloco__1">
  <img src="@/assets/img/cloud.png" class="img__icone__1 img-fluid" alt="">
  <h6 class="bloco__text__1">Cloud</h6>
  <p class="bloco__text__2">Armazenamento e upload de seus canhotos em nuvem com disponibilidade on-demand.</p>
</div>
<div class="col-md-3 segundo__bloco__2">
  <img src="@/assets/img/security.png" class="img__icone__2 img-fluid" alt="">
  <h6 class="bloco__text">Segurança</h6>
  <p class="bloco__text__2">Todas as suas informações de pagamento com segurança anti-invasões.</p>
</div>
<div class="col-md-3 segundo__bloco__3">
  <img src="@/assets/img/storage.png" class="img__icone__3 img-fluid" alt="">
  <h6 class="bloco__text">Armazenamento</h6>
  <p class="bloco__text__2">Armazene toneladas de arquivos quando quiser.</p>
</div>
<div class="bolhas__content">
  <img src="@/assets/img/bolhas.png" class="img-fluid" alt="" width="220">
</div>
</div>

<div class="container-sm quarto__container">
<div class="row mt-5">
  <div class="col-md-3 img__main me-auto">
    <img src="@/assets/img/Oval-mulher.png" alt="Logo da imagem 1" class="img-fluid">
  </div>

  <div class="col-md-9 text__main__1">
    <img src="@/assets/img/Stars.png" alt="Logo da imagem 1" class="img-fluid">
    <h6 class="h6__main__quarto__container">“Depois de começarmos a utilizar o E-Canhoto em nossa equipe de Fiscal e
      Contabilidade
      conseguimos reduzir as demandas de busca por notas pela metade!”</h6>
    <p><span class="p__main__quarto__texto">Isabely Oliveira</span> | Chefe executiva da neXus</p>
  </div>

</div>
</div>

<div class="container-fluid position-relative">
<div class="container-sm d-flex quinto__container">
  <div class="col-md-4 me-5 bloco__quinto__valores">
    <h1 class="text__quinto__container">+R$500.000</h1>
    <p class="bloco__texto__5">de economia com custos operacionais tradicionalistas.</p>
  </div>
  <div class="col-md-4 me-5 bloco__quinto__valores">
    <h1 class="text__quinto__container">95%</h1>
    <p class="bloco__texto__5">de redução de tempo em gestão de canhotos.</p>
  </div>
  <div class="col-md-4 me-2 bloco__quinto__valores">
    <h1 class="text__quinto__container">4.9/5.0</h1>
    <p class="bloco__texto__5">Nota da avaliação geral dos clientes do E-canhoto.</p>
  </div>
</div>
</div>

<div class="container-fluid position-relative" id="servicos">
<div class="container-sm sexto__container">
  <div class="row mt-5">
    <div class="col-md-12 text-center">
      <p class="p__sexto__text upper-case">POR QUE NOS ESCOLHER?</p>
      <h1 class="h1__sexto__text">Oferecemos o melhor serviço de <br>gestão de canhotos</h1>
    </div>
    <div class="col-md-12 sexto__container__cards">
      <div class="row">
        <div class="col-md-6 sexto__bloco__1 mb-5">
          <img src="@/assets/img/pessoa.jpg" class="img-fluid" alt="">
          <div class="ms-3">
            <h6 class="sexto__text__h6">Atendimento personalizado</h6>
            <p class="sexto__text__p">Atendimento humanizado e <br>solicito, com treinamento da<br> plataforma e
              suas funcionalidades.
            </p>
          </div>

        </div>

        <div class="col-md-6 sexto__bloco__1 mb-5">
          <img src="@/assets/img/multitarefa.jpg" class="img-fluid" alt="">
          <div class="ms-3">
            <h6 class="sexto__text__h6">Multi-tarefas</h6>
            <p class="sexto__text__p">Uma aplicação robusta e com eficiência, onde <br>trabalhamos diretamente em
              sua otimização<br>para integração dos canhotos com segurança.
            </p>
          </div>

        </div>
      </div>

      <div class="row">
        <div class="col-md-6 sexto__bloco__1 mt-4">
          <img src="@/assets/img/conversa.jpg" class="img-fluid" alt="">
          <div class="ms-3">
            <h6 class="sexto__text__h6">Relatórios personalizados</h6>
            <p class="sexto__text__p">Exportação em Excel e PDF <br>personalizado de seus fluxos, de acordo <br>com
              o filtro que você indicar.
            </p>
          </div>

        </div>

        <div class="col-md-6 sexto__bloco__1 mt-4">
          <img src="@/assets/img/gestao.jpg" class="img-fluid" alt="">
          <div class="ms-3">
            <h6 class="sexto__text__h6">Gestão de Entregas</h6>
            <p class="sexto__text__p">Trabalhamos diretamente com a <br>geolocalização de suas entregas, removendo
              a<br> preocupação com a falta de entregas.
            </p>
          </div>
        </div>
      </div>

      <hr class="linha">
    </div>

  </div>
</div>
</div>

<div class="container-fluid" id="produtos">
<div class="container-sm">
  <div class="row mt-5">
    <div class="col-md-12">
      <p class="p__setimo__text upper-case">outros produtos <span class="p__span__text__setimo">fulltime®</span></p>
      <h1 class="h1__setimo__text">Conheça o ecossistema <span class="h1__span__text__setimo">Fulltime.</span></h1>
    </div>
    <div class="col-md-12 setimo__container__cards">
      <div class="row">

        <div class="col-md-6 d-flex flex-column align-items-center">
          <div class="card-1">
            <img src="@/assets/img/fullcam.png" alt="Imagem da Fullcam"
              class="img-fluid img__cards__setimo__1 mx-auto">
          </div>

          <div class="text__setimo text-start mt-3">
            <p class="setimo__conteudo__text__card__1">Segurança e monitoramento</p>
            <h3 class="upper-case setimo__conteudo__text2__card__1">Full Cam</h3>
          </div>
        </div>

        <div class="col-md-6 d-flex flex-column align-items-center">
          <div class="card-2">
            <img src="@/assets/img/fullmanager.png" alt="Imagem do Fullmanager"
              class="img-fluid img__cards__setimo__2 mx-auto">
          </div>

          <div class="text__setimo-2 text-start mt-3">
            <p class="setimo__conteudo__text__card__1">Controle de SIM Cards</p>
            <h3 class="upper-case setimo__conteudo__text2__card__1">Full Manager</h3>
          </div>
        </div>

        <div class="row">

          <div class="col-md-6 d-flex flex-column align-items-center">
            <div class="card-3">
              <img src="@/assets/img/fullcenter.png" alt="Imagem do Fullcenter"
                class="img-fluid img__cards__setimo__3 mx-auto">
            </div>

            <div class="text__setimo text-start mt-3">
              <p class="setimo__conteudo__text__card__1">Agilidade em operações</p>
              <h3 class="upper-case setimo__conteudo__text2__card__1">FULL CENTER</h3>
            </div>
          </div>

          <div class="col-md-6 d-flex flex-column align-items-center">
            <div class="card-4">
              <img src="@/assets/img/fulltrack.png" alt="Imagem do Fulltrack"
                class="img-fluid img__cards__setimo__4 mx-auto">
            </div>

            <div class="text__setimo-3 text-start mt-3">
              <p class="setimo__conteudo__text__card__1">Logística e gestão</p>
              <h3 class="upper-case setimo__conteudo__text2__card__1">FULL TRACK</h3>
            </div>
          </div>

          <a href="#" class="text__card__setimo__cases text-center text-decoration-none underline-hover">Veja todos
            os cases de
            sucesso <i class="bi bi-arrow-right-short"></i></a>

        </div>

      </div>
    </div>

  </div>
</div>
</div>

<div class="container-fluid oitavo__container">
<div class="container-sm">
  <div class="row mt-5">
    <p class="text-center text__oitavo__p">“Simplesmente a melhor escolha em <br>gestão de canhotos que já
      encontrei.<br> Reduzimos custos, gastos e aumentamos <br>o desempenho dessas equipes!<br> Obrigado, FullTime!”
    </p>

    <img src="@/assets/img/oval-2.png" class="img-fluid img__oitavo__container text-center">
    <p class="text-center text__oitavo__p__2 mt-1">Allan Borges<br><span class="text__oitavo__p__3">Owner da
        SharkShop</span></p>

  </div>
</div>

</div>
<div class="container-fluid container__footer">
<div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <img src="@/assets/img/fulltime-ecanhoto-logo.png" alt="" width="200">
      </a>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5 class="upper-case text__footer__principal">SOLUÇÕES</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullArm</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullCam</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullCenter</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullManager</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullTrack</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullCond</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">F/Save</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5 class="upper-case text__footer__principal">Institucional</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Sobre</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Soluções</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Blog</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Revendedores</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Contato</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Regulamentos de
            Campanha</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Trabalhe Conosco</a>
        </li>

        <h5 class="upper-case  text__footer__principal">Unidades</h5>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Latam</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">México</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Argentina</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Brasil</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5 class="upper-case text__footer__principal">Fale Conosco</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img
              src="@/assets/img/iconamoon_phone-fill.png"> +55 (14) 3407 8800</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img
              src="@/assets/img/iconamoon_phone-fill.png"> +55 (11) 5069 3200</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img
              src="@/assets/img/mdi_location.png"> Av. Presidente Vargas, 70 - Centro, Garça/SP - CEP:
            17404-318</a></li>
      </ul>
    </div>
  </footer>
</div>
</div>
</template>
<script setup>
</script>