/*Funcion para cambiar el valor de action */
$(document).ready(function() {

    /**------Validacion de Datos --------  */
    $("#usuario").focus();

    $("#usuario").blur(function() {
        if (validarCampoVacio($("#usuario"))) {
            !validateCaracteres($("#usuario")) ?
                mensaje(false, $("#usuario"), $("#lusuario")) :
                mensaje(true, $("#usuario"), $("#lusuario"), "este campo no puede tener caracteres especiales");

            if ($("#usuario").val().indexOf(' ') != -1) {
                $("#usuario").focus();
                mensaje(true, $("#usuario"), $("#lusuario"), "solo se permite un nombre y sin espacios");
            }
        } else {
            mensaje(true, $("#usuario"), $("#lusuario"), "Este campo Es obligatorio");
        }
    }); //Validacion de Usuario 

    $("#contrasena").blur(function() {
        if (validarCampoVacio($(this))) {
            validarNumeroDigitos($(this), 8) ?
                mensaje(false, $(this), $("#l" + this.id)) :
                mensaje(true, $(this), $("#l" + this.id), "la contraseña debe ser minimo de 8 digitos");
        } else
            mensaje(true, $(this), $("#l" + this.id), "Este campo Es obligatorio");
    }); //Validacion de contraseña

    /**------Fin Validacion de Datos --------  */
});

function validarNumero(caja) {

    var cadena = caja.val();
    var validaror = false;

    for (var i = 0; i < cadena.length; i++) {
        if ($.isNumeric(cadena[i])) {
            validaror = true;
        }
    }
    return validaror;
} //Valida que no tenga valores numericos


function validateCaracteres(caja) {

    var value = caja.val();
    var validador = false;

    if (value.indexOf('#') != -1) { validador = true; } else if (value.indexOf('!') != -1) { validador = true; } else if (value.indexOf('$') != -1) { validador = true; } else if (value.indexOf('%') != -1) { validador = true; } else if (value.indexOf('/') != -1) { validador = true; } else if (value.indexOf('(') != -1) { validador = true; } else if (value.indexOf(')') != -1) { validador = true; } else if (value.indexOf('=') != -1) { validador = true; } else if (value.indexOf('?') != -1) { validador = true; } else if (value.indexOf('¡') != -1) { validador = true; } else if (value.indexOf('¿') != -1) { validador = true; } else if (value.indexOf("'") != -1) { validador = true; } else if (value.indexOf('´') != -1) { validador = true; } else if (value.indexOf('*') != -1) { validador = true; } else if (value.indexOf('[') != -1) { validador = true; } else if (value.indexOf(']') != -1) { validador = true; } else if (value.indexOf('{') != -1) { validador = true; } else if (value.indexOf('}') != -1) { validador = true; } else if (value.indexOf('+') != -1) { validador = true; } else if (value.indexOf('"') != -1) { validador = true; } else if (value.indexOf('_') != -1) { validador = true; } else if (value.indexOf('|') != -1) { validador = true; } else if (value.indexOf('°') != -1) { validador = true; } else if (value.indexOf('&') != -1) { validador = true; }

    return validador;
} // Validar que no tenga caracteres especiales

function mensaje(resultado, caja, texto, mensaje) {
    if (resultado) {
        caja.css("background-color", "#FFDAE2");
        texto.css("color", "#FF515A");
        texto.text(mensaje);
        caja.addClass("invalidado");
        caja.removeClass("validado");
        //caja.focus();
        //caja.select();
    } else {
        texto.text("");
        caja.css("background-color", "#D2FFDA");
        caja.addClass("validado");
        caja.removeClass("invalidado");
    }
} //Enviar mensaje al label o mofificar el input de color 

function validarNumeroDigitos(caja, cantidad) {

    var validador = false;

    if (caja.val().length >= cantidad) {
        validador = true;
    }
    return validador;
} // Validar que cumpla con cantidad de digitos 

function validarCampoVacio(caja) {
    var validador = true;
    var cadena = caja.val();

    if (cadena.length == 0) {
        validador = false;
    }
    if (cadena.split(" ").join("").length == 0) {
        validador = false;
    }
    return validador;
} //Validar Confirmacion de Correo