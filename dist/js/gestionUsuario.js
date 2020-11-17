/*----Validacion Formulario Registro----  */
$(document).ready(function() {
    $("#primerNombre").focus();

    $("#primerNombre").blur(function() {
        if (validarCampoVacio($("#primerNombre"))) {
            if (!validarNumero($("#primerNombre"))) {
                !validateCaracteres($("#primerNombre")) ?
                    mensaje(false, $("#primerNombre"), $("#lprimerNombre")) :
                    mensaje(true, $("#primerNombre"), $("#lprimerNombre"), "este campo no puede tener caracteres especiales");
            } else
                mensaje(true, $("#primerNombre"), $("#lprimerNombre"), "Este campo no puede tener numeros");

            if ($("#primerNombre").val().indexOf(' ') != -1) {
                $("#primerNombre").focus();
                mensaje(true, $("#primerNombre"), $("#lprimerNombre"), "solo se permite un nombre y sin espacios");

            }
        } else
            mensaje(true, $("#primerNombre"), $("#lprimerNombre"), "Este campo Es obligatorio");
    }); //Validacion de Primer Nombre 

    $("#segundoNombre").blur(function() {
        if (validarCampoVacio($("#segundoNombre"))) {
            if (!validarNumero($("#segundoNombre"))) {
                !validateCaracteres($("#segundoNombre")) ?
                    mensaje(false, $("#segundoNombre"), $("#lsegundoNombre")) :
                    mensaje(true, $("#segundoNombre"), $("#lsegundoNombre"), "este campo no puede tener caracteres especiales");
            } else
                mensaje(true, $("#segundoNombre"), $("#lsegundoNombre"), "Este campo no puede tener numeros");

            if ($("#segundoNombre").val().indexOf(' ') != -1) {
                $("#segundoNombre").focus();
                mensaje(true, $("#segundoNombre"), $("#lsegundoNombre"), "solo se permite un nombre y sin espacios");
            }
        }
    }); //Validacion de Segundo Nombre

    $("#primerApellido").blur(function() {
        if (validarCampoVacio($("#primerApellido"))) {
            if (!validarNumero($("#primerApellido"))) {
                !validateCaracteres($("#primerApellido")) ?
                    mensaje(false, $("#primerApellido"), $("#lprimerApellido")) :
                    mensaje(true, $("#primerApellido"), $("#lprimerApellido"), "este campo no puede tener caracteres especiales");
            } else
                mensaje(true, $("#primerApellido"), $("#lprimerApellido"), "Este campo no puede tener numeros");

            if ($("#primerApellido").val().indexOf(' ') != -1) {
                $("#primerApellido").focus();
                mensaje(true, $("#primerApellido"), $("#lprimerApellido"), "solo se permite un nombre y sin espacios");
            }
        } else
            mensaje(true, $("#primerApellido"), $("#lprimerApellido"), "Este campo Es obligatorio");
    }); //Validacion de Primer Apellido

    $("#segundoApellido").blur(function() {
        if (validarCampoVacio($("#segundoApellido"))) {
            if (!validarNumero($("#segundoApellido"))) {
                !validateCaracteres($("#segundoApellido")) ?
                    mensaje(false, $("#segundoApellido"), $("#lsegundoApellido")) :
                    mensaje(true, $("#segundoApellido"), $("#lsegundoApellido"), "este campo no puede tener caracteres especiales");
            } else
                mensaje(true, $("#segundoApellido"), $("#lsegundoApellido"), "Este campo no puede tener numeros");

            if ($("#segundoApellido").val().indexOf(' ') != -1) {
                $("#segundoApellido").focus();
                mensaje(true, $("#segundoApellido"), $("#lsegundoApellido"), "solo se permite un nombre y sin espacios");
                console.log("entro");
            }
        }
    }); //Validacion de Primer Apellido

    $("#numeroDocumento").blur(function() {
        if (validarCampoVacio($("#numeroDocumento"))) {
            if (validarNumero($("#numeroDocumento"))) {
                validarNumeroDigitos($("#numeroDocumento"), 5) ? mensaje(false, $("#numeroDocumento"), $("#lnumeroDocumento")) :
                    mensaje(true, $("#numeroDocumento"), $("#lnumeroDocumento"), "Debe contener minimo 5 numeros");
            } else
                mensaje(true, $("#numeroDocumento"), $("#lnumeroDocumento"), "este campo no puede tener letras ni caracteres especiales");
        } else
            mensaje(true, $("#numeroDocumento"), $("#lnumeroDocumento"), "Este campo Es obligatorio");
    }); //Validacion de Numero de Documento

    $("#edad").blur(function() {
        if (validarCampoVacio($("#edad"))) {
            if (validarNumero($("#edad"))) {
                validarNumeroDigitos($("#edad"), 2) ? mensaje(false, $("#edad"), $("#ledad")) :
                    mensaje(true, $("#edad"), $("#ledad"), "Debe contener minimo 5 numeros");
            } else
                mensaje(true, $("#edad"), $("#ledad"), "este campo no puede tener letras ni caracteres especiales");
        } else
            mensaje(true, $("#edad"), $("#ledad"), "Este campo Es obligatorio");
    }); //Validacion de Numero de Documento

    $("#direccion").blur(function() {
        validarCampoVacio($(this)) ?
            mensaje(false, $(this), $("#l" + this.id)) :
            mensaje(true, $(this), $("#l" + this.id), "Este campo Es obligatorio");
    }); //Validacion de Direccion

    $("#telefono").blur(function() {
        if (validarCampoVacio($("#telefono"))) {
            if (validarTelefono($("#telefono"))) {
                validarNumeroDigitos($("#telefono"), 7) ?
                    mensaje(false, $("#telefono"), $("#ltelefono")) :
                    mensaje(true, $("#telefono"), $("#ltelefono"), "El telefono debe ser minimo de 7 Digitos");
            } else
                mensaje(true, $("#telefono"), $("#ltelefono"), "Este campo solo debe tener numeros");
        } else
            mensaje(true, $("#telefono"), $("#ltelefono"), "Este campo Es obligatorio");
    }); //Validacion de Telefono

    $("#genero").blur(function() {
        mensaje(!validarSelect($("#genero")), $("#genero"), $("#lgenero"), "Por favor seleccion un Genero");
    }); // Validacion de Sexo

    $("#correo").blur(function() {
        var cadena = $(this).val();
        $(this).val(cadena.trim());
        if (validarCampoVacio($("#correo"))) {
            validarCorreo($("#correo")) ?
                verificarCorreo($(this), $("#l" + this.id)) :
                mensaje(true, $("#correo"), $("#lcorreo"), "por favor ingrese un correo valido");
        } else
            mensaje(true, $("#correo"), $("#lcorreo"), "Este campo Es obligatorio");
    }); //Validar Correo

    $("#contrasena").blur(function() {
        if (validarCampoVacio($(this))) {
            validarNumeroDigitos($(this), 8) ?
                mensaje(false, $(this), $("#l" + this.id)) :
                mensaje(true, $(this), $("#l" + this.id), "la contrasena debe ser minimo de 8 digitos");
        } else
            mensaje(true, $(this), $("#l" + this.id), "Este campo Es obligatorio");
    }); //Validacion de contraseña

    $("#conContrasena").blur(function() {
        if (validarCampoVacio($(this))) {
            $(this).val() == $("#contrasena").val() ?
                mensaje(false, $(this), $("#l" + this.id)) :
                mensaje(true, $(this), $("#l" + this.id), "las contraseñas deben cohincidir");
        } else
            mensaje(true, $(this), $("#l" + this.id), "Este campo Es obligatorio");
    }); //Validacion de Confirmacion  contraseña

    $("#usuario").blur(function() {
        if (validarCampoVacio($(this))) {
            validarNumeroDigitos($(this), 8) ?
                verificarUsuario($(this), $("#l" + this.id)) :
                mensaje(true, $(this), $("#l" + this.id), "El Usuario debe tener minimo 8 Caracteres");
        } else
            mensaje(true, $(this), $("#l" + this.id), "Este campo Es obligatorio");
    }); //Validacion de Nickname

    $("#btnGuardar").click(function() {

        if ($("#primerNombre").hasClass("validado") &&
            $("#segundoNombre").hasClass("validado") &&
            $("#primerApellido").hasClass("validado") &&
            $("#segundoApellido").hasClass("validado") &&
            $("#numeroDocumento").hasClass("validado") &&
            $("#edad").hasClass("validado") &&
            $("#direccion").hasClass("validado") &&
            $("#telefono").hasClass("validado") &&
            $("#genero").hasClass("validado") &&
            $("#correo").hasClass("validado") &&
            $("#contrasena").hasClass("validado") &&
            $("#usuario").hasClass("validado")) {
            guardarUsuario();
            //limpiar();
        } else {
            if (!$("#primerNombre").hasClass("validado") && !$("#primerNombre").hasClass("invalidado"))
                mensaje(true, $("#primerNombre"), $("#lprimerNombre"), "Campo incompleto");

            if (!$("#segundoNombre").hasClass("validado") && !$("#segundoNombre").hasClass("invalidado"))
                mensaje(true, $("#segundoNombre"), $("#lsegundoNombre"), "Campo incompleto");

            if (!$("#primerApellido").hasClass("validado") && !$("#primerApellido").hasClass("invalidado"))
                mensaje(true, $("#primerApellido"), $("#lprimerApellido"), "Campo incompleto");

            if (!$("#segundoApellido").hasClass("validado") && !$("#segundoApellido").hasClass("invalidado"))
                mensaje(true, $("#segundoApellido"), $("#lsegundoApellido"), "Campo incompleto");

            if (!$("#numeroDocumento").hasClass("validado") && !$("#numeroDocumento").hasClass("invalidado"))
                mensaje(true, $("#numeroDocumento"), $("#lnumeroDocumento"), "Campo incompleto");

            if (!$("#edad").hasClass("validado") && !$("#edad").hasClass("invalidado"))
                mensaje(true, $("#edad"), $("#ledad"), "Campo incompleto");

            if (!$("#direccion").hasClass("validado") && !$("#direccion").hasClass("invalidado"))
                mensaje(true, $("#direccion"), $("#ldireccion"), "Campo incompleto");

            if (!$("#telefono").hasClass("validado") && !$("#telefono").hasClass("invalidado"))
                mensaje(true, $("#telefono"), $("#ltelefono"), "Campo incompleto");

            if (!$("#genero").hasClass("validado") && !$("#genero").hasClass("invalidado"))
                mensaje(true, $("#genero"), $("#lgenero"), "Campo incompleto");

            if (!$("#correo").hasClass("validado") && !$("#correo").hasClass("invalidado"))
                mensaje(true, $("#correo"), $("#lcorreo"), "Campo incompleto");

            if (!$("#contrasena").hasClass("validado") && !$("#contrasena").hasClass("invalidado"))
                mensaje(true, $("#contrasena"), $("#lcontrasena"), "Campo incompleto");

            if (!$("#direccion").hasClass("validado") && !$("#direccion").hasClass("invalidado"))
                mensaje(true, $("#direccion"), $("#ldireccion"), "Campo incompleto");

            $("#primerNombre").focus();
            alert("Complete los campos requeridos correctamente");
        }
    });

    // $("#btneditar").click(function() {
    //     type = $('#type').val('editar');

    // });

    // $("#btndasboard").click(function() {
    //     type = $('#type').val('dasboard');
    // });

});

