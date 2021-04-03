class Bob{
    constructor(x,y,r){
        var options = {
            'isStatic': false,
            'restitution':0.2
        }
        this.body = Matter.Bodies.circle(x,y,r,options);
        this.r = r*2;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("purple");
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r)
        }
}
