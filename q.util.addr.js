;(function(root){

 let re={}
 re.main=/@\w+/
 re.sub=/#\w+/
 re.line=/:\w+/
 re.num=/:(\d+)/
 re.disit=/^\d+$/
 let is={}
 is.number = function(obj){return toString.call(obj) === '[object Number]'}
 ;
 function entry(str){
  let o={}
  let _main="@notfound"
  ,_sub="#entrypoint"
  ,_line=":0"
  ,_num=0
  o.main=_main
  o.sub=_sub
  o.line=_line
  o.num=_num
  ;
  o.set=(_str)=>{
   let str=_str
   if(re.disit.test(str)) str=':'+_str //special
   //
   o.main=re.main.test(str)?str.match(re.main).pop():o.main
   o.sub=re.sub.test(str)?str.match(re.sub).pop():o.sub
   o.line=re.line.test(str)?str.match(re.line).pop():o.line
   o.num=re.num.test(str)?parseInt(str.match(re.num).pop()):o.num
   return o;
  }
  o.get=(opt)=>{
   if(!opt)return o.main+o.sub+o.line
   //@#: or n
   if(opt==='n')return o.num;
   let s=''
   if(/@/.test(opt)) s+=o.main
   if(/#/.test(opt)) s+=o.sub
   if(/:/.test(opt)) s+=o.line
   return s;
  }
  //  
  return o.set(str)
 }
 root.addr=entry;
 /*usage
 addr('@xyz').get()//fulladdress //@xyz#entrypoint:0
 addr('@xyz').set('#aaa').get('@#') //@xyz#aaa
 */
})(this);
