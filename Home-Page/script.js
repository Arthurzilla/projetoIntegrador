var botao = document.getElementById("turmas");
botao.addEventListener('click', function(){
    var turmas = document.getElementById('turmas').value;
    var turmaSelecionada;
    var materiaSelecionanada;
    switch(turmas){

        case "1":
            
            document.getElementById("vazio-msg").hidden = true;
            document.getElementById("linha-1").hidden = false;
            document.getElementById("linha-2").hidden = false;
            document.getElementById("linha-3").hidden = false;

            document.getElementById("linha-4").hidden = true;
            document.getElementById("linha-5").hidden = true;
            document.getElementById("linha-6").hidden = true;

            document.getElementById("linha-7").hidden = true;
            document.getElementById("linha-8").hidden = true;
            document.getElementById("linha-9").hidden = true;

            turma = document.getElementById('turma-1').value;

            break;

            case "2":
                document.getElementById("vazio-msg").hidden = true;
                document.getElementById("linha-1").hidden = true;
                document.getElementById("linha-2").hidden = true;
                document.getElementById("linha-3").hidden = true;
    
                document.getElementById("linha-4").hidden = false;
                document.getElementById("linha-5").hidden = false;
                document.getElementById("linha-6").hidden = false;
    
                document.getElementById("linha-7").hidden = true;
                document.getElementById("linha-8").hidden = true;
                document.getElementById("linha-9").hidden = true;
            break;

            case "3":
                document.getElementById("vazio-msg").hidden = true;
                document.getElementById("linha-1").hidden = true;
                document.getElementById("linha-2").hidden = true;
                document.getElementById("linha-3").hidden = true;
    
                document.getElementById("linha-4").hidden = true;
                document.getElementById("linha-5").hidden = true;
                document.getElementById("linha-6").hidden = true;
    
                document.getElementById("linha-7").hidden = false;
                document.getElementById("linha-8").hidden = false;
                document.getElementById("linha-9").hidden = false;

                turma = document.getElementById('turma-1').value;
            break;

    }
})