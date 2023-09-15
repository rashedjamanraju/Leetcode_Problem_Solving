function sqrtt(num){
    let l=1;
    let r=num;
    while(l<=r){
        let m=l+Math.floor((r-l)/2);
        if(m*m===num){
            return true;
        }
        else if(m*m>num){
            r=m-1;
        }
        else if(m*m<num){
            l=m+1;
        }
        
    }
    return false;
}
console.log(sqrtt(1));