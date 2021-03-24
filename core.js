var obj = {
	name:name,
	united:[],
	choords:[]

}

const data_grph = [[[]]] ;
var c_canvas = document.getElementById("setka");
var context = c_canvas.getContext("2d");
var ktsx = 6;
for (var x = 0.5; x < 900; x += 20) {
  context.moveTo(x, 0);
  context.lineTo(x, 900);
}

for (var y = 0.5; y < 900; y += 20) {
  context.moveTo(0, y);
  context.lineTo(900, y);
}

context.strokeStyle = "#888";
context.stroke();

//let adj1 = {'A':['B','C','D'] ,'C':['E'] ,  'E':['B'] ,'B':['F'] }
let adj1 = {1:[4,3,2] ,3:[5] ,  5:[4] ,4:[6] }
//let adj2 = [[[x,y],[4,3,2]] , [x,y], [[x,y],[5]] , [[x,y]]
let colour = Array('Black','Gray','Silver','DarkOrchid','Fuchsia','Purple','Red','Maroon','Olive','Lime','Green','Aqua','Teal','Blue','Navy','BlueViolet','SlateBlue','Indigo');


function bfs(adj, s, t) {
	let queue = []
	queue.push(s)
	s.visited = true
	while(queue.length > 0) {
		let v = queue.shift()
		for(let neighbor  of adj[v]) {
			if(!neighbor.visited) {
				queue.push(neighbor)
				neighbor.visited = true
				console.log(neighbor)
				if(neighbor === t) return true
			}
		} 
	}
	return false
}

function dfs(adj, v, t) {
	if(v === t) return true
	if(v.visited) return false
	v.visited = true
	
	for(let neighbor of adj[v]) {
		if(!neighbor.visited) {		
			console.log(neighbor);
			let reached = dfs(adj, neighbor, t)

			if(reached) return true
		}
	}
	
	return false
}
function gen_canvas(adj){


}

console.log(bfs(adj1 , 1 , 6));
console.log(dfs(adj1 , 1 , 6));
//console.log(gen_canvas(adj1));
//for (var i = 0; i < 7; i++) {
//console.log(adj1[4])
//}

console.log('_____________________')
	for (var i = 1; i <= ktsx ; i++) {
	console.log(i,adj1[i])
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getline (x,y){
		
		//context.beginPath();       // Начинает новый путь
		//context.moveTo(x+ramdx, y+ramdy);    // Передвигает перо в точку (30, 50)
		//context.lineTo(, );  // Рисует линию до точки (150, 100)
		//context.stroke(); 
}
function get_line(){

}

var arr = [[],[],[]];
function circle(){
	let x = 10;
	let y = 400;
	
	for(var i = 1 ; i <= ktsx ; i++){
		var item = colour[Math.floor(Math.random()*colour.length)];
		context.beginPath();
		let ramdx = getRandomArbitrary(x,y);
		let ramdy = getRandomArbitrary(x,y);
		context.arc(x+ramdx , y+ramdy, 15, 0, 2*Math.PI, false);
		context.fillStyle = item;
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = item;
		context.stroke();
		context.font = "22px Verdana";
		context.fillText(i, x+20+ramdx, y+ramdy);
		
		console.log(i ,' ','x -> ', x+ramdx,' y -> ',y+ramdy , adj1[i]);
		arr[0][i]=  x+ramdx;
		arr[1][i]=  y+ramdy;
		arr[2][i]=  i;

	}

}

circle();
console.log(arr);

//console.log(arr[0][1]); // x1
//console.log(arr[1][1]); // y1

context.beginPath();
context.moveTo(arr[0][1], arr[1][1]);
context.lineTo(arr[0][2], arr[1][2]); 
context.moveTo(arr[0][1], arr[1][1]);
context.lineTo(arr[0][3], arr[1][3]); 
context.moveTo(arr[0][1], arr[1][1]);
context.lineTo(arr[0][4], arr[1][4]);
context.moveTo(arr[0][3], arr[1][3]);
context.lineTo(arr[0][5], arr[1][5]);
context.moveTo(arr[0][4], arr[1][4]);
context.lineTo(arr[0][5], arr[1][5]);
context.moveTo(arr[0][4], arr[1][4]);
context.lineTo(arr[0][6], arr[1][6]);
context.stroke();


var x = arr[0][1];
var y = arr[1][1];
function draw(){

var Point = {X: arr[0][1], Y: arr[1][1]};
var Target = {X:arr[0][4], Y: arr[1][4]};
var Angle = Math.atan2(Target.Y - Point.Y, Target.X - Point.X);

context.fillStyle = "red";
context.fillRect(x,y,5,5);
context.clearRect(x-1,y,1,5);//очищаем
x += Math.cos(arr[0][4]*3.14/180) ;
y += Math.sin(arr[1][4]*3.14/180) ;
window.requestAnimationFrame(draw);
}

draw();
