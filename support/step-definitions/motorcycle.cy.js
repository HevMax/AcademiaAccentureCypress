Given ('que eu acesso a página inicial do portal Tricentis', ()=>{
    cy.visit('./')
})

When ('eu seleciono o veículo Motocicleta', ()=>{
    cy.acessarMotorcycle()
})

And('preencho os dados em {string} corretamente', (tab) => {
    cy.selecionarEtapa(tab);  
    cy.preencherCampos(tab);
    
    
  })

And ('acesso {string} sem preencher as etapas anteriores',(tab)=>{
    cy.selecionarEtapa(tab)
})

Then ('eu devo ver a mensagem {string}', (message)=>{
    cy.mensagemVisivel(message)
    
    
})

And('escolho a opção {string} em {string}',(plano, tab)=>{
    cy.selecionarEtapa(tab)
    cy.escolherPlano(plano)
    
})

And('envio a cotação em {string}',(tab)=>{
    cy.selecionarEtapa(tab)
    cy.preencherCampos(tab)
    
})