/* ----Funciones---- */

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

function validarSelect(selector) {

    var posicion = selector.val();
    var validador = true;

    if (posicion == "") {
        validador = false;
    }
    return validador;
} //Validar que si hayan seleccionado un select

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

function validarCorreo(caja) {

    var validador = true;
    var cadena = caja.val();

    if (cadena.split("@").length != 2) {
        validador = false;
    }
    if (validador) {
        if (cadena.split("@")[0].split(" ").length > 1) {
            validador = false;
        }
    }

    if (validador) {
        if (cadena.split("@")[1].split(".").length != 2) {
            validador = false;
        }
    }
    if (validador) {
        if (cadena.split("@")[1].split(".")[0].split(" ").length > 1) {
            validador = false
        }
        if (cadena.split("@")[1].split(".")[1].split(" ").length > 1) {
            validador = false;
        }
    }

    let posArroba = 0;
    let posPunto = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == "@")
            posArroba = i;
        if (cadena[i] == ".")
            posPunto = i;
    }
    if ((posPunto - posArroba) <= 1)
        validador = false;
    return validador;
} //Validar Correo

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

function validarTelefono(caja) {

    var cadena = caja.val();
    var validaror = true;

    for (var i = 0; i < cadena.length; i++) {
        if (!$.isNumeric(cadena[i])) {
            validaror = false;
        }
    }
    return validaror;
} //Validar Telefono

