/*history
v0.1 isExist
v0.2 randomSeed
v0.3 otehr file issue
v0.4 random cutoff modulo
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
 ,xorshift32=function xorshift32(){
  let y=seed
  y = y ^ (y << 13)
  y = y ^ (y >> 17)
  y = y ^ (y << 15)
  y = y >>> 0
  seed=y
  //
  return y
 }
 ,random=(min,max)=>{
  //0 - 1 same format Math.random()
  let r=(xorshift32()%0Xffffffff/0Xffffffff) //0 to 1
  if (max == null) {
      max = min;
      min = 0;
    }
    return min + ~~(r * (max - min + 1));
 }
 return random
}
})
/*usage
let random=_.randomSeed(999)
document.body.textContent=random(0,5)
*/
;
