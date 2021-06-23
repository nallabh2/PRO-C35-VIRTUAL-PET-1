//Create variables here
var dog,happyDog,database,foodS,foodStock,dogSprite;

function preload()
{
	//load images here
  dog=loadImage('images/dogImg.png');
  happyDog=loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  dogSprite=createSprite(250,350,100,100);
  dogSprite.scale=0.4;
  dogSprite.addImage('dog',dog);
  foodStock=database.ref('food')
  foodStock.on('value',readStock);

  
}


function draw() {  
background(rgb(46, 139, 87))
  drawSprites();
  //add styles here

}



