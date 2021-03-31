class Rope{
    constructor (body1, body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
        bodyA:body1,
        bodyB:body2,
        stiffness:0.04,
        length:200,
        pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        
        }
        fly(){
            this.bodyA = this.body1;
        }
        display(){
                var pointA = this.rope.bodyA.position;
                var pointB = this.rope.bodyB.position;
                strokeWeight(2);
                var anchor1X = pointA.x
                var anchor1Y = pointA.y
    
                var anchor2X = pointB.x + this.offsetX
                var anchor2Y = pointB.y + this.offsetY
    
                line(anchor1X, anchor1Y, anchor2X, anchor2Y)
        }
        
    }