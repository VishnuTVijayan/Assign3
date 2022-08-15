var arra=[1,2,3,4,5,6,7,8,9,0];
console.log("In this Program for loop is used to print the cube value ");
for(var i=1;i<arra.length;i++){
    console.log(arra[i]*arra[i]*arra[i]);
}
console.log("In this Program for loop is used to print the square value ");
for(var j of arra){
    console.log(Number(arra[j]*arra[j]));
}
console.log("In this Program for loop is used to print the index value ");
for(var k in arra){
    console.log(Number(arra[k]*arra[k]));
}