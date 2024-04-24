/*const profile={
     userName:"@shardhaKhapra",
     isFollow:true,
     posts:154,
     followers:"195k",
     following:4,
     bio:"To educate someone is highest privilage",

}; */


 /*let numm = prompt("Enter a number");

if(numm%5 ===0){
    console.log(numm ,"is multiple of 5");
}
else{
    console.log(numm,"not a multiuple of 5");
} */



let gameNum=25;
let num = prompt("enter a number");
let count=0; 
while(num != gameNum){
   num = prompt("you have entered wrong number. Guess Again !");
   count++

}
console.log("total attempt = " , count);
console.log("congratulations You win"); 

/*let userName=prompt("enter your username");
let output= "@"+userName+userName.length;
console.log(output); */