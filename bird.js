class Bird{
    constructor(x,y)
    {
        var options={
            restitution:0.2,
            friction:0.9,
            density:1.5
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);

    }
display()
{
    var angle = this .body.angle;
    var pos=this.body.position
    pos.x=mouseX;pos.y=mouseY
    
    translate(pos.x,pos.y,0,0);
     rotate( angle)
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.width,this.height);
pop();
}


}