function sqqrt(x){
    if(x<2){
        return x;
    }
    let l=1;
    let r=x;
    while(l<=r){
        let m=l+Math.floor((r-l)/2);
        if(m*m===x){
            return m;
        }
        else if(m*m>x){
            r=m-1;
        }
        else if(m*m<x){
            l=m+1;
        }
        
    }
    return l-1;
    
}