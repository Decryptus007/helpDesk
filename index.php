<?php
ob_start();

 session_start();
include_once('conf.php');
if (strlen($_SESSION['id']==0)) {
  header('location:logout.php');
  ob_end_flush();
  } else{

  
    $userid=$_SESSION['id'];
    $query=mysqli_query($con,"select * from users where id='$userid'");
    while($result=mysqli_fetch_array($query))
    {
       $_SESSION['surname']= $result['surname'];
       $_SESSION['email']= $result['email'];

        
    } 
           
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="/images/fichubLogo.jpg" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="./css/style.css" />
    <title>FicHub HelpDesk</title>
  </head>
  <body>
    <h2 id="welcome">Welcome to FicHub HelpDesk!</h2>
    <h1>Sorry only optimied for desktop screens only!</h1>
    <div class="chatContainer">
      <nav>
        <img src="./images/logo.jpg" alt="image" />
        <div class="login">
          <a href="logout.php" class="sign">Log Out</a>
        </div>
      </nav>
      <div class="chatHolder">
        <div id="mainChats" class="mainChats">
          <p class="mssgBot">
            Hello, Raheem. I am your Online Personal Assistant. How may I help
            you?
          </p>
          <p id="r1" class="mssgUser">Having issue with my school fees?</p>
          <p id="r2" class="mssgUser">I can't login to my school portal.</p>
          <p id="r3" class="mssgUser">Having issue with my project?</p>
        </div>
        <div id="chatMgt" class="chatMgt">
          <textarea name="" id="textArea"></textarea>
          <span id="sendBtn" class="sendBtn disabled">
            <i class="fa-solid fa-paper-plane"></i>
          </span>
        </div>
      </div>
    </div>
    <script src="./js/app.js"></script>
  </body>
</html>


<?php  }  ?>
