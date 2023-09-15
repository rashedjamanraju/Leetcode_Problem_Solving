let a=["H","e","l","l","o"];
function reverseString(s){
    let i=0;
    let j=s.length-1;
    while(i<=j){
        let temp=s[i];
        s[i]=s[j];
        s[j]=temp
        i++,j--;
    }
    return a;
}
console.log(reverseString(a));