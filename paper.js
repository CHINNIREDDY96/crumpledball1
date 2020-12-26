class paper{
    constructor(x,y,width,height){
        var options ={
            isStatic : false,
            restitution: 0.5
            
            
        }
        this.body = Bodies.circle(x,y,width,options)
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
                        
         
         ellipseMode(CENTER);
        
         fill("Yellow");
         ellipse(pos.x,pos.y, this.weight, this.height);
         
    }
}
                         

  