/* -------Funciones -------*/

function listarUsuario() {
    $.ajax({
        type: 'post',
        url: "controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'login' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);

            var lista = "<tr>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                          <td><b></b></td>\n\
                      </tr>";

            if (info.length > 0) {
                for (f = 0; f < info.length; f++) {
                    lista = lista + "<tr>";
                    lista = lista + "<td>" + info[f].userid + "</td>";
                    lista = lista + "<td>" + info[f].firstName + "</td>";
                    lista = lista + "<td>" + info[f].secondName + "</td>";
                    lista = lista + "<td>" + info[f].surName + "</td>";
                    lista = lista + "<td>" + info[f].secondSurname + "</td>";
                    lista = lista + "<td>" + info[f].gender + "</td>";
                    lista = lista + "<td>" + info[f].country + "</td>";
                    lista = lista + "<td>" + info[f].typeDoc + "</td>";
                    lista = lista + "<td>" + info[f].numberDoc + "</td>";
                    lista = lista + "<td>" + info[f].mail + "</td>";
                    lista = lista + "<td>" + info[f].confirMail + "</td>";
                    lista = lista + "<td>" + info[f].phone + "</td>";
                    lista = lista + "<td>" + info[f].nickName + "</td>";
                    lista = lista + "<td>" + info[f].password + "</td>";
                    lista = lista + "<td>" + info[f].confirPassword + "</td>";
                    lista = lista + "<td>" + info[f].address + "</td>";
                    lista = lista + "<td>" + info[f].termConditions + "</td>";
                    lista = lista + "</tr>";
                }

                $("#listadoUsuarios").html(lista);

            } else {
                $("#listadoUsuarios").html("<b>No se encuentra informacion</b>");
                limpiar();
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            alert("Verifique la ruta del archivo");
        }
    });
} //Listar Usuarios

