/*hisotry
v1.0 make
v1.x ...
v2.0 app.opt add
v2.1 bugfix
*/
let app=lcr("auto",/*'54rem'*/'44rem',/*'20rem'*/'15rem')
//calc ...
;(function(app){
 app.name='steel'
 app.id=''
 //app.save=(d)=>{return fn.save(app.name,d)}
 //app.load=(d)=>{return fn.load(app.name)}
 app.dict={}
 app.makeid=()=>{return fn.rkana(8)}
 app.iscenter=(el)=>{
  try{
   let x=el.parentElement.parentElement.parentElement.id
   return (x==='center')?true:false
  }catch(e){
   return true;
  }
 }
 app.add=(_text,isnote)=>{
  let is={}
  is.string = function(obj){return toString.call(obj) === '[object String]'}
  let act=document.activeElement
  ,text=is.string(_text)?_text:"＃新"
  ,flg=act.classList.contains('ed')
  ,flg2=(flg)?app.iscenter(act):(isnote)?false:true
  ,body=(flg2)?fn.q('#center .wrap'):fn.q('#left .wrap')
  ,id=app.makeid()
  ,temp=`<div class="frame">
<div class="ed" data-id="${id}">${text}</div>
</div>`.trim()
  ,el=fn.fr(temp)
  ;
  let w=(flg)?fn.as2(el,act.parentElement):fn.a2(el,body)
  ,ed=(flg2)?fn.q(`#center .wrap .ed[data-id=${id}]`):fn.q(`#left .wrap .ed[data-id=${id}]`)
  ,frame=ed.parentElement
  ed.dataset.type=(flg2)?'story':'note'
  //lexer.lex(frame,ed)
  //editableLex(ed)
  //option.dt=70
  ed.dataset.headline=ed.textContent.split('\n').slice(0,1).pop()  
  ed.dataset.lines2=ed.dataset.max
  ea(ed,(ev)=>{
   ev.target.dataset.headline=ev.target.textContent.split('\n').slice(0,1).pop()
   ed.dataset.lines2=ed.dataset.max
  },{dt:200})
  
  
  //Object.assign(el.dataset,fn.lex(el.textContent))
  return ed;
 }
 app.del=()=>{
  let act=document.activeElement
  ;
  if(!act.classList.contains('ed'))return;
  let query=app.iscenter(act)?'#center .ed':"#left .ed"
  if(query===act)return;
  if(!(act.textContent.length===0))return;
  ;
  return fn.r(act.parentElement)
 }
 ;
})(app);
//total
;(function(app){
 document.body.appendChild(fn.i3('<div class="total"></div>'))
 let total=fn.q('.total')
 //
 total.dataset.total="000"
 total.dataset.lv="0"
 app.totalcalc=()=>{
  let ary=fn.qa('#center .ed[data-type="story"]')
  total.dataset.total=ary.map(d=>parseInt(d.dataset.max,10)).reduce((a,b)=>a+b,0)
  total.dataset.lv=ary.length  
 }
 ;
})(app);
//right makemenu
;(function(app){
 app.scv2=(id)=>{
  let tar=fn.q(`#center .ed[data-id="${id}"]`)
  fn.scv2(tar,'28px')
 }
 app.makemenu=(id)=>{
  let html=fn.qa('#center .ed[data-type="story"]').map((d,i)=>{
   let num=fn.pad(i,3)
   ,id=d.dataset.id
   ,title=d.dataset.headline
   let layout=`
<div class="list" data-num="${fn.pad(i,3)}" data-id="${id}" data-headline="${title}" onclick="app.scv2('${id}')"></div>
`.trim()
   return layout
  }).join('\n')
  ;
  fn.empty(app.r);
  fn.a2(fn.fr(html),app.r);
 }
})(app);
//left
;(function(app){
 app.searchInit=async ()=>{
  let url="https://gnjo.github.io/steel/nihongo.txt"
  let helptext=await fetch(url).then(d=>d.text())
  let layout=`<div class="frame"><div class="suptext search">${helptext}</div></div>`
  ;
  fn.p2(fn.fr(layout),app.l)
  let se=fn.q('.search',app.l)
  app.helptext=helptext
  app.se=se
  //console.log(app.se)
 }
})(app);
//save load
;(function(app){
 
 app.optname=fn.getparam('opt',location.href)
 app.opt=JSON.parse(localStorage.getItem(app.optname))
 var //basefile='steel.txt'
 notefile=app.opt.sub//'note.txt'
 ,storyfile=app.opt.main//'story.txt'
 ,to=getTogist(app.opt.u,localStorage.getItem(app.opt.p))
 ;
 function serialize(){
  let data=fn.qa('#center .ed').map(d=>fn.clone(d.dataset))
  return data;
 }
 function notetext(){
  return fn.qa('#left .ed[data-type="note"]').map(d=>d.textContent.trim())
   .map(d=>d.replace(/^＊/,'＃'))
   .join('\n')
 } 
 function storytext(){
  return fn.qa('#center .ed[data-type="story"]').map(d=>d.textContent.trim()).join('\n')
 }
 app.id=fn.getparam('id',location.href)//
 if(app.id){
  app.save=()=>{
   /*let se=JSON.stringify(serialize())
   ,*/let st=storytext()||'＃新'
   ,nt=notetext()||'＃新ノート'
   ,title=fn.q('#center .ed').dataset.headline||st.slice(0,36)
   return to.togist2([ /*[se,basefile],*/[st,storyfile],[nt,notefile] ],app.id,title)
  }
  app.load=async ()=>{
   /*
   try{
    let raw_url=await to.togistsearch(app.id,basefile)
    ,ary=await fetch(raw_url).then(d=>d.json())
    ary.map(d=>{ app.add(d.s) })
   }catch(e){
   */
   let raw_url=await to.togistsearch(app.id,storyfile)
   ,text=await fetch(raw_url).then(d=>d.text())||'＃新ストーリ'
   ,ary=fn.biglex(text)
   ary.map(d=>{ app.add(d) })
   ;
   raw_url=await to.togistsearch(app.id,notefile)
   text=await fetch(raw_url).then(d=>d.text())||'＃新ノート'
   ary=fn.biglex(text)
   ary.map(d=>{ app.add(d,true) })
   //}
  }
 }else{
  app.save=()=>{
   fn.save(notefile,notetext())
   fn.save(storyfile,storytext())
  }
  app.load=()=>{
   let s=fn.load(storyfile)||'＃新ストーリ'
   let n=fn.load(notefile)||'＃新ノート'
   fn.biglex(s).map(d=>{ app.add(d) })
   fn.biglex(n).map(d=>{ app.add(d,true) })
   return Promise.resolve()
  }
 }
 ;
})(app);
//dropimage
;(function(app){ 
 //dropsetting
 app.dropimage=(d,file)=>{
  let calc=(d)=>{
   let url=d.data.link
   ,text=`＃新イメージ\n＊用語：説明＠${url}`
   ,el=app.add(text,true)
   ;
   fn.copy(url)
   fn.scv(el)
  }
  return imgc(d).fit({w:300}).filter('blue').then(fn.upi).then(calc)
 }
 ;
})(app);
;(function(app){
 let css=`
.ed {
    padding: 0!important;
    padding-left: 2.5rem!important;
}
.ed:after {
    content: ""!important;
}
.frame+.frame {
    margin-top: 1rem;
}
.ea:before {
    color: #456;
}
`;
 app.overwrite=()=>{
  fn.a2( fn.i3(`<style class="overwrite">${css}</style>`),document.body)
 }
 
})(app);

