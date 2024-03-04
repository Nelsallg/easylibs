<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./src/scss/style.css">
    <style>
        body{
            background-color: #F2F3F5;
            box-sizing: border-box;
            padding:0;
            margin: 0;
        }
        /* .custom-flash-header {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .custom-flash-header span{
          display: flex;
          justify-content: center;
          align-items: center;

        }
        svg{
          width:20px;
          height:20px;
        }
      .flash-box, .custom-body{
        display:flex;
        flex-direction:column;
        justify-content:center;
      }
      .custom-body h3, .custom-body p{
        text-align:center;
        color:#333;
        font-size:20px;
        font-weight:600;
      }
      button{
        width:100%;
        height:35px;
        color:#FFFFFF;
        background-color:#720026;
        border:none;
        border-radius:3px;
        outline:none;
        cursor:pointer;
      } */
    </style>
</head>
<body>
<flash template="2" message="Hi, I am your warning message" type="success" title="Ooops !" duration="50000" tone="true" icon="true"></flash>
  <form id="progress-form" method="post">
        <div fieldset__parent>
          <div fieldset__container>
          <fieldset>
              <label for="photo" required-field>Photo:</label>
              <input type="file" id="photo" multiple="multiple">
              <button type="button" __next__>next</button>
            </fieldset>
            <fieldset>
              <label for="name" required-field>Name:</label>
              <input type="text" id="name">
              <div class="button-container">
                <button type="button" __prev__>previous</button>
                <button type="button" __next__>next</button>
              </div>
            </fieldset>
            <fieldset>
              <label for="surname" required-field>Surname:</label>
              <input type="text" id="surname">
              <div class="button-container">
                <button type="button" __prev__>previous</button>
                <button type="button" __next__>next</button>
              </div>
            </fieldset>
            <fieldset>
              <label for="sex" required-field>Sex:</label>
              <select name="" id="">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div class="button-container">
                <button type="button" __prev__>previous</button>
                <button type="button" __next__>next</button>
              </div>
            </fieldset>
            <fieldset>
              <label for="email" required-field>Email:</label>
              <input type="email" id="email" name="email">
              <div class="button-container">
                <button type="button" __prev__>previous</button>
                <button type="button" __next__>next</button>
              </div>
            </fieldset>
            <fieldset>
              <label for="password" required-field>Password:</label>
              <input type="password" id="password"  name="password">
              <div class="button-container">
                <button type="button" __prev__>previous</button>
                <button type="button" id="submiter">submit</button>
              </div>
            </fieldset>
          </div>
        </div>
      </form>
    <script type="module" src="./build/bundle.js"></script>
</body>
</html>