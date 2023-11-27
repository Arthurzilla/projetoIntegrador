var buttton = document.getElementById('bt-enviar-aula')
buttton.addEventListener('click', function() {

    const dataEscolhida = document.getElementById('data-input');

    const turnoMatutino = document.getElementById('turnoMatutino');
    const turnoVespertino = document.getElementById('turnoVespertino');
    var turnoMatutinoEscolhido = "";
    var turnoVespertinoEscolhido = "";
    var e = "";
    

    if(turnoMatutino.checked){
        turnoMatutinoEscolhido = "Matutino"
    }

    if(turnoVespertino.checked){
        turnoVespertinoEscolhido = "Vespertino"
        
    }

    if(turnoVespertinoEscolhido == "Vespertino"){
        e = "e"
    }



    var QtdAulas = document.getElementById('aula-select');


    const descricaoAula = document.getElementById('mensagem')

    if(dataEscolhida.value == "" || QtdAulas.value == "" || descricaoAula.value == "" || turnoMatutino.checked == false & turnoVespertino.checked == false){
        alert('existe espaços em branco.')
    }else{
        descricaoAula.value = '';
        turnoMatutino.checked = false;
        turnoVespertino.checked = false;
        dataEscolhida.value = '';
        QtdAulas.value = '';
        

        alert('aula enviada com sucesso!')
        var faltasEnviadas = document.getElementById('faltas_enviadas')
        faltasEnviadas.style.visibility = "hidden"
        faltasEnviadas.style.display = "none"

        var btEnviarAula = document.getElementById("abrir_tela_faltas")
        btEnviarAula.style.visibility = "visible"
        btEnviarAula.style.display = "flex"

        
    }
})

/* barra lateral */
var btPerfil = document.getElementById('bt-perfil')
var barraLateral = document.getElementById('barra-lateral')
var btFecharBarraLateral = document.getElementById('fechar-barra-lateral')
var varEscurecer = document.getElementById('escurecer')
btPerfil.addEventListener('click', function(){
    barraLateral.hidden = false;
    varEscurecer.hidden = false;
})



btFecharBarraLateral.addEventListener('click', function(){
    barraLateral.hidden = true;
    varEscurecer.hidden = true;

    
})

/* lançar faltas */
var chamada = document.getElementById('chamada')
var faltasEnviadas = document.getElementById('faltas_enviadas')

var abrirTelaFaltas = document.getElementById('abrir_tela_faltas')
abrirTelaFaltas.addEventListener('click', function(){
    chamada.style.visibility = "visible"
    varEscurecer.hidden = false
    

})

var btFecharFaltas = document.getElementById('enviar_faltas')
btFecharFaltas.addEventListener('click', function(){
    chamada.style.visibility = "hidden"
    varEscurecer.hidden = true;
    abrirTelaFaltas.style.display = "none"
    faltasEnviadas.style.display = "flex"
    
})


