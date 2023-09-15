function targetIndexs(numbers,target){
    let i=0,j=numbers.length-1;
    while(i<j){
        if(numbers[i]+numbers[j]===target){
            return [i+1,j+1];
        }
        else if(numbers[i]+numbers[j]>target){
             j--;
            
        }
        else if(numbers[i]+numbers[j]<target){
            i++;
        }
    }
}
console.log(targetIndexs([2,7,11,15],9))