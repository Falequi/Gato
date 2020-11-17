$(document).ready(function() {

    $.ajax({
        type: 'post',
        url: "../controllers/usuarioCtl.php",
        beforeSend: function() {},
        data: { type: 'listartodos' },
        success: function(respuesta) {
            var res = JSON.parse(respuesta);
            var info = JSON.parse(res.data);
            if (info.length > 0) {
                for (let i = 0; i < info.length; i++) {
                    datoUsuario = "<div class='col-12 col-sm-8 col-md-6 d-flex align-items-stretch'><div class='card bg-light'><div class='card-header text-muted border-bottom-0'>" + info[i]['primernombre'] + " " + info[i]['primerapellido'] + "</div><div class='card-body pt-0'><div class='row'><div class='col-7'><h2 class='lead'><b>" + info[i]['usuario'] + "</b></h2><p class='text-muted text-sm'><b>Documento #: </b>" + info[i]['numerodocumento'] + "</p><ul class='ml-4 mb-0 fa-ul text-muted'><li class='small'><span class='fa-li'><i class='fas fa-lg fa-building'></i></span> <b>Direccion: </b>" + info[i]['direccion'] + "</li><li class='small'><span class='fa-li'><i class='fas fa-lg fa-phone'></i></span> <b># Telefono: </b>" + info[i]['telefono'] + "</li><li class='small'><span class='fa-li'><i class='fas fa-lg fa-person-booth'></i></span> <b># Genero: </b>" + info[i]['genero'] + "</li><li class='small'><span class='fa-li'><i class='fas fa-lg fa-mail-bulk'></i></span> <b># Correo: </b>" + info[i]['correo'] + "</li><li class='small'><span class='fa-li'><i class='fas fa-lg '></i></span> <b># Rol: </b>" + info[i]['rol_nombre'] + "</li></ul></div><div class='col-5 text-center'><img src='../dist/img/user1-128x128.jpg' alt='' class='img-circle img-fluid'></div></div></div><div class='card-footer'><div class='text-right'><a href='#' class='btn btn-sm bg-teal'><i class='fas fa-comments'></i></a><a href='#' class='btn btn-sm btn-primary'><i class='fas fa-user'></i> View Profile</a></div></div></div></div>";
                    $('#lista').append(datoUsuario);
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            alert("Verifique la ruta del archivo");
        }
    });
});