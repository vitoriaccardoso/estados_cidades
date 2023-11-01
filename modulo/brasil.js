/*********************************************************************.
 * Data: 01/11/2023
 * Autor: Vitória Cardoso
 * Versão: 1.0
 *********************************************************************/

var estados_cidades = require('./estados_cidades')

const getListaDeEstados = function(){
    let arrayEstados = []
    let JSONEstados = {}
    for(let cont = 0; cont < estados_cidades.estadosCidades.estados.length; cont++){
        arrayEstados.push(estados_cidades.estadosCidades.estados[cont].sigla)
    }
    JSONEstados.uf = arrayEstados
    JSONEstados.quantidade = arrayEstados.length
    return JSONEstados
}

const getDadosEstados = function(siglaEstado){
    let JSONEstados = {}

    
    for(let cont = 0; cont < estados_cidades.estadosCidades.estados.length; cont++){
        if(siglaEstado == estados_cidades.estadosCidades.estados[cont].sigla){
            JSONEstados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONEstados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONEstados.capital = estados_cidades.estadosCidades.estados[cont].capital
            JSONEstados.regiao = estados_cidades.estadosCidades.estados[cont].regiao
        }
    }


    return JSONEstados
}


const getCapitalEstados = function(siglaEstado){
    let JSONEstados = {}

    
    for(let cont = 0; cont < estados_cidades.estadosCidades.estados.length; cont++){
        if(siglaEstado == estados_cidades.estadosCidades.estados[cont].sigla){
            JSONEstados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONEstados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONEstados.capital = estados_cidades.estadosCidades.estados[cont].capital
        }
    }
    return JSONEstados
}


const getEstadoRegiao = function(regiao){
    let arrayEstados = []
    let JSONEstados = {}
    
    for(let cont = 0; cont < estados_cidades.estadosCidades.estados.length; cont++){
        if(regiao == estados_cidades.estadosCidades.estados[cont].regiao){
            let JSONInfo = {}
            JSONInfo.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONInfo.descricao = estados_cidades.estadosCidades.estados[cont].nome
            arrayEstados.push(JSONInfo)
            JSONEstados.regiao = estados_cidades.estadosCidades.estados[cont].regiao
        }
    }
    JSONEstados.estados = arrayEstados
    return JSONEstados
}

const getCapitalPais = function(){
    let arrayEstados = []
    let JSONCapital ={}
    
    for(let cont = 0; cont < estados_cidades.estadosCidades.estados.length; cont++){
        if(estados_cidades.estadosCidades.estados[cont].capital_pais){
            let JSONEstados = {}
            JSONEstados.capital_atual = estados_cidades.estadosCidades.estados[cont].capital_pais.capital
            JSONEstados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONEstados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONEstados.capital = estados_cidades.estadosCidades.estados[cont].capital
            JSONEstados.regiao = estados_cidades.estadosCidades.estados[cont].regiao
            JSONEstados.capital_pais_ano_inicio = estados_cidades.estadosCidades.estados[cont].capital_pais.ano_inicio
            JSONEstados.capital_pais_ano_termino = estados_cidades.estadosCidades.estados[cont].capital_pais.ano_fim
            arrayEstados.push(JSONEstados)
        }
    }
    JSONCapital.capitais = arrayEstados
    return JSONCapital
}

const getCidades = function(estado){
    let arrayEstados = []
    let JSONEstados = {}
    
    for(let cont = 0; cont < estados_cidades.estadosCidades.estados.length; cont++){
      
        if(estado == estados_cidades.estadosCidades.estados[cont].sigla){
            for(let cont2 = 0;cont2<estados_cidades.estadosCidades.estados[cont].cidades.length;cont2++){
             
            arrayEstados.push(estados_cidades.estadosCidades.estados[cont].cidades[cont2].nome)
            }
            JSONEstados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONEstados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONEstados.quantidade_cidades = arrayEstados.length

        }
    }
    JSONEstados.cidades = arrayEstados
    return JSONEstados
}





console.log(getListaDeEstados())
console.log(getDadosEstados('SP'))
console.log(getCapitalEstados('RR'))
console.log(getEstadoRegiao('Norte'))
console.log(getCapitalPais())
console.log(getCidades('RR'))


module.exports={
 getListaDeEstados   
}