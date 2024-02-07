<?php
function handleMessage(string $message, $success = false){ 
    $response = array('success' => $success, 'message' => $message);
    return json_encode($response); 
}
foreach ($_POST as $key => $value) {
    $array[$key]=$value;
}
echo json_encode($array);