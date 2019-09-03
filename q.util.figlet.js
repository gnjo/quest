/*need font
v1.0 figlet migrate
*/

/**
 * Figlet JS
 * 
 * Copyright (c) 2010 Scott González
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * http://github.com/scottgonzalez/figlet-js
 */

(function() {

var Figlet = (typeof exports !== "undefined" ? exports : window).Figlet = {
	fonts: {},
	
	parseFont: function(name, fn) {
		if (name in Figlet.fonts) {
			fn();
			return;
		}
		
		Figlet.loadFont(name, function(defn) {
			Figlet._parseFont(name, defn, fn);
		});
	},
	
	_parseFont: function(name, defn, fn) {
		var lines = defn.split("\n"),
			header = lines[0].split(" "),
			hardblank = header[0].charAt(header[0].length - 1),
			height = +header[1],
			comments = +header[5];
		
		Figlet.fonts[name] = {
			defn: lines.slice(comments + 1),
			hardblank: hardblank,
			height: height,
			char: {}
		};
		fn();
	},
	
	parseChar: function(char, font) {
		var fontDefn = Figlet.fonts[font];
		if (char in fontDefn.char) {
			return fontDefn.char[char];
		}
		
		var height = fontDefn.height,
			start = (char - 32) * height,
			charDefn = [],
			i;
		for (i = 0; i < height; i++) {
			charDefn[i] = fontDefn.defn[start + i]
				.replace(/@/g, "")
				.replace(RegExp("\\" + fontDefn.hardblank, "g"), " ");
		}
		return fontDefn.char[char] = charDefn;
	},

	write: function(str, font, fn) {
		Figlet.parseFont(font, function() {
			var chars = [],
				result = "";
			for (var i = 0, len = str.length; i < len; i++) {
				chars[i] = Figlet.parseChar(str.charCodeAt(i), font);
			}
			for (i = 0, height = chars[0].length; i < height; i++) {
				for (var j = 0; j < len; j++) {
					result += chars[j][i];
				}
				result += "\n";
			}
			fn(result);
		});
	}
};

})();

