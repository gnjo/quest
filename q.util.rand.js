
;(function(root){
 let fn={}
 fn.crcTable=(function(){
  var c,crcTable = [];
  for(var n =0; n < 256; n++){
   c = n;
   for(var k =0; k < 8; k++){
    c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
   }
   crcTable[n] = c;
  }
  return crcTable;
 })();//early gen
 fn.crc32 = function(str,hex=true) {
  var crcTable = fn.crcTable,pad=( (d,l)=>('000000000000000000'+d).slice(-1*l))
  ,crc = 0 ^ (-1)
  ;
  for (var i = 0; i < str.length; i++ ) crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF]
  ;
  crc = (crc ^ (-1)) >>> 0
  ;
  return (hex)?pad(crc.toString(16),8):crc
 }
 ;
 function entry(_seed){
  let seed=_seed||999
  ,rand=(a,b)=>{
   seed=fn.crc32(seed.toString(),false)
   return (a&&b)?(seed%Math.abs(b-a)+a):(a)?seed%a:seed
  }
  return rand
 }
 root.rand=entry
})(this);
