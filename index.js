function findMinAndRemove(array){
  let min = [array[0],0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min[0]) {
      min = [array[i],i];
    }
  }
  array.splice(min[1],1);
  return min[0];
}

function insertionSort(array){

}

console.log(findMinAndRemove([0,0,-1,0]));
console.log(array);
