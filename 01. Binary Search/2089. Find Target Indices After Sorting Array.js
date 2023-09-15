var targetIndices = function(nums, target) {
    let a=nums.sort((a,b)=>a-b);
   let start=0;
   let end=a.length-1;
   let b=[];
   while(start<=end){
       let mid=Math.floor((start+end)/2);
       if(a[mid]===target){
           b.push(mid);
           for(let index=mid-1;index>=0;index--){
               if(a[index]===target){
                   b.push(index);
               }
               else if(a[index]<target){
                   break;
               }
           }
           for(let index=mid+1;index<a.length;index++){
               if(a[index]===target){
                   b.push(index);
               }
               else if(a[index]>target){
                   break;
               }
           }
           return b.sort((d,e)=>d-e);
       }
       else if(a[mid]>target){
           end=mid-1;
       }
       else if(a[mid]<target){
           start=mid+1;
       }
   }
   return b;
};
