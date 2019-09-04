/*
 https://gnjo.github.io/lcr/lcr.css?v=21
 https://gnjo.github.io/lcr/lcr.js?v=21
 https://gnjo.github.io/use.js?v=21 
 script(src="https://gnjo.github.io/interceptor/interceptor.js?v=1") 
 script(src="https://gnjo.github.io/keyCmd/keyCmd.js?v=21")
 script(src="https://gnjo.github.io/filter.js?v=21")
 script(src="https://gnjo.github.io/imgc.js?v=21") 
 script(src="https://gnjo.github.io/imageReader.js?v=21")
 script(src="https://gnjo.github.io/getTogist.js?v=21")
 script(src="https://gnjo.github.io/ea/ea.js?v=21")


*/
/*history
 v1.0 bugfix 
*/
;(function(root){
 let fn={}
 fn.i3=(d)=>{
  if(typeof d !=='string') return d
  var el=document.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
 }
 fn.q=(s,doc=document)=>{return doc.querySelector(s)}
 fn.deep=d=>JSON.parse(JSON.stringify(d));
 fn.clone=fn.deep;
 fn.fr=function(html=''){
  let flg = (typeof 'html' === 'string')
  ,e= (flg)?document.createElement('table'): html||document.createElement('table')
  ,fr=document.createDocumentFragment()
  ;
  if(flg) e.innerHTML= html||'';
  ;[].slice.call(e.childNodes).forEach(d=>fr.appendChild(d))
  return fr;
 }
 fn.empty=(el)=>{
  while( el.firstChild ){el.removeChild( el.firstChild )}
  return el
 }
 ;
 let is={}
 is.element=function(o){return !!(o && o.nodeType === 1)}
 is.string = function(obj){return toString.call(obj) === '[object String]'} 
 ;
 function sizer(){
  let w=document.documentElement.getBoundingClientRect()
  ,r=fn.clone(document.body.getBoundingClientRect())
  Object.assign(document.body.dataset,r)
  ;
  let left=fn.q('#left')
  ,right=fn.q('#right')
  ,alive=(left&&right)
  ;
  if(!alive)return
  ;
  right.style.width=(w.width - r.right)+'px'
  right.style.left=r.right+'px'
  left.style.width=r.left+'px'
 }
 ;
 function entry(l,c,r){
  var o={}
  if(l&&c&&r){
   document.body.style.marginLeft=l
   document.body.style.width=c
   document.body.style.marginRight=r
  }else{
   document.body.style.width=l//old version   
  }
  let isload=document.body.dataset.lcr
  if(isload){
   o.c=fn.q('#center>.wrap')
   o.l=fn.q('#left>.wrap')
   o.r=fn.q('#right>.wrap')
   return o;
  }
  ;
  document.body.dataset.lcr=true;
  o.c=fn.i3(`<div id="center"><div class="wrap"></div></div>`)
  o.l=fn.i3(`<div id="left"><div class="wrap"></div></div>`)
  o.r=fn.i3(`<div id="right"><div class="wrap"></div></div>`)
  ;[o.c,o.l,o.r].map(el=>document.body.appendChild(el))
  o.c=fn.q('.wrap',o.c)
  o.l=fn.q('.wrap',o.l)
  o.r=fn.q('.wrap',o.r)
  window.addEventListener('resize',sizer)
  sizer()
  ;
  o.sethtml=(html,target)=>{
   let el=is.element(target)?target:void 0
   if(target==='l'||target==='left') el=o.l
   if(target==='r'||target==='right') el=o.r
   if(target==='c'||target==='center') el=o.c
   if((!el)) el=document.querySelector(target)
   if(!el)return console.log('target empty=>sethtml')
   fn.empty(el)
   return el.appendChild(fn.fr(html))
  }
  return o;
 }
 root.lcr=entry
 /*usage
 let obj=lcr('54rem');
 let obj=lcr('auto','54rem','15rem');
 obj.l.style.background="blue"
 obj.c.style.background='white'
 obj.r.style.background='orange'
 obj.sethtml('<div style="background:orange">xyz</div>','c')
 */
})(this);

/*****/
/* script onload="use(this)" src="//gnjo.github.io/use.js?q=monocc.css"> */
/*history
v0 start
v1 add some...
v2 add fn.cmd
v3 usage change
v4 isWideImage
v4.1 changeAttr
v5 including the deth
v5.1 changeAttr changeDom diff; updateAttr updateDom short fn.ua fn.ud
v6 fn.upi imgur
v6.1 fn.scv2 offset version
v7 able the prepack
v8 fn.empty fn.base64type
v9 fn.interval option the random delay
v9.1 fn.getparam fn.gp fn.getParam
v10 fn.sleep fn.rtrim fn.rsleep
v10.1 fn.fitw fn.fith
v10.2 fn.basic
v10.3 fn.serializer fn.serialize
v10.4 fn.deep fn.clone //deepcopy method
v11 fn.p1x1 //1x1 png color
v12 fn.bigmath
*/
;(function(root){
  if(root._) return;
  var _={}; 
/*original by underscore.js*/
//line 1457
  _.now = Date.now || function() {
    return new Date().getTime();
   };
//line 850
 _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
 //line 883
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  root._ =_;
})(this);
/**/

function use(el){
 var v=el.src;
 var data= v.match(/(.+)\?.+=(.+)$/)||v.match(/(.+)\?(.+)$/);
 if(data){data=data.slice(1);}
 else{console.error('adds file not'); return}
 var baseurl =data[0].slice(0, data[0].lastIndexOf('/')+1 );

 var target =document.createElement('span');
 target.style.display='none';
 el.parentNode.insertBefore( target , el.parentNode.firstElementChild); 

 var ary = data[1].trim().split('|');
 ary.forEach((d)=>{
  var url=d.split('?')[0];

  if(~url.indexOf('.js')){
   var el= target.appendChild( document.createElement('script') );
   el.src=baseurl+d;
  }else if(~url.indexOf('.css')){
   var el = target.appendChild( document.createElement('link') );
   el.setAttribute('rel','stylesheet');
   el.setAttribute('href',baseurl+d);  
  }
 })
}
/**/

var localStorage=this.localStorage||window.localStorage
;
var fn=this.fn||{},is=this.is||{}
/*fn.i3=(d)=>{
 if(typeof d !=='string') return d
 var el=document.createElement('table'); el.innerHTML=d.trim();
 return el.childNodes[0];
}*/
fn.i3=(d)=>{
 if(typeof d !=='string') return d
 var el=document.createElement('table'); el.innerHTML=d.trim();
 var me=el.childNodes[0]
 el=void 0;
 return me
}
fn.empty=(el)=>{
  while( el.firstChild ){el.removeChild( el.firstChild )}
  return el
}
fn.g=(s)=>{return document.getElementById(s)};
fn.q=(s,doc=document)=>{return doc.querySelector(s)};
fn.qa=(s,doc=document)=>{return [].slice.call(doc.querySelectorAll(s))}
fn.r=(d=>d.parentNode.removeChild(d))
fn.ce=(d=>document.createElement(d))
fn.range=(l=0)=>{return Array.from({length:l})}
fn.urlcnk=(u)=>{
 let cep = /.+\?/.test(u)? '&' :'?',v =`__${performance.now()}__=`.replace('.','')
 return u + cep + v + Date.now()
}
fn.choiceone=(o,name,v=true)=>{ Object.keys(o).map(d=>{ o[d]=(d===name)?v:!v });return o}

