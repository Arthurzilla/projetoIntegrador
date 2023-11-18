var button = document.getElementById('botao-enviar')

button.addEventListener('click', function(){
    alert('faltas enviadas.')

    var presente = document.getElementsByClassName('presente')
    presente.checked = true;
})