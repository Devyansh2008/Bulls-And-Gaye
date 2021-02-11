var inp
var Bull
var Cow 
var word
var b
var v
var saman
var xD
var thak
var gaya
var yaaaRrrRRRRR
var nice=50
function setup() {
word=createElement("h1")
word.html("SUB NERRDDDDD")
word.position(300,20)

Bull=createElement("h1")
Bull.html("Bulls")
Bull.position(650,20)

Cow=createElement("h1")
Cow.html("Cow")
Cow.position(800,20)

b=createButton("Submit Worddddddddddddd")
b.position(75,400)

inp=createInput()
inp.position(75,300)

random=Math.round(random(0,400))
wrd=s[random]
console.log(wrd)
b.mousePressed(helpmepls)
}

function draw() {
  background(255,255,255);  
  drawSprites();  
}

function helpmepls(){
v=inp.value()
if(v.length!=4){
  alert("DHANG KA SAMAN DO YAARrRrRrrRRRr")
}

var Brulls=0
var Crows=0

saman=v.toLowerCase()
console.log(saman)
if(saman.charAt(0)===wrd.charAt(0)){Brulls=Brulls+1}
if(saman.charAt(1)===wrd.charAt(1)){Brulls=Brulls+1}
if(saman.charAt(2)===wrd.charAt(2)){Brulls=Brulls+1}
if(saman.charAt(3)===wrd.charAt(3 )){Brulls=Brulls+1}

if(saman.charAt(0)===wrd.charAt(1)||saman.charAt(0)===wrd.charAt(2)||saman.charAt(0)===wrd.charAt(3)){Crows=Crows+1}
if(saman.charAt(1)===wrd.charAt(0)||saman.charAt(1)===wrd.charAt(2)||saman.charAt(1)===wrd.charAt(3)){Crows=Crows+1}
if(saman.charAt(2)===wrd.charAt(0)||saman.charAt(2)===wrd.charAt(3)||saman.charAt(2)===wrd.charAt(0)){Crows=Crows+1}
if(saman.charAt(3)===wrd.charAt(1)||saman.charAt(3)===wrd.charAt(2)||saman.charAt(3)===wrd.charAt(0)){Crows=Crows+1}

if(v.length===4){
for (xD=0;xD<s.length;xD++){
  if(s[xD].includes(saman)){
    break
  }}
//nice

if(xD<s.length){
thak=createElement("h1")
thak.html(v)
thak.position(300,nice)

gaya=createElement("h1")
gaya.html(Brulls)
gaya.position(650,nice)

yaaaRrrRRRRR=createElement("h1")
yaaaRrrRRRRR.html(Crows)
yaaaRrrRRRRR.position(800,nice)
nice=nice+50
}
}
}