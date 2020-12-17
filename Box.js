
  class Box {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.8
      }
      this.image = loadImage("Hexagon.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height+10;
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