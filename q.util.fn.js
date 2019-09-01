//document element utility
;(function(fn){
 ;
 function i3(d,doc=document){
  if(typeof d !=='string') return d
  var el=doc.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
 }
 function fr(html='',doc=document){
  let flg = (typeof 'html' === 'string')
  ,e= (flg)?doc.createElement('table'): html||doc.createElement('table')
  ,fr=doc.createDocumentFragment()
  ;
  if(flg) e.innerHTML= html||'';
  ;[].slice.call(e.childNodes).forEach(d=>fr.appendChild(d))
  return fr;
 }
 ;
 fn.i3=i3
 fn.fr=fr
 fn.cfr=(doc=document)=>{return doc.createDocumentFragment()}
 fn.empty=(el)=>{while( el.firstChild ){el.removeChild( el.firstChild )} return el} 
 fn.g=(s,doc=document)=>{return doc.getElementById(s)};
 fn.gc=(s,doc=document)=>{return doc.getElementsByClassName(s)}
 fn.q=(s,doc=document)=>{return doc.querySelector(s)};
 fn.qa=(s,doc=document)=>{return [].slice.call(doc.querySelectorAll(s))}
 fn.r=(d)=>{return d.parentNode.removeChild(d)}
 fn.ce=(d,doc=document)=>{return doc.createElement(d)}
 fn.a2=function(me,p){p.appendChild(me);return me}
 fn.p2=function(me,p){p.insertBefore(me,p.firstElementChild/*p.firstChild*/); return me}
 fn.as2=function(me,p){p.parentNode.insertBefore(me,p.nextElementSibling/*nextSibling*/);return me}
 fn.ps2=function(me,p){p.parentNode.insertBefore(me,p);return me}
 ;
 fn.dde=(on,fn,cap)=>document.documentElement.addEventListener(on,fn,cap)

 /**/
 fn.nulltoX00=(d)=>{return (d)?d:'X00'}
 ;
 fn.p1x1=function p1x1(c,w,h){
  //ex) red or #f00 or #f005 or #ff0000 or #00000000 or transparent
  let canvas=/*document.createElement*/fn.ce('canvas'),ctx=canvas.getContext('2d')
  ;
  canvas.width=w||1
  canvas.height=h||1
  ctx.fillStyle=c||"#000000"
  ctx.fillRect(0,0,canvas.width,canvas.height)
  ;
  return canvas.toDataURL("image/png") //output
 }
 ;
 const imax=Number.MAX_SAFE_INTEGER - (Number.MAX_SAFE_INTEGER%10)
 fn.safetick=(d)=>{return (d===imax)?1:(++d)}
 fn.get4=(d)=>d.charAt(3) //MTH ch tar add jmp 
})(this);

