;(function(root){

 ;
 function entry(obj){
  let o={}
  o.__run={};
  o.addon=function(seek,name,fn){   
   o[name]=fn
   o.__run[name]=seek;
   return o;
  }
  o.test=function(){
   //let ary=Array.from(arguments)
   let ary=_.keys(o.__run).map(k=>{return {name:k,seek:o.__run[k],fn:o[k]} })
    _.sortBy(ary,a=>a.seek).map(d=>console.log(`${d.seek} ${d.name}`))
   //.map(d=>d.fn.apply(o,ary))
   return o;   
  }
  o.run=function(){
   let arg=_(arguments).map(d=>d)
   let ary=_.keys(o.__run).map(k=>{return {name:k,seek:o.__run[k],fn:o[k]} })
    _.sortBy(ary,(a)=>a.seek).map(d=>d.fn.apply(o,arg))
   return o;
  }
  return _.extend({},o,obj)
 }
 ;
 root.runner=entry
 ;
 /*
let x={}
,a=(d)=>{console.log(d,'aaa')}
,b=(d)=>{console.log(d,'bbb')}
,c=(d)=>{console.log(d,'ccc')}

let r=runner(x)
r.addon(10,'a',a)
r.addon(20,'c',c)
r.addon(30,'b',b)
r.run('aaaa') 
 */
})(this);
