class stone {
    constructor(x,y,r){
        var opt ={
            isStatic : false,
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("stone.png")
        this.body=Bodies.circle(this.x,this.y,this.r,opt)
        World.add(world,this.body)
    }
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image,0,0,this.r*2,this.r*2);
    pop();
    
}

}