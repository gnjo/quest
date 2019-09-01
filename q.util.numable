;(function(root){

 let re={}
 re.numunit=/^([-+]?(?:\d*[\.]\d+|\d+))/  //tail not end
 re.num=/^([-+]?(?:\d*[\.]\d+|\d+))$/
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
  if(re.num.test(obj))return parseFloat(obj);//right number
  return obj;//string
 }
 ;
 function entry(obj,ch){
  if(ch==='b')return b(obj)
  if(ch==='f')return f(obj)
  if(ch==='i')return i(obj)  
  return def(obj)
 }
 root.numable=entry;
})(this);
/*
numable(obj,ch) //bfi //ch=null is right number change
*/
