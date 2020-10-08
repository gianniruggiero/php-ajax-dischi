<?php
include ("db.php");
if (!empty($_GET["author"])) {
  $author = $_GET["author"];
  if ($author == "All artists") {
    // var_dump($author); die;
    header('Content-Type: application/json');
    echo json_encode($database);
  } else {
    $db_author = [];
    foreach ($database as $value) {
      if ($value["author"] == $author) {
        $db_author[] = $value;
      }
    };
    header('Content-Type: application/json');
    echo json_encode($db_author);
  }

} else {
  // var_dump($author); die;
  header('Content-Type: application/json');
  echo json_encode($database);
}
?>
