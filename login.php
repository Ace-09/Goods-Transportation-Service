<?php
session_start();
$user_type=$_POST['user_type'];


if($user_type=="")
{
    echo "<script>alert(`Please select user type`)</script>";
    echo "<script>window.location.assign('index.html')</script>";
}


include 'config.php';

$conn= mysqli_connect($server,$username,$password);
if(!$conn)
{
    echo "Can't connect to database";
}

else
{
$email=$_POST['email'];
$password=$_POST['password'];
// $database=`goods_transportation_service`;

if($user_type=="dealer")
{
$sql="SELECT * FROM `goods_transportation_service`.`dealers` WHERE email='$email'";
$result=mysqli_query($conn,$sql);
$num=mysqli_num_rows($result);
$row=mysqli_fetch_assoc($result);

        if($row['password']==$password)
            {
                echo "<script>window.location.assign('dashboard.php')</script>";
            }
        else
            { 
                echo "<script>alert(`Incorrent email or password`)</script>";
                echo "<script>window.location.assign('index.html')</script>";
            }
            $conn->close();

        }

else{
    $sql="SELECT * FROM `goods_transportation_service`.`drivers` WHERE email='$email'";
$result=mysqli_query($conn,$sql);
$num=mysqli_num_rows($result);
$row=mysqli_fetch_assoc($result);

        if($row['password']==$password)
            {
                echo "<script>window.location.assign('dashboard.php')</script>";
            }
        else
            { 
                echo "<script>alert(`Incorrent email or password`)</script>";
                echo "<script>window.location.assign('index.html')</script>";
            }
            $conn->close();
}
}
?>