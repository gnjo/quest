/*history
v1.0 maked
v1.1 test url-> https://codepen.io/gnjo/pen/BaBdqQR
v1.2 hb: head bar
v1.3 change place https://gnjo.github.io/quest/q.util.xxx.js
v1.4 method delete head x. xrole->role xset->set
*/
;(function(root){
 let fn={}
 fn.q=(s,doc=document)=>{return doc.querySelector(s)};
 fn.gcs=(d)=>window.getComputedStyle(d)
 fn.r=(d=>d.parentNode.removeChild(d))
 fn.a2=function(me,p){p.appendChild(me);return me} 
 fn.i3=(d)=>{
  if(typeof d !=='string') return d
  var el=document.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
 } 
 ;
 function xrole(query,_role,_w,_h){
  let q=fn.q//(d)=>document.querySelector(d)
  let gcs=fn.gcs//(d)=>window.getComputedStyle(d)
  let f=(d)=>d+'px'
  let op="fl,hb,tb,cb,bb,rs,rx,ls,lx"
  //fl :full layer
  //hb :head bar
  //tb :top bar
  //cb :center bar
  //bb :bottom bar
  //rs :right stand
  //rx :right stand big
  //ls :left stand
  //lx :left stand big
  let style={}
  ,tar=q(query)
  ,ary=op.split(',')
  ,role=ary.some(d=>d===_role)?_role:'fl'
  ,rw=parseFloat(_w||gcs(tar.parentElement).width)*0.1
  ,rh=parseFloat(_h||gcs(tar.parentElement).height)*0.1
  ,fs=parseFloat(gcs(tar.parentElement).fontSize||'16px')
  //console.log(rw,rh,fs)
  //3:7
  if(role==='fl')style={width:f(rw*10),height:f(rh*10),top:0,left:0}
  if(role==='hb')style={width:f(rw*10),height:f(rh*1),top:0,left:0}  //v1.2
  if(role==='tb')style={width:f(rw*10),height:f(rh*3),top:f(rh*1),left:0}
  if(role==='cb')style={width:f(rw*10),height:f(rh*3),top:f(rh*4),left:0}
  if(role==='bb')style={width:f(rw*10),height:f(rh*3),top:f(rh*7),left:0}
  if(role==='rs')style={width:f(rw*3),height:f(rh*10),top:0,left:f(rw*7)}
  if(role==='rx')style={width:f(rw*7),height:f(rh*10),top:0,left:0}
  if(role==='ls')style={width:f(rw*3),height:f(rh*10),top:0,left:0}
  if(role==='lx')style={width:f(rw*7),height:f(rh*10),top:0,left:f(rw*3)}

  // fl,tb,cb,bb,rs,rx,ls,lx
  if(!(role==='fl'))style.padding=`${fs/2}px ${fs}px`
  //20rings buffer 21
  if( (['tb','cb','bb'].some(d=>d===role))&&rw*10>fs*21 )style.padding=`${fs/2}px ${(rw*10-fs*21)/2}px`
  
  if(['cb','hb'].some(d=>d===role))style.textAlign='center'
  style.position='absolute'
  style.boxSizing='border-box'
  style.overflow='hidden'

  Object.assign(tar.style,style)
  return tar
 }
 function xset(query,_w,_h,_fs){
  let q=fn.q//(d)=>document.querySelector(d)
  ,f=(d)=>d+'px'
  ,fs=parseFloat(_fs)
  ,w=parseFloat(_w)
  ,h=parseFloat(_h)
  let style={}
  ,tar=q(query)
  ;
  style={width:f(w*fs),height:f(h*fs),position:'relative',/*fontSize:fs+'px'*/font:_fs}
  style.boxSizing="border-box"

  style.whiteSpace="pre-wrap"
  style.wordBreak="break-all"

  Object.assign(tar.style,style)
  return tar
 }
 ;
 function entry(alive,w,h,fs){
  if(!fn.q(alive))return console.warn('query not alive.')  
  let o={}
  o.parent=fn.q(alive)
  /*o.xrole -> o.role*/
  o.role=(query,_role,_w,_h)=>{
   if(!fn.q(query,o.parent)){
    let el=fn.i3(`<div class="${query.replace(/\./g,' ')}"></div>`)
    fn.a2(el,o.parent)
   }
   return xrole(query,_role,_w,_h);
  }
  /*o.xset -> o.set*/
  o.set=(query,_w,_h,_fs)=>{
   /*if(!fn.q(query)){
    let el=fn.i3(`<div class="${query.replace(/\./g,' ')}"></div>`)
    fn.a2(el,document.body)
   }*/
   return xset(query,_w,_h,_fs);
  }
  ;
  o.xset(alive,w,h,fs)
  return o;
 }
 root.xxx=entry;
})(this);
/*
//"fl,tb,cb,bb,rs,rx,ls,lx" and hb
let x=xxx('.x',30,20,'14px/1.0 consolas,monospace')
let mes=x.role('.y','bb')
let cb=x.role('.z','cb')
cb.textContent='保存しますか？\nはい　\nいいえ'
*/
