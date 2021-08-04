class ball{
    constructor(x,y){
    var options = {restitution:0.95}
    this.body= Matter.Bodies.circle(x, y, 20, options ) 
    this.r = 20
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push ()
        translate(pos.x,pos.y)
        rotate (angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop ()
    }
}