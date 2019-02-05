/*
While an array is technically a special type of object in Javascript,
destructuring of js arrays and js objects are two different things.

When destructuring an array, you assign the value of each element in an array to a
variable using a syntax like:
const [a,b,c] = [1,2,3];
which is the same as const a=1; const b=2; const c=3;

When destructuring an object, the order of the variables is not important, as they are 
assigned not based on order, but on the value of the key in the object.

for example if we had const myObj={a:1,b:2,c:3}, we could destructure it thus:
const {c,b,a} = myObj;
and we would still get (a===1 && b===2 && c===3) being true.

Another difference with Object destructuring is the ability to "map" from a keyname
to variable name using a colon:

const{c:cc} = myObj; // this sets a const cc to the value of myObj.c;
*/

const [a,b,c] = [1,2,3];
console.log(a,b,c);
console.log('===== now the object destructuring ====');
myObj={d:1,e:2,f:3};
const {d,e,f} = myObj;
console.log(d===1 && e===2 && f===3);
console.log('==== I think I will use this to return multiple variables from a function');
function speedAndDirection() {
	return {speed: 100,direction: 270};
}
const {speed,direction} = speedAndDirection();
console.log(`Speed: ${speed}, direction: ${direction}`);

// you can also destructure nested objects:
function speedAndDirectionV2() {
	return {speedV2: 100,directionV2: {angleV2:270,compassV2:'W'}};
}
const {speedV2, directionV2:{angleV2,compassV2}}=speedAndDirectionV2();
console.log(angleV2,compassV2);