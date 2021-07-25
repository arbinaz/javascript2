function add(a,b){
    var sum=a+b;
    return sum;
}
var res=console.log(add(5,5));

// function call without parameter
function print(){
    console.log("Hello World");
}
add()
// function call with parameter
function add(a,b)
{
    console.log(a+b);
}
add(5,5)
// Function Expression
var sum1=function(c,d){
    var res1=(c+d)
    return res1;
}
sum1(12,5)
// function hoisting
console.log(sample(15,7))
function sample(e,f){
    var res2=e+f;
    return res2
}
