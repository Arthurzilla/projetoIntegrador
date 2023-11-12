var buttton = document.getElementById('bt-enviar-aula')
buttton.addEventListener('click', function() {

    var dataEscolhida = document.getElementById('data-input').value;

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



    var QtdAulas = document.getElementById('aula-select').value;


    var descricaoAula = document.getElementById('textarea').value;

    if(dataEscolhida == "" || QtdAulas == "" || descricaoAula == "" || (turnoMatutino & turnoVespertino == "")){
        alert('existe espaços em branco.')
    }else{
        alert('aula enviada com sucesso!')
        dataEscolhida = "";
        turnoMatutino.checked = false;
        turnoVespertino.checked = false;
        descricaoAula.textContent = "";
        QtdAulas = "";
    }
})
