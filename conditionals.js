const temp = -6;

if (temp <= 0) {
  console.log("I'm gunna need a scarf and coat.");
} else if (temp < 15) {
  console.log("A short sleeve won't cut it, go put on a light coat.");
} else {
  console.log("Good weather outside, I'm going to wear a t-shirt.");
}

console.log("You're ready to go outside!")



// using logical operators in conditionals
const isCitizen = true;
const age = 25;

if(isCitizen && age > 18){
  console.log("You are eligible to vote!")
}

if (temp > 40 || temp < -40) {
  console.log("maybe don't go outside today.")
}