fn.rhash=()=>{return Math.random().toString(36).slice(-8)}
fn.timeToOrder=(time)=>{return 2147483647 - parseInt( time/1000 )}
fn.hashCode =(s)=>{var h=0;for(var i=0;i < s.length; i++) h = h * 31 + s.charCodeAt(i)|0;return h}
fn.mic12 =(s)=>{var d= fn.hashCode('GGGGGG'+s),a =d.toString(16).slice(-6);return a+a}
fn.hash12=(s)=>{
  let rec=((k,v)=>(toString.call(v)==="[object Function]")?v.toString():v)
  ,a=fn.hashCode(toString.call(s)+JSON.stringify(s,rec)).toString(16).slice(-6);
  return a+a;
}
fn.gistdesc =(u)=>{return new Date().toISOString().slice(0,"YYYY-MM".length) +'-'+fn.mic12(u)}
fn.gistinfo=(r)=>{
 let ma =/https:\/\/gist.githubusercontent.com\/(.+)\/(.+)\/raw\/(.+)\/(.+)$/
 ,a=r.match(ma)
 ;
 return {url:r,user:a[1],id:a[2],filename:a[4]}  
}
fn.scv=(el,type='top')=>{
 if(type=='top') return el.scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest" })
 if(type=='bottom') return el.scrollIntoView({ behavior: 'smooth',block: "end", inline: "nearest" })
 /*if(type=='center')*/ return el.scrollIntoView({ behavior: 'smooth'}) 
}
//offset version px
fn.scv2=(el,_offset)=>{
 if(!el) return console.log('element empty fn.scv2')
 const element = el
 ,offset = parseInt(_offset)||0
 ,bodyRect = document.body.getBoundingClientRect().top
 ,elementRect = element.getBoundingClientRect().top
 ,elementPosition = elementRect - bodyRect
 ;
 const offsetPosition = elementPosition - offset;
 window.scrollTo({top: offsetPosition,behavior: 'smooth'});
}

fn.menum=(me,q)=>{let num=-1;[].slice.call(document.querySelectorAll(q)).forEach((d,i)=>{if(d === me) num = i});return num}

fn.cmd=function(imap){return function(ev){
 if(!((ev.ctrlKey||ev.metaKey)&&imap[ev.keyCode])) return
 ev.preventDefault();return imap[ev.keyCode].call(this,ev);
}};

fn.lay=(q,flg)=>{
  var o={},t='lay',qt='[lay]',el=(!!(q && q.nodeType === 1))?q:document.querySelector(q)
  o.el =(flg)?el.cloneNode(true):el;
  ;[].slice.call(o.el.querySelectorAll(qt)).forEach(d=>{o[d.getAttribute(t)]=d});
  return o;
 }

fn.sq=(d,opt=2)=>{
 let f=(d)=>{return (d)?[
   d.tagName.toLowerCase()
   ,(d.classList.length!=0)?'.'+[].slice.call(d.classList).join('.'):''
   ,(d.id&&d.id!='')?('#'+d.id):''
   ,(d.name)?`[name="${d.name}"]`:''
  ].join(''):null;
 }
 ,now=d
 ;return Array.from({length:opt})
  .map((d,i)=>{now= (now)?(i===0)?now:now.parentElement:null;return now})
  .map(d=>f(d)).filter(d=>d).reverse().join('>')
 ;
}
 is.imgurl=(d)=>{return /(.+:\/\/.+\.jpeg)|(.+:\/\/.+\.png)|(.+:\/\/.+\.jpg)/i.test(d)}
 
 fn.biglex=(d)=>{
  return d.split('\n＃').map((d,i)=>(i===0)?d:'＃'+d)
 } 
 
 fn.lex=(str)=>{
  let title='',url='',line=0,c=44;
  let a =str.split('\n').forEach((d)=>{
   if( d.charAt(0) === '＃' ) title = d;
   else if(d.charAt(0) === '＠' && is.imgurl(d.slice(1))) url =d.slice(1);
   line += Math.ceil((d.length+0.1)/c)
  });
  return {t:title,u:url,l:line,s:str}
 }
 
fn.i=function(html,f,doc=document){
 var _f =(f)?f:(el)=>{return el};
 if(typeof html !=='string') return _f(html);
 //
 var el=doc.createElement('table');
 el.innerHTML=html.trim();
 var me=el.childNodes[0];
 return _f(me);
}

fn.i2=function(html,attr,style,doc=document){
 var f=(s)=>{var el=doc.createElement('table');el.innerHTML=html;return el.childNodes[0]}
 var me = (typeof html !=='string')? html:f(html);

 if(attr){
  Object.keys(attr).forEach((d)=>{ 
   if(typeof attr[d] !=='string'|| d in me) me[d]=attr[d];
   else me.setAttribute(d,attr[d]) 
  });
 }
 if(style){
  var st=doc.createElement('style');
  st.innerHTML = style;
  me.appendChild(st);
 }
 console.log(me)
 return me;
}

fn.rnum=(l=8)=>{
 var c = "123456789";//0を含めない方が都合が良い
 var cl=c.length;
 var r = "";
 for(var i=0; i<l; i++){
  r += c[Math.floor(Math.random()*cl)];
 } 
 return r;
};
fn.rword=(l=8)=>{
 var c = "abcdefghijklmnopqrstuvwxyz0123456789",cl=c.length,r = "";
 for(var i=0; i<l; i++) r += c[Math.floor(Math.random()*cl)];
 return r;
}
fn.rkana=(l=8)=>{
 var c = "bcdfghjklmnpqrstvwxyz",cl=c.length,b ="aiueo",bl=b.length,r=""
 ,mf=Math.floor,mr=Math.random
 ;for(var i=0;i<l;i++) r+=(i%2)? b[mf(mr()*bl)]:c[mf(mr()*cl)].toUpperCase();
 return r;
}
fn.aoimport=(d)=>{return d.replace(/［＃改ページ］\n　/g,'＃').replace(/［.+］/g,'');}

if(this.md5){ 
 var hashColor=((s)=>{ return '#'+md5(s).slice(0,6) });
 fn.hashColor=hashColor;
}
if(this.invert) fn.invertColor=invert;

fn.isJSON =function(d){ try{JSON.parse(d);return true}catch(e){return false} }

if(localStorage){
 fn.loId ='__loId__'; //project every change
 fn.loSave=(d,i=null)=>{var id=i||fn.loId;localStorage.setItem(id, JSON.stringify(d) ); return id}
 fn.loLoad =(i)=>{var id=i||fn.loId;var d=localStorage.getItem(id); return JSON.parse(d) }
 fn.loRemove=(i)=>{var id=i||fn.loId;localStorage.removeItem(id)}
}

//createDocument
fn.cd= function(markup, type='text/html') {
 //if (/^\s*text\/html\s*(?:;|$)/i.test(type)) 
 var doc = document.implementation.createHTMLDocument("");
 if (~markup.toLowerCase().indexOf('<!doctype') ) doc.documentElement.innerHTML = markup;
 else doc.body.innerHTML = markup;
 return doc;
};

fn.fragment =function(u,tt='body'){
 return new Promise((sol)=>{
  var f=fn.cd;
  //"Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*",
  var h={'content-type':'text/plain'};
  fetch(u,{method:'get',mode:'cors',headers:h})
   .then(d=>d.text())
   .then(text=>f(text))
   .then(doc=>doc.querySelector(tt))
   .then(el=> sol(el) )
 })
};

fn.debug=(o)=>{return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertyNames(o.__proto__))}
//console.log(fn.debug(Math))
fn.check=(s)=>{try{return{s:s,o:new Function(';return '+s)()} }catch(e){return{s:s,o:null,error:e.message} }}

fn.pad=( (d,l)=>('000000000000000000'+d).slice(-1*l));
fn.rotation=(a,v,l)=>{a.unshift(v);a.splice(l);return a};

