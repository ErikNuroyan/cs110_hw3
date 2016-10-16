const func1=function(par){
let a="";
for(let i=par;i>0;i--){
if(i===par){
	a=a+"*";
}
else {
a=a+"**";

}

}
return a;
};//end of function for printing  stars
const func2=function(par){
let a="";
for(let j=par;j>0;j--){
a=a+" ";

}
return a;
};//end of function for printing  spaces
const diamond=function(par){
	let counter=1;
if(par%2==0){
	par=par+1;
}	
for(let k=par;k>0;k--){
if(k>=par/2+0.5){
console.log(func2(k)+func1(counter++));
}
else if(k<par/2+0.5){
	console.log(func2(counter++)+func1(k));
}
}

};//end of function diamond
diamond(5);