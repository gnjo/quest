/*history
v1.0 make
v1.1 random logic change xorshift
v1.2 spceial cut
*/

/*interface

dung(seed,"・　＃上下").view //floor void tunnel upstair downstair
*/

;(function(root){
 
 let dstr=`
0,1,0D4,0R1
1,1,1D5,1L0,1R2
2,1,2D6,2L1,2R3
3,1,3D7,3L2
4,2,4U0,4D8,4R5
5,2,5U1,5D9,5L4,5R6
6,2,6U2,6DA,6L5,6R7
7,2,7U3,7DB,7L6
8,3,8U4,8R9
9,3,9U5,9L8,9RA
A,3,AU6,AL9,ARB
B,3,BU7,BLA
`.trim()
 ;

 //16->10 paseInt(n,16)
 //10->16 n.toString(16)
 //console.log(dstr)
 let fn=root.fn||{}
 fn.d2h=(n)=>n.toString(16).toUpperCase()
 fn.h2d=(n)=>parseInt(n,16)
 fn.range=(l=0)=>{return Array.from({length:l})}
 fn.setary=(ary,key)=>{
  return (!key)?Array.from(new Set(ary)):ary.filter((a,b,c)=>(c.findIndex((d)=>(a[key]===d[key]))=== b))
 }
/*history
v1.0 crc
v1.1 logic change xorshift
*/
;(function(root){

 function xorshift32(seed){
  let y=seed
  y = y ^ (y << 13)
  y = y ^ (y >> 17)
  y = y ^ (y << 15)
  y = y >>> 0
  return y
 }

 function entry(_seed){
  let seed=_seed||999
  ,rand=(a,b)=>{
   seed=xorshift32(seed)
   return ( (a!=null)&&(b!=null) )?(seed%Math.abs(b-a)+a):(a!=null)?seed%a:seed
  }
  return rand
 }
 root.rand=entry
})(this);
 
 
 function roomer(_seed,_w,_h,str){
  let chspace=str.charAt(0)
  let chwall=str.charAt(1)
  let chtunnel=str.charAt(2)
  ;
  let seed=_seed||1345
  //let mt=new MersenneTwister(seed);
  //mt.rand=mt.nextInt
  let mt={rand:rand(seed)}//new MersenneTwister(seed);
  //mt.rand=mt.nextInt
  //console.log(mt.rand(3))
  ;
  let fo=()=>{
   let v=mt.rand(3)
   return (v===2)?-1:v
  }
  let w=_w||15
  let h=_h||13
  let fs=(d,i)=>(i>0&&i%w===0)?'\n'+d:d 
  let view=fn.range(w*h).map(d=>chwall)
  //let rmin=7,rmax=11
  let wmin=parseInt(w/2),wmax=w-2
  let hmin=parseInt(h/2),hmax=h-2
  let rw=mt.rand(wmin,wmax)//mt.rand(rmin,rmax)
  let rh=mt.rand(hmin,hmax)//mt.rand(rmin,rmax)
  //console.log(rw,wmin,wmax)
  let ow=mt.rand(w-rw)
  let oh=mt.rand(h-rh)
  let gw=~~(rw/2) +fo()
  let gh=~~(rh/2) +fo()
  //udlr
  view=view.map((d,i)=>{
   let x=i%w,y=~~(i/w)

   let flg=(ow<x&&(ow+rw)>x),flg2=(oh<y&&(oh+rh)>y),flg3=(x===(ow+gw)&&y===(oh+gh))
   return (flg3)?'せ':(flg&&flg2)?chspace:d
  })
  return view;
 }

 function walker(_seed){
  //
  let seed=_seed||1345
//  let mt=new MersenneTwister(seed);
//  mt.rand=mt.nextInt
  let mt={rand:rand(seed)}//new MersenneTwister(seed);
  //mt.rand=mt.nextInt
  
  ;
  
  let walkrule={}
  dstr.split('\n').map(d=>d.split(',')).map(d=>walkrule[d[0]]=d) 
  //

  let roommax=12
  let walknum=()=>mt.rand(roommax*2)+roommax
  let walkmax=walknum()
  let wk=fn.d2h(mt.rand(roommax)) //fake stairs
  let path=fn.range(walkmax).map((d,i)=>{
   let rs=walkrule[wk].slice(2)
   let ret=rs[mt.rand(16)%rs.length]
   wk=ret.charAt(2)
   return ret;
  })
  return path;
 }

 function viewer(path){
  let fs=(d,i)=>(i>0&&i%7===0)?'\n'+d:d
  let fr=(d)=>d.split("").reverse().join("").replace('L','R').replace('U','D')
  let fa=fn.setary
  let a=fa(path.map(d=>(/L|U/.test(d))?fr(d):d))
  let w=4
  let h=3
  let r=(w*2-1)*(h*2-1)
  let view=fn.range(r).map(d=>'*')
  a.map(d=>{
   let c0=d.charAt(0),c1=d.charAt(1),c2=d.charAt(2)
   ,f1=fn.h2d
   ,f=(d)=>( ~~( f1(d)/w) )*(w*2-1)*2 +(f1(d)%w)*2
   let tn=(c1==='R')?1:(w*2-1)
   //room
   view[f(c0)]=c0
   view[f(c2)]=c2  
   //tunnel
   view[f(c0)+tn]=(c1==='R')?'-':'|'
  })
  return view.map(fs).join('')
 }

 function halfpoint(x1,y1,x2,y2,_rate){
  let dx=x2-x1
  ,dy=y2-y1
  ,a=Math.atan2(dy,dx)
  ,s=Math.pow(dx*dx+dy*dy,0.5)
  ,rate=_rate||5 //rate 0-10
  ,l=s*rate/10
  ,xc=l*Math.cos(a)||dx
  ,yc=l*Math.sin(a)||dy
  return [x1+xc,y1+yc]
 }

 function pointarray(x1,y1,x2,y2,rate){
  let c=halfpoint(x1,y1,x2,y2,rate)
  ,f=Math.round,f1=Math.abs,fm=Math.min,fx=Math.max
  let xc=c[0],yc=c[1],dx=f1(x2-x1),dy=f1(y2-y1),mode=(dx<dy)?'D':'R'
  ,gain=0.1
  ,p=[]
  if(mode==='R'){
   //l1=y1(x1<x<xc),lc=xc(y1<y<yc),l2=y2(xc<x<x2)
   for(let i=x1;i<=xc;i+=gain) p.push( f(i)+'.'+f(y1) );
   if(!(y1===y2))
    for(let j=fm(y1,y2);j<=fx(y1,y2);j+=gain) p.push( f(xc)+'.'+f(j) );
   for(let k=xc;k<=x2;k+=gain) p.push( f(k)+'.'+f(y2) );
  }else{ //mode ==='D'
   //l1=x1(y1<y<yc),lc=yc(x1<x<xc),l2=x2(yc<y<y2)
   for(let i=y1;i<=yc;i+=gain) p.push( f(x1)+'.'+f(i) );
   if(!(x1===x2))  
    for(let j=fm(x1,x2);j<=fx(x1,x2);j+=gain) p.push( f(j)+'.'+f(yc) );
   for(let k=yc;k<=y2;k+=gain) p.push( f(x2)+'.'+f(k) );
  }
  let path=fn.setary(p).map(d=>d.split('.').map(d=>parseInt(d)))
  return path;
 }

 function entry(_seed,_bw,_bh,str){
  let time0=performance.now()
  let chspace=str.charAt(0)
  let chwall=str.charAt(1)
  let chtunnel=str.charAt(2)
  ;
  let seed=_seed||1345
  let mt={rand:rand(seed)}//new MersenneTwister(seed);
  //mt.rand=mt.nextInt
  ;
  let path=walker(seed)
  //fn.q('.draw').textContent=viewer(path)

  let fr=(d)=>d.split("").reverse().join("").replace('L','R').replace('U','D')
  let fa=fn.setary
  let tunnel=fa(path.map(d=>(/L|U/.test(d))?fr(d):d))
  //fn.q('.test').textContent=tunnel
  let bw=_bw||60,bh=_bh||39
  let w=parseInt( (bw/*-6*/)/4 ),h=parseInt( (bh/*-5*/)/3)
  //console.log(bw,bh,w,h)
  let isroom=(num)=>~tunnel.join('').indexOf(fn.d2h(num))
  let rooms=fn.range(12).map(d=>roomer(mt.rand(),w,h,str))
  //let w=15,h=13
  let fs=(d,i)=>(i>0&&i%bw===0)?'\n'+d:d  
  let view=fn.range(bw*bh).map(d=>chwall)
  let fi=(x,y)=>y*bw+x
  let gs={}
  ;
  rooms.map((d,i)=>{
   if(!isroom(i))return;
   let v=d
   let ox=(i%4)*w,oy=~~(i/4)*h
   let room=fn.d2h(i)
   v.map((d,i)=>{
    let x=i%w +ox ,y=~~(i/w)+oy
    if(d==='せ') gs[room]=[x,y]
    view[fi(x,y)]=d
   })
  })

  tunnel.map(d=>{
   let rate=5
   let r1=gs[d.charAt(0)],r2=gs[d.charAt(2)]
   let x1=r1[0],y1=r1[1]
   let x2=r2[0],y2=r2[1]
   return pointarray(x1,y1,x2,y2,rate)
  }).map(d=>{
   d.map(d=>{
    let x=d[0],y=d[1]
    //console.log(view.length,bw*bh,x,y,fi(x,y))
    if(view[fi(x,y)]===chwall) view[fi(x,y)]=chtunnel
    if(view[fi(x,y)]==="せ") view[fi(x,y)]=chspace    
   })
  })

  let _view=view.map(fs).join('')
  let time1=performance.now()
  return {data:view,view:_view,time:time1-time0};
 }

 root.dung=entry;
})(this)

/*

let fn={};fn.q=(d)=>document.querySelector(d);

fn.q('.x').onclick=()=>{
 let seed=~~(Math.random()*9999)
 fn.q('.y').textContent=seed
 let d=dung(seed,60,40,'・　＋')
 fn.q('.draw2').textContent=d.view
 fn.q('.z').textContent= d.time +'ms'
}
*/
