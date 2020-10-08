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
      </div>
    </header>
    <!-- /header -->
    <!-- main -->
    <main>
      <div class="wrap-main container">
        <?php include "db.php" ?>
        <?php if (!empty($database)) {?>
          <?php foreach ($database as $album) { ?>
          <!-- container tipo album   -->
          <div class="box-album">
            <!-- url immagine cover album -->
            <img src="<?php echo $album["poster"]?>" alt="cover album">
            <!-- titolo album -->
            <h2 class="title"><?php echo $album["title"]?></h2>
            <!-- autore album -->
            <h4 class="author"><?php echo $album["author"]?></h4>
            <!-- anno album -->
            <h4 class="year"><?php echo $album["year"]?></h4>
          </div>
          <!-- /container tipo album   -->
          <?php } ?>
        <?php } else {?>
          <div class="alert">Non ci sono album in Database</div>
        <?php } ?>
      </div>
    </main>
    <!-- /main -->
    <script src="dist/app.js" charset="utf-8"></script>
  </body>
</html>
