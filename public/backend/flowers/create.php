<?php

/* API Documentation

This api endpoint expects the following:

POST Form data with the following parameters:

"flower_name" <text>
"flower_price" <text>
"user_image" <file>

RETURN:
    HttpCode: <code>
    
    JSON:
    {
        "message": "<message text>"
    }
*/

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../tables/flowers.php';

$database = new Database();
$db = $database->getConnection();

$flower = new Flower($db);

$flower_name = $flower_price = "";
/* if(isset($_POST["flower_name"])){
    $flower_name = $_POST["flower_name"];
    $flower_price = $_POST["flower_price"];
} */
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->flower_name) && !empty($data->flower_price)){
    $flower->name = $data->flower_name;
    $flower->price = $data->flower_price;

    $file = "";
    if(isset($_FILES["user_image"])){
        $file = $_FILES["user_image"];
        $flower->upload_image($file);
        $flower->img_path = 'images/flowers/' . $file['name'];
    }
    // Hard coded values for now
    $flower->store_code = 1;

    if($flower->create()){
        http_response_code(200);
        echo json_encode(array("message" => "Flower was created successfully."));
    }
    else{
        http_response_code(503); // unavailable service code
        echo json_encode(array("message" => "Unable to create flower item."));
    }
}
else{
    http_response_code(400); // Bad request code
    echo json_encode(array("message" => "Unable to create flower. Data is incomplete."));
}

?>