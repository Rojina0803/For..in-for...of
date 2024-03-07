// Use of continue and break keywords
// Only works for loops
i=8;
for(let i=0; i<=10; i++){
    if(i==3){
        console.log("a:" + i);
        continue;
        // break;    
    }
    console.log(i);
}

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    //   continue;
    break;
  }
  n += i;
  console.log(n);
}

// for....in statement

const v={
    firstname:"Shania",
    lastname: "Mirza",
    age:22,
    country:"Not Specified",
    email:"shana@gmail.com"
};
// console.log(v.firstname);
// console.log(v.lastname);
// console.log(v.age);
// console.log(v.country);

for(const i in v){
    console.log( i + " : " + v[i]);

}
// for...of statemenb

const numbers=[1,2,3,4,5,6,7];
for(let number of numbers){
    console.log(number);
}


const nums=["cat",1,2,3,4,5,6,"puppy"];
// for in for index and keys
// for of for values
// for(let key in nums){
for(let key of nums){
    console.log(`The keys are ${key}`);


const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// FUNCTIONS
function myname(){
    console.log("SELECTED");
    return(x + y);
 
}
let x="RAJAL";
let y="FASAL"
console.log("Here we go with",myname(x,y));


// Arrow functoions
const sum =(z,y)=>{
    return(z+y);
}
console.log(sum(6,7));

const greeting=()=>{
    console.log("Kon_ni_chiwa");
}
greeting();

