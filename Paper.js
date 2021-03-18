class Paper{
constructor(x,y,width,height){
var options = {
    isStatic:false,
'restitution':0.3,
'friction':0,
'density':1.2

}
this.body = Bodies.circle(x,y,d,options)
this.width = width;
this.height = heigh;
World.add(world,this.body)



}
display(){
var pos = this.body.position;
var angle = this.body.angle;
Push();
translate(pos.x,pos.y);
rotate(angle);





}















}