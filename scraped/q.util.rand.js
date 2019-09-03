/*history
v1.0 crc
v1.1 logic change xorshift
*/
;(function(root){

 function xorshift32(seed){
  let y=seed
  y = y ^ (y << 13)
  y = y ^ (y >> 17)
  y = y ^ (y << 15)
  y = y >>> 0
  return y
 }

 function entry(_seed){
  let seed=_seed||999
  ,rand=(a,b)=>{
   seed=xorshift32(seed)
   return ( (a!=null)&&(b!=null) )?(seed%Math.abs(b-a)+a):(a!=null)?seed%a:seed
  }
  return rand
 }
 root.rand=entry
})(this);