fn.hash =function(str){return str.split('').map(d=> d.charCodeAt(0).toString(16) ).join('')}
fn.fr=function(html=''){
 let flg = (typeof 'html' === 'string')
 ,e= (flg)?document.createElement('table'): html||document.createElement('table')
 ,fr=document.createDocumentFragment()
 ;
 if(flg) e.innerHTML= html||'';
 ;[].slice.call(e.childNodes).forEach(d=>fr.appendChild(d))
 return fr;
}

fn.rename =function(name,count=1){
 var join =`_${count}`;
 return (~name.indexOf('.'))? name.replace(/(.*)(\.)/,`$1${join}$2`) : `${name}${join}`;
}

fn.jpTime=(timestamp=Date.now())=>{
 return new Date(timestamp+1000*60*60*9)
  .toISOString()
  .replace(/-/g,'/')
  .replace('T',' ')
  .slice(0,'YYYY/MM/DD hh:mm'.length)
 ;
} 
fn.now =function(time){
 /*add local time jp*/	 
 if(time=='jp'||time=='jpn') return new Date( Date.now()+ 1000*60*60*9  ).toISOString().split('.')[0] +'Z'
 if(time) return new Date(time).toISOString().split('.')[0] +'Z';
 else return new Date( Date.now() ).toISOString().split('.')[0] +'Z';
}

fn.toBlob =function(base64) {
 let ma = /^data:(.*);base64,(.*)$/
 ;
 if(!ma.test(base64)){ console.log('error base64 data'); return null}

 let ary = base64.match(ma)  //[0] base64, [1] type, [2] body
 ,type = ary[1]
 ,bin = atob(ary[2])
 ,buffer = new Uint8Array(bin.length).map( (d,i)=>{return bin.charCodeAt(i)})
 ,blob = new Blob([buffer.buffer], {type: type})
 ;
 return blob;
 //var debug = {hello: "world"};
 //var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
 //data:image/png;base64,... 
}

fn.base64type=(base64)=>{
 let re=/^data:(.+);base64,/
 ,dummy="data:application/shockwave-flash;base64,/9j/4A"
 ,dump=base64.trim().slice(0,dummy.length)
 ;
 if(!re.test(dump)) return void 0;
 return dump.match(re).slice(1,2).join('')
}

fn.copy=function(textVal){
 var copyFrom = document.createElement("textarea");
 copyFrom.textContent = textVal;
 var bodyElm = document.getElementsByTagName("body")[0];
 bodyElm.appendChild(copyFrom);
 copyFrom.select();
 var retVal = document.execCommand('copy');
 bodyElm.removeChild(copyFrom);
 return retVal;
}

fn.gsl=(()=>window.getSelection().toString())
fn.gsl2=(el=>{
 let data = (el.value)?el.value:el.textContent;
 return data.slice(el.selectionStart,el.selectionEnd)
})
fn.pnt2=(str)=>{document.execCommand('inserthtml',false,str)}
fn.pnt=(str)=>{document.execCommand('inserttext',false,str)}
fn.paste=function(target, str){
 //if target have textarea or input, to focus and paste the str.
 let obj = target;
 obj.focus();
 if(navigator.userAgent.match(/MSIE/)){
  let r = document.selection.createRange();
  r.text = str;
  r.select();
 }else{
  let s = obj.value
  ,p = obj.selectionStart
  ,np = p + str.length
  ;
  obj.value= (s.substr(0, p) + str + s.substr(p));
  obj.setSelectionRange(np, np);
 }
}

fn.mes = (q,limit=15)=>{
 var el =document.querySelector(q)
 ,now = (time)=>{
  if(time) return new Date(time).toISOString().split('.')[0] +'Z';
  else return new Date( Date.now() ).toISOString().split('.')[0] +'Z';
 }
 ,rotation =(a,v,l)=>{a.unshift(v);a.splice(l);return a}
 ,stock =[]
 ;
 return function(str){
  let time = now().match(/T.*:(.*:.*)Z$/).slice(1)[0]
  ,mes = `${time}=>${str}`
  rotation(stock,mes,limit);
  el.innerText =stock[0];
  el.setAttribute('title',stock.join('\n'));
 }
 //usage:
 //var mes =fn.mes('#cm');
 //mes('xyz')
 //3e1105122428b873252c5cb4f05772b67a1f8077
}

;
fn.dragger=(el,caller)=>{

 var dnd=(caller=>function(ev){
  let type=ev.type,mark ='drag'  //mark is .drag the custom class
  ;
  if(type!='paste'){
   ev.stopPropagation();
   ev.preventDefault();
  }
  if(type==='drop'||type==='paste'){
   //this paste hack, allow the chrome only.
   const flg= (type==='paste')
   ,files=(flg)?ev.clipboardData.items:ev.target.files||ev.dataTransfer.files
   ;
   ;[].slice.call(files)
   //.filter(f=>f.type.match('*.*')) 
   //.slice(0,10) //10 is limit
    .map((f)=>{
    let r=new FileReader(); 
    r.onloadend=(function(f){return function(ev){
     ev.target.file=f/**/ ;
     caller(ev)
    };
                            })(f);

    if(flg&&f.kind ==='string'){
     var _f=JSON.parse(JSON.stringify({kind:f.kind,type:f.type}))
     return f.getAsString(function(str) {
      ev.target.result=str; ev.target.file=_f; caller(ev);
     });
    }    
    r.readAsDataURL((flg)?f.getAsFile():f); 
   })
   ;
   this.classList.remove(mark)
   return;
  }     
  if(type==='dragover'){ this.classList.add(mark);ev.dataTransfer.dropEffect = 'copy';return}
  if(type==='dragleave'){ this.classList.remove(mark);return}
 })

 var _dnd=dnd(caller)
 ;['onpaste','ondragover','ondrop','ondragleave'].forEach(d=>el[d]=_dnd)
 return el; 
 /*usage
document.body.set({'contenteditable':'plaintext-only'})
fn.dragger(document.body,(ev)=>{
 console.log(ev,ev.target.result,ev.target.file)
}) 
 */

}

fn.shuffle=(a)=>{
 for(let i = a.length - 1; i > 0; i--){
  let r = Math.floor(Math.random() * (i + 1)),t = a[i]
  ; a[i] = a[r]; a[r] = t;
 }
 return a;
}

fn.isWideImage=(img)=>{
 let w=img.naturalWidth
 ,h=img.naturalHeight
 return (w>h)?true:false;
}
fn.isBoxImage=(img)=>{
 let w=img.naturalWidth
 ,h=img.naturalHeight
 ,x=Math.max(w,h)
 ,r=(1-0.619)/2,flg=Math.abs(w-h)<x*r
 return (flg)?true:false
}

fn.updateAttr=function(el,attr,caller,time,flg){
 if(!el) return
 let target=el
 ,_caller=_.debounce(caller,time||70)
 ,def={attributes: true,attributeOldValue:true,attributeFilter:[attr]}
 ,config=(flg)?Object.assign({},def,{subtree:true}) :def
 ,calc=(ev)=>{
 if(ev.attributeName===attr){
  let newValue=ev.target.getAttribute(attr),oldValue=ev.oldValue
  if(ev.oldValue!=newValue)
    _caller({target:ev.target,newValue:newValue,oldValue:oldValue,attr:attr})
  }
 }
 ,ob=new MutationObserver(mu=>{ mu.map(calc)})
 ob.observe(target,config)
 ;
 return ob;
 /*usage
let s=fn.q('.story')
fn.changeAttr(s,'data-length',(e)=>{
 console.log(e)
},700,false)
//true is watch the subtree
//textContent value tips
div.story(contenteditable="plaintext-only" onkeydown="this.dataset.length=this.textContent.length")
input.x(onkeyup="this.setAttribute('value',this.value)")
input.y(type="range",onchange="this.setAttribute('value',this.value)")
*/
}
fn.ua=fn.changeAttr=fn.updateAttr
;

