var sel = document.createElement("select");
var opt1 = document.createElement("option");
var opt2 = document.createElement("option");

opt1.value = "1";
opt1.text = "Ingles";
//opt1.setAttribute("onblur","ing()");


opt2.value = "2";
opt2.text = "Español";

sel.add(opt1, null);
sel.add(opt2,null );

sel.setAttribute("onchange","idioma()" );
sel.appendChild(opt1,opt2);


document.getElementsByClassName("container")[0].appendChild(sel);

    
function esp(){
        
    var h2=document.getElementById("form-si");
    h2.innerHTML="Por favor inicia sesión";
    var email=document.getElementsByClassName("form-control")[0].placeholder="Correo Electrónico";
    var contrasena=document.getElementsByClassName("form-control")[1].placeholder="Contraseña";
    
    var span=document.getElementsByTagName("span")[0].innerHTML="Recordar datos";
    
    var boton=document.getElementsByClassName("btn")[0].innerHTML="Iniciar Sesión"

    }
function ing(){
    var h2=document.getElementById("form-si");
    h2.innerHTML="Please sign in";
    var email=document.getElementsByClassName("form-control")[0].placeholder="Please enter your email";
    var password=document.getElementsByClassName("form-control")[1].placeholder="Password";
    
    var spanDos=document.getElementsByTagName("span")[0].innerHTML="Remember me";
    
    var buton=document.getElementsByClassName("btn")[0].innerHTML="Sign in";
}
function idioma(){
    if(sel.value=="2"){
        esp();
    }
    else{
        ing();
    }
}