const $ = require('jquery');
const Handlebars = require('handlebars');

$(document).ready(function() {
  // chiamata ajax per recuperare dati del db
  $.ajax(
    {
      url: 'http://localhost/php-ajax-dischi/api.php',
      method: "GET",
      success: function (data) {
        // prende i nomi artisti dal db e li carica nella select
        loadArtistsInSelect(data);
        // stampa nella pagina HTML tutti gli album presenti nell'argomento data
        renderAlbum(data);
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
      }
    }
  );



  $(".select-artist").change(function(){
    var artist = $(".select-artist").val();
    // chiamata ajax per recuperare dati del db filtrati per artista
    $.ajax(
      {
        url: 'http://localhost/php-ajax-dischi/api.php?author='+artist,
        method: "GET",
        success: function (data) {
          // alert("ajax api author success");
          renderAlbum(data);
        },
        error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errori);
        }
      }
    );

  })
});

// funzione che inietta i dati del DB nel template handlebars e stampa nel DOM
function renderAlbum(albums) {
  $(".wrap-main").html("");
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);
  // ciclo per caricare il template con i dati del DB
  for (var i = 0; i < albums.length; i++) {
    // manipola il context con i dati del DB
    var tempTitle = albums[i].title.toUpperCase();
    var context = {
      url: albums[i].poster,
      title: tempTitle,
      author: albums[i].author,
      year: albums[i].year,
    };
    // crea il codice HTML, compilando il template con il context manipolato con id ait del DB
    var html = template(context);
    // inietta nel DOM il codice Html, appendendolo al div elenco album
    $(".wrap-main").append(html);
  };
};

// funzione che prende i nomi artisti dal db e li carica nella select
function loadArtistsInSelect(album) {
  // array per controllo nomi degli artisti da caricare nella select
  var arraySelect = [];
  // ciclo per caricare i nomi artisti nella select
  for (var i = 0; i < album.length; i++) {
    // controlla se il nome artista è già stato inserito nella select
    if (!arraySelect.includes(album[i].author)) {
      // aggiune il nome artista nell'array di controllo dei nomi
      arraySelect.push(album[i].author);
      // aggiunge il nome artista alla select
      $(".select-artist").append("<option value='"+album[i].author+"'>"+album[i].author+"</option>");
    };
  };
};