fn.updateDom=function(el,caller,time,flg){
 let target=el
 ,_caller=_.debounce(caller,time||70)
 ,def={childList:true}
 ,config=(flg)?Object.assign({},def,{subtree:true}) :def
 ,calc=(ev)=>{
    _caller(ev)
 }
 ,ob=new MutationObserver(mu=>{ mu.map(calc)})
 ob.observe(target,config)
 ;
 return ob;
 /*usage
fn.changeDom(document.body,(e)=>{
 console.log(e)
},70)

function x(){
 let el=s.cloneNode(true)
 el.a2(document.body)
} 
//true is watch the subtree
*/
}
fn.ud=fn.changeDom=fn.updateDom
;
fn.diff=(arr1, arr2)=>{
   return arr1.concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

fn.upImgurNum=0
fn.upImgur=function(base64,cid){
 //base64 is data:image/jpeg...,....
 let cidary=['c552bf3081f0790','59412b24cbb03ea','62b4efa067f48c6','e52d5cb6956574f']
 ,num=fn.upImgurNum
 let blob = fn.toBlob(base64)
 ,c = cid||cidary[num]
 ,formData = new FormData()
  formData.append('type', 'file')
  formData.append('image', blob)

  return fetch('https://api.imgur.com/3/upload.json', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Client-ID ${c}` // imgur specific
    },
    body: formData
  })
   .then(d=>d.json())
   .catch(d=>{
    num++;
    fn.upImgurNum= num%cidary.length
    console.log('new cid>',cidary[fn.upImgurNum])
    return d;
  })
}
/*
fn.upImgur=function(base64,cid){
 //base64 is data:image/jpeg...,....
 let blob = fn.toBlob(base64)
 ,c = cid||'c552bf3081f0790'
 ,formData = new FormData()
  formData.append('type', 'file')
  formData.append('image', blob)

  return fetch('https://api.imgur.com/3/upload.json', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Client-ID ${c}` // imgur specific
    },
    body: formData
  })
   .then(d=>d.json())
}
*/
fn.upi=fn.upimage=fn.upImage=fn.upimgur=fn.upImgur;

fn.deleteMe=function(el){
 let is={}; 
 is.element=function(o){return !!(o && o.nodeType === 1)}
 ;
 if(!is.element(el)){
  console.log('delemteMe not element',el)
  return el;
 }
 el.setAttribute('tabindex','-1') //interactive-able
 el.style.outline='none'
 el.onkeydown=(e)=>{
  if(e.which===46) e.target.remove();//46 delete
 }
 return el;
} 
;
fn.num=(s,_def)=>{
// if(!_def) console.warn('not default value(fn.num)')
 let def=_def||0
 return isNaN(parseInt(s,10))?def:parseInt(s,10)
 /*usage
let s='eeeeee'
let a=fn.num(s,0) //0 
 */
}

fn.interval=(t,caller,range)=>{ 
 let clearid=setInterval(()=>{
  let r=Math.ceil(Math.random()*(range||0))
  setTimeout(()=>{caller(clearid)},r)
 },t||0);
 /*usage
fn.interval(2000,(id)=>{
 //clearInterval(id)
},100) 
 */
}

  fn.getparam=(key,url)=>{
   let re=new RegExp('^'+key+'=')
   return url.split('?').pop().split('&').filter(d=>re.test(d)).join('').split('=').pop()
   /*usage
  console.log(fn.getparam('id',url))   
   */
  }
  fn.gp=fn.getParam=fn.getparam;

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

fn.sleep=t=>new Promise(d=> setTimeout(d,t));
fn.rtrim=s=>s.replace(/\s+$/,"")
fn.rsleep=(min=70)=>{
 let time=min+~~(Math.random()*min)
 return fn.sleep(time)
}

fn.fitw=(p,c)=>{
  let r=p.getBoundingClientRect()
  c.style.width=r.width+'px'  
}
fn.fith=(p,c)=>{
  let r=p.getBoundingClientRect()
  c.style.height=r.height+'px'
}

fn.defaultkey='system2019'
fn.save=(_d,_d1)=>{
 let key=fn.defaultkey,data=_d;
 if(_d1){ key=_d;data=_d1}
 data=JSON.stringify(data)
 localStorage.setItem(key,data)
 return key;
}
fn.load=(_d)=>{
 let is={}
 is.jsonString =function(d){ try{JSON.parse(d);return true}catch(e){return false} } 
 let key=fn.defaultkey
 if(_d)key=_d;
 let data=localStorage.getItem(key)
 data=is.jsonString(data)?JSON.parse(data):data
 return data 
}
fn.basic =(u,p)=>{
 let _btoa =function(str){return btoa( unescape(encodeURIComponent( str )) )}
 return `Basic ${_btoa(u +':' +p)}`
}
fn.authstring=fn.basic
fn.serialize=(_els,_bs)=>{//elements,blacklists ary,ary
  let is={}
  is.array = Array.isArray || function(obj){return toString.call(obj) === '[object Array]'}
  ;
  if(!_els)return console.log('elements null')
  let els=is.array(_els)?_els:[_els]
  ,bs=(!_bs)?[]:is.array(_bs)?_bs:[_bs]
  ,f=(data)=>{
   return Object.keys(data)
    .filter(d=>!bs.find(a=>a===d)).map(d=>{return{[d]:data[d]}})
    .reduce((a,b)=>Object.assign(a,b),{})
  }
  ;
  bs=bs.map(d=>d.replace('data-',''))  
  return els.map(d=>d.dataset).map(data=>f(data))
   .reduce((a,b)=>Object.assign({},a,b),{})
 }
fn.serializer=fn.serialize
 /*usage
 //pug
 body
  .a(data-a="aaa" data-b="bbb" data-c="ccc")
  .b(data-d="ddd" data-e="eee" data-black="black")
//js
let a=document.querySelector('.a')
,b=document.querySelector('.a>.b')
let obj=fn.serialize([a,b],['black'])
console.log(obj)  
 */
fn.deep=d=>JSON.parse(JSON.stringify(d));
fn.clone=fn.deep

fn.worker=(src)=>{
  //inner.js or text or element
  let is={},f=(d=>URL.createObjectURL(new Blob( [d], {type:"text\/javascript"} )));
  is.element=function(o){return !!(o && o.nodeType === 1)};
  is.url=(d=>!/\n|;/.test(d));
  return new Worker( is.element(src)?f(src.textContent):is.url(src)?src:f(src) );
 }

fn.getCaret=function getCaretPosition(editableDiv) {
 var caretPos = 0,
     sel, range;
 if (window.getSelection) {
  sel = window.getSelection();
  if (sel.rangeCount) {
   range = sel.getRangeAt(0);
   if (range.commonAncestorContainer.parentNode == editableDiv) {
    caretPos = range.endOffset;
   }
  }
 } else if (document.selection && document.selection.createRange) {
  range = document.selection.createRange();
  if (range.parentElement() == editableDiv) {
   var tempEl = document.createElement("span");
   editableDiv.insertBefore(tempEl, editableDiv.firstChild);
   var tempRange = range.duplicate();
   tempRange.moveToElementText(tempEl);
   tempRange.setEndPoint("EndToEnd", range);
   caretPos = tempRange.text.length;
  }
 }
 return caretPos;
}

fn.setCaret=function setCaretPosition(editableDiv,_pos){
 var range = document.createRange();
 var sel = window.getSelection();
 var pos=_pos||-1
 if(pos===-1){
  range.setStart(editableDiv.lastChild,editableDiv.lastChild.length)
 }else{
  range.setStart(editableDiv.firstChild,pos);
 }
 range.collapse(true);
 sel.removeAllRanges();
 sel.addRange(range);
}

