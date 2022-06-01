//Reverse an array by a specific index.

const a = [1, 2, 3, 4, 5];
const b = [];


const arrayRotate = (arr, ind) => {

	if (ind<0 || ind>=arr.length){
		console.log("Parameters out of range!")
	}else{
		const arrA = arr.split(ind);
	 	const arrB = arr.split(0, ind);

		const newArr = arrA.concat(arrB);
		return newArr;
	}
}

console.log(arrayRotate(a, 3));

