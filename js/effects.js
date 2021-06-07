/*setTimeout( main, 200);
function main()
{
	let canvas = document.getElementById("back");
	let ctx = canvas.getContext("2d");
	canvas.style.height=700+"px";
	canvas.style.width=1400+"px";
	canvas.height=parseInt(canvas.style.height);
	canvas.width=parseInt(canvas.style.width);


let backgroundColor=	
{
	red:0,
	green:0,
	blue:0
};
let stars=[];
let starOb=function(x,y,vx,vy,ax,ay,r,m,d)
{

	this.locationX=x;
	this.locationY=y;
	this.velocityX=vx;
	this.velocityY=vy;
	this.accX=ax;
	this.accY=ay;
	this.radius=r;
	this.mass=m;
	this.density=d;

	stars.push(this);

}

function distance(s1,s2)
{
	let distance=Math.sqrt((s1.locationX - s2.locationX)*(s1.locationX - s2.locationX)+(s1.locationY - s2.locationY)*(s1.locationY - s2.locationY));
	return distance;
}

function drawStars()
{
	for(let i=0;i<stars.length;i++)
	{

		move(stars[i],1);

		ctx.beginPath();
		ctx.arc(stars[i].locationX,stars[i].locationY,stars[i].radius,0,2*Math.PI);
		ctx.fillStyle = "rgb(" + (255-stars[i].density) + "," + (255-stars[i].density) + "," + 0 + ")";
		ctx.fill();



	}

}
function move(s,dt)
{
	ctx.arc(s.locationX,s.locationY,s.radius+1 ,0,2*Math.PI );
	ctx.fillStyle="rgb(" + backgroundColor.red + "," + backgroundColor.green + "," + backgroundColor.blue + ")";
	ctx.fill();
	s.locationX=s.locationX+s.velocityX*dt;
	s.locationY=s.locationY+s.velocityY*dt;
}



let test1=new starOb(Math.random()*1400,Math.random()*700,1,1,0,0,Math.random()*10+5,Math.random()*10,10);
let test2=new starOb(Math.random()*1400,Math.random()*700,0,0,0,0,Math.random()*10+5,Math.random()*10,10);

//console.log(distance(stars[0],stars[1]));

let r=0;
let g=0;
let b=0;
let er;
let eg;
let eb;
let dr;
let dg;
let db;
let index=0;
let o=0;
function init()
{
	container=document.createElement('div');
	document.body.appendChild(container);
}


function randomColor()
{
	er=r;
	eg=g;
	eb=b;
	r=Math.round(Math.random()*255);
	g=Math.round(Math.random()*255);
	b=Math.round(Math.random()*255);
	dr=r-er;
	dg=g-eg;
	db=b-eb;
	index=0;
}
randomColor();
setInterval(randomColor,20000);
colorChange();

function randomCircles()
{
	ctx.beginPath();
	ctx.arc(Math.random()*1400,Math.random()*700,Math.random()*30,Math.random()*2*Math.PI,Math.random()*2*Math.PI);
	ctx.fillStyle = "rgb(" + Math.round(er+dr/200*index) + "," + Math.round(eg+dg/200*index) + "," + Math.round(eb+db/200*index) + ")";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(Math.random()*1400,Math.random()*700,Math.random()*30,Math.random()*2*Math.PI,Math.random()*2*Math.PI);
	ctx.fillStyle = "rgb(" + Math.round(er+dr/200*index) + "," + Math.round(eg+dg/200*index) + "," + Math.round(eb+db/200*index) + ")";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(Math.random()*1400,Math.random()*700,Math.random()*30,Math.random()*2*Math.PI,Math.random()*2*Math.PI);
	ctx.fillStyle = "rgb(" + Math.round(er+dr/200*index) + "," + Math.round(eg+dg/200*index) + "," + Math.round(eb+db/200*index) + ")";
	ctx.fill();

}
let alpha=1;
function square1(o)
{
	for(let i=0;i<=o;i++)
	{
		ctx.beginPath();
		ctx.rect( (o-i)*25, i*25,25, 25);
		ctx.fillStyle = "rgba(" + Math.round(er+dr/200*index) + "," + Math.round(eg+dg/200*index) + "," + Math.round(eb+db/200*index)+ ","  +alpha +")";
		ctx.fill();
	}
	
}
function square2(o)
{

	for(let i=0;i<=o;i++)
	{
		ctx.beginPath();
		ctx.rect( (56-o+i)*25, (28-i-1)*25,25, 25);
		ctx.fillStyle = "rgba(" + Math.round(er+dr/200*index) + "," + Math.round(eg+dg/200*index) + "," + Math.round(eb+db/200*index)+ "," +alpha+ ")";
		ctx.fill();
	}
}
function square3(o)
{
	for(let i=0;i<=o;i++)
	{
		ctx.beginPath();
		ctx.rect( (o-i)*25, (28-i-1)*25,25, 25);
		ctx.fillStyle = "rgba(" + Math.round(er+dr/200*index) + "," + Math.round(eg+dg/200*index) + "," + Math.round(eb+db/200*index)+ "," +alpha+ ")";
		ctx.fill();
	}
}
function square4(o)
{

	for(let i=0;i<=o;i++)
	{
		ctx.beginPath();
		ctx.rect( (56-o+i)*25, i*25,25, 25);
		ctx.fillStyle = "rgba(" + Math.round(er+dr/200*index) + "," + Math.round(eg+dg/200*index) + "," + Math.round(eb+db/200*index) + ","+alpha+")";
		ctx.fill();
	}
}
function backgroundRadiation()
{
	for(let i=0;i<=1000;i++)
		{
			ctx.beginPath();
			ctx.rect( Math.round(Math.random()*1400), Math.round(Math.random()*700),1, 1);
			let z=Math.round(Math.random()*255);
			ctx.fillStyle = "rgba(" + z + "," + z + "," + z + ","+alpha+")";
			ctx.fill();
		}

}
function vibrate(x,y,r,c1,c2,c3)
{
	for(let al=0.1;al<=0.9;al=al+0.1)
	{
		c1=c1-1;
		c2=c2-1;
		c3=c3-1;
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.strokeStyle = "rgba(" + c1 + "," + c2 + "," + c3 +","+al+")";
		r=r+1;
		ctx.stroke();
	}

}
function rainDrops()
{
	for(let i=0;i<=10;i++)
	{
		
		ctx.beginPath();
		let x=Math.random()*1400;
		let y=Math.random()*700;
		let r=Math.random()*3;
		let c1=Math.round(er+dr/200*index);
		let c2=Math.round(eg+dg/200*index);
		let c3=Math.round(eb+db/200*index);
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fillStyle = "rgb(" + c1 + "," + c2 + "," + c3 + ")";
		ctx.fill();
		vibrate(x,y,r,c1,c2,c3)
	}
}
function crazyLine()
{
			ctx.beginPath();
			ctx.rect( Math.round(Math.random()*1400), Math.round(Math.random()*700),1, 1);
			let z=Math.round(Math.random()*255);
			ctx.fillStyle = "rgba(" + z + "," + z + "," + z + ","+alpha+")";
			ctx.fill();
}
function squares()
{
	
	square1(o);
	square2(o);
	square3(o);
	square4(o);
	o=(o+1)%42;
}



function createStar(x1,y1,r1,mass1,d1)
{
	let newStar=
	{
		x:x1,
		y:y1,
		r:r1,
		mass:mass1,
		d:d1

	};
	stars.push(newStar);
}

document.getElementById("back").addEventListener("click", function() {createStar(event.clientX-65,event.clientY-30,10,10,10)});
function colorChange()
{ 

	//console.log(Math.round(er+dr/70*index)+" "+r+"   "+Math.round(eg+dg/70*index)+" "+g+"   "+Math.round(eb+db/70*index)+" "+b);
	canvas.style.backgroundColor="rgb(" + Math.round(er+dr/200*index) + "," + Math.round(eg+dg/200*index) + "," + Math.round(eb+db/200*index) + ")";
	//squares();
	//randomCircles();
	//backgroundRadiation();
	//rainDrops();
	//drawStars();


	index=index+1;
	setTimeout(colorChange,100);

}


console.log("da");
}
*/
let objects=[];
class astralObject
{
	constructor(x,y,vx,vy,ax,ay,mass,density,name,color)
	{
		this.x=x;
		this.y=y;
		this.vx=vx;
		this.vy=vy;
		this.ax=ax;
		this.ay=ay;
		this.mass=mass;
		this.density=density;
		this.name=name;
		this.color=color;
		this.radius=Math.cbrt(3*mass/(this.density*(4*Math.PI)));
		objects.push(this);
	}
}


