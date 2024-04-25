

/* function countVowels(str){
    let count = 0;
    for(const char of str ){
        if(char==='a' || char==='u'|| char==='o'|| char==='i'|| char==='e')
        {
            count++;
        }
    }
    
return count;
}*/

let arr =[1,2,3,56,7];
let newArr = arr.filter((val) =>
{
return val%2===0;    
})
console.log(newArr);