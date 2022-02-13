<?php
 $server="localhost";
 $username="root";
 $password="";
 
 $conn= mysqli_connect($server,$username,$password);
 if(!$conn)
 {
     echo "Can't connect to database";
 }
 
     //echo "Connection successful";
     
     $name=$_POST["name"];
     $email=$_POST["email"];
     $password=$_POST["password"];
     $mobile_number=$_POST["mobile_number"];
     $age=$_POST["age"];
     $truck_number=$_POST["truck_number"];
     $truck_capacity=$_POST["truck_capacity"];
     $transporter_name =$_POST["transporter_name"];
     $driving_experience=$_POST["driving_experience"];
     $route_1=$_POST["route_1"];
     $route_2=$_POST["route_2"];
     $route_3=$_POST["route_3"];
   
    $sql= "INSERT INTO `transportation_service`.`drivers` (`name`,`email`,`password`,`mobile_number`,`age`,`truck_number`,`truck_capacity`,`transporter_name`,`driving_experience`,`route_1`,`route_2`,`route_3`) VALUES ('$name','$email','$password','$mobile_number','$age','$truck_number','$truck_capacity','$transporter_name','$driving_experience','$route_1','$route_2','$route_3')";
         if(mysqli_query($conn, $sql))
        {
           // echo "Data entered successfully";
           echo "<script> alert(`REGISTRATION SUCCESFUL`)</script>";
            echo "<script>window.location.assign('index.html')</script>";
        }
        else{
            echo "Data did not enter successfully";
        }
?>
