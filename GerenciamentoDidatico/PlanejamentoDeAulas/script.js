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
    alert(QtdAulas)

    var descricaoAula = document.getElementById('textarea').value;
    alert(descricaoAula)





  


    Swal.fire({
        title: "Aula enviada com sucesso!",
        text: dataEscolhida + " " + "turno:" +  " " + turnoMatutinoEscolhido + " " + e + " " + turnoVespertinoEscolhido + " " + QtdAulas + " " + "Aulas" + " "+ descricaoAula,
        icon: "success"
        
    });
})
