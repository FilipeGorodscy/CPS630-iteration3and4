<?php
/* API Documentation

Method: Delete/Get
Required parameter: "id" - (a valid flower id)

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
  
// get database connection
$database = new Database();
$db = $database->getConnection();
$flower = new Flower($db);

$flower->id = isset($_GET['id']) ? $_GET['id'] : die("No id provided");
  
// delete the item
if($flower->delete()){
    http_response_code(200);
    echo json_encode(array("message" => "Flower was deleted."));
}
else{
    http_response_code(503); // 503 service unavailable
    echo json_encode(array("message" => "Unable to delete flower with id " . $flower->id));
}
?>