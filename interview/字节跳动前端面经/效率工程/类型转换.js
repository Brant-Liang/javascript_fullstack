if([] == false) {console.log(1);}
//1、 Number(false)  0
//2、 toString([])   ""
//3、 Number("")    0
if({} == false) {console.log(2);}

if(NaN) {
  console.log(3);
}
// 除了null undefined false 0 NaN