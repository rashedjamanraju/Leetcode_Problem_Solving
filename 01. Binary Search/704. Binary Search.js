var search = function(nums, target) {
  
    let start=0;
    let end=nums.length-1;
    let asc;
    if(nums[start]<nums[end]){
        asc=true;
    }
    else{
        asc=false;
    }
    if(asc){
        while(start<=end){
            let mid=Math.floor((start+end)*0.5);
            if(nums[mid]===target){
                return mid;
            }
            else if(nums[mid]<target){
                start=mid+1;
            }
            else if(nums[mid]>target){
                end=mid-1;
            }
        }
    }
    else{
        while(start<=end){
            let mid=Math.floor((start+end)*0.5);
            if(nums[mid]===target){
                return mid;
            }
            else if(nums[mid]<target){
                end=mid-1;
            }
            else if(nums[mid]>target){
                start=mid+1;
            }
        }
    }
    return -1;
};