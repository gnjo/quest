/*loop history
v1.0 make loo into lop fop
v1.1 with end
*/

;(function(q){


 let end=function(){
  if(!q.md)return;
   clearInterval(q.md.cf)
   clearInterval(q.md.lf)
  console.log('end',q)
 }
 q.addon(void 0,'end',end)

 //frameloop on fps
 let fop=function(i){
  //console.log(i)
  //need q.md.layers
  if(!q.md.layers)return;
  _.map(q.md.layers).map(x=>{
   let el=x,d=el.className.replace('layer','').trim()
   if(!q.sd[d].flg)return;
   q.sd[d].flg=0//update complete;
   if(!(d==="XXX"))Object.assign(el,q.sd[d])   
   Object.assign(el.style,q.sd[d].style)
  })
 }
 //lineloop on lps
 let lop=function(i){
  if(q.md.readblock)return;
  let a=addr(q.sd['$$$']).set(q.md.n)
  //console.log(q.md.macros,a.get('@'),a.get('n'))
  let cmdline=q.md.macros[a.get('@')][a.get('n')]//||void 0
  ;
  //console.log(cmdline)
  if(cmdline==null) q.end()
  if(cmdline){
   q.sd['$$$']=a.get() //main+sub+':'+n
   q.red(cmdline) //read the macro on the lineloop
  }
  q.md.n+=1;
 } 
 q.addon(void 0,'fop',fop)
 q.addon(void 0,'lop',lop)
 //the loop 
 let loo=function(str,fps,lps){
  q.end();
  //if(q.md.cf)clearInterval(q.md.cf)
  //if(q.md.lf)clearInterval(q.md.lf)

  let safetick=fn.safetick
  q.md.fps=fps||q.md.fps
  q.md.lps=lps||q.md.lps
  q.md.f=0 //fps loop counter
  q.md.l=0 //lps loop counter
  ;
  q.md.cf=setInterval(()=>{ 
   q.md.f=safetick(q.md.f)
   q.fop(q.md.f) //frameloop on fps
  },1000/q.md.fps)
  ;
  q.md.lf=setInterval(()=>{
   q.md.l=safetick(q.md.l)
   q.lop(q.md.l) //lineloop on lps 
  },1000/q.md.lps)

  return q
 }
 q.addon(400,'loo',loo)

})(quest);
