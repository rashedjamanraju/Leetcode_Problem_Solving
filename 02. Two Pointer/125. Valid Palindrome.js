let a=["acba","aac","adada"];
function firstPalindrome(words){
    for(let i=0;i<words.length;i++){
        if(isPal(words[i])){
            return words[i];
        }
    }
    return "";
}
function isPal(a){
    let j=0;
    let k=a.length-1;
    while(j<=k){
        if(a[j]!==a[k]) return false;
        j++,k--;
    }
    return true;

}
console.log(firstPalindrome(a));