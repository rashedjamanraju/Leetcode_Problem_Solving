function find(nums,target){
    let start=0;
    let end=nums.length-1;
    let mid;
    while(start<=end){
        mid=start+Math.floor((end-start)/2);
        if(nums[mid]===target){
            return mid;
        }
        else if(nums[mid]>target){
            end=mid-1;
        }
        else if(nums[mid]<target){
            start=mid+1;
        }
    }
    return start;
}
console.log(find([1,2,4,5,7,8],11));