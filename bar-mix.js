!function(){
var t=[["base","基酒"],["liq","利口酒"],["sweet","甜味"],["sour","酸味"],["bitter","苦味"],["fizz","氣泡"],["spice","香料"],["spec","特殊"],["garn","裝飾"],["myst","神秘櫃"]],e=[["vodka","伏特加","base","#E8EEF2",[5,0,0,0,0],"乾淨",60],["gin","琴酒","base","#DDEBE4",[5,0,0,1,0],"杜松、草本",60],["wrum","白蘭姆","base","#F2EEDF",[5,1,0,0,0],"甘蔗、清爽",60],["drum","黑蘭姆","base","#8A4A1C",[5,2,0,0,0],"焦糖、香料",60],["teq","龍舌蘭","base","#EAD9A0",[5,0,0,0,0],"植物、胡椒",60],["whisky","威士忌","base","#B8732A",[5,1,0,1,0],"橡木、煙燻",70],["brandy","白蘭地","base","#A0521F",[5,1,0,0,0],"葡萄、厚實",70],["sake","清酒","base","#F4F1E6",[2,1,0,0,0],"米香、柔和",50],["kaoliang","高粱","base","#F0EDE4",[5,0,0,0,0],"辛辣、霸道",60],["moon","月光蜜酒","base","#D9E4FF",[3,3,0,0,0],"花蜜、微光",150],["nblood","夜血酒","base","#6E0F1E",[3,0,0,0,0],"鐵鏽、濃郁",150],["dragon","龍息酒","base","#E8501C",[6,0,0,0,0],"灼熱、辛辣",150],["abyss","深淵墨酒","base","#1B2A4A",[4,0,0,3,0],"鹹、深海",150],["kahlua","咖啡酒","liq","#3B2116",[2,3,0,1,0],"咖啡",40],["cointreau","橙酒","liq","#F6E7B8",[3,2,0,0,0],"柑橘",40],["amaretto","杏仁酒","liq","#B5651D",[2,3,0,0,0],"堅果",40],["menthe","薄荷酒","liq","#3FBF7F",[2,3,0,0,0],"清涼",40],["elder","接骨木花酒","liq","#F3EBC8",[2,2,0,0,0],"花香",40],["absinthe","苦艾酒","liq","#9BD06A",[4,0,0,1,0],"茴香",50],["umeshu","梅酒","liq","#D9A441",[2,2,1,0,0],"梅子",40],["osman","桂花釀","liq","#E9B949",[1,2,0,0,0],"桂花",40],["syrup","糖漿","sweet","#F7F3EA",[0,2,0,0,0],"",10],["honey","蜂蜜","sweet","#E3A82B",[0,3,0,0,0],"花香",15],["grena","紅石榴糖漿","sweet","#C21E3A",[0,2,0,0,0],"果香",15],["maple","楓糖","sweet","#B86B25",[0,3,0,0,0],"焦香",15],["vanilla","香草糖漿","sweet","#F1E2C2",[0,2,0,0,0],"香草",15],["molasses","黑糖蜜","sweet","#4A2412",[0,3,0,0,0],"焦糖",15],["lemon","檸檬汁","sour","#F5EC8A",[0,0,3,0,0],"",10],["lime","萊姆汁","sour","#C8E68A",[0,0,3,0,0],"清新",10],["orange","柳橙汁","sour","#F7A531",[0,1,1,0,0],"果香",10],["cran","蔓越莓汁","sour","#B3123A",[0,1,2,0,0],"莓果",10],["pine","鳳梨汁","sour","#F6D55C",[0,2,1,0,0],"熱帶",10],["roselle","洛神","sour","#9E1238",[0,1,2,0,0],"花果",10],["ango","安格仕苦精","bitter","#5A1A10",[0,0,0,3,0],"香料",15],["obitter","柳橙苦精","bitter","#C9661E",[0,0,0,2,0],"柑橘",15],["espresso","濃縮咖啡","bitter","#2B160C",[0,0,0,2,0],"咖啡",15],["oolong","烏龍茶","bitter","#B07A2A",[0,0,0,1,0],"茶香",10],["grass","仙草","bitter","#1F1A16",[0,0,0,1,0],"草本",10],["soda","蘇打水","fizz","#EAF6FA",[0,0,0,0,3],"",10],["tonic","通寧水","fizz","#E6F3F7",[0,0,0,1,3],"",10],["ginger","薑汁汽水","fizz","#EBD38A",[0,1,0,0,2],"辛辣",10],["cola","可樂","fizz","#3A1A0C",[0,2,0,0,2],"",10],["champ","香檳","fizz","#F3E3A6",[1,0,0,0,3],"氣泡、優雅",60],["cinna","肉桂","spice","#9A5B2C",[0,0,0,0,0],"溫暖",10],["pepper","黑胡椒","spice","#3B3330",[0,0,0,0,0],"辛辣",10],["salt","鹽","spice","#F2F2F2",[0,0,0,0,0],"鹹",5],["gingr","生薑","spice","#E3C98A",[0,0,0,0,0],"辛辣、暖",10],["cream","鮮奶油","spec","#FBF6EC",[0,0,0,0,0],"綿密",15],["coco","椰奶","spec","#F7F4EE",[0,1,0,0,0],"椰子",15],["eggw","蛋白","spec","#FFFBF0",[0,0,0,0,0],"綿密泡沫",10],["tomato","番茄汁","spec","#C9351F",[0,0,1,0,0],"鹹、蔬菜",10],["mango","芒果泥","spec","#F9B233",[0,3,0,0,0],"芒果",20],["pumpkin","南瓜泥","spec","#E2771F",[0,1,0,0,0],"南瓜",20],["apple","焦糖蘋果","spec","#C9782A",[0,2,1,0,0],"蘋果、焦糖",20],["aiyu","愛玉","spec","#F3E9A8",[0,0,0,0,0],"清爽",15],["mint","薄荷葉","garn","#3E9B5A",[0,0,0,0,0],"清涼",5],["cherry","酒漬櫻桃","garn","#9E0E22",[0,1,0,0,0],"甜",5],["lpeel","檸檬皮","garn","#F2DF4A",[0,0,0,0,0],"柑橘香",5],["opeel","橙皮","garn","#F08A24",[0,0,0,0,0],"柑橘香",5],["srim","鹽口","garn","#FFFFFF",[0,0,0,0,0],"鹹",5],["grim","糖口","garn","#FFF6E0",[0,1,0,0,0],"甜",5]],a=[["琴通寧",["gin","tonic"]],["莫希托",["wrum","lime","syrup","soda","mint"]],["瑪格麗特",["teq","cointreau","lime"]],["古典雞尾酒",["whisky","syrup","ango"]],["莫斯科騾子",["vodka","ginger","lime"]],["自由古巴",["wrum","cola","lime"]],["血腥瑪麗",["vodka","tomato","lemon"]],["白色俄羅斯",["vodka","kahlua","cream"]],["柯夢波丹",["vodka","cointreau","cran","lime"]],["威士忌酸",["whisky","lemon","syrup"]],["鳳梨可樂達",["wrum","coco","pine"]],["側車",["brandy","cointreau","lemon"]]],n={}
;e.forEach(function(t){n[t[0]]={id:t[0],n:t[1],c:t[2],col:t[3],s:t[4],f:t[5],p:t[6]}});var r=["酒精","甜","酸","苦","氣泡"];function i(t,e,a){
var n=document.createElement(t);return e&&(n.className=e),null!=a&&(n.textContent=a),n}document.querySelectorAll(".mx:not([data-done])").forEach(function(o){
function s(t){return o.querySelector(t)}o.setAttribute("data-done","1");var c=!1,l=!1;addEventListener("message",function(t){
t.data&&1===t.data.aichatCard&&"pong"===t.data.action&&(l=!0)});try{parent.postMessage({aichatCard:1,action:"ping"},"*")}catch(t){}function d(t,e,a){
function n(){if(l)try{return parent.postMessage({aichatCard:1,action:"input.set",text:t},"*"),void e("已填入輸入框，按送出就開始")}catch(t){}!function(t,e,a){function n(){
var n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.select();try{document.execCommand("copy"),e("已複製，貼到輸入框送出")}catch(t){a("請手動輸入")
}n.remove()}navigator.clipboard?navigator.clipboard.writeText(t).then(function(){e("已複製，貼到輸入框送出")},n):n()}(t,e,a)}if(l)return n();try{parent.postMessage({
aichatCard:1,action:"ping"},"*")}catch(t){}setTimeout(n,1e3)}var p={qty:{},layers:[],ice:"冰塊",method:"直調",seat:0,tray:[],cat:"base",tab:"mat",seats:[],myst:[]
},h={};function u(t){var e=0===t.indexOf("m:")?"myst":n[t].c;return"garn"===e?0:"spice"===e?.3:1}function m(t){return 0===t.indexOf("m:")?{n:t.slice(2),
c:"myst",col:"#B48CFF",s:[0,0,0,0,0],f:"",p:0}:n[t]}function f(){var t=0,e=[0,0,0,0,0],r={},i=0,o=0,s=[];Object.keys(p.qty).forEach(function(a){var n=p.qty[a]
;if(n){var c=m(a);s.push(a),o+=n,t+=u(a)*n;for(var l=0;l<5;l++)e[l]+=c.s[l]*n;c.f&&c.f.split("、").forEach(function(t){r[t]=(r[t]||0)+n}),
i+=("myst"===c.c?100:c.p)*n}});var c=Math.max(t,1);e=e.map(function(t){return t/c}),"冰塊"===p.ice&&(e[0]*=.9),"碎冰"===p.ice&&(e[0]*=.75),
"搖盪"===p.method&&(e[0]*=.9,e[4]*=.4),"攪拌"===p.method&&(e[0]*=.95),e=e.map(function(t){return Math.min(5,Math.round(10*t)/10)})
;var l=Object.keys(r).sort(function(t,e){return r[e]-r[t]}).slice(0,4),d="";return a.forEach(function(t){d||t[1].every(function(t){return p.qty[t]>0
})&&s.filter(function(t){return 0!==t.indexOf("m:")&&"base"===n[t].c}).every(function(e){return t[1].indexOf(e)>=0})&&(d=t[0])}),{st:e,tags:l,
price:10*Math.round(i/10),parts:o,vol:t,hit:d}}var v={rocks:{cap:4,top:62,bot:122,path:"M22 60 L78 60 L74 122 Q73 126 69 126 L31 126 Q27 126 26 122 Z"},high:{
cap:8,top:20,bot:122,path:"M30 18 L70 18 L68 122 Q67 126 63 126 L37 126 Q33 126 32 122 Z"},mug:{cap:14,top:28,bot:122,
path:"M16 26 L72 26 L72 120 Q72 126 66 126 L22 126 Q16 126 16 120 Z",handle:"M72 46 Q92 46 92 70 Q92 94 72 94"}};function y(t,e){
var a=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)a.setAttribute(n,e[n]);return a}var g=0;function x(t){
for(var e=s(".mx-gl");e.firstChild;)e.removeChild(e.firstChild);var a=t.vol<=4?"rocks":t.vol<=8?"high":"mug",n=v[a],r=t.vol;if(p.av){
var i=Math.min(1,Math.max(0,(performance.now()-p.av.t0)/p.av.dur)),o=i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;r=p.av.from+(p.av.to-p.av.from)*o,
i<1?(cancelAnimationFrame(g),g=requestAnimationFrame(function(){x(f())})):p.av=null}var c=y("defs",{}),l=y("clipPath",{id:"mxc"+b});l.appendChild(y("path",{
d:n.path})),c.appendChild(l),e.appendChild(c),e.appendChild(y("path",{d:n.path,fill:"rgba(255,255,255,.06)"}));var d=y("g",{"clip-path":"url(#mxc"+b+")"})
;e.appendChild(d);var h,C=n.bot-n.top,E=Math.min(r,n.cap)/n.cap,k=n.bot,w=p.layers.filter(function(t){return u(t.id)>0&&t.n>0});if(w.length){
if("直調"!==p.method){var F=0,A=[0,0,0];w.forEach(function(t){var e=u(t.id)*t.n,a=function(t){return t=t.replace("#",""),
[parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16)]}(m(t.id).col);F+=e;for(var n=0;n<3;n++)A[n]+=a[n]*e});var q=C*E
;d.appendChild(y("rect",{x:0,y:n.bot-q,width:100,height:q+6,fill:(h=A.map(function(t){return t/F}),"#"+h.map(function(t){
return(t=Math.round(Math.max(0,Math.min(255,t))).toString(16)).length<2?"0"+t:t}).join("")),opacity:.88}))}else{var M=w.reduce(function(t,e){
return t+u(e.id)*e.n},0);w.forEach(function(t){var e=C*E*(u(t.id)*t.n/M);k-=e,d.appendChild(y("rect",{x:0,y:k,width:100,height:e+(k+e>=n.bot?6:.6),
fill:m(t.id).col,opacity:.88}))})}var L=n.bot-C*E;if(d.appendChild(y("rect",{x:0,y:L,width:100,height:1.4,fill:"rgba(255,255,255,.35)"})),
"無冰"!==p.ice)for(var B="碎冰"===p.ice?14:3,D="碎冰"===p.ice?5:13,S=0;S< B;S++){var j=24+37*S%52,z=Math.max(n.top+2,L-4)+23*S%Math.max(8,C*E*.6)
;d.appendChild(y("rect",{x:j,y:z,width:D,height:D,rx:2,fill:"rgba(255,255,255,.22)",stroke:"rgba(255,255,255,.55)","stroke-width":.8,
transform:"rotate("+(29*S%40-20)+" "+(j+D/2)+" "+(z+D/2)+")"}))}if(t.st[4]>.6)for(var O=0;O<9;O++){var Q=y("circle",{cx:30+13*O%40,cy:n.bot-4-11*O%10,
r:1+O%2*.6,fill:"rgba(255,255,255,.75)",class:"bub"});Q.style.animationDelay=.2*O+"s",d.appendChild(Q)}if(Object.keys(p.qty).some(function(t){
return 0===t.indexOf("m:")&&p.qty[t]>0}))for(var I=0;I<6;I++)d.appendChild(y("circle",{cx:30+8*I,cy:L+4+I%3*6,r:1.3,fill:"#E8D8FF",opacity:.9,class:"bub"}))}
e.appendChild(y("path",{d:n.path,fill:"none",stroke:"rgba(255,255,255,.6)","stroke-width":1.6})),e.appendChild(y("path",{
d:"M"+("mug"===a?22:"high"===a?35:30)+" "+(n.top+6)+" L"+("mug"===a?22:"high"===a?36:31)+" "+(n.bot-10),stroke:"rgba(255,255,255,.35)","stroke-width":2,
"stroke-linecap":"round"})),n.handle&&e.appendChild(y("path",{d:n.handle,fill:"none",stroke:"rgba(255,255,255,.6)","stroke-width":3}))
;var R="rocks"===a?60:"high"===a?18:26,T="rocks"===a?78:"high"===a?70:72,H="rocks"===a?22:"high"===a?30:16;(p.qty.srim||p.qty.grim)&&e.appendChild(y("line",{
x1:H,y1:R,x2:T,y2:R,stroke:"#fff","stroke-width":2.4,"stroke-dasharray":"1.2 1.6",opacity:.85})),p.qty.mint&&e.appendChild(y("ellipse",{cx:T-8,cy:R-5,rx:7,
ry:3.5,fill:"#3E9B5A",transform:"rotate(-30 "+(T-8)+" "+(R-5)+")"})),p.qty.cherry&&(e.appendChild(y("circle",{cx:H+10,cy:R-4,r:4.5,fill:"#B3122A"})),
e.appendChild(y("path",{d:"M"+(H+10)+" "+(R-8)+" q4 -8 9 -9",stroke:"#4a6b2a","stroke-width":1.2,fill:"none"}))),
(p.qty.lpeel||p.qty.opeel)&&e.appendChild(y("path",{d:"M"+(T-4)+" "+(R-2)+" q8 -2 6 8 q-2 6 4 8",stroke:p.qty.opeel?"#F08A24":"#F2DF4A","stroke-width":2.4,
fill:"none","stroke-linecap":"round"})),t.vol>n.cap&&e.appendChild(y("ellipse",{cx:50,cy:128,rx:30+Math.min(20,3*(t.vol-n.cap)),ry:3,
fill:w.length?m(w[w.length-1].id).col:"#fff",opacity:.6}))}var b=Math.random().toString(36).slice(2,7);function C(t){var e=0;return p.tray.forEach(function(a){
e+=a.myst&&a.myst[t]||0}),(h[t]||0)-e}function E(){var a=f();r.forEach(function(t,e){var n=o.querySelectorAll(".mx-bar")[e]
;n.querySelector("b").style.width=a.st[e]/5*100+"%",n.querySelector(".mx-bv").textContent=a.st[e].toFixed(1)}),s(".mx-parts").textContent=a.parts,
s(".mx-price").textContent=a.price;var n=s(".mx-hit");n.textContent="✦ "+a.hit,n.classList.toggle("show",!!a.hit),
o.querySelectorAll(".mx-tab").forEach(function(t){t.classList.toggle("on",t.getAttribute("data-t")===p.tab)}),
s(".mx-tab[data-t=tray]").textContent="托盤 "+p.tray.length+"/4";var c=s(".mx-body");c.innerHTML="","mat"===p.tab&&c.appendChild(function(){
var a=i("div"),n=i("div","mx-cats");a.appendChild(n),t.forEach(function(t){var e=i("button","mx-cat"+(p.cat===t[0]?" on":""),t[1])
;e.addEventListener("click",function(){p.cat=t[0],E()}),n.appendChild(e)});var o=i("div","mx-list");a.appendChild(o)
;var s="myst"===p.cat?Object.keys(h).map(function(t){return"m:"+t}):e.filter(function(t){return t[2]===p.cat}).map(function(t){return t[0]})
;s.length||o.appendChild(i("div","mx-empty","myst"===p.cat?"神秘櫃是空的":"沒有材料"));return s.forEach(function(t){var e=m(t),a=i("div","mx-row"),n=i("i","mx-dot")
;n.style.background=e.col,a.appendChild(n);var s=i("div","mx-nm",e.n),c=[];"myst"===e.c?c.push("剩 "+C(e.n)+" 份"):(e.s.forEach(function(t,e){t&&c.push(r[e]+t)}),
e.f&&c.push(e.f)),c.length&&s.appendChild(i("small","",c.join("・"))),a.appendChild(s)
;var l=p.qty[t]||0,d=i("button","mx-qb","−"),h=i("span","mx-qn"+(l?" has":""),l),u=i("button","mx-qb","+");d.disabled=!l,
"myst"===e.c&&l>=C(e.n)&&(u.disabled=!0),d.addEventListener("click",function(){F(t,-1)}),u.addEventListener("click",function(){F(t,1)}),a.appendChild(d),
a.appendChild(h),a.appendChild(u),o.appendChild(a)}),a}()),"ice"===p.tab&&c.appendChild(function(){var t=i("div");t.appendChild(i("div","mx-h","✦ 冰"))
;var e=i("div","mx-opts");[["無冰","原汁原味"],["冰塊","標準"],["碎冰","稀釋、冰涼"]].forEach(function(t){var a=i("button","mx-opt"+(p.ice===t[0]?" on":""),t[0])
;a.appendChild(i("small","",t[1])),a.addEventListener("click",function(){p.ice=t[0],E()}),e.appendChild(a)}),t.appendChild(e),
t.appendChild(i("div","mx-h","✦ 手法"));var a=i("div","mx-opts");return[["直調","保留分層"],["攪拌","清澈順口"],["搖盪","綿密、去氣泡"]].forEach(function(t){
var e=i("button","mx-opt"+(p.method===t[0]?" on":""),t[0]);e.appendChild(i("small","",t[1])),e.addEventListener("click",function(){if(p.method=t[0],E(),
"搖盪"===t[0]){var e=s(".mx-gl");e.classList.remove("shake"),e.getBoundingClientRect(),e.classList.add("shake")}}),a.appendChild(e)}),t.appendChild(a),t}()),
"seat"===p.tab&&c.appendChild(function(){for(var t=i("div","mx-seats"),e=0;e<4;e++)(function(e){
var a=p.seats[e]||{},n=i("button","mx-seat"+(p.seat===e?" on":"")+(a.empty?" void":""),a.name||"客席 "+"ABCD"[e])
;n.appendChild(i("small","",a.empty?"空位":a.info||"—")),n.addEventListener("click",function(){p.seat=e,E()}),t.appendChild(n)})(e);return t}()),
"tray"===p.tab&&c.appendChild(function(){var t=i("div","mx-tray");if(!p.tray.length)return t.appendChild(i("div","mx-empty","托盤上還沒有酒")),t
;return p.tray.forEach(function(e,a){var n=i("div","mx-ti"),r=i("div","","給 "+e.to);r.appendChild(i("small","",e.line.split("：").slice(1).join("："))),
n.appendChild(r);var o=i("button","","✕");o.addEventListener("click",function(){p.tray.splice(a,1),M(),E()}),n.appendChild(o),t.appendChild(n)}),t}())
;var l=p.seats[p.seat];s(".mx-who b").textContent=l&&l.name?l.name:"客席 "+"ABCD"[p.seat],s(".mx-serve").disabled=!p.tray.length,
s(".mx-serve").textContent="出酒"+(p.tray.length?"（"+p.tray.length+"）":""),x(a)}function k(t){
var e=s(".mx-st").getBoundingClientRect(),a=s(".mx-gl").getBoundingClientRect(),n=Math.min(a.width/100,a.height/132),r=a.left+(a.width-100*n)/2-e.left,i=a.bottom-132*n-e.top,o=t.vol<=4?"rocks":t.vol<=8?"high":"mug",c=v[o]
;return{s:n,cx:r+50*n,top:i+c.top*n,surf:i+(c.bot-(c.bot-c.top)*Math.min(t.vol,c.cap)/c.cap)*n,rimR:r+("rocks"===o?78:"high"===o?70:72)*n}}function w(t,e,a,n){
var r=document.createElement("div");for(var i in r.className="mx-fx "+e,t&&(r.innerHTML=t),a)r.style[i]=a[i];return s(".mx-st").appendChild(r),
setTimeout(function(){r.remove()},n),r}function F(t,e){var a=(p.qty[t]||0)+e;if(!(a<0)){if(p.qty[t]=a,e>0){var n=p.layers[p.layers.length-1]
;n&&n.id===t?n.n++:p.layers.push({id:t,n:1});var r=f();if(u(t)>0){var i=r.vol<=4?4:r.vol<=8?8:14;p.av={from:Math.min(r.vol-u(t),i),to:r.vol,
t0:performance.now()+260,dur:520
},s=m(t).col,c=k(r),l=c.cx+5,d=c.top-6,w('\x3csvg viewBox="0 0 22 55" width="22" height="55">\x3cpath d="M8 1h6v12c0 2 6 4.5 6 11v28a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V24c0-6.5 6-9 6-11z" fill="rgba(30,22,26,.92)" stroke="rgba(255,240,220,.55)" stroke-width="1.1"/>\x3cpath d="M3 31h16v21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="'+s+'" opacity=".92"/>\x3crect x="7.5" y="0" width="7" height="3.5" rx="1" fill="#C49A63"/>\x3cpath d="M5.5 27v19" stroke="rgba(255,255,255,.35)" stroke-width="1.4" stroke-linecap="round"/>\x3c/svg>',"mx-btl",{
left:l+25.35-11+"px",top:d-10.72-27.5+"px"},1e3),w("","mx-strm",{left:l-2+"px",top:d+"px",height:Math.max(8,c.surf-d)+"px",
background:"linear-gradient(90deg,"+s+"cc,"+s+" 40%,rgba(255,255,255,.75) 55%,"+s+" 70%,"+s+"cc)"},1e3),setTimeout(function(){var t=k(f());w("","mx-rip",{
left:t.cx+5-14+"px",top:t.surf-3+"px",borderColor:"rgba(255,255,255,.7)"},700),w("","mx-rip mx-rip2",{left:t.cx+5-14+"px",top:t.surf-3+"px",borderColor:s},800)
},330)}else"spice"===m(t).c&&function(t){for(var e=k(f()),a=0;a<6;a++)w("","mx-spk",{left:e.cx-12+5*a+"px",top:e.top-26+"px",background:t,
animationDelay:60*a+"ms","--dy":e.surf-e.top+20+"px"},1100)}(m(t).col)}else for(var o=p.layers.length-1;o>=0;o--)if(p.layers[o].id===t){p.layers[o].n--,
p.layers[o].n||p.layers.splice(o,1);break}var s,c,l,d;A(""),E()}}function A(t,e){var a=s(".mx-msg");a.textContent=t,a.classList.toggle("ok",!!e)}
function q(e,a){var n=[];t.forEach(function(t){Object.keys(p.qty).forEach(function(e){var a=p.qty[e];if(a){var r=m(e)
;r.c===t[0]&&n.push(r.n+"×"+a+("myst"===r.c?"（神秘）":""))}})}),n.push(p.ice),n.push(p.method);var i=r.map(function(t,a){return t+e.st[a].toFixed(1)}).join(" ")
;return"給"+a+"："+n.join("、")+"｜"+i+"｜"+(e.tags.join("、")||"無特別風味")+"｜"+e.parts+"份｜"+e.price+"元"+(e.hit?"｜命中："+e.hit:"")}function M(){c}
s(".mx-put").addEventListener("click",function(){var t=f();if(!t.parts)return A("杯子還是空的");if(p.tray.length>=4)return A("托盤滿了，先出酒");var e=p.seats[p.seat]||{}
;if(e.empty)return A("這個座位沒有客人");var a=e.name||"客席 "+"ABCD"[p.seat],n={};Object.keys(p.qty).forEach(function(t){
0===t.indexOf("m:")&&p.qty[t]&&(n[t.slice(2)]=p.qty[t])}),p.tray.push({to:a,line:q(t,a),myst:n}),p.qty={},p.layers=[],M(),A("已放上托盤：給 "+a,!0),E()}),
s(".mx-clear").addEventListener("click",function(){p.qty={},p.layers=[],A(""),E()}),s(".mx-serve").addEventListener("click",function(){
p.tray.length&&d("【出酒】\n"+p.tray.map(function(t){return t.line}).join("\n"),function(t){p.tray=[],A("已填入輸入框，可以在前面加上動作或台詞再送出",!0),E()},function(t){A(t)})}),
o.querySelectorAll(".mx-tab").forEach(function(t){t.addEventListener("click",function(){p.tab=t.getAttribute("data-t"),E()})});var L=s(".mx-open"),B=s(".mx-pn")
;function D(){var t,e,a,n,r
;t=Math.min(window.screen&&window.screen.height||800,window.screen&&window.screen.width>window.screen.height?window.screen.width:99999),
e=Math.round(Math.max(150,Math.min(300,.24*t))),o.style.setProperty("--lh",e+"px"),a=B,n=(o.parentElement||o).getBoundingClientRect(),
r=o.getBoundingClientRect(),a.style.left=n.left-r.left+"px",a.style.right="auto",a.style.width=n.width+"px",B.classList.add("show"),L.classList.add("on"),
async function(){var t=(o=String((s(".mx-raw")||{}).value||"").replace(/<[^>]*>/g,"")).match(/客席\s*[：:]\s*([^\n]*)/),e=t?t[1].split(/[／\/]/):[]
;p.seats=[0,1,2,3].map(function(t){var a=(e[t]||"空").trim();return!a||/^空/.test(a)?{empty:!0}:{name:a,info:""}});var a=o.match(/神秘櫃\s*[：:]\s*([^\n]*)/);h={},
a&&!/^空|^無/.test(a[1].trim())&&a[1].split(/[、,，](?![^（(]*[)）])/).forEach(function(t){var e=(t=t.trim()).match(/^(.*?)(?:[（(].*[)）])?\s*[×xX*]\s*(\d+)$/)
;e?h[e[1].trim()]=parseInt(e[2],10):t&&(h[t.replace(/[（(].*[)）]/,"").trim()]=1)});var n=p.seats.findIndex(function(t){return!t.empty})
;return p.seats[p.seat]&&p.seats[p.seat].empty&&n>=0&&(p.seat=n),void E();try{var r=await tavo.get("bar_tray");Array.isArray(r)&&(p.tray=r)}catch(t){}try{
var i=await tavo.message.find(),o="";p.guests=[],(i||[]).forEach(function(t){
if(t&&"assistant"===t.role)for(var e,a=/<客人檔案>([\s\S]*?)<\/客人檔案>/g;e=a.exec(String(t.content||""));){var n=window.__gfParse(e[1]);n["姓名"]&&p.guests.push(n)}})
;for(var c=(i||[]).length-1;c>=0;c--){var l=i[c];if(l&&"assistant"===l.role&&/\[\[吧台狀態\]\]/.test(l.content||"")){
o=String(l.content).match(/\[\[吧台狀態\]\]([\s\S]*?)\[\[\/吧台狀態\]\]/)[1];break}}if(o){p.stat=parseStat(o),p.seats=[1,2,3,4].map(function(t){
var e=o.match(new RegExp("座位"+t+"\\s*[：:]\\s*([^\\n]*)")),a=e?e[1].trim():"空";if(!a||/^空/.test(a))return{empty:!0};var n=a.split("｜");return{name:n[0].trim(),
info:n.slice(1).length?"醉"+(n[1]||"?")+"・滿意"+(n[2]||"?")+"・怒"+(n[3]||"?")+(n[4]?"・"+n[4]:""):""}});a=o.match(/神秘櫃\s*[：:]\s*([^\n]*)/);h={},
a&&!/^空|^無/.test(a[1].trim())&&a[1].split(/[、,，](?![^（(]*[)）])/).forEach(function(t){var e=(t=t.trim()).match(/^(.*?)(?:[（(].*[)）])?\s*[×xX*]\s*(\d+)$/)
;e?h[e[1].trim()]=parseInt(e[2],10):t&&(h[t.replace(/[（(].*[)）]/,"").trim()]=1)});n=p.seats.findIndex(function(t){return!t.empty})
;p.seats[p.seat]&&p.seats[p.seat].empty&&n>=0&&(p.seat=n)}}catch(t){}E(),renderStatus()}()}function S(){B.classList.remove("show"),L.classList.remove("on")}
L.addEventListener("click",function(){B.classList.contains("show")?S():D()}),s(".mx-x2").addEventListener("click",S),
s(".mx-who").addEventListener("click",function(){p.tab="seat",E()});var j=s(".nx2");if(j){
var z=String((s(".mx-raw")||{}).value||"").match(/營業\s*[：:]\s*([^\n]*)/);z&&/打烊/.test(z[1])&&(j.disabled=!1),j.addEventListener("click",function(){
if(!j.disabled){for(var t=[],e=1;e<=24;e++)t.push(e);for(var a=[],n=0;n<3;n++)a.push(t.splice(Math.floor(Math.random()*t.length),1)[0])
;d("【下一夜】\n#謎"+a.join(" 謎"),function(){j.disabled=!0},function(){})}})}E()})}();