fn.base64=(str,decodeflg)=>{
 let d=(str)=>decodeURIComponent(escape(atob(str)))
 ,e=(str)=>btoa(unescape(encodeURIComponent(str)))
 return (decodeflg)?d(str):e(str)
}

fn.rem2px=(rem)=>{
 return rem * parseFloat(getComputedStyle(document.documentElement).fontSize); 
 //return px
}
fn.px2rem=(px)=>{
 return px/parseFloat(getComputedStyle(document.documentElement).fontSize); 
 //return rem
}
fn.fit=(_a,_b,resizeflg)=>{
 if(!_a || !_b)return;
 //a to b ref
 let is={}
 is.string = function(obj){return toString.call(obj) === '[object String]'}
 let a=is.string(_a)?document.querySelector(_a):_a
 ,b=is.string(_a)?document.querySelector(_b):_b
 ,get=d=>JSON.parse(JSON.stringify(d.getBoundingClientRect()))
 ,f=()=>{
  let r=get(b)
  Object.keys(r).map(d=>{ a.style[d]=r[d]+'px' }) 
 }
 ,fde=_.debounce(f,50)
 ;
 if(resizeflg) window.addEventListener('resize',fde)
 f();
 return a;
 /*
fn.fit('.p','.x',true) //tar ref
 */
}

fn.a2=function(me,p){p.appendChild(me);return me}
fn.p2=function(me,p){p.insertBefore(me,p.firstElementChild/*p.firstChild*/); return me}
fn.as2=function(me,p){p.parentNode.insertBefore(me,p.nextElementSibling/*nextSibling*/);return me}
fn.ps2=function(me,p){p.parentNode.insertBefore(me,p);return me}

fn.setary=(ary,key)=>{
 return (!key)?Array.from(new Set(ary)):ary.filter((a,b,c)=>(c.findIndex((d)=>(a[key]===d[key]))=== b))
}

fn.near=(_v,_ary,_key)=>{
 let f=Math.abs,v=_v,ary=_ary,key=_key
 ,index=0
 ;
 if(!key)ary.map((d,i,a)=>{index=(f(v-a[index])<f(v-d))?index:i})
 if(key)ary.map((d,i,a)=>{index=(f(v-a[index][key])<f(v-d[key]))?index:i})
 ;
 return ary[index]/////
}

fn.p1x1=function p1x1(c,w,h){
 //ex) red or #f00 or #f005 or #ff0000 or #00000000 or transparent
 let canvas=document.createElement('canvas'),ctx=canvas.getContext('2d')
 ;
 canvas.width=w||1
 canvas.height=h||1
 ctx.fillStyle=c||"#000000"
 ctx.fillRect(0,0,canvas.width,canvas.height)
 ;
 return canvas.toDataURL("image/png") //output
}

fn.bigmath=(str)=>{
 /*
let m={}
,a='1234567890.+-/*%'.split('')
,b='１２３４５６７８９０．＋－／＊％'.split('')
 a.map((d,i)=>m[d]=b[i] ) 
 */
 let m={"0":"０","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９",".":"．","+":"＋","-":"－","/":"／","*":"＊","%":"％"}
 return (str)?str.replace(/[1234567890\.\+\-\/\*\%]/g,d=>m[d]):str
}


fn.base64url=(str,decodeflg)=>{
 let eu=(str)=>str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
 let du=(str)=>{
    str = (str + '===').slice(0, str.length + (str.length % 4));
    return str.replace(/-/g, '+').replace(/_/g, '/');  
 }
 let d=(str)=>decodeURIComponent(escape(atob(str)))
 ,e=(str)=>btoa(unescape(encodeURIComponent(str)))
 return (decodeflg)?d( du(str) ):eu( e(str) )
}

/*****/
/*history
 v1.0 start
 v1.1 fin bugfix
*/
;(function(root){
 let is={}
 is.promise=function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
 }
 is.function = function(obj){return toString.call(obj) === '[object Function]'}
 ;

 function entry(obj,caller,steprate){
  if(!obj)return console.log('need obj')
  if(!caller)return console.log('need caller')
  var o={}
  o.steprate=steprate||50
  o.caller=caller
  o.bootstep=0;
  o.funccount=0
  ;
  setInterval(()=>{o.bootstep++},o.steprate)
  o.I= function f(_symbol,_func){return function x(){
   let endflg=false
   ,symbol=_symbol
   ,count=o.funccount
   ,w=o.caller(symbol,0,endflg,o.bootstep,count)
   ,step=1
   ,ci=setInterval(()=>{
    o.caller(symbol,step,endflg,o.bootstep,count)
    if(endflg) clearInterval(ci);
    step++;
   },o.steprate)
   ,func=_func   
   ,result=func.apply(this,arguments)
   ,fin=(d)=>{endflg=true; o.funccount++ ;return d}
   ;
   return is.promise(result)?result.finally(fin):fin(result)
  }}
  o.keys=Object.keys(obj.__proto__).concat(Object.keys(obj)).filter(d=>is.function(obj[d]))
  o.keys.map(key=>{ obj[key]=o.I(key,obj[key]) })
  return obj;
 }
 root.interceptor=root.intercepter=entry;
})(this);

/*****/
;(function(root){
 'use strict'
 /*lent*/
 let is={}
 is.element = function(obj){return !!(obj && obj.nodeType === 1)}
 ;
 function entry(_target){
  let o={}
  o.target=is.element(_target)?_target:document.querySelector(_target)
  o.ctrl=(obj)=>{o._done(obj,'ctrl');return o;}
  o.input=(obj)=>{o._done(obj,'input');return o}
  o._done=(obj,mode)=>{
   o.target.addEventListener('keydown',function(ev){
    let k=ev.keyCode.toString()
    ,flg=(mode==='input')?(obj[k]):((ev.ctrlKey || ev.metaKey) && obj[k])
    if(!flg)return;
    ev.preventDefault();
    obj[k].call(o.target,ev)
   })   
  }
  o.end=(log)=>{console.log(log);return o}
  return o;
 }
 ;
 root.keyCmd=entry;
 /*
let in1=function(ev){ console.log('in') }
,in2=function(ev){ console.log('in') }
keyCmd(document.querySelector('textarea'))
 .input({'default':in1})
 .input({13:in1})
 .ctrl({83:in2}) //'S'
 .ctrl({13:in2}) //'enter'
  */
})(this);

