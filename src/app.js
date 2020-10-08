const $ = require('jquery');
const Handlebars = require('handlebars');

$(document).ready(function() {
  // chiamata ajax per recuperare dati del db
  $.ajax(
    {
      url: 'http://localhost/php-ajax-dischi/api.php',
      method: "GET",
      success: function (data) {
        renderAlbum(data);
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
      }
    }
  );
});

// funzione che inietta i dati del DB nel template handlebars e stampa nel DOM
function renderAlbum(albums) {
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);
  // ciclo per caricare il template con i dati del DB
  for (var i = 0; i < albums.length; i++) {
    // manipola il context con i dati del DB
    var context = {
      url: albums[i].poster,
      title: albums[i].title,
      author: albums[i].author,
      year: albums[i].year,
    };
    // crea il codice HTML, compilando il template con il context manipolato con id ait del DB
    var html = template(context);
    // inietta nel DOM il codice Html, appendendolo al div elenco album
    $(".wrap-main").append(html);
  };
};
