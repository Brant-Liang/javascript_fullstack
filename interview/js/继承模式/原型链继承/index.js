/**
 * 1、定义父类型的构造函数
 * 2、给父类型的原型添加方法
 * 3、定义子类型的构造函数
 * 4、创建父类型的对象赋值给子类型的原型
 * 5、将子类型原型的构造属性设置为子类型
 * 6、给子类型原型添加方法
 * 7、创建子类型的对象：可以调用父类型的方法
 * 
 * 子类型的原型为父类型的一个实例对象
 */

 function Supper() {
   this.supProp = 'Supper property'
 }
 Supper.prototype.showSupperProp = function() {
   console.log(this.supProp);
 }
 Sub.prototype = new Supper()
 Sub.prototype.constructor = Sub
 function Sub() {
   this.subProp = 'Sub property'
 }
 Sub.prototype.showSubProp = function () {
   console.log(this.subProp);
 }
 var sub = new Sub()
 sub.showSupperProp()   