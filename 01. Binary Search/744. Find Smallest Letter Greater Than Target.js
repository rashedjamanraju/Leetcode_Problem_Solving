function find(letters,target){
    let start=0;
    let end=letters.length-1;
    let mid;
    while(start<=end){
        mid=Math.floor((start+end)/2);
        if(letters[mid]===target){
            for(let i=mid+1;i<letters.length;i++){
                if(letters[i]>target){
                    return letters[i];
                }
            }
            return letters[0];
        }
        else if(letters[mid]>target){
            end=mid-1;
        }
        else if(letters[mid]<target){
            start=mid+1;
        }
    }
    if(letters[mid]<target && letters[mid+1]>target){
        return letters[mid+1];
    }
    else if(letters[mid]>target){
        return letters[mid];
    }
    else if(letters[mid]!==target){
        return letters[0];
    }
}
console.log(find(["x","x","y","y"],"z"));