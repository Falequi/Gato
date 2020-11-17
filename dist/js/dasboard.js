$(document).ready(function() {

    numeroUsuario();
    cantMujere();
    cantHombre();
    edadPromedio();
    rangoentre02();
    rangoentr24();
    rangoentr46();
    rangoentr6();
    porcentaje = 0;
});

function numeroUsuario() {
    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'numeroUsuario' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);
            usuariosRegistrados = $('#usuariosRegistrados').text(info[0]['numerousarios']);
        }

    });
}

function cantMujere() {
    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'cantMujere' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);
            dato = $('#cantMujere').text(info[0]['cantMujere']);
        }

    });

}

function cantHombre() {
    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'cantHombre' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);
            cantHombre = $('#cantHombre').text(info[0]['cantHombre']);
        }

    });
}

function edadPromedio() {
    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'edadPromedio' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);
            numero = parseInt(info[0]['edadPromedio']);
            edadPromedio = $('#edadPromedio').text(numero);
        }

    });
}

function rangoentre02() {
    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'rangoentre02' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);
            $('#rangoentre02').text(info[0]['rangoentre02']);
            cantidad = parseInt($('#rangoentre02').text());
            cantPersonasRegistradas = parseInt($('#usuariosRegistrados').text());
            porcentaje = (cantidad / cantPersonasRegistradas) * 100;
            porcentaje = porcentaje.toFixed(2);
            porcentaje = porcentaje += "%";
            $('#rangoentre02p').text(porcentaje);
            porcentaje = "width: " + porcentaje;
            $('#rangoentre02b').attr('style', porcentaje);
        }

    });
}

function rangoentr24() {
    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'rangoentr24' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);
            $('#rangoentr24').text(info[0]['rangoentr24']);
            cantidad = parseInt($('#rangoentr24').text());
            cantPersonasRegistradas = parseInt($('#usuariosRegistrados').text());
            porcentaje = (cantidad / cantPersonasRegistradas) * 100;
            porcentaje = porcentaje.toFixed(2);
            porcentaje = porcentaje += "%";
            $('#rangoentr24p').text(porcentaje);
            porcentaje = "width: " + porcentaje;
            $('#rangoentr24b').attr('style', porcentaje);
        }

    });
}

function rangoentr46() {
    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'rangoentr46' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);
            $('#rangoentr46').text(info[0]['rangoentr46']);
            cantidad = parseInt($('#rangoentr46').text());
            cantPersonasRegistradas = parseInt($('#usuariosRegistrados').text());
            porcentaje = (cantidad / cantPersonasRegistradas) * 100;
            porcentaje = porcentaje.toFixed(2);
            porcentaje = porcentaje += "%";
            $('#rangoentr46p').text(porcentaje);
            porcentaje = "width: " + porcentaje;
            $('#rangoentr46b').attr('style', porcentaje);
        }

    });
}

function rangoentr6() {
    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'rangoentr6' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);
            $('#rangoentr6').text(info[0]['rangoentr6']);
            cantidad = parseInt($('#rangoentr6').text());
            cantPersonasRegistradas = parseInt($('#usuariosRegistrados').text());
            porcentaje = (cantidad / cantPersonasRegistradas) * 100;
            porcentaje = porcentaje.toFixed(2);
            porcentaje = porcentaje += "%";
            $('#rangoentr6p').text(porcentaje);
            porcentaje = "width: " + porcentaje;
            $('#rangoentr6b').attr('style', porcentaje);

        }

    });
}