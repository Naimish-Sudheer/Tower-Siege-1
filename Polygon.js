
  class Polygon{
    constructor(x,y,width,height) {
      var options = {
          restitution:0.8
      }
      this.image = loadImage("Polygon.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      imageMode(CENTER);
      fill("brown");
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  };