function guardarUsuario() {
    var objUsuario = {
        id: "",
        primerNombre: $("#primerNombre").val(),
        segundoNombre: $("#segundoNombre").val(),
        primerApellido: $("#primerApellido").val(),
        segundoApellido: $("#segundoApellido").val(),
        numeroDocumento: $("#numeroDocumento").val(),
        edad: $("#edad").val(),
        direccion: $("#direccion").val(),
        telefono: $("#telefono").val(),
        genero: $("#genero").val(),
        correo: $("#correo").val(),
        usuario: $("#usuario").val(),
        contrasena: $("#contrasena").val(),
        rol: 3,
        type: ""
    };

    if (objUsuario.id !== "") {
        objUsuario.type = 'update';
    } else {
        objUsuario.type = 'guardar';
    }

    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: objUsuario,
        success: function(data) {

            var info = JSON.parse(data);
            if (info.code === "1") {
                limpiar();
                alert("Guardado con exito");
                $('#primerNombre').focus();
            } else {
                alert("No se ha guardado");
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            alert("Verifique la ruta del archivo");
        }
    });
} //Guardar Usuario

function limpiar() {
    $("#primerNombre").val("");
    $("#segundoNombre").val("");
    $("#primerApellido").val("");
    $("#segundoApellido").val("");
    $("#numeroDocumento").val("");
    $("#edad").val("");
    $("#direccion").val("");
    $("#telefono").val("");
    $("#genero").val("");
    $("#correo").val("");
    $("#contrasena").val("");
    $("#direccion").val("");

    $("#primerNombre").removeClass("validado invalidado");
    $("#segundoNombre").removeClass("validado invalidado");
    $("#primerApellido").removeClass("validado invalidado");
    $("#segundoApellido").removeClass("validado invalidado");
    $("#numeroDocumento").removeClass("validado invalidado");
    $("#edad").removeClass("validado invalidado");
    $("#direccion").removeClass("validado invalidado");
    $("#telefono").removeClass("validado invalidado");
    $("#genero").removeClass("validado invalidado");
    $("#correo").removeClass("validado invalidado");
    $("#contrasena").removeClass("validado invalidado");
    $("#direccion").removeClass("validado invalidado");

} //Limpiar Formularios