/*****/
(function(root){ 
//----------------------------------------------
  // フィルタ関数
  //----------------------------------------------

  /**
   * フィルタなし
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
function _nofilter(data,w,h) {
    /* nop */
    return data;
  }

  /**
   * グレースケール
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
function _grayscale(data,w,h) {
    for (let i = 0; i < data.length; i += 4) {
      // (r+g+b)/3
      const color = (data[i] + data[i+1] + data[i+2]) / 3;
      data[i] = data[i+1] = data[i+2] = color;
    }

    return data;
  }

  /**
   * 階調反転
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
function _inversion(data,w,h) {
    for (let i = 0; i < data.length; i += 4) {
      // 255-(r|g|b)
      data[i]   = Math.abs(255 - data[i])  ;
      data[i+1] = Math.abs(255 - data[i+1]);
      data[i+2] = Math.abs(255 - data[i+2]);
    }

    return data;
  }

  /**
   * 二値化
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
 function _binarization(data,w,h) {
    const threshold = 255 / 2;

    const getColor = (data, i) => {
      // threshold < rgbの平均
      const avg = (data[i] + data[i+1] + data[i+2]) / 3;
      if (threshold < avg) {
        // white
        return 255;
      } else {
        // black
        return 0;
      }
    };

    for (let i = 0; i < data.length; i += 4) {
      const color = getColor(data, i);
      data[i] = data[i+1] = data[i+2] = color;
    }

    return data;
  }

  /**
   * ガンマ補正
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
function _gamma(data,w,h) {
    // 補正値（1より小さい:暗くなる、1より大きい明るくなる）
    const gamma = 2.0;
    // 補正式
    const correctify = val => 255 * Math.pow(val / 255, 1 / gamma);

    for (let i = 0; i < data.length; i += 4) {
      data[i]   = correctify(data[i]);
      data[i+1] = correctify(data[i+1]);
      data[i+2] = correctify(data[i+2]);
    }

    return data;
  }

  /**
   * ぼかし(3x3)
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
function _blur(data,w,h) {
    const _data = data.slice();
    const avgColor = (color, i) => {
      const prevLine = i - (w/*this.canvasWidth*/ * 4);
      const nextLine = i + (w/*this.canvasWidth*/ * 4);

      const sumPrevLineColor = _data[prevLine-4+color] + _data[prevLine+color] + _data[prevLine+4+color];
      const sumCurrLineColor = _data[i       -4+color] + _data[i       +color] + _data[i       +4+color];
      const sumNextLineColor = _data[nextLine-4+color] + _data[nextLine+color] + _data[nextLine+4+color];

      return (sumPrevLineColor + sumCurrLineColor + sumNextLineColor) / 9
    };

    // 2行目〜n-1行目
    for (let i = w/*this.canvasWidth*/ * 4; i < data.length - (w/*this.canvasWidth*/ * 4); i += 4) {
      // 2列目〜n-1列目
      if (i % (w/*this.canvasWidth*/ * 4) === 0 || i % ((w/*this.canvasWidth*/ * 4) + 300) === 0) {
        // nop
      } else {
        data[i]   = avgColor(0, i);
        data[i+1] = avgColor(1, i);
        data[i+2] = avgColor(2, i);
      }
    }

    return data;
  }

  /**
   * シャープ化
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
function _sharpen(data,w,h) {
    const _data = data.slice();
    const sharpedColor = (color, i) => {
      // 係数
      //  -1, -1, -1
      //  -1, 10, -1
      //  -1, -1, -1
      const sub = -1;
      const main = 10;

      const prevLine = i - (w/*this.canvasWidth*/ * 4);
      const nextLine = i + (w/*this.canvasWidth*/ * 4);

      const sumPrevLineColor = (_data[prevLine-4+color] * sub)  +  (_data[prevLine+color] * sub )  +  (_data[prevLine+4+color] * sub);
      const sumCurrLineColor = (_data[i       -4+color] * sub)  +  (_data[i       +color] * main)  +  (_data[i       +4+color] * sub);
      const sumNextLineColor = (_data[nextLine-4+color] * sub)  +  (_data[nextLine+color] * sub )  +  (_data[nextLine+4+color] * sub);

      return (sumPrevLineColor + sumCurrLineColor + sumNextLineColor) / 2
    };

    // 2行目〜n-1行目
    for (let i = w/*this.canvasWidth*/ * 4; i < data.length - (w/*this.canvasWidth*/ * 4); i += 4) {
      // 2列目〜n-1列目
      if (i % (w/*this.canvasWidth*/ * 4) === 0 || i % ((w/*this.canvasWidth*/ * 4) + 300) === 0) {
        // nop
      } else {
        data[i]   = sharpedColor(0, i);
        data[i+1] = sharpedColor(1, i);
        data[i+2] = sharpedColor(2, i);
      }
    }

    return data;
  }

  /**
   * メディアンフィルタ
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
 function _median(data,w,h) {
    const _data = data.slice();
    const getMedian = (color, i) => {
      // 3x3の中央値を取得
      const prevLine = i - (w/*this.canvasWidth*/ * 4);
      const nextLine = i + (w/*this.canvasWidth*/ * 4);

      const colors = [
        _data[prevLine-4+color], _data[prevLine+color], _data[prevLine+4+color],
        _data[i       -4+color], _data[i       +color], _data[i       +4+color],
        _data[nextLine-4+color], _data[nextLine+color], _data[nextLine+4+color],
      ];

      colors.sort((a, b) => a - b);
      return colors[Math.floor(colors.length / 2)];
    };

    // 2行目〜n-1行目
    for (let i = w/*this.canvasWidth*/ * 4; i < data.length - (w/*this.canvasWidth*/ * 4); i += 4) {
      // 2列目〜n-1列目
      if (i % (w/*this.canvasWidth*/ * 4) === 0 || i % ((w/*this.canvasWidth*/ * 4) + 300) === 0) {
        // nop
      } else {
        data[i]   = getMedian(0, i);
        data[i+1] = getMedian(1, i);
        data[i+2] = getMedian(2, i);
      }
    }

    return data;
  }

  /**
   * エンボス
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
 function _emboss(data,w,h) {
    const _data = data.slice();
    const embossColor = (color, i) => {
      // 係数
      //  -1,  0,  0
      //   0,  1,  0
      //   0,  0,  0
      // → + (255 / 2)

      const prevLine = i - (w/*this.canvasWidth*/ * 4);
      return ((_data[prevLine-4+color] * -1) + _data[i+color]) + (255 / 2);
    };

    // 2行目〜n-1行目
    for (let i = w/*this.canvasWidth*/ * 4; i < data.length - (w/*this.canvasWidth*/ * 4); i += 4) {
      // 2列目〜n-1列目
      if (i % (w/*this.canvasWidth*/ * 4) === 0 || i % ((w/*this.canvasWidth*/ * 4) + 300) === 0) {
        // nop
      } else {
        data[i]   = embossColor(0, i);
        data[i+1] = embossColor(1, i);
        data[i+2] = embossColor(2, i);
      }
    }

    return data;
  }

  /**
   * モザイク
   * @param {Array<Number>} data ImageData.dataの配列（dataを書き換える）
   */
function _mosaic(data,w,h) {
    const _data = data.slice();

    const avgColor = (i, j, color) => {
      // 3x3の平均値
      const prev = (((i - 1) * w/*this.canvasWidth*/) + j) * 4;
      const curr = (( i      * w/*this.canvasWidth*/) + j) * 4;
      const next = (((i + 1) * w/*this.canvasWidth*/) + j) * 4;

      const sumPrevLineColor = _data[prev-4+color] + _data[prev+color] + _data[prev+4+color];
      const sumCurrLineColor = _data[curr-4+color] + _data[curr+color] + _data[curr+4+color];
      const sumNextLineColor = _data[next-4+color] + _data[next+color] + _data[next+4+color];

      return (sumPrevLineColor + sumCurrLineColor + sumNextLineColor) / 9;
    };

    // 3x3ブロックずつ色をぬる
    for (let i = 1; i < w/*this.canvasWidth*/; i += 3) {
      for (let j = 1; j < h/*this.canvasHeight*/; j += 3) {

        const prev = (((i - 1) * w/*this.canvasWidth*/) + j) * 4;
        const curr = (( i      * w/*this.canvasWidth*/) + j) * 4;
        const next = (((i + 1) * w/*this.canvasWidth*/) + j) * 4;

        ['r', 'g', 'b'].forEach((_, color) => {
          data[prev-4+color] = data[prev+color] = data[prev+4+color] = avgColor(i, j, color);
          data[curr-4+color] = data[curr+color] = data[curr+4+color] = avgColor(i, j, color);
          data[next-4+color] = data[next+color] = data[next+4+color] = avgColor(i, j, color);
        });
      }
    }

    return data;
  }
