class Pig{
    constructor(x,y)
    {
        var options={
            restitution:0.4,
            friction:0.3,
            density:1.0
        }

        this.body = Bodies.rectangle(x,y,35,35,options);
        this.width=35;
        this.height=35;
        World.add(world,this.body);

    }
display()
{
    var angle = this .body.angle;
    var pos=this.body.position
    push();
    translate(pos.x,pos.y,0,0);
     rotate( angle)
    rectMode(CENTER);
    fill("pink");
    rect(0,0,this.width,this.height);
pop();
}


}