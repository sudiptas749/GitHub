console.log("Welcome to JavaScript")
console.log("We are using .js Extension")
for(var i=0;i<=10;i++)
{
  console.log("i value is="+i)
}
function displayInfo()
{
  console.log("this is function definition");
}
displayInfo();
const displayInfo=()=>
{
  console.log("this is Arrow function in JavaScript");
}
displayInfo();
//anonymous function i.e function without name

var result=function(){
    console.log("this is anonymous function in JavaScript")
    }
    result();
    //anonymous function i.e function without name

var result=function(){
    console.log("this is anonymous function in JavaScript")
    }
    function displayInfo(a,b)
    {
    console.log(a+b);
    }
    function displayInfo(a)
    {
      console.log(a)
    }
    displayInfo(10,20);
    displayInfo(100);
    function displayInfo(a,b)
{
console.log(a+b);
}
displayInfo(10,20);
function getInfo(a)
{
  console.log(a)
}
getInfo(100);
//Array literal mechanism
var stu=["ajay","vijay","kishore"];
for(i=0;i<stu.length;i++){
  console.log(stu[i]);
}
//using new keyword

var stu=new Array();
stu[0]="Ajay";
stu[1]="vijay";
stu[2]="ramesh";
stu[3]="xyz";
for(i=0;i<stu.length;i++){
  console.log(stu[i])
}



    
    

