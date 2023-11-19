var button = document.getElementById('botao-enviar')

button.addEventListener('click', function(){
    alert('faltas enviadas.')

    var presente = document.getElementsByClassName('presente')
    presente.checked = true;
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

