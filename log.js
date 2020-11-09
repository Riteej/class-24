class Log{
    constructor(x,y,height,angle)
    {
        var options={
            restitution:0.2,
            friction:1.5,
            density:1.0
        }

        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body,angle)
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
    fill("blue");
    rect(0,0,this.width,this.height);
pop();
}


}