function buscarUsuario() {

    var objUsuario = {
        nickName: $("#nickname").val(),
        type: "search"
    };

    $.ajax({
        type: 'post',
        url: "Controlador/gestionUsuario.php",
        beforeSend: function() {},
        data: objUsuario,
        success: function(res) {

            var info = JSON.parse(res);
            var data = JSON.parse(info.data);

            if (info.msj === "Success") {

                for (f = 0; f < data.length; f++) {
                    $("#prinombre").val(data[f].firstName);
                    $("#segnombre").val(data[f].secondName);
                    $("#priapellido").val(data[f].surName);
                    $("#segapellido").val(data[f].secondSurname);
                    $("#sexo").val(data[f].gender);
                    $("#pais").val(data[f].country);
                    $("#tipodocumento").val(data[f].typeDoc);
                    $("#numdoc").val(data[f].numberDoc);
                    $("#email").val(data[f].mail);
                    $("#confemail").val(data[f].confirMail);
                    $("#telefono").val(data[f].phone);
                    $("#nickname").val(data[f].nickName);
                    $("#contraseña").val(data[f].password);
                    $("#ccontraseña").val(data[f].confirMail);
                    $("#direccion").val(data[f].address);
                    $("#cbox1").val(data[f].termConditions);
                }

            } else {
                alert("No se encuentra");
                limpiar();
            }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            alert("Verifique la ruta del archivo");
        }
    });

} // Buscar Usuario

function eliminarUsuario() {

    var objUsuario = {
        nickName: $("#nickname").val(),
        type: "delete"
    };

    if (confirm("Esta seguro")) {
        $.ajax({
            type: 'post',
            url: "Controlador/gestionUsuario.php",
            beforeSend: function() {},
            data: objUsuario,
            success: function(res) {
                var info = JSON.parse(res);

                if (info.res === "Success") {
                    limpiar();
                    alert("Eliminado con exito");
                    listarUsuario();
                } else {
                    alert("No se ha eliminado");
                }


            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
                alert("Verifique la ruta del archivo");
            }
        });
    }
} // Eliminar Usuarios

function verificarUsuario(caja, texto) {

    var cadena = caja.val();
    var mensaje = texto.val();

    var objUsuario = {
        usuario: cadena,
        type: "compararUsuario"
    };

    $.ajax({
        type: "POST",
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: objUsuario,
        success: function(respuesta) {
            //console.log(respuesta);
            var info = JSON.parse(respuesta);
            var validador = false;

            if (info.res === "NotInfo") {
                texto.text("");
                caja.css("background-color", "#D2FFDA");
                caja.addClass("validado");
                caja.removeClass("invalidado");
            } else {
                caja.css("background-color", "#FFDAE2");
                texto.css("color", "#FF515A");
                texto.text("Nick Name no Disponible");
                caja.addClass("invalidado");
                caja.removeClass("validado");
            }


        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            alert("Verifique la ruta del archivo");
        }
    });
} // Verificar Nick Name

function verificarCorreo(caja, texto) {

    var cadena = caja.val();

    var objUsuario = {
        correo: cadena,
        type: "compararCorreo"
    };

    $.ajax({
        type: "POST",
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: objUsuario,
        success: function(respuesta) {
            var info = JSON.parse(respuesta);


            if (info.res === "NotInfo") {
                texto.text("");
                caja.css("background-color", "#D2FFDA");
                caja.addClass("validado");
                caja.removeClass("invalidado");
            } else {
                caja.css("background-color", "#FFDAE2");
                texto.css("color", "#FF515A");
                texto.text("Este correo ya se esta utilizando");
                caja.addClass("invalidado");
                caja.removeClass("validado");
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            alert("Verifique la ruta del archivo");
        }
    });
} // Verificar Correo