/*********************************************************************
 * Objetivo: Criação de uma API para manipular dados de Estados e Cidades
 * Data: 01/11/2023
 * Autor: Vitória Cardoso
 * Versão: 1.0
 *********************************************************************/

//para criar uma api podemos utilizar o EXPRESS

/*
npm install express --save
    É a biblioteca que vai gerenciar as requisições da API


npm install body-parser --save
    É a biblioteca que vai manipular dados do corpo da requisição (POST, PUT)

npm install cors --save
    É a biblioteca reponsável pelas permissões (HEADER) de acesso das requisições 
*/


//import das bibliotecas para criar a API
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


//tirando um objeto app para manipular as requisições da API
const app = express()

//response - entrada de dados na API
//request - saída (return) de dados API

app.use((request, response, next)=>{
    //Permite especificar quem poderá acessar a API 
   // (* = liberar acesso publico, 'IP' = liberar acesso apenas para aquela maquina)
    response.header('Acess-Control-Allow-Origin', '*')

    //Permite especificar como a API, será requisitada (GET, POST, PUT e DELETE)
    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()

})

//Endpoints:
app.get('/estados/sigla', cors(), async function(request, response, next){

    let controleEstadosCidades = require('./modulo/brasil.js')
    let listaEstados = controleEstadosCidades.getListaDeEstados()

    response.json(listaEstados)
    response.status(200)

})

app.listen('8080', function(){
    console.log('API FUNCIONANDO')
})