//init
;(function(app){

 app.init=async ()=>{
  app.overwrite() //customize

  await app.searchInit()
  await app.load()
  ;
  //editable('.ed',true)
  //fn.ua(app.c,'data-length',app.calc,70,true)
  //fn.ua(app.l,'data-length',app.calc,70,true)  
  ;
  keyCmd(document.documentElement)
//   .input({33:app.jplexoff})
//   .input({34:app.jplex})
   .ctrl({13:app.add})
   .ctrl({8:app.del})
//   .ctrl({32:app.search}) //
//   .end('');  

  fn.ua(app.c,'data-headline',app.makemenu,300,true)
  fn.ua(app.c,'data-length',app.save,3000,true)
  fn.ua(app.l,'data-length',app.save,3000,true)  
  fn.ud(app.c,app.save,2000)
  fn.ud(app.l,app.save,2000)  
  fn.ua(app.c,'data-length',app.totalcalc,500,true) 
  app.makemenu();
  app.totalcalc();
//  app.makedict();

  imageReader(document.documentElement,app.dropimage)  
 }

})(app);
////call init
;(function(app){
 let spinner=(flg)=>{
  if(flg)return fn.q('.total').classList.add('mark')
  else fn.q('.total').classList.remove('mark')
 }
 let anim=(symbol,step,endflg,total,count)=>{
  //console.log(symbol,step,endflg,total,count) 
  if(!( symbol==='save'||symbol==='load'||symbol==='dropimage'))return;
  return (endflg)?spinner(false):spinner(true)
 }
 app=interceptor(app,anim,1000/200)
 ;
 app.init()/////////////////////////////////////////////////////////////////////////
 ;  
})(app);


