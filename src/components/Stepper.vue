<!-- IMPORTANTE: REALIZAR DOWNLOAD DO PRIMEVUE, COLOQUE NO TERMINAL O SEGUINTE COMANDO: npm install primevue E npm install primeicons -->
<template>
    <div class="card flex justify-content-center">
        <Stepper>
            <StepperPanel>
                <template #content="{ nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <p>Dados cadastrais</p>

                            <section class="inputs">
                              <section class="bloco col-md-3">
                                <label for="nome">Nome da Empresa</label>
                                <input type="text" />
                              </section>
                          
                              <section class="bloco">
                                <label for="telefone">Telefone comercial</label>
                                <input type="text" />
                              </section>
                          
                              <section class="bloco">
                                <label for="email">E-mail</label>
                                <input type="email" />
                              </section>
                          
                              <section class="bloco">
                                <label for="">CNPJ da Empresa</label>
                                <input type="tel" />
                              </section>
                            </section>
                        </div>
                    </div>

                    <div class="botoes flex pt-4 justify-content-end">
                        <Button class="avancar" @click="nextCallback"> Avançar </Button>
                        
                    </div>
                    
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                          <div class="dados">
                      <p>Dados de logística</p>
                      <section class="inputs">
                        <section class="bloco col-md-3">
                          <label for="localizacao">Localização da sede</label>
                          <input type="text" />
                        </section>

                        <section class="bloco">
                          <label for="localizacao"> Modo de trabalho </label>
                          <input type="text" />
                        </section>

                        <section class="bloco">
                          <label for="ramo"> Quantidade de funcionários </label>
                          <input type="text" />
                        </section>

                        <section class="bloco">
                          <label for="ramo">Porte Industrial</label>
                          <input type="text" />
                        </section>
  
                        <section class="bloco">
                          <label for="ramo">Ramo Industrial</label>
                          <input type="text" />
                        </section>

                        </section>
                          </div>


                      </div>
                    </div>
                    <div class="botoes flex pt-4 justify-content-end">
                        <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> Voltar</Button>
                        <Button class="avancar" @click="nextCallback"> Avançar </Button>
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                          <div class="dados">
                            <p>Dados de cobrança</p>
                            <section class="inputs">
                              <section class="bloco">
                                <label for="conta">Conta Bancária</label>
                                <input type="text" />
                              </section>
                              <section class="bloco">
                                <label for="enderecoCobranca">Endereço de Cobrança</label>
                                <input type="text" />
                              </section>
  
                               <section class="bloco">
                                <label for="receita">Receita Estimada</label>
                                <input type="number" />
                              </section>
  
              
                            </section>
                          </div>
                        
                        </div>
                    </div>
                    <div class="botoes flex pt-4 justify-content-end">
                        <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> Voltar</Button>
                        <Button class="avancar" @click="nextCallback"> Avançar </Button>
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #content="{ prevCallback }">
                          <div>
                            <label for="formFileLg" class="dados">Upload de imagem da empresa</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file">
                          </div>
                  
                    <div class="botoes flex pt-4 justify-content-end">
                        <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> Voltar</Button>
                        <Button class="avancar" > Finalizar </Button>
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>


<style scoped>


</style>
