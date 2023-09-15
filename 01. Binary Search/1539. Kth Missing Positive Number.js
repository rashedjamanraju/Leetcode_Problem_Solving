function kth(arr, k){
    let start,end,mid,count=0,miss=[];
    let i=1;
    while(true){
        start=0;
        end=arr.length-1;
        while(start<=end){
            mid=Math.floor((start+end)/2);
            if(arr[mid]===i){
                break;
            }
            else if(arr[mid]<i){
                start=mid+1;
            }
            else if(arr[mid]>i){
                end=mid-1;
            }
        }
        if(arr[mid]!==i){
            miss.push(i);
            count++;
            i++;
        }
        else if(arr[mid]===i){
            i++;
        }
        if(count===k){
            return miss[k-1];
        }
    }
}