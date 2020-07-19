class Dustbin {
    constructor(x,y,width,height){

        var options={
            isStatic:true
        }
        this.x=x;
       this.y=y;

        this.body=Bodies.rectangle(this.x,this.y,width,height,options);
        this.width=width;
        this.height=height;
        
        World.add(world,this.body);

        this.Dustbin=loadImage("dustbingreen3.jpg");




        
    }




display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
fill("white")
rect(0,0,this.width,this.height);
pop();

image(this.Dustbin,400,370);



};
}
  
