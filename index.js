function findMinAndRemove(array){
  let min = [array[0],0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min[0]) {
      min = [array[i],i];
    }
  }

}

function insertionSort(array){

}
