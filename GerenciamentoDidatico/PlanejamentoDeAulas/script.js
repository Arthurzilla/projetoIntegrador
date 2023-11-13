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
        
    }
})