function _green(data,w,h) {
    let f=d=>Math.min(Math.floor(d),255)
    for (let i = 0; i < data.length; i += 4) {
      // (r+g+b)/3
      const color = (data[i] + data[i+1] + data[i+2]) / 3;
      data[i] = color;
      data[i+1] =f(color+color*0.5) 
      data[i+2] =f(color+color*0.25) 
    }
    return data;
  }

function _blue(data,w,h) {
    let f=d=>Math.min(Math.floor(d),255)
    for (let i = 0; i < data.length; i += 4) {
      // (r+g+b)/3
      const color = (data[i] + data[i+1] + data[i+2]) / 3;
      data[i] = color;
      data[i+1] =f(color+color*0.25) 
      data[i+2] =f(color+color*0.5) 
    }
    return data;
  }

function _sobel(data,w,h) {
 var width=w;
 var height=h;

 var kernelX = [
  [-1,0,1],
  [-2,0,2],
  [-1,0,1]
 ];

 var kernelY = [
  [-1,-2,-1],
  [0,0,0],
  [1,2,1]
 ];

 var sobelData = [];
 var grayscaleData = [];

 function bindPixelAt(data) {
  return function(x, y, i) {
   i = i || 0;
   return data[((width * y) + x) * 4 + i];
  };
 }

 //var data = _data //
 var pixelAt = bindPixelAt(data);
 var x, y;

 for (y = 0; y < height; y++) {
  for (x = 0; x < width; x++) {
   var r = pixelAt(x, y, 0);
   var g = pixelAt(x, y, 1);
   var b = pixelAt(x, y, 2);

   var avg = (r + g + b) / 3;
   grayscaleData.push(avg, avg, avg, 255);
  }
 }

 pixelAt = bindPixelAt(grayscaleData);

 for (y = 0; y < height; y++) {
  for (x = 0; x < width; x++) {
   var pixelX = (
    (kernelX[0][0] * pixelAt(x - 1, y - 1)) +
    (kernelX[0][1] * pixelAt(x, y - 1)) +
    (kernelX[0][2] * pixelAt(x + 1, y - 1)) +
    (kernelX[1][0] * pixelAt(x - 1, y)) +
    (kernelX[1][1] * pixelAt(x, y)) +
    (kernelX[1][2] * pixelAt(x + 1, y)) +
    (kernelX[2][0] * pixelAt(x - 1, y + 1)) +
    (kernelX[2][1] * pixelAt(x, y + 1)) +
    (kernelX[2][2] * pixelAt(x + 1, y + 1))
   );

   var pixelY = (
    (kernelY[0][0] * pixelAt(x - 1, y - 1)) +
    (kernelY[0][1] * pixelAt(x, y - 1)) +
    (kernelY[0][2] * pixelAt(x + 1, y - 1)) +
    (kernelY[1][0] * pixelAt(x - 1, y)) +
    (kernelY[1][1] * pixelAt(x, y)) +
    (kernelY[1][2] * pixelAt(x + 1, y)) +
    (kernelY[2][0] * pixelAt(x - 1, y + 1)) +
    (kernelY[2][1] * pixelAt(x, y + 1)) +
    (kernelY[2][2] * pixelAt(x + 1, y + 1))
   );

   var magnitude = Math.sqrt((pixelX * pixelX) + (pixelY * pixelY))>>>0;

   sobelData.push(magnitude, magnitude, magnitude, 255);
  }
 }
 //hard write 
 sobelData.map((d,i)=>{data[i]=d})
 return data
}
  
  
 //pack
 var o ={};
o._nofilter =_nofilter;
o._grayscale=_grayscale;
o._inversion=_inversion;
o._binarization=_binarization;
o._gamma=_gamma;
o._blur =_blur;
o._sharpen=_sharpen;
o._median=_median;
o._emboss=_emboss;
o._mosaic=_mosaic;
//add
o._blue=_blue
o._green=_green
//add
o._sobel=_sobel  
 
 root.filter =o;
 
 })(this);

/*****/
(function(root){
/*
v1.0 filter is or not OK 
v1.1 filter not bug
v1.2 ctx memmory reflesh
*/
 let filter=root.filter||{}
// ,isFilter=(d)=>{
//  return (Object.keys(filter).filter(k=>d===k||d===k.slice(1)).length===0)?false:true
//}
 ,fits=(ow,oh,tw,th,fa=1)=>{
    // calc scale and calc clip
    let scale = (ow/oh > tw/th)? th/oh :tw/ow
    ,faceupRate =(fa<=0)?1 :fa
    ,clipW = tw / scale
    ,clipH = th / scale
    ,clipX = (ow - clipW) / 2
    ,clipY = (oh - clipH) / (2*faceupRate)
    ;
    
    return {clipX:clipX, clipY:clipY, clipW:clipW, clipH:clipH, tw:tw, th:th }
   //context.drawImage(img, s.clipX, s.clipY, s.clipW, s.clipH, 0, 0, s.tw, s.th);
}
,toCanvas=(url,opt)=>{return new Promise((sol)=>{ 
  let img =new Image()
  ,caller =function(){
    let canvas = document.createElement('canvas')
    ,context = canvas.getContext('2d')
    ,size = opt['fit']
    ,fil =opt['filter']
    ,s
    ;
    if(!size.w && size.h)
     s=fits(img.width,img.height,img.width*size.h/img.height ,size.h,size.fa||1)
    else if(size.w && !size.h)
     s=fits(img.width,img.height,size.w,img.height*size.w/img.width,size.fa||1)
    else //if(size.w && size.h)
     s=fits(img.width,img.height,size.w||img.width,size.h||img.height,size.fa||1)
    ;
    canvas.width = s.tw;
    canvas.height = s.th;
    context.drawImage(img, s.clipX, s.clipY, s.clipW, s.clipH, 0, 0, s.tw, s.th);
    
    let srcData = context.getImageData(0,0,s.tw,s.th);
     //filters
     fil.forEach(d=>filter[d](srcData.data,s.tw,s.th))
//      filter._grayscale(srcData.data,s.tw,s.th);
//      filter._median(srcData.data,s.tw,s.th);    
      context.putImageData(srcData,0,0);
      sol(canvas.toDataURL()) //
     setTimeout(()=>{img=void 0;canvas=void 0;context=void 0;srcData=void 0},0)//memory reflesh
    }
  ;
  
    img.onload =caller;
    img.src=url;   
  })
}

 function entry(base64){
  let o={};
  
  o._={filter:[],base64:base64};
  o.filter =(obj)=>{ /*if(isFilter(obj))*/ o._['filter'].push('_'+obj.replace('_','')); return o}
  o.fit=(obj)=>{ o._['fit']=obj; return o}
  o._calc=toCanvas;
  o.then=function(obj){return o._calc(o._['base64'],o._).then(obj) }
  
  
  return o;
 }
 
 root.imgc =entry;
})(this);

/*****/

//image reader
;(function(root){
  //need
  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }
  function handleFileSelect(caller) {return function(evt){
    evt.stopPropagation();
    evt.preventDefault();
    //both ondrop and input type=file
    var files = evt.target.files||evt.dataTransfer.files;
    // Loop through the FileList and render image files as thumbnails.
    readFile(files,caller);
  }}
  function readFile(files,caller){
    if(files.length==0) return;
    if(files.length>5) console.log('max 5files ');
    ;[].slice.call(files)
      .filter(f=>f.type.match('image.*'))
      .slice(0,5)
      .map(file=>{
      var reader = new FileReader();
      reader.onload = (function (thefile,thecaller) {
        return function(e) {		        		
          var text = e.target.result;
          thecaller(text,thefile);
        };
      })(file,caller); 
      reader.readAsDataURL(file);
    })    
    }  
  function imageReader(el,caller){
    var o={};
    o.el=el;
    o.caller=caller||function(ev){/**/};
    o.el.ondragover =handleDragOver;//
    o.el.ondrop=handleFileSelect(o.caller);//
  }
  root.imageReader=imageReader;
 /*usage
 imageReader(document.body,(d,f)=>{
 console.log(f)
 //f.name f.size ...
 //d is base64 ...
 
})
 */
})(this);

