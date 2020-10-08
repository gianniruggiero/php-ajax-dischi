const $ = require('jquery');
const Handlebars = require('handlebars');

var source = document.getElementById("album-template").innerHTML;
var template = Handlebars.compile(source);


$.ajax(
  {
    url: 'http://localhost/php-ajax-dischi/api.php',
    method: "GET",
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        var context = {
          url: data[i].poster,
          title: data[i].title,
          author: data[i].author,
          year: data[i].year,
        };
        var html = template(context);
        $(".wrap-main").append(html);
      };
    },
    error: function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errori);
    }
  }
);
