function validarForma(forma) {
    var nombre = forma.nombre;    
    if (nombre.value === "" || nombre.value === "Escribir usuario") {
        alert("Debe proporcionar un usuario");
        nombre.focus();
        nombre.select();
        return false;
    }

    var password = forma.password;
    if (password.value === "" || password.value.length < 3) {
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }

    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    for (i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkSeleccionado = true;
        }
    }
    if (!checkSeleccionado) {
        alert("Proporciona al menos una tecnologia");
        return false;
    }
    
    var generos = forma.genero;
    var radioSeleccionado = false;
    for (i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado) {
        alert("Seleccione al menos un genero");
        return false;
    }
    
    var ocupacion = forma.ocupacion;
    if(ocupacion.value === ""){
        alert("Debe seleccionar una ocupacion");
        return false;
    }
    
    //Formulario validado
    alert("Formulario valido, enviando datos...");
    return true;
}



