//Create variables here
var dog
var dogImage
var happyDog
var database
var foods
var foodstock
function preload()

{
  //load images here
  dogImage=loadImage("Dog.png")
  happyDog=loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10)
  dog.addImage(dogImage)
  dog.scale=0.2;
  foodstock=database.ref("food")
  foodstock.on("value",readstock)
}


function draw() {  
background("green")

if(keyWentDown(UP_ARROW)){
writestock(foods)
dog.addImage(happyDog)


}
  drawSprites();
  stroke("black")
  text("food remaining"+foods,170,200)
text("press up arrow to feed dog",170,160)
  //add styles here

}
function readstock(data){
  foods=data.val()
}
function writestock(x){
  if(x<0){
x=0
  }else{
    x=x-1
  }

  database.ref("/").update({
    food:x
  })
}

