### quest
dragon quest macro for monospaced art game

### package
```
//pug
script(src="https://gnjo.github.io/quest/quest.js")
script(src="https://gnjo.github.io/quest/user.js") //your self
```

### group
```
//pug
script(src="https://gnjo.github.io/quest/underscore.js")
script(src="https://gnjo.github.io/quest/quest.util.js")
script(src="https://gnjo.github.io/quest/quest.core.js")
script(src="https://gnjo.github.io/quest/quest.cmds.js")
```
### develop
```
underscore.js
quest.util.js
 q.util.runner.js
 q.util...
quest.core.js
 q.core.run.js
 q.core...
quest.cmds.js
 q.cmds.1st.js
 q.cmds...
```

### usage
1st command
```
[[[ //:string multi wrap
]]]
{{{ //:javascript multi wrap
}}}
<<< //:jump from
>>> //:jump to or jump back
MTH //:$00...$ZZ $$$ to MTH
LAY //:X00...XZZ XXX to LAY
MAP //:A00...AZZ to MAP
DAT //:%00...%ZZ to DAT
```
2nd command
```
```
3rd user self

### example
1st command
```
```
2nd command
```
```
other case
```
```
### command definition
```
let f=function(cmd,ch,a,b,c){
}
q.def('XYZ',f,'XYZ a b c //:XYZ is xyz order.')
//XYZ 0 1 2
```
