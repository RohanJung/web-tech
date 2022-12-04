
// //function
// // function getDate(){

    
// // 	var date = new Date();
	
// //     let day = date.getDate();
// //     let month = date.getMonth();
// // document.getElementById("day").innerHTML = day+"-"+month;
// //document.getElementById("day").innerHTML = month;
// // }

// for(i=0;i<100;i++){

//     document.write("Hello I am " + i + "<br>");
// }
// // var x=1;
// // while(x<=100){
// //     document.write("Hello I am " + x + "<br>");
// //     x++;
// // }
// // y=0;
// // do{
// //     document.write("Hello I am " + y + "<br>");
// //     y++;
// // }
// // while(y<100);


// // var students = ["ram", "hari","sita"];
// // for(z=0;Z<=2;z++){
// //     document.write(students[0])
// // }


// //Objects

// // var ram = new Object();
// // ram.name = "ram silwal"
// // ram.age = 45;
// // function sayHi(){
// //     document.write('Hi');

// // }

// // var ramu = {
// //     name:"ram",
// //     age:45,
// //     hi:sayHi

// // }
// // // document.write(ramu.hi)
// // // document.write(ramu.name)

// // //Constructor

// // function person(name,age){
// //     this.name = name
// //     this.age = age
// // }

// for in

// var sub = ['Meth', 'Social', 'Science']
// for (x in sub){
//     document.write(sub[x])
// }


function calcSum(){
    let x = document.getElementById('a').value
let y = document.getElementById('b').value

let valA = parseInt(x);
let valB = parseInt(y);
let sum = valA + valB;
let summer = document.getElementById('sum');
summer.innerHTML= sum;
}