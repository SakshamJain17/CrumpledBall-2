class Dustbin {
  constructor(x,y) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,10,10,options);
    this.width = 10;
    this.height = 10;
  this.image = loadImage("sprites/dustbin.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   imageMode(CENTER);
    //fill("yellow");
   image(this.image,pos.x, pos.y,250,200);
  }
};
