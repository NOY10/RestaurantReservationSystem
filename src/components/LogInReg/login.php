<?php  
if(isset($_POST["submit"])){  
  
if(!empty($_POST['email']) && !empty($_POST['pass'])) {  
    $user=$_POST['user'];
    $email=$_POST['email'];  
    $pass=$_POST['pass'];  
  
    $host ="localhost";
    $dbUsername ="root";
    $dbPassword ="Lobzang@706";
    $dbName = "admin";

    $mysqli = new mysqli($host,$dbUsername,$dbPassword,$dbName);

    if ($mysqli->connect_error) {
        die('Connect Error (' .$mysqli->connect_errno . ') '.$mysqli->connect_error);
    }

    $re = mysqli_query($mysqli,"SELECT * FROM admin_info WHERE email = '$email'");
    $matFound = mysqli_num_rows($re) > 0 ? 'yes' : 'no';

    // SQL query to select data from database
    $sql = "SELECT * FROM admin_info WHERE email='$email'";
    $result = $mysqli->query($sql);
    $mysqli->close();

    $rows=$result->fetch_assoc();
    $d_password=0;
    if ($matFound=='yes'){
        $d_password=$rows['password'];
    }
   
    if($pass == $d_password){
        //header("Location: ./adminPage.php");
        echo "Admin log in successful";
    }
    else{
        echo "Wrong Password or email";
    }
    
}
else {  
    echo "All fields are required!"; 
    }
}
?>  