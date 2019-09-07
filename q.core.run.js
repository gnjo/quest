/*history
v1.0 make code
v1.1 clr
v1.2 def
v1.3 man
v1.4 cmd
*/
//call quest
;(function(root){
 root.quest=runner({cmds:{},mans:{},pipe:''})
})(this);
//clr
;(function(q){
 let entry=function(){
  q.md={}
  q.sd={}
  q.db={}
  //console.log(q)
  return q;
 }
 q.addon(100,'clr',entry)
})(quest);

//def
;(function(q){
 let entry=function(cmd,fn,man){
  if(!cmd)return;
  if(!fn)return;
  q.mans[cmd]=man||cmd+" //: man command Nothing" //command help
  q.cmds[cmd]=fn//all command definitions
  //console.log('defined ',mdm.md.cmds,cmd)
  return q;
 }
 q.addon(void 0,'def',entry)
})(quest);

//man
;(function(q){
 //command help to return value.
 let entry=function(cmd){
  if(!cmd)return _.keys(q.mans).map(k=>q.mans[k]).join('\n')
  if(!q.mans[cmd])return cmd+'//: command not defined!'
  return q.mans[cmd]
 }
 q.addon(void 0,'man',entry)
})(quest);

//cmd done
;(function(q){
 let entry=function(cmd,ary){
  if(!cmd)return;
  try{
   q.sd['$00']=q.cmds[cmd].apply(q/*null*/,ary||[])
   //bug fix
  }catch(e){
   //cmd call error
   q.sd['$00']=void 0;
   console.error(e,q.sd['$$$'])
  }finally{
   return q.sd['$00']
  }
  //return mdm;
 }
 q.addon(void 0,'cmd',entry)
})(quest);

/*example
;(function(q){ 
 q.def('FOO',(cmd,ch,a,b,c)=>{
  return ''
 },'FOO //:test FOO')
})(quest);
*/
