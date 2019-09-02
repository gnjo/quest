 //red
 let red=function(_str){
  if(!_str)return;
  //mdm.md.readblock=1;
  let re={}
  re.cmdlinesplit=/((\[\[\[(?:.*?)\]\]\])|(\{\{\{(?:.*?)\}\}\})|(>>>(?:.*?)>>>))|([^ ]+)/g //add the set back >>> cmd a b >>>
  re.wrapjs=/^\{\{\{/
  re.wrapstring=/^\[\[\[/
  let str=_str
  ,ary=str.match(re.cmdlinesplit)||[] //str.split(' ').slice(1)
  ,cmd=ary[0]
  ;
  //[[[ and {{{ is special command %$xx changeed 
  //wrap case quick return
  if(re.wrapjs.test(str)&&(q.cmds['{{{'])){
   q.cmd('{{{',[fn.trimwrap(str)])
   return;
  }
  if(re.wrapstring.test(str)&&(q.cmds['[[['])){
   q.cmd('[[[',[fn.trimwrap(str)])
   return;
  }
  //do the oneline
  ary=ary.map((d,i)=>{
   if(i===0)return d;
   if(re.wrapstring.test(d)&&(q.cmds['[[['])){
    let a= q.cmd('[[[',[fn.trimwrap2(d)])
    return q.sd['$00']
   }
   if(re.wrapjs.test(d)&&(q.cmds['{{{'])){
    q.cmd('{{{',[fn.trimwrap2(d)])
    return q.sd['$00']
   }
   return d;
  })
  //other command case
  //console.log(mdm.md.cmds,mdm.md.cmds[cmd],cmd,ary)
  //console.log(q.cmds[cmd])
  if(q.cmds[cmd]) q.cmd(cmd,ary)
  return;
  //mdm.md.readblock=0;
 } 
 q.addon(void 0,'red',red)
