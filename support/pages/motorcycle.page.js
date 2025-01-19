const SEL_MAKE = '#make'
const SEL_MODEL = '#model'
const INPUT_CCM = '#cylindercapacity'
const INPUT_KW = '#engineperformance'
const DATE_MANU = '#dateofmanufacture'
const SEL_SEATS = '#numberofseatsmotorcycle'
const INPUT_PRICE = '#listprice'
const INPUT_MI = '#annualmileage'
const BTN_NEXT = 'Next'
const DATA_USER = Cypress.env('Contratante')
const INPUT_FNAME = '#firstname'
const INPUT_LNAME = '#lastname'
const DATE_BIRTH = '#birthdate'
const CB_GENDER = {male:'#gendermale', female:'#genderfemale'}
const INPUT_STREET = '#streetaddress'
const SEL_COUNTRY = '#country'
const INPUT_ZIPC = '#zipcode'
const INPUT_CITY = '#city'
const SEL_OCCUP = '#occupation'
const CB_HOBBY = {Speeding: '#speeding', BungeeJumping: '#bungeejumping', CliffDiving: '#cliffdiving', Skydiving: '#skydiving', Other: '#other'}
const DATE_START = '#startdate'
const SEL_S_INS = '#insurancesum'
const SEL_D_INS = '#damageinsurance'
const CB_OPPRO = {EuroProtection:'#EuroProtection', LegalDefense:'#LegalDefenseInsurance'}
const CB_PLAN = {Silver:'#selectsilver', Gold:'#selectgold', Platinum:'#selectplatinum', Ultimate:'#selectultimate'}
const INPUT_EMAIL = '#email'
const INPUT_PHONE = '#phone'
const INPUT_USERN = '#username'
const INPUT_PW ='#password'
const INPUT_CPW ='#confirmpassword'
const BTN_SEND ='#sendemail'



Cypress.Commands.add('preencherDadosVeiculo', () => {
    cy.get(SEL_MAKE).select('Honda')
    cy.get(SEL_MODEL).select('Motorcycle')
    cy.get(INPUT_CCM).type(600)
    cy.get(INPUT_KW).type(600)
    cy.get(DATE_MANU).type('09/04/2024')
    cy.get(SEL_SEATS).select('2')
    cy.get(INPUT_PRICE).type(80000)
    cy.get(INPUT_MI).type(24500)
})

Cypress.Commands.add('selecionarEtapa',(option)=>{
    cy.contains(option).click()
})

Cypress.Commands.add('mensagemVisivel',(message)=>{
    cy.contains(message, {timeout: 10000}).should('be.visible')
})

Cypress.Commands.add('preencherDadosContratante',()=>{
    cy.get(INPUT_FNAME).type(DATA_USER.FirstName)
    cy.get(INPUT_LNAME).type(DATA_USER.LastName)
    cy.get(DATE_BIRTH).type(DATA_USER.BDate)
    if (DATA_USER.Gender === 'Female') {
        cy.get(CB_GENDER.female).click({ force: true })
      } else {
        cy.get(CB_GENDER.male).click({ force: true })
      }
    cy.get(INPUT_STREET).type(DATA_USER.Street)
    cy.get(SEL_COUNTRY).select(DATA_USER.Country)
    cy.get(INPUT_ZIPC).type(DATA_USER.ZipC)
    cy.get(INPUT_CITY).type(DATA_USER.City)
    cy.get(SEL_OCCUP).select(DATA_USER.Occupation)
    DATA_USER.Hobbies.forEach(hobby => {
        if (CB_HOBBY[hobby]) {
          cy.get(CB_HOBBY[hobby]).check({ force: true })
        }
    })   
})

Cypress.Commands.add('preencherDadosProdutos',()=>{
    cy.get(DATE_START).type('03/25/2025')
    cy.get(SEL_S_INS).select('3.000.000,00')
    cy.get(SEL_D_INS).select('Full Coverage')
    cy.get(CB_OPPRO.EuroProtection).click({ force: true })
})

Cypress.Commands.add('preencherDadosEnvio',()=>{
    cy.get(INPUT_EMAIL).type(DATA_USER.Email)
    cy.get(INPUT_USERN).type(DATA_USER.UserName)
    cy.get(INPUT_PHONE).type(DATA_USER.Phone)
    cy.get(INPUT_PW).type(DATA_USER.Password)
    cy.get(INPUT_CPW).type(DATA_USER.Password)

})

Cypress.Commands.add('enviarCotacao',()=>{
    cy.get(BTN_SEND).click()
})


Cypress.Commands.add('preencherCampos', (aba) => {
    if (aba === 'Enter Vehicle Data') {
      cy.preencherDadosVeiculo()
    } 
    else if (aba === 'Enter Insurant Data') {
      cy.preencherDadosContratante()
    }
    else if (aba === 'Enter Product Data') {
        cy.preencherDadosProdutos()
      }
    else if(aba === 'Send Quote'){
        cy.preencherDadosEnvio()
        cy.enviarCotacao()
    }
  })


  Cypress.Commands.add('escolherPlano',(plano)=>{
    cy.get(CB_PLAN[plano]).click({ force: true })
})