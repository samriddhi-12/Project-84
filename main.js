canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "Car_1.webp";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "Car_2.jpg";
car2_x = 10;
car2_y = 100;

background_image = "Car racing background.jpg";

function Add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

}
function Add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
    car1_up();
    console.log("up");
}
if(keyPressed=='40')
{
    car1_down();
    console.log("down");
}
if(keyPressed=='37')
{
    car1_left();
    console.log("left");
}
if(keyPressed=='39')
{
    car1_right();
    console.log("right");
}



}
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        car2_up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        car2_down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        car2_left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        car2_right();
        console.log("right");
    }
    
    }