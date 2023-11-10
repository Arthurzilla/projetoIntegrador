function passwordVerification(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "" || password == ""){
      document.getElementById('error').textContent = "há espaços em branco"
    }else if(username != "arthur" || password != "332518"){
      document.getElementById('error').textContent = "senha ou usuários incorretos"
    }else{
      pageRedirect()
    }

  }


  function pageRedirect(){
    window.location.href="../Home-Page/index.html"
  }

  var button = document.getElementById('submit')
  button.addEventListener('click', passwordVerification)