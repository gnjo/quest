;(function(root){
 /*https://codepen.io/gnjo/pen/vYBJERB?editors=1010*/
 /*need underscore.js*/
 function size(str){
  let ary=str.split('\n')
  return {w:ary.pop().length+1,h:ary.length}
 }
 function pos2len(mapw,maph,x,y){return mapw*y+x}
 function strrep(str, idx, val){return str.slice(0, idx) + val + str.slice(idx+val.length)}; 
 ;
 function entry(str){
  let o={}
  o.org=str;
  o.maps=str;
  o=Object.assign({},o,size(str))
  o.met=(x,y,orgflg)=>{
   let len=pos2len(o.w,o.h,x,y)
   return (orgflg)?o.org.charAt(len):o.maps.charAt(len)
  }
  o.mwr=(x,y,ch)=>{
   let len=pos2len(o.w,o.h,x,y)
   o.maps=strrep(o.maps,len,ch.charAt(0))
   return o.maps
  }
  o.view=(cx,cy,cw,ch)=>{
   //cw ch is odd value
   let left=parseInt( cx-( (cw-1)/2) )
   
   let top=parseInt( cy-( (ch-1)/2) )
   //console.log(left,top);
   //console.log(o.maps)
   let v='',span=_.range(cw).map(d=>'　').join('')
   for(let y=top;y<top+ch;y++){
    let len=pos2len(o.w,o.h,Math.max(left,0),y)
    if(y<0||len<0){
     v+=span+'\n'
    }else{
     let sub=o.maps.substr(len,cw).replace(/(?:\n.*)+$/,'')
     //console.log(len,sub)
     sub=(left<0)?(span.slice(0,Math.abs(left))+sub+span).slice(0,cw):(sub+span).slice(0,cw)
     v+= sub+'\n'
    }
    //console.log(v)
   }
   //console.log(v)
   return v;
  }

  return o;
 }
 root.mapview=entry;
})(this);
