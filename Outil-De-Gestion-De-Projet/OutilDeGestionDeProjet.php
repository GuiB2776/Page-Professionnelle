<?php
    $data = file_get_contents("php://input");
    file_put_contents("/Outil-De-Gestion-De-Projet/OutilDeGestionDeProjet.json", $data);
    echo json_encode(["status" => "success"]);
?>