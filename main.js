var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("IMG_20220618_080918.jpg", function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(300);	
		block_image_object.scaleToHeight(400);
		block_image_object.set({
			top:0,
			left:-55
			});
			canvas.add(block_image_object);
});
}
function playSound(){
	x.play();
}


function kani(){
	song.play;
}