function sortMerge(a,b){
    let c=[];
    let i=0,j=0;
    while(i<a.length && j<b.length){
        if(a[i]<=b[j]){
            c.push(a[i]);
            i++;
        }
        else if(a[i]>=b[j]){
            c.push(b[j]);
            j++;
        }
        
    }
    while (i < a.length) {
        c.push(a[i]);
        i++;
    }
    while (j < b.length) {
        c.push(b[j]);
        j++;
    }
    let d=c.length;
        if(d%2===0){
            let aa=Math.floor((d-1)/2);
            let bb=Math.ceil((d-1)/2);
            let ee=(c[aa]+c[bb])/2;
            return e;
        }
        else{
            let aa=Math.floor(d/2);
            return c[aa];
        }
}
console.log(sortMerge([5,10,15,20,25,30,35,70],[15,23,25,30,35,76,100]));
