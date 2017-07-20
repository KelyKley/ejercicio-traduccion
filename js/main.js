function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";

}

translate();

function mostrarDatos(){
	var emai = document.getElementById("inputEmail").value 
	document.getElementById("mostrar").innerHTML="<strong>" +"El correo electronico ingresado es: " + "<br>" +"</strong>"+ emai;
	var pass = document.getElementById("inputPassword").value 
	document.getElementById("mostrar2").innerHTML="<strong>" +"La clave ingresada es: " + "<br>" + "</strong>"+ pass;
}

mostrarDatos();