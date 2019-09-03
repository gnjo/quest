/*history
v0.1 isExist
v0.2 randomSeed
v0.3 otehr file issue
*/

_.mixin({
 isExist : function(obj) {
  if(obj===0||obj==='0')return true;
  return (obj)?true:false
 }
})
/*usage
_isExist(0) //exist
*/
;
_.mixin({
  randomSeed : function entry(_seed){
 let seed=_seed||999
 ,xorshift32=function xorshift32(seed){
  let y=seed
  y = y ^ (y << 13)
  y = y ^ (y >> 17)
  y = y ^ (y << 15)
  y = y >>> 0
  return y
 }
 ,random=(a,b)=>{
  seed=xorshift32(seed)
  //console.log(a,seed%a)
  if(_.isExist(a)&&_.isExist(b))return seed%Math.abs(b-a)+a
  if(_.isExist(a))return seed%a
  return seed
 }
 return random
}
})
/*usage
let random=_.randomSeed(999)
document.body.textContent=random(0,5)
*/
;
