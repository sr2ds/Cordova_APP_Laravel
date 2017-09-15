## Objetivo
A intenção deste projeto é facilitar o desenvolvimento de aplicativos simples, onde frameworks mais parrudos como Angular, ionic ou meteor são necessários.

Na pasta www você vai encontrar o frontend funcional (em breve) com recursos simples para troca de página e o principal, autenticação com Laravel de forma simples. Ou seja, rotas, páginas e todos os controles necessários para o cadastro de usuário + autenticação através de REST API com o Laravel.

Talvez possamos incluir aqui uma estrutura basica do laravel pronto para isso funcionar, ou até mesmo criar um package que crie a API do auth parão do laravel.

## Techs Utilizadas aqui:
* Materializecss;
* jQuery.

## Utilização

```
cordova create app_test com.package.app_test app_test
cd app_test
rm -rf www
git clone https://github.com/srdavidsilva/Cordova-Simple-APP---Laravel-Auth.git

```

Para definir o nome do APP, logo e servidores (local e produção), edite as variáveis no documentReady.js

## Extra
Existem chamadas de plugins do Cordova no documentReady.js, estão comentadas mas podem ajudá-lo caso precise.

## TODO
Esta estrutura é inicial, ainda não esta pronta a integração com laravel, apesar de ser simples.
1. Forms de Login e Cadastro já com as chamadas Ajax;
2. Separar parametros de personalização em outro arquivo: titulo, logo, cores, etc;
3. Melhorar estrutura de Páginas/Menus, talvez modularizar as páginas por pasta, algo a pensar;
4. Corrigir bugs de Responsividade;
5. Limpar arquivos desnecessários;