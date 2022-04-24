class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.04,
          isStatic: true
      }
      this.visibility=225
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("images/crates.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);222222
      rotate(angle);
     
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      
      imageMode(CENTER)
        //ellipse(0,0,this.r,this.r)
        image(this.image,0,0,this.width,this.height)
      pop();
    }
    }
  }

  