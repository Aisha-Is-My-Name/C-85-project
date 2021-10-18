canvas=document.getElementById("canvass")

ctx = canvas.getContext("2d")
img_width = 150;
img_height = 200;
var img_image;
img_x = 100;
img_y = 200;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
	bcking_imgTag = new Image();
	bcking_imgTag.onload = upload_1;
	bcking_imgTag.src = background_image;
	carimg_imgTag = new Image();
	carimg_imgTag.onload = upload_2;
	carimg_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(bcking_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
ctx.drawImage(carimg_imgTag, img_x, img_y, 80, 100);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{

}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
