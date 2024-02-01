<?php
function handleMessage(string $message, $success = false){ 
    $response = array('success' => $success, 'message' => $message);
    return json_encode($response); 
}
if(isset($_POST["delete"])){
    $id = $_POST['id'];
    if(!empty($id)){
        echo handleMessage("Account with id $id deleted");
    }else{
        echo handleMessage("Please fill out all fields.");
    }
}