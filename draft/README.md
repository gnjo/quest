### madara
~~MAG exist for the Monospaced Art Game.~~
madara is Monospaced Art Game.

### functions
```

m.lex(macro)
m.red(cmdline)
m.run(str,fps,lps)

```

### core
special values
```
$$$ //:now address @xyz#abc:15
$00 //:return value

//key
$$0 //:user pressed key
$$1 //:user old pressed key
$$A //:keyroles A B X Y U D L R P N S

//layer
XXX //:root layer. dont touch.
X00 //:default layer first is shorthand the layer. default the X00
X01...X09 //:sub layers
XX0 //:default blinks layer. default cursor the XX0
XX1...(!XXX)...XXZ //:sub blinks, but XXX is out. 
```

need key-role
```
$$0 user last pressed key
$$1 user before pressed key

$$A is decide.
$$B is cancel.
$$X is multi key.
$$Y is multi key.
$$U is uppper to.
$$D is down to.
$$L is left to.
$$R is right to.
$$P is prepend to. for tab control. same mean left to.
$$N is next to. for tab control. same mean right to.
$$S is stop, start, screen shoot or show the help.

KEY $$A //:keywait mean stop the read, if keypress $$A, start the read.
KEY * //:press anykey
$$0=$$A #1 //: if keypress $$A, jump to #1 
```

jump
```
<<<
>>>
```
if jump and quick jump back
```
IFJ 1 #aaa
IFJ 1 >>> $11 [[[quick jump back!]]] >>>
TXT $11 //quick jump back!
```
save mark
```
MRK #episode1 1 [[[[エピソード１]]] //: MRK addr slotnumber comment
```
keywait message
```
[[[
hello, world.
my name is madara.
i am the macro.
it is the system like a linter-printer.
]]]
MES $00 1 X01
MES $00 0 X01 //key-no-wait message
```
yes or no
```
[[[
ask you.
are you goto the direct way?
]]]
YON $00 y X01
```
item list
```
[[[
sword
gun
spear
rance
katana
]]]
SEL $00 0 10 X01 //: 10 is list max.
```
layers and blinks 
```
X00 0 0 0 16 9 #2cc //X00 ... X0Z is layers
XX0 0 0 0 #fff [[[■　■　■　■]]] //XX0 ... XXZ is blinks
XX1 10 10 0 #fff [[[主　主　主　主]]]
POS 20 30 XX1 //position x y change. not z.
```

special math hand
```
//strong change rule.
//if string exist 1, but '','n','0','false','undefined','null','NaN',undefined,null,NaN is 0.

MTH v ch a b
$11%1 //absolute modulo
$11+1 //count up +1
$11-1 //count down -1

$11 21.5 //default is no check.

//:futured. all digit and dot is float, all digit is int, other nude input.

$11 1 99 r //random number 1...99
$11 33 p //percentage hit: 33%. if hit, $11 set the 1. other $11 set the 0.
$11 21.5 i //strong int change: 21
$11 -22 a //absolute: 22, dont strong changed. Math.abs(xx)
$11 21.5 c //strong int change and ceil: 22
$11 21.5 b //strong bool change: 1
$11 22.5 b //: 0
$11 21.5 f //strong float change: 21.5
$11 //reset value: null
//if jump hand
$11?1 #1 //:if exist jump to #1
$11?0 #1 //:if no-exist jump to #1
$11=1 #1 //:if $11==1 then jump to #1 
$11>1 #1 //:if $11>1 then jump to #1
$11<1 #1 //:if $11<1 then jump to #1
$11|1 2 3 4 5 #1//:some one jump to #1. $11==1||$11==2||$11==3...
```
make map
```
A00...AXX
[[[
壁壁壁壁壁壁壁壁壁壁壁壁
壁・・・・・・・・・・壁
壁・・・・・・・・・・壁
壁・・・・・・・・・・壁
壁壁壁壁壁壁壁壁壁壁壁壁
]]]
A00 $00
MAP 10 0 A00 X00 //:10 0 is cx cy. view the center. 
MET 0 0 A00 //:map get x y targetmap
TXT $00 X01 //:壁
MET 1 1 A00
TXT $00 X01 //:・
POS 3 3 XX1
MET XX1 A00
//SOM $00 壁・ #xyz
$00|壁 ・ //some one $00==壁||$00==・
IFJ $00 #hitit
```

### develop
```
;(function(mag){
;
let f=(a,b,c,d)=>{
}
,cmd='LAY'
,man='LAY a b c d //:a is....'
;
mag.def(cmd,f,man)
;
})(mag);
```






