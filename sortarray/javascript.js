var array = [-3,5,1,3,2,10];
// var array1=array.reverse();
// document.write(array1);
var array1 =[];
for(let i=0; i<array.length; i++){
       array1.push(array[array.length-1-i]);
}
document.write(array1.join(','));