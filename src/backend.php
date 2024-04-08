<?php
function handleMessage(string $message, $success = false){ 
    $response = array('success' => $success, 'message' => $message);
    return json_encode($response); 
}
if(empty($_POST)){
    // foreach ($_POST as $key => $value) {
    //     $array[$key]=$value;
    // }
    $array['template'] = htmlspecialchars(`<fieldset>
    <label for="name" required-field>Name:</label>
    <input type="text" name="name" id="name">
    <div class="button-container">
      <button type="button" __prev__>previous</button>
      <button type="button" __next__>next</button>
    </div>
    </fieldset>`);
}else{
    foreach ($_GET as $key => $value) {
        $array[$key]=$value;
    }
    $array['template'] = `<fieldset>
    <label for="name" required-field>Name:</label>
    <input type="text" name="name" id="name">
    <div class="button-container">
      <button type="button" __prev__>previous</button>
      <button type="button" __next__>next</button>
    </div>
    </fieldset>`;
}

echo json_encode($array);
