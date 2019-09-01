/*
v1.0 make
*/
;(function(q){
/* let macro=`
[[[
＃ジャンプ命令
マクロは低級言語内で新たな命令を定義する事が出来るが関数の概念はない。
しかし、ジャンプ命令を使って、ループ可能な関数的マクロを作る事が出来る。
ジャンプ命令はグレイターザンを三つ重ねる事でアドレスジャンプを行う。
レスザンを三つ重ねる事で名前を付ける事が出来る。
ループと脱出を例示する。
]]]
$11 0
<<< #1
$11+1
$11=100 #end //escape 
>>> #1 //loop

<<< #end
X00 0 0 0 16 9 f22
TXT [[[count 100 is end]]]
戻り先のアドレスが判らない場合がある。その為にジャンプバック命令がある。ジャンプバックはグレイターザンを三つ重ねるのみである。内部的に呼び出された先に戻る。内部的に呼ばれた場所が存在しない場合、挙動は不明である。ジャンプバックを使う場合は、呼び出し元を気にすると良い。裏画面から表画面へ戻るような場合に多用する。
$11 0
<<< #1
$11+1
$11=100 #end //set the back address 
>>> #1

<<< #end
X00 0 0 0 16 9 f22//bbbb
TXT [[[count 100 is end]]] //aaaa
KEY * //key wait 
//reset
TXT [[[ ]]]
$11 0
$22 http://gnjo.github.io/
//
>>> //jump back 

[[[
abcdefg
hijklmn
opqrstu
]]]
A00 $00
%11=33
%11?1 #aaaa
`
*/
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
