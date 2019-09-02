/*
v1.0 make
v1.1 remove chunk
v1.2 with mac
*/
;(function(q){
 let re={}
 re.at=/^@/
 //re.cmds=/^([><\[\]\{\}\$0-9A-Z][><\[\]\{\}\$0-9A-Z][><\[\]\{\}\$0-9A-Z])(.{1}|$)(.*)+$/
 //re.cmds=/^([\%><\[\]\{\}\$0-9A-Z][\%><\[\]\{\}\$0-9A-Z][\%><\[\]\{\}\$0-9A-Z])(.{1}|$)(.*)+$/
 //re.comments=/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm
 re.comments=/([^\\:]|^)\/\/.*$/
 re.wraphead=/^\[\[\[|^\{\{\{/
 re.wraptail=/^\]\]\]|^\}\}\}/
 re.subaddr=/(?: )(#\w+)/
 re.jumpfrom=/^\<\<\</
 re.cmds=/^([\%><\[\]\{\}\$0-9A-Z][\%><\[\]\{\}\$0-9A-Z][\%><\[\]\{\}\$0-9A-Z])(.{1}|$)(.*)+$/
 //re.wrapstrhead=/^(\[\[\[)(.{1}|$)(.*)+$/
 //re.wrapstrtail=/^(\]\]\])(.{1}|$)(.*)+$/
 //re.wrapjshead=/^(\{\{\{)(.{1}|$)(.*)+$/
 //re.wrapjstail=/^(\}\}\})(.{1}|$)(.*)+$/
 //re.jumpfrom=/^(<<<)(.{1}|$)(.*)+$/
 //re.jumpto=/^(>>>)(.{1}|$)(.*)+$/
 re.mths=/^(\$[\$0-9A-Z][\$0-9A-Z])(.{1}|$)(.*)+$/
 re.dats=/^(\%[0-9A-Z][0-9A-Z])(.{1}|$)(.*)+$/
 re.lays=/^(X[0-9A-Z][0-9A-Z])(.{1}|$)(.*)+$/  //layer is X
 re.maps=/^(A[0-9A-Z][0-9A-Z])(.{1}|$)(.*)+$/

 let lex=function(str){
  let f=(d)=>d.replace(re.comments,'')
  let ff=(d)=>{return d.slice(0,3)+' [[['+d.slice(3,4)+']]] '+d.slice(4)}  
  let jumps={}
  //@ --> <<< @xyz#entrypoint
  let ary=str.split('\n')
  let headaddr=addr('')
  ary=ary.map((d,i)=>{
   if(!re.at.test(d))return d
   headaddr.set(d.replace(re.comments,'')).set(i)
   return `<<< ${headaddr.get('@#')}`
  })
  if(headaddr.get('@')==='@notfound') ary.unshift(`<<< ${headaddr.get('@#')}`)
  ;
  let wk=''
  //wrap to one
  ary=ary.map((d,i)=>{
   if( !(wk==='')&&(!re.wraptail.test(d)) ){
    wk+=d+'\n'
    return ''
   }
   if(re.wraphead.test(d)){
    wk+=f(d)+'\n'
    return ''
   }
   if(re.wraptail.test(d)){
    //console.log(d)
    let dd=wk+f(d)
    wk=''
    return dd;
   }
   if(!re.cmds.test(d)) return ''
   return f(d);
  })
  //jump address catch
  let base=headaddr.get('@')
  ary=ary.map((d,i)=>{
   if(re.wraphead.test(d)||d=='')return d;
   let dd=d.replace(re.subaddr,(x)=>' '+base+x.trim())
   if(re.jumpfrom.test(dd)) jumps[addr(dd).get('@#')]=i
   return dd;
  })
  //1st command change
  ary=ary.map(d=>{
   if(re.mths.test(d)||re.dats.test(d))return 'MHT '+ff(d)
   if(re.lays.test(d))return 'LAY '+ff(d)
   if(re.maps.test(d))return 'MAP '+ff(d)
   return d;
  })

  return {address:headaddr.get('@#'),macro:ary,jumps:jumps}
 }

 //console.log(lex(macro))
 q.addon(void 0,'lex',lex);

})(quest);

;(function(q){
 let mac=function(str,fps,lps){
  let d=q.lex(str),ad=addr(d.address).set(d.jumps[d.address])
  ;
  //console.log(d,q.md.macros)
  if(!q.md.macros){
   //most first
   q.md.macros={}
   q.md.n=0 //now line
   q.md.jumps={}
   q.md.jumpstack=[]   
  }
  q.md.macros[ad.get('@')]=d.macro
  q.md.jumps=_.extend({},q.md.jumps,d.jumps)
  q.md.n=q.md.jumps[d.address]||0
  q.md.nowmacro=ad.get('@')
  ;
  q.sd['$$$']=ad.get()
  q.sd['$00']=q.sd['$$$']
  //console.log(data)
  let re={}
  re.cmdlinesplit=/((\[\[\[(?:.*?)\]\]\])|(\{\{\{(?:.*?)\}\}\})|(>>>(?:.*?)>>>))|([^ ]+)/g //add the set back >>> cmd a b >>>

  //let x=d.macro.map(d=>d.match(re.cmdlinesplit)||[])
  //console.log(x)
  return q
 }
 q.addon(300,'mac',mac)
 
})(quest);