;(function(root){

let roman2=`flf2a$ 10 10 30 -1 2
Roman by Nick Miners N.M.Miners@durham.ac.uk
June 1994
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@@
.o.$@
888$@
888$@
Y8P$@
\`8'$@
.o.$@
Y8P$@
   $@
   $@
   $@@
o8o o8o$@
\`V' \`V'$@
       $@
       $@
       $@
       $@
       $@
       $@
       $@
       $@@
       .o   .o  $@
      .8'  .8'  $@
  .888888888888'$@
    .8'  .8'    $@
.888888888888'  $@
  .8'  .8'      $@
 .8'  .8'       $@
                $@
                $@
                $@@
   o   $@
.d88888$@
8[ 8   $@
\`Y888B.$@
   8 ]8$@
88888P'$@
   8   $@
       $@
       $@
       $@@
o8o   88 $@
\`"'  .8' $@
    .8'  $@
   .8'   $@
  .8'    $@
 .8'  .o.$@
 88   Y8P$@
         $@
         $@
         $@@
  .oo.    $@
.88' \`8.  $@
88.  .8'  $@
\`88.8P    $@
 d888[.8' $@
88' \`88.  $@
\`bodP'\`88.$@
          $@
          $@
          $@@
o8o$@
\`YP$@
 ' $@
   $@
   $@
   $@
   $@
   $@
   $@
   $@@
  .o$@
 .8'$@
.8' $@
88  $@
88  $@
\`8. $@
 \`8.$@
  \`"$@
    $@
    $@@
o.  $@
\`8. $@
 \`8.$@
  88$@
  88$@
 .8'$@
.8' $@
"'  $@
    $@
    $@@
   o   $@
\`8.8.8'$@
.8'8\`8.$@
   "   $@
       $@
       $@
       $@
       $@
       $@
       $@@
          $@
          $@
    88    $@
    88    $@
8888888888$@
    88    $@
    88    $@
          $@
          $@
          $@@
   $@
   $@
   $@
   $@
   $@
.o.$@
Y8P$@
 ' $@
   $@
   $@@
       $@
       $@
       $@
       $@
8888888$@
       $@
       $@
       $@
       $@
       $@@
   $@
   $@
   $@
   $@
   $@
.o.$@
Y8P$@
   $@
   $@
   $@@
     88$@
    .8'$@
   .8' $@
  .8'  $@
 .8'   $@
.8'    $@
88     $@
       $@
       $@
       $@@
  .oooo.  $@
 d8P'\`Y8b $@
888    888$@
888    888$@
888    888$@
\`88b  d88'$@
 \`Y8bd8P' $@
          $@
          $@
          $@@
  .o $@
o888 $@
 888 $@
 888 $@
 888 $@
 888 $@
o888o$@
     $@
     $@
     $@@
  .oooo.  $@
.dP""Y88b $@
      ]8P'$@
    .d8P' $@
  .dP'    $@
.oP     .o$@
8888888888$@
          $@
          $@
          $@@
  .oooo.  $@
.dP""Y88b $@
      ]8P'$@
    <88b. $@
     \`88b.$@
o.   .88P $@
\`8bd88P'  $@
          $@
          $@
          $@@
      .o  $@
    .d88  $@
  .d'888  $@
.d'  888  $@
88ooo888oo$@
     888  $@
    o888o $@
          $@
          $@
          $@@
  oooooooo$@
 dP"""""""$@
d88888b.  $@
    \`Y88b $@
      ]88 $@
o.   .88P $@
\`8bd88P'  $@
          $@
          $@
          $@@
    .ooo  $@
  .88'    $@
 d88'     $@
d888P"Ybo.$@
Y88[   ]88$@
\`Y88   88P$@
 \`88bod8' $@
          $@
          $@
          $@@
 ooooooooo$@
d"""""""8'$@
      .8' $@
     .8'  $@
    .8'   $@
   .8'    $@
  .8'     $@
          $@
          $@
          $@@
 .ooooo.  $@
d88'   \`8.$@
Y88..  .8'$@
 \`88888b. $@
.8'  \`\`88b$@
\`8.   .88P$@
 \`boood8' $@
          $@
          $@
          $@@
 .ooooo.  $@
888' \`Y88.$@
888    888$@
 \`Vbood888$@
      888'$@
    .88P' $@
  .oP'    $@
          $@
          $@
          $@@
   $@
   $@
   $@
   $@
o8o$@
\`"'$@
o8o$@
\`"'$@
   $@
   $@@
   $@
   $@
   $@
   $@
o8o$@
\`"'$@
o8o$@
\`]P$@
 ' $@
   $@@
      $@
   .dP$@
 .dP  $@
dP    $@
Yb    $@
 \`Yb  $@
   \`Yb$@
      $@
      $@
      $@@
       $@
       $@
       $@
8888888$@
       $@
8888888$@
       $@
       $@
       $@
       $@@
      $@
Yb    $@
 \`Yb  $@
   \`Yb$@
   .dP$@
 .dP  $@
dP    $@
      $@
      $@
      $@@
 .oooooo. $@
dP'   \`Y8b$@
88o   .d8P$@
\`"' .d8P' $@
   \`88'   $@
   .o.    $@
   Y8P    $@
          $@
          $@
          $@@
  .oooooo. $@
 d'     \`b $@
d' .d"bd  8$@
8  8. 8  .d$@
Y.  YoP"b' $@
 8.      .8$@
  YooooooP $@
           $@
           $@
           $@@
      .o.      $@
     .888.     $@
    .8"888.    $@
   .8' \`888.   $@
  .88ooo8888.  $@
 .8'     \`888. $@
o88o     o8888o$@
               $@
               $@
               $@@
oooooooooo. $@
\`888'   \`Y8b$@
 888     888$@
 888oooo888'$@
 888    \`88b$@
 888    .88P$@
o888bood8P' $@
            $@
            $@
            $@@
  .oooooo.  $@
 d8P'  \`Y8b $@
888         $@
888         $@
888         $@
\`88b    ooo $@
 \`Y8bood8P' $@
            $@
            $@
            $@@
oooooooooo.  $@
\`888'   \`Y8b $@
 888      888$@
 888      888$@
 888      888$@
 888     d88'$@
o888bood8P'  $@
             $@
             $@
             $@@
oooooooooooo$@
\`888'     \`8$@
 888        $@
 888oooo8   $@
 888    "   $@
 888       o$@
o888ooooood8$@
            $@
            $@
            $@@
oooooooooooo$@
\`888'     \`8$@
 888        $@
 888oooo8   $@
 888    "   $@
 888        $@
o888o       $@
            $@
            $@
            $@@
  .oooooo.   $@
 d8P'  \`Y8b  $@
888          $@
888          $@
888     ooooo$@
\`88.    .88' $@
 \`Y8bood8P'  $@
             $@
             $@
             $@@
ooooo   ooooo$@
\`888'   \`888'$@
 888     888 $@
 888ooooo888 $@
 888     888 $@
 888     888 $@
o888o   o888o$@
             $@
             $@
             $@@
ooooo$@
\`888'$@
 888 $@
 888 $@
 888 $@
 888 $@
o888o$@
     $@
     $@
     $@@
   oooo$@
   \`888$@
    888$@
    888$@
    888$@
    888$@
.o. 88P$@
\`Y888P $@
       $@
       $@@
oooo    oooo$@
\`888   .8P' $@
 888  d8'   $@
 88888[     $@
 888\`88b.   $@
 888  \`88b. $@
o888o  o888o$@
            $@
            $@
            $@@
ooooo       $@
\`888'       $@
 888        $@
 888        $@
 888        $@
 888       o$@
o888ooooood8$@
            $@
            $@
            $@@
ooo        ooooo$@
\`88.       .888'$@
 888b     d'888 $@
 8 Y88. .P  888 $@
 8  \`888'   888 $@
 8    Y     888 $@
o8o        o888o$@
                $@
                $@
                $@@
ooooo      ooo$@
\`888b.     \`8'$@
 8 \`88b.    8 $@
 8   \`88b.  8 $@
 8     \`88b.8 $@
 8       \`888 $@
o8o        \`8 $@
              $@
              $@
              $@@
  .oooooo.  $@
 d8P'  \`Y8b $@
888      888$@
888      888$@
888      888$@
\`88b    d88'$@
 \`Y8bood8P' $@
            $@
            $@
            $@@
ooooooooo.  $@
\`888   \`Y88.$@
 888   .d88'$@
 888ooo88P' $@
 888        $@
 888        $@
o888o       $@
            $@
            $@
            $@@
  .oooooo.     $@
 d8P'  \`Y8b    $@
888      888   $@
888      888   $@
888      888   $@
\`88b    d88b   $@
 \`Y8bood8P'Ybd'$@
               $@
               $@
               $@@
ooooooooo.  $@
\`888   \`Y88.$@
 888   .d88'$@
 888ooo88P' $@
 888\`88b.   $@
 888  \`88b. $@
o888o  o888o$@
            $@
            $@
            $@@
 .oooooo..o$@
d8P'    \`Y8$@
Y88bo.     $@
 \`"Y8888o. $@
     \`"Y88b$@
oo     .d8P$@
8""88888P' $@
           $@
           $@
           $@@
ooooooooooooo$@
8'   888   \`8$@
     888     $@
     888     $@
     888     $@
     888     $@
    o888o    $@
             $@
             $@
             $@@
ooooo     ooo$@
\`888'     \`8'$@
 888       8 $@
 888       8 $@
 888       8 $@
 \`88.    .8' $@
   \`YbodP'   $@
             $@
             $@
             $@@
oooooo     oooo$@
 \`888.     .8' $@
  \`888.   .8'  $@
   \`888. .8'   $@
    \`888.8'    $@
     \`888'     $@
      \`8'      $@
               $@
               $@
               $@@
oooooo   oooooo     oooo$@
 \`888.    \`888.     .8' $@
  \`888.   .8888.   .8'  $@
   \`888  .8'\`888. .8'   $@
    \`888.8'  \`888.8'    $@
     \`888'    \`888'     $@
      \`8'      \`8'      $@
                        $@
                        $@
                        $@@
ooooooo  ooooo$@
 \`8888    d8' $@
   Y888..8P   $@
    \`8888'    $@
   .8PY888.   $@
  d8'  \`888b  $@
o888o  o88888o$@
              $@
              $@
              $@@
oooooo   oooo$@
 \`888.   .8' $@
  \`888. .8'  $@
   \`888.8'   $@
    \`888'    $@
     888     $@
    o888o    $@
             $@
             $@
             $@@
 oooooooooooo$@
d'""""""d888'$@
      .888P  $@
     d888'   $@
   .888P     $@
  d888'    .P$@
.8888888888P $@
             $@
             $@
             $@@
oooo$@
8   $@
8   $@
8   $@
8   $@
8   $@
8ooo$@
    $@
    $@
    $@@
88     $@
\`8.    $@
 \`8.   $@
  \`8.  $@
   \`8. $@
    \`8.$@
     88$@
       $@
       $@
       $@@
oooo$@
   8$@
   8$@
   8$@
   8$@
   8$@
ooo8$@
    $@
    $@
    $@@
 .o"o. $@
"'   \`"$@
       $@
       $@
       $@
       $@
       $@
       $@
       $@
       $@@
           $@
           $@
           $@
           $@
           $@
           $@
ooooooooooo$@
           $@
           $@
           $@@
o8o$@
YP'$@
 \` $@
   $@
   $@
   $@
   $@
   $@
   $@
   $@@
         $@
         $@
 .oooo.  $@
\`P  )88b $@
 .oP"888 $@
d8(  888 $@
\`Y888""8o$@
         $@
         $@
         $@@
 .o8      $@
"888      $@
 888oooo. $@
 d88' \`88b$@
 888   888$@
 888   888$@
 \`Y8bod8P'$@
          $@
          $@
          $@@
         $@
         $@
 .ooooo. $@
d88' \`"Y8$@
888      $@
888   .o8$@
\`Y8bod8P'$@
         $@
         $@
         $@@
      .o8 $@
     "888 $@
 .oooo888 $@
d88' \`888 $@
888   888 $@
888   888 $@
\`Y8bod88P"$@
          $@
          $@
          $@@
         $@
         $@
 .ooooo. $@
d88' \`88b$@
888ooo888$@
888    .o$@
\`Y8bod8P'$@
         $@
         $@
         $@@
 .o88o.$@
 888 \`"$@
o888oo $@
 888   $@
 888   $@
 888   $@
o888o  $@
       $@
       $@
       $@@
          $@
          $@
 .oooooooo$@
888' \`88b $@
888   888 $@
\`88bod8P' $@
\`8oooooo. $@
d"     YD $@
"Y88888P' $@
          $@@
oooo       $@
\`888       $@
 888 .oo.  $@
 888P"Y88b $@
 888   888 $@
 888   888 $@
o888o o888o$@
           $@
           $@
           $@@
 o8o $@
 \`"' $@
oooo $@
\`888 $@
 888 $@
 888 $@
o888o$@
     $@
     $@
     $@@
    o8o$@
    \`"'$@
   oooo$@
   \`888$@
    888$@
    888$@
    888$@
    888$@
.o. 88P$@
\`Y888P $@@
oooo       $@
\`888       $@
 888  oooo $@
 888 .8P'  $@
 888888.   $@
 888 \`88b. $@
o888o o888o$@
           $@
           $@
           $@@
oooo $@
\`888 $@
 888 $@
 888 $@
 888 $@
 888 $@
o888o$@
     $@
     $@
     $@@
                 $@
                 $@
ooo. .oo.  .oo.  $@
\`888P"Y88bP"Y88b $@
 888   888   888 $@
 888   888   888 $@
o888o o888o o888o$@
                 $@
                 $@
                 $@@
           $@
           $@
ooo. .oo.  $@
\`888P"Y88b $@
 888   888 $@
 888   888 $@
o888o o888o$@
           $@
           $@
           $@@
         $@
         $@
 .ooooo. $@
d88' \`88b$@
888   888$@
888   888$@
\`Y8bod8P'$@
         $@
         $@
         $@@
          $@
          $@
oo.ooooo. $@
 888' \`88b$@
 888   888$@
 888   888$@
 888bod8P'$@
 888      $@
o888o     $@
          $@@
          $@
          $@
 .ooooo oo$@
d88' \`888 $@
888   888 $@
888   888 $@
\`V8bod888 $@
      888.$@
      8P' $@
      "   $@@
        $@
        $@
oooo d8b$@
\`888""8P$@
 888    $@
 888    $@
d888b   $@
        $@
        $@
        $@@
        $@
        $@
 .oooo.o$@
d88(  "8$@
\`"Y88b. $@
o.  )88b$@
8""888P'$@
        $@
        $@
        $@@
    .  $@
  .o8  $@
.o888oo$@
  888  $@
  888  $@
  888 .$@
  "888"$@
       $@
       $@
       $@@
           $@
           $@
oooo  oooo $@
\`888  \`888 $@
 888   888 $@
 888   888 $@
 \`V88V"V8P'$@
           $@
           $@
           $@@
           $@
           $@
oooo    ooo$@
 \`88.  .8' $@
  \`88..8'  $@
   \`888'   $@
    \`8'    $@
           $@
           $@
           $@@
                $@
                $@
oooo oooo    ooo$@
 \`88. \`88.  .8' $@
  \`88..]88..8'  $@
   \`888'\`888'   $@
    \`8'  \`8'    $@
                $@
                $@
                $@@
           $@
           $@
oooo    ooo$@
 \`88b..8P' $@
   Y888'   $@
 .o8"'88b  $@
o88'   888o$@
           $@
           $@
           $@@
           $@
           $@
oooo    ooo$@
 \`88.  .8' $@
  \`88..8'  $@
   \`888'   $@
    .8'    $@
.o..P'     $@
\`Y8P'      $@
           $@@
          $@
          $@
  oooooooo$@
 d'""7d8P $@
   .d8P'  $@
 .d8P'  .P$@
d8888888P $@
          $@
          $@
          $@@
  d88'$@
 d88' $@
 888  $@
<88   $@
 888  $@
 Y88. $@
  Y88.$@
      $@
      $@
      $@@
8$@
8$@
8$@
 $@
8$@
8$@
8$@
 $@
 $@
 $@@
\`88b  $@
 \`88b $@
  888 $@
   88>$@
  888 $@
 .88P $@
.88P  $@
      $@
      $@
      $@@
 .oo.  .oo$@
P'  \`YP'  $@
          $@
          $@
          $@
          $@
          $@
          $@
          $@
          $@@
 o8o  .o.  o8o $@
 \`"' .888. \`"' $@
    .8"888.    $@
   .8' \`888.   $@
  .88ooo8888.  $@
 .8'     \`888. $@
o88o     o8888o$@
               $@
               $@
               $@@
o8o        o8o$@
\`"'.oooooo.\`"'$@
  d8P'  \`Y8b  $@
 888      888 $@
 888      888 $@
 \`88b    d88' $@
  \`Y8bood8P'  $@
              $@
              $@
              $@@
 o8o      o8o$@
 \`"'      \`"'$@
ooooo     ooo$@
\`888'     \`8'$@
 888       8 $@
 \`88.    .8' $@
   \`YbodP'   $@
             $@
             $@
             $@@
o8o   o8o$@
\`"'   \`"'$@
 .oooo.  $@
\`P  )88b $@
 .oP"888 $@
d8(  888 $@
\`Y888""8o$@
         $@
         $@
         $@@
o8o   o8o$@
\`"'   \`"'$@
 .ooooo. $@
d88' \`88b$@
888   888$@
888   888$@
\`Y8bod8P'$@
         $@
         $@
         $@@
 o8o   o8o $@
 \`"'   \`"' $@
oooo  oooo $@
\`888  \`888 $@
 888   888 $@
 888   888 $@
 \`V88V"V8P'$@
           $@
           $@
           $@@
  .ooooo. $@
 d88' \`88.$@
 888  .88'$@
o888 d88' $@
 888  \`88.$@
 888  .88'$@
o888o Y8' $@
          $@
          $@
          $@@`;

Figlet.roman2=roman2;	
})(this);


;(function(root){
//migration
Figlet.loadFont = function(name, fn) {
/*	
 let base="http://gnjo.github.io/figlet/"
 let url=base+"fonts/" + name + ".flf"
 fetch(url).then(d=>d.text()).then(fn)
*/
fn(Figlet.roman2)	
}
	
Figlet.loadFont('roman2', function(defn) {
 Figlet._parseFont('roman2', defn, ()=>{return/**/});
});

Figlet.write=	function(str, _font, _fn) {

 let fn=_fn
 let font=_font
 if(!fn){
  fn=_font
  font='roman2'
 }

 Figlet.parseFont(font, function() {
  var chars = [],
      result = "";
  for (var i = 0, len = str.length; i < len; i++) {
   chars[i] = Figlet.parseChar(str.charCodeAt(i), font);
  }
  for (i = 0, height = chars[0].length; i < height; i++) {
   for (var j = 0; j < len; j++) {
    result += chars[j][i];
   }
   result += "\n";
  }
  fn(result);
 });
}


})(this);

