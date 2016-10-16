const Stars=function(par,par1){
if(par===0){
	return "";
}
if(par===par1){
return "*"+Stars(par-1,par1);
}
return"**"+Stars(par-1,par1);
};
const Spaces=function(par){
if(par===0){
	return "";
}
return " "+Spaces(par-1);
};
const Glue=function(par,par2,par3){	
if(par===0){
	return "";
}
if(par>=par3/2+0.5){
console.log(Spaces(par)+Stars(par2,par2));
return Glue(par-1,par2+1,par3);
}
else if(par<par3/2+0.5){
console.log(Spaces(par2)+Stars(par,par));
return Glue(par-1,par2+1,par3);
}

};
const diamond=function(par){
if(par%2===0){
	par=par+1;
}
Glue(par,1,par);	
};
diamond(5);