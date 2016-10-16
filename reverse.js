const smth=function(arr1,el,el1,aux){
if(el1<=el){
	return arr1;
}
aux=arr1[el1];
arr1[el1]=arr1[el];
arr1[el]=aux;

return smth(arr1,el+1,el1-1,aux);
};

const reverse = function(arr) {
return smth(arr,0,arr.length-1,0);
};

const reversedArray = reverse([1,9,6,2,4,3]);

console.log(reversedArray);