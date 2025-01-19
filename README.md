# Academia de QA Tester - Accenture

Este repositório contém o resultado do meu **segundo desafio** na **Academia de QA Tester da Accenture**. Após duas semanas de aprendizado, fomos desafiados a criar ao menos **dois cenários de testes**. Eu acabei criando **três cenários** com o objetivo de avaliar a funcionalidade de uma aplicação de cotação, garantindo que ela se comportasse corretamente em diferentes situações.

## Cenários de Testes

### 1. Tentativa de selecionar preço sem preencher as etapas obrigatórias

**O que deveria acontecer:**

- O usuário tenta selecionar o preço da cotação **sem preencher as etapas obrigatórias**.
  
**Resultado esperado:**

- O sistema deve **alertar o usuário** com uma mensagem de erro, dizendo que ele precisa completar todas as etapas obrigatórias antes de selecionar o preço.

---

### 2. Tentativa de enviar cotação sem preencher todas as etapas obrigatórias

**O que deveria acontecer:**

- O usuário tenta **enviar a cotação**, mas deixou algumas etapas obrigatórias em branco.
  
**Resultado esperado:**

- O sistema **impede o envio** e mostra uma mensagem pedindo para o usuário preencher todas as etapas obrigatórias.

---

### 3. Enviar cotação com dados válidos

**O que deveria acontecer:**

- O usuário preencheu todas as etapas obrigatórias **corretamente**.
  
**Resultado esperado:**

- O sistema **aceita os dados** e confirma que a cotação foi enviada com sucesso.

---

## Reflexões

Esse desafio foi uma excelente oportunidade para colocar em prática os conhecimentos adquiridos durante o curso, especialmente no que se refere a **testes de software**. Trabalhar na **validação de campos obrigatórios** e observar como a aplicação responde em situações de erro foi um excelente exercício para garantir que a aplicação forneça o **feedback certo** ao usuário.


