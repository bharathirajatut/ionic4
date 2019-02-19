
## Ionic 4 Image Upload Using Camera Plugin and PHP 

This folder contains working code of Ionic 4 image upload using the Camera Plugin. Tested with PHP Server version 7. 

### Preview of Android

<p>
<img src="https://github.com/bharathirajatut/ionic4/blob/master/camera-image-upload-example-php/screenshot1.jpg" height="450px">
<img src="https://github.com/bharathirajatut/ionic4/blob/master/camera-image-upload-example-php/screenshot2.jpg" height="450px">
</p>

## PHP Image Upload Code Link

```
<?php
header('Access-Control-Allow-Origin: *');
$target_path = "uploads/";
 
$target_path = $target_path . basename( $_FILES['file']['name']);
 
if (move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    echo "Upload and move success";
} else {
echo $target_path;
    echo "There was an error uploading the file, please try again!";
}
?>
```
## Downnload APK

Get the APK and test it on your Android Device.

<a href="https://github.com/bharathirajatut/ionic4/blob/master/camera-image-upload-example-php/app-debug.apk">APK</a>


### Tested Device: Moto G4 Plus

You can download this apk and test it on your device. This apk is not harmful and it is not stealing any info. If you wanna try, please download install on your device. And you can try this without any worries.
