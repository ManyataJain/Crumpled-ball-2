class Paper{
    constructor(x,y,r){
      var options={
       isStatic:false,
       restitution:0.3,
            friction:0,
            density:1.2

      }

      this.x=x;
       this.y=y;
       this.r=r;

      this.ball2=loadImage("crumpledpaperball.png");
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
       
       World.add(world,this.body);

    }
    display(){
      
        
        push();
        translate(this.body.position.x, this.body.position.y);
        stroke(0,0,0);

        imageMode(CENTER);
       // ellipse(0,0,this.r,this.r)
       image(this.ball2,0,0,this.r,this.r);
        pop();


    }
 


}