/*****/
;(function(root){
 /*history
 v1.0 multiple user 
 v1.1 to.togistdebug

 */

 function entry(u,a){
  'use strict';
  ;
  var to={}
  var gists={}
  gists.user=u
  gists.authstring=a //basic ...........
  gists.headers={
   "Authorization":gists.authstring
   ,'Accept': 'application/json'
   ,'Content-Type': 'application/json'
  }
  gists.jsy=JSON.stringify
  gists.f=function(url,o){return fetch(url,o).then((d)=>{
   if(d.ok) return Promise.resolve(d).then(d=>d.json())
   else return Promise.reject(d.status)
  })}
  gists.create=function(data){
   let url="https://api.github.com/gists"
   ,o={
    method:'POST'
    ,headers: gists.headers
    ,body: gists.jsy(data)
   }
   ;   
   return gists.f(url,o)  
  }
  gists.update=function(id,data){
   let url="https://api.github.com/gists/" + id
   ,o={
    method:'PATCH'
    ,headers: gists.headers
    ,body: gists.jsy(data)
   }
   ;   
   return gists.f(url,o)  
  }
  gists.searchid=function(url,o){return gists.f(url,o) }
  gists.search=gists.searchid;

  to.togistdebug=false;

  //ary=[[c,f],[c,f]]... c is content, f is filename
  to.togist2=(async (_ary,gistid,desc)=>{

   //let fname= filename||'anonymous'
   let ary =_ary
   ,data={"files": { } }
   if(desc) data.description=desc; //bug fix desc
   data.public=false
   ary.map(d=>{
    let content=d[0],fname=d[1];
    if(to.togistdebug){
     console.log('content length',content.length)
     console.log('fname',fname)
    }

    data.files[fname] = {"content": content}
   })
   ;
   var ret =(gistid)?await gists.update(gistid,data) :await gists.create(data)
   ;
   if(to.togistdebug){
    console.log('gistid',ret.id)
    console.log('gist url',ret.html_url)
   }
   return ret;
  });


  to.togist=(async (content,gistid,filename,desc)=>{

   let fname= filename||'anonymous'
   ,data={"files": { } }
   if(desc) data.description=desc; //bug fix desc
   data.public=false
   data.files[fname] = {"content": content}
   ;
   var ret =(gistid)?await gists.update(gistid,data) :await gists.create(data)
   ;
   if(to.togistdebug){
    console.log('gistid',ret.id)
    console.log('filename',fname)
    console.log('gist url',ret.html_url)
   }
   return ret;
  });

  to.togistsearch=(async (gistid,file)=>{
   //search id
   let url ="https://api.github.com/gists/" + gistid
   ,o={method:'GET',mode:'cors',headers:gists.headers}
   var ret =await gists.searchid(url,o)
   ;
   if(to.togistdebug) console.log('url',url);
   if(!file) return ret;
   return ret.files[file].raw_url 
  })
  to.togistpage=(async (num)=>{
   let _num=num||'1'
   ,user=gists.user
   ,url =`https://api.github.com/users/${user}/gists?page=${_num}`
   ,o={method:'GET',mode:'cors',headers:gists.headers}
   ;
   var ret =await gists.search(url,o)
   ;
   if(to.togistdebug) console.log('url',url)
   return ret;

  });

  return Object.assign({},to,gists)
 }

 root.getTogist=entry;
})(this);

/*****/
//history
//v1 make
//v2 update timing change textContent
;(function(root){
 ///
 ;(function(root){
  /*original by underscore.js*/ 
  if(root._) return;
  var _={}
  ;
  _.now = Date.now || function(){return new Date().getTime()};//line 1457
  //line 883
  _.debounce = function(func, wait, immediate) {
   var timeout, args, context, timestamp, result
   ,f = function() {
    var last = _.now() - timestamp;
    if (last < wait && last >= 0)timeout = setTimeout(f, wait - last)
    ;
    timeout = null;
    if(immediate)return;
    result = func.apply(context, args);
    if (!timeout) context = args = null;      
   }
   ;
   return function() {
    context = this;
    args = arguments;
    timestamp = _.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(f, wait);
    if (callNow) { result = func.apply(context, args); context = args = null;}
    return result;
   };
  }
  ;
  root._ =_
 })(this)
 /// 
 let is={}
 is.string = function(obj){return toString.call(obj) === '[object String]'}
 ;
 let fn={}
 fn.updateDom=function(el,caller,time,flg){
  let target=el
  ,_caller=_.debounce(caller,time||70)
  ,def={childList:true}
  ,config=(flg)?Object.assign({},def,{subtree:true}) :def
  ,calc=(ev)=>{_caller(ev) }
  ,ob=new MutationObserver(mu=>{ mu.map(calc)})
  ob.observe(target,config)
  ;
  return ob;
 }
 fn.ud=fn.changeDom=fn.updateDom
 fn.i3=(d)=>{
  if(typeof d !=='string') return d
  var el=document.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
 }
 fn.q=(d)=>document.querySelector(d)
 fn.gcs=(el)=>window.getComputedStyle(el)
 fn.max=(el)=>el.clientHeight/parseInt(fn.gcs(el).lineHeight)
 fn.pad=(i)=>('0000'+i).slice(-3)
 fn.nd=(max,st)=>Array.from({length:max}).map((d,i)=>fn.pad(i+st)).join('\n')
 ;
 ;
 ;//core
 let css=`
.ea{
line-height:1.3;/*important*/
padding-left:2.5rem;/*important*/ 
}
.ea{
max-width:100%;
position:relative; 
font-family:monospace;
outline:none;
height:auto; 
flex-grow:1;
word-break:break-all;
white-space:pre-wrap;
}
.ea:before{
position:absolute;left:0;right:0;
content:attr(data-num);
white-space:pre-wrap;
}
`;
 let _style=fn.q('head>style.eacss')
 //
 if(!_style) document.head.appendChild( fn.i3(`<style class="eacss">${css}</style>`) )
 ;
 ///default option
 let option={}
 option.cls='ea'
 option.dt=70
 option.nd=fn.nd
 option.st=0
 ; 
 function entry(q,_caller,_opt){
  let el=is.string(q)?fn.q(q):q
  ,opt=Object.assign({},option,_opt)
  ,f=(ev)=>{
   let el=ev.target
   el.dataset.num=''//need reflesh
   let max=fn.max(el)
   el.dataset.num=opt.nd(max,opt.st)//fn.nd(max)//number draw
   el.dataset.max=max;
   el.dataset.length=el.textContent.length;
  }
  ,caller=(_caller)?_.debounce(_caller,opt.dt):void 0
  ;
  //let f2=_.debounce(f,opt.dt)
  if(!fn.gcs(el).lineHeight)console.error('need set the line-height')
  el.setAttribute('contenteditable','plaintext-only')
  el.classList.add(opt.cls)
  //el.addEventListener('keyup',f)
  fn.ud(el,f,opt.dt)
  if(caller) el.addEventListener('keydown',caller)
  ;
  f({target:el}) //initialize;
  //el.textContent=el.textContent
  ;
  return el;
 }
 ;
 root.ea=entry
 /*
 opt.cls
 opt.dt
 opt.nd
 opt.st
 */
})(this);
