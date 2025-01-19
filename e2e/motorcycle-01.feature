# utf-8
# language: pt


Funcionalidade: Cotação de seguro de para uma moto
    Cenário: Tentativa de selecionar preço da cotação sem preencher as etapas obrigatórias
        Dado que eu acesso a página inicial do portal Tricentis
          Quando eu seleciono o veículo Motocicleta
          E preencho os dados em 'Enter Vehicle Data' corretamente
          E acesso 'Select Price Option' sem preencher as etapas anteriores
          Então eu devo ver a mensagem 'Please, complete the first three steps to see the price table.'

    Cenário: Tentativa de enviar cotação sem preencher as etapas obrigatórias
        Dado que eu acesso a página inicial do portal Tricentis
        Quando eu seleciono o veículo Motocicleta
        E preencho os dados em 'Enter Vehicle Data' corretamente
        E acesso 'Send Quote' sem preencher as etapas anteriores
        Então eu devo ver a mensagem 'Please, select a price option to send the quote.'


    Cenário: Enviar cotações com dados válidos
        Dado que eu acesso a página inicial do portal Tricentis
        Quando eu seleciono o veículo Motocicleta
        E preencho os dados em 'Enter Vehicle Data' corretamente
        E preencho os dados em 'Enter Insurant Data' corretamente
        E preencho os dados em 'Enter Product Data' corretamente
        E escolho a opção 'Platinum' em 'Select Price Option'
        E envio a cotação em 'Send Quote'
        Então eu devo ver a mensagem 'Sending e-mail success'