class Paper {
  constructor(x, y, radius) {
    var options = {
        isStatic : false,
        restitution:0,
        friction:1.2,
        density:1.2
    }
    this.radius=radius;
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/paper.png")
    this.body = Bodies.circle(this.x, this.y, this.radius,options);
         World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    imageMode(CENTER);
    //fill("yellow");
   image(this.image,pos.x, pos.y,100,100,10);
  }
}
