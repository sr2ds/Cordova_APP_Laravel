//cordova build android --release -- --keystore="megavarejo.keystore" --storePassword=32843Silva --alias=indiretas

// Funcao Ready - Executa toda vez que o APP for aberto, seja local ou no mobile
$('window').ready(function($) {

    /* Definicoes para voce customizar o APP, precisamos simplificar em outro arquivo */
    var title = 'App Base';
    var logo  = '/img/logo.png';
    var backend_server = '';
    var backend_local = 'http://backend.app';

    /* Definicoes padroes do APP */
    var storage = window.localStorage;

    /* Define o server automaticamente para uso posterior */
    server = (navigator.app ? backend_server : backend_local);

    /* Aplica as alteraçoes no DOM com os parametros definidos no inicio */
    $('title,.title').html(title); // Troca os Titulos
    $('.logo').attr('src', logo); // Troca os Logos


    /* Chamadas para configurar o APP */


    // Controles de Auth
    var login = null;
    if (login == null) {
        // $('nav').hide();
        $('section').hide();
        $('#login').show();
        $('#titulo').html('Login');
    }

    $('#login_action').on('click', function(e) {
        console.clear();
        $.post( server+'/api/auth/login', { 'email':$('#email').val(), 'password':$('#password').val() })
        .done(function( data ) {
            alert( "Data Loaded: " + data );
        });
    });

    // Grava total de vezes que o usuario ja abriu o APP
    var access  =+ storage.getItem('TotalDeAcessos');
    storage.setItem('TotalDeAcessos', access + 1 );

    /* De Layout */

    // FastClick
    FastClick.attach(document.body); 

    // Um Controlador para o Menu, simples mas funcional
    $('nav').on('click', 'li a', function(event) { 
        event.preventDefault();
        var id = $(this).attr('href');
        $('section').hide();
        $('#titulo').html($(this).html());
        $(id).show();
    });

    // Menu Responsivo
    $(".button-collapse").sideNav({
        edge: 'left',
        menuWidth: 250, 
        closeOnClick: true
    });

    // Modal Materialize
    $('.modal-trigger').leanModal();

    /* Fixa o Menu quando houver Scroll */
    var nav = $('#menu-fixar');
    $(window).scroll(function () { 
        console.log(nav);
        if ($(this).scrollTop() > 50) { 
            nav.addClass("menu-fixo"); 
        } else { 
            nav.removeClass("menu-fixo"); 
        } 
    });


})