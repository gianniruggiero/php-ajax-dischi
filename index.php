<?php

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="dist/app.css">
    <title>PHP aiax dischi</title>
  </head>
  <body>
    <!-- header -->
    <header>
      <div class="header-wrap container">
        <img class="logo-brand"src="img/logo.png" alt="">
        <select class="select-artist" name="sel-artist">
          <option value="All artists" selected=selected>All artists</option>
          <option value="Queen">Queen</option>
          <option value="Bon Jovi">Bon Jovi</option>
          <option value="Steve Gadd">Steve Gadd Band</option>
          <option value="Iron Maiden">Iron Maiden</option>
        </select>
      </div>
    </header>
    <!-- /header -->
    <!-- main -->
    <main>

      <div class="wrap-main container">
        <!-- HANDLEBARS template   -->
        <script id="album-template" type="text/x-handlebars-template">
          <!-- container tipo album   -->
          <div class="box-album">
            <!-- url immagine cover album -->
            <img src={{url}} alt="cover album">
            <!-- titolo album -->
            <h2 class="title">{{title}}</h2>
            <!-- autore album -->
            <h4 class="author">{{author}}</h4>
            <!-- anno album -->
            <h4 class="year">{{year}}</h4>
          </div>
          <!-- /container tipo album   -->
        </script>
        <!-- /HANDLEBARS template   -->
      </div>
    </main>
    <!-- /main -->
    <script src="dist/app.js" charset="utf-8"></script>
  </body>
</html>
