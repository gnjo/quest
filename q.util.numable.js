/*history
v1.0 make
v1.1 bugfix 001 issue. if def case, 001 is string.
v1.2 param add
*/
;(function(root){

 let re={}
 re.numunit=/^([-+]?(?:\d*[\.]\d+|\d+))/  //tail not end
 re.num=/^([-+]?(?:\d*[\.]\d+|\d+))$/
 re.headzero=/^0[0-9]/ //bugfix
 re.falsy=/^(false|0|no|n|null|undefined|NaN)$/i
 function modulo(obj,num){
  let v=Math.abs(parseInt(obj)%parseInt(num))
  return _.isNaN(v)?0:v
 }
 function b(obj){
  if(_.isEmpty(obj) )return 0
  if(_.isNumber(obj) )return modulo(obj,2)
  if(_.isString(obj)){
   if(re.falsy.test(obj))return 0
   if(re.numunit.test(obj))return modulo(obj,2)
   return 1;//obj is exist
  }
  return 1;//obj is exist
 }
 function f(obj){
  if(_.isNumber(obj)&&(!_.isNaN(obj)) )return obj
  if(!_.isString(obj))return 0
  return re.numunit.test(obj)?parseFloat(obj):0
 }
 function i(obj){
  if(_.isNumber(obj)&&(!_.isNaN(obj)) )return parseInt(obj)
  if(!_.isString(obj))return 0
  return re.numunit.test(obj)?parseInt(obj):0
 } 
 function def(obj){
  if(!_.isString(obj))return obj;
  ///^0[0-9]/.test('001') //string like a color code
  if(re.headzero.test(obj))return obj; //string ex.color code
  if(re.num.test(obj))return parseFloat(obj);//right number
  return obj;//string
 }
 function a(_a){
  return Math.abs(_a)
 }
 function c(_a){
  return Math.ceil(_a)
 }
 function r(_a,_b){
  return (_b==null)?_.random(0,_a):_.random(_a,_b)
 }
 function p(_a){
  //let v=(~~(Math.random()*100+1)) - (100-parseInt(_a))
  let v=(_.random(1,100)) - (100-parseInt(_a)) 
  return (v>0)?1:0
 }
 function e(_a){
  if(!_.isString(_a))return 0
  let re=/\r\n|\n/g
  if(!re.test(_a))return 1
  return _a.match(re).length+1
 }
 function l(_a){
  if(_a==null)return 0
  return _a.length||0
 }
 function o(_a,_b,_c){
  /*
$01 0 [[[aa,bb,cc,dd]]] o //replace
$01 0 1 [[[3]]] o //replace
$01 0 [[[]]] o //delete
$01 [[[1]]] o //push
$01 -1 [[[1]]] o //unshift  
  */
 }
 ;
 function entry(_a,ch,_b,_c,_d){
  if(ch==='a')return a(_a)
  if(ch==='b')return b(_a)  
  if(ch==='c')return c(_a)
  if(ch==='i')return i(_a)
  if(ch==='f')return f(_a)
  if(ch==='r')return r(_a,_b)
  if(ch==='p')return p(_a)
  if(ch==='l')return l(_a) //length
  if(ch==='e')return e(_a) //end line
  //if(ch==='o')return o(_a,_b,_c,_d)
  //if(ch==='j')
  //if(ch==='t')
  return def(_a)
 }
 root.numable=entry;
})(this);
/*
numable(obj,ch) //bfi //ch=null is right number change
*/

