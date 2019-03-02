var r = 1100;
var v = 1000;
var p = 10;
var f = 0;
var k = 0;
f=v/100*p;
while ( v<=r){
	k++;
	v=v+f;
}
console.log(k);
