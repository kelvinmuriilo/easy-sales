# EasySales

Deploy do projeto: https://easysalesng.netlify.app/

## Sobre o projeto
A aplicação consiste em um CRUD de cliente, produto e venda.
Desenvolvido de forma responsiva, com Bootstrap, podendo adaptar-se a todos os tamanhos de tela.

## Sobre a estrutura
Cada entidade no sistema tem sua pasta no projeto com seus devidos componentes e sub-componentes.
Componentes reutilizáveis, dispostos na pasta shared, foram desenvolvidos visando o reaproveitamento de código e o aumento da produtividade.
Todos esses componentes possuem documentação na classe TS para facilitar o seu uso. 

### Um pouco sobre os componentes reutilizáveis desenvolvidos:
 - Sales Busca Cep: Componente utilizado para realizar a busca de um endereço brasileiro a partir de um CEP. O mesmo recebe um valor do tipo string e consome o webservice https://viacep.com.br/. Esse componente está sendo utilizado no cadastro de cliente. Deve-se informar um CEP válido e clicar no botão buscar, ao lado do campo. Assim que o CEP for encontrado,  as informações de endereço, cidade e UF serão inseridas automaticamente em seus respectivos campos no formulário.
 
 - Modal Bootstrap: Componente de modal para alerta de informações ao usuário. O mesmo dispõe de um serviço que disponibiliza o seu uso em toda a aplicação. Basta injetar a dependência do ModalServicoService na classe e utilizá-lo conforme necessidade.
 
 - Sales Input: Componente de input de texto feito para ser utilizado com
template driven forms. Permite o uso de máscaras para melhor representar os dados que serão informados no input.

- Sales Button: Componente de botão, desenvolvido de forma que possa ter o estado alterado para habilitado ou desabilitado.

