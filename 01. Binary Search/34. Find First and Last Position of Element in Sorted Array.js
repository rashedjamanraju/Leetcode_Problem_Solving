var searchRange = function(nums, target) {
    if(nums.length===0){
        return [-1,-1];
    }
    let start=0;
    let end=nums.length-1;
    let arr=[];
    let arr2;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(nums[mid]===target){
            arr.push(mid);
            for(let a=mid-1;a>=0;a--){
                if(nums[a]===target){
                    arr.push(a);
                }
                else if(nums[a]<target){
                    break;
                }
            }
            
            for(let a=mid+1;a<nums.length;a++){
                if(nums[a]===target){
                    arr.push(a);
                }
                else if(nums[a]>target){
                    break;
                }
            }
            if(arr.length===1){
                return [arr[0],arr[0]];
            }
            else if(arr.length>1){
                arr2=arr.sort((c,d)=>c-d);
                return [arr2[0],arr2[arr2.length-1]];
            }
        }
        else if(nums[mid]>target){
            end=mid-1;
        }
        else if(nums[mid]<target){
            start=mid+1;
        }
    }
    return [-1,-1];
};
console.log(searchRange([1,2,2,3,3,3,4],4));