let scale=0.1;

let height=700;
let width=1000;

let timer=[[]];

function setup()
{
	createCanvas(1000,700);
	document.getElementsByTagName("canvas")[0].id="canvas";
	let p = document.getElementById("canvas");
	let style = p.currentStyle || window.getComputedStyle(p);

	
	document.getElementsByTagName("canvas")[0].addEventListener("click", function(){
    console.log(event.clientX);
    console.log("Current marginTop: " + style.marginTop);
});
	console.log(document.getElementsByTagName("canvas")[0]);
	for(let i=0;i<=1000;i++)
	{
		let ast=new astralObject(Math.random()*1000,Math.random()*700,0,0,0,0,Math.random()*0.0001,0.000001,"Asteroid","rgba(242, 232, 201,1)");
	}*/

	//let ast=new astralObject(500,350,0,0,0,0,99.99,100,"Star","rgba(255,180,0,1)");
	
	/*let ast=new astralObject(500,350,0,0,0,0,99.99,0.001,"Star","rgba(255,180,0,1)");
	let nast=new astralObject(500,310,1.58,0,0,0,0.01,0.0001,"Asteroid","rgba(242, 232, 201,1)");
	let nast=new astralObject(500,280,1.19,0,0,0,0.02,0.00005,"Asteroid","rgba(232, 210, 143,1)");
	let nast=new astralObject(500,250,1,0,0,0,0.02,0.00005,"Asteroid","rgba(200,200,255,1)");
	let gast=new astralObject(500,200,0.81,0,0,0,0.01,0.00005,"Asteroid","rgba(255,0,0,1)");
	
	let ast=new astralObject(500,250,-0.7087,0,0,0,100,0.01,"Star","rgba(255,180,0,1)");
	let ast=new astralObject(500,350,0.7087,0,0,0,100,0.01,"Star","rgba(255,180,0,1)");
	//let ast=new astralObject(500,300,0,0,0,0,100,0.01,"Star","rgba(255,180,0,1)");
	
	console.log(objects);
	
	for(let i=0;i<10;i++)
	{
		for(let j=0;j<10;j++)
		{
			let ast=new Asteroid(i*50+50,j*30+30,0,0,0,0,2,0.001);
		}
	}
	
	noStroke();
	
	frameRate(60);
}
function orbitSpeed(distance,objT)
{

	let x=2*Math.random()*distance-distance+objT.x;
	let y=Math.sqrt(Math.pow(distance,2)-Math.pow(x,2));


}
let i=1;
function draw()
{
	background('rgba(30,27,60, 1)');
	for(let i=0;i<objects.length;i++)
	{
	fill(objects[i].color);
	ellipse(objects[i].x,objects[i].y,objects[i].radius,objects[i].radius);
	}
	processAll();
}
function processAll()
{

	for(let i=0;i<objects.length;i++)
	{

		let obj=objects[i];
		
		obj.ax=gravityX(obj,i);
		obj.ay=gravityY(obj,i);
		obj.vx=obj.vx+obj.ax;
		obj.vy=obj.vy+obj.ay;

		obj.x=obj.x+obj.vx;
		obj.y=obj.y+obj.vy;
		collide(obj,i);

		
	}
	for(let i=0;i<objects.length;i++)
	{
		let obj=objects[i];
		obj.x=obj.x+obj.vx;
		obj.y=obj.y+obj.vy;
		collide(obj,i);

	}
	
}


function collide(object,j)
{
	for(let i=j+1;i<objects.length;i++)
	{
		let tobject=objects[i];
		distance=Math.sqrt(Math.pow(object.x-tobject.x,2)+Math.pow(object.y-tobject.y,2));
		if(distance<=(object.radius+tobject.radius)/2)
		{
			if(object.mass>=tobject.mass)
			{
				

				object.vx=(object.vx*object.mass+tobject.mass*tobject.vx)/(object.mass+tobject.mass);
				object.vy=(object.vy*object.mass+tobject.mass*tobject.vy)/(object.mass+tobject.mass);
				object.ax=(object.ax*object.mass+tobject.mass*tobject.ax)/(object.mass+tobject.mass);
				object.ay=(object.ay*object.mass+tobject.mass*tobject.ay)/(object.mass+tobject.mass);
				object.mass+=tobject.mass;
				object.radius=Math.cbrt(3*object.mass/(object.density*(4*Math.PI)));;

				objects.splice(i,1);
			}
			else
			{
				tobject.vx=(tobject.vx*tobject.mass+object.mass*object.vx)/(tobject.mass+object.mass);
				tobject.vy=(tobject.vy*tobject.mass+object.mass*object.vy)/(tobject.mass+object.mass);
				tobject.ax=(tobject.ax*tobject.mass+object.mass*object.ax)/(tobject.mass+object.mass);
				tobject.ay=(tobject.ay*tobject.mass+object.mass*object.ay)/(tobject.mass+object.mass);
				tobject.mass+=object.mass;
				tobject.radius=Math.cbrt(3*tobject.mass/(tobject.density*(4*Math.PI)));;

				objects.splice(j,1);
			}
		}
	}

}
function gravityX(object,j)
{
	let distance=0;
	let ax=0;
	let a=0;
	for(let i=0;i<j;i++)
	{

		distance=Math.sqrt(Math.pow(object.x-objects[i].x,2)+Math.pow(object.y-objects[i].y,2));
		a=objects[i].mass/(Math.pow(distance,2));
		ax=ax+a*(objects[i].x-object.x)/distance;
	}
	for(let i=j+1;i<objects.length;i++)
	{
		distance=Math.sqrt(Math.pow(object.x-objects[i].x,2)+Math.pow(object.y-objects[i].y,2));
		a=objects[i].mass/(Math.pow(distance,2));
		ax=ax+a*(objects[i].x-object.x)/distance;
	}
	return ax;
}
function gravityY(object,j)
{
	let distance=0;
	let ay=0;
	let a=0;
	for(let i=0;i<j;i++)
	{

		distance=Math.sqrt(Math.pow(object.x-objects[i].x,2)+Math.pow(object.y-objects[i].y,2));
		a=objects[i].mass/(Math.pow(distance,2));
		ay=ay+a*(objects[i].y-object.y)/distance;

	}
	for(let i=j+1;i<objects.length;i++)
	{
		distance=Math.sqrt(Math.pow(object.x-objects[i].x,2)+Math.pow(object.y-objects[i].y,2));
		a=objects[i].mass/(Math.pow(distance,2));
		ay=ay+a*(objects[i].y-object.y)/distance;
	}

	return ay;
}
function centerOfMass()
{
	let cmx=0;
	let cmy=0;
	let cmm=0;
	for(let i=0;i<objects.length;i++)
		{
			cmx=(cmm*cmx+objects[i].mass*objects[i].x)/(cmm+objects[i].mass);
			cmy=(cmm*cmy+objects[i].mass*objects[i].y)/(cmm+objects[i].mass);
			cmm=cmm+objects[i].mass;	
		}

	return{x:cmx,y:cmy,mass:cmm};
}



