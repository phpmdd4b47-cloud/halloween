!function(){function e(e,n,t){var a=document.createElement(e);return n&&(a.className=n),null!=t&&(a.textContent=t),a}
document.querySelectorAll(".mxs:not([data-done])").forEach(function(n){function t(e){return n.querySelector(e)}n.setAttribute("data-done","1");var a=!1,i={}
;addEventListener("message",function(e){e.data&&1===e.data.aichatCard&&"pong"===e.data.action&&!0});try{parent.postMessage({aichatCard:1,action:"ping"},"*")
}catch(e){}async function s(){var e=(t(".mx-raw").value||"").replace(/<[^>]*>/g,"");e&&(i.stat=function(e){var n={open:o(e,"營業"),time:o(e,"時間"),
rating:parseFloat(o(e,"酒吧評價"))||0,rev:"",tip:"",seats:[],myst:[],left:[]},t=o(e,"營收"),a=t.match(/^([\d,]+)\s*[＿_]\s*小費\s*[：:]\s*([\d,]+)/);a?(n.rev=a[1],
n.tip=a[2]):n.rev=t;for(var i=1;i<=4;i++){var s=o(e,"座位"+i);if(s&&!/^空/.test(s)){var l=s.split("｜").map(function(e){return e.trim()}),p=(l[3]||"0/1").split("/")
;n.seats.push({name:l[0],drunk:parseInt(l[1],10)||0,sat:parseInt(l[2],10)||0,ang:parseInt(p[0],10)||0,angMax:parseInt(p[1],10)||1,state:l[4]||""})
}else n.seats.push(null)}var r=o(e,"神秘櫃");r&&!/^(空|無)/.test(r)&&r.split(/[、,，](?![^（(]*[)）])/).forEach(function(e){if(e=e.trim()){
var t=e.match(/^(.*?)(?:[（(](.*)[)）])?\s*(?:[×xX*]\s*(\d+))?$/);t&&n.myst.push({name:t[1].trim(),eff:t[2]||"",n:parseInt(t[3]||"1",10)})}});var h=o(e,"已離開")
;h&&!/^(無|尚無)/.test(h)&&h.split(/[／\/](?![^（(]*[)）])/).forEach(function(e){var t=(e=e.trim()).match(/^(.*?)[（(](.*)[)）]$/);if(t){
var a=t[2].split(/[・·]/).map(function(e){return e.trim()}),i={name:t[1].trim(),cat:"",star:0,time:"",why:"",drink:""};a.forEach(function(e){
d[e]?i.cat=e:/★/.test(e)?i.star=parseFloat(e.replace(/[^\d.]/g,""))||(e.match(/★/g)||[]).length:/^\d{1,2}:\d{2}$/.test(e)?i.time=e:i.why?i.drink=e:i.why=e}),
n.left.push(i)}});return n}(e)),f()}var d={"人類":"https://files.catbox.moe/grijo1.webp","妖精系":"https://files.catbox.moe/z7xj2c.webp",
"獸人系":"https://files.catbox.moe/nrmmyz.webp","不死系":"https://files.catbox.moe/zjiael.webp","妖怪系":"https://files.catbox.moe/6ybiql.webp",
"惡魔系":"https://files.catbox.moe/l1wnxa.webp","異界系":"https://files.catbox.moe/ehjukf.webp","克蘇魯系":"https://files.catbox.moe/wnjm5p.webp"
},l=t(".sb-pn"),p=t(".sb-open"),r={view:"main",mf:"all"};function o(e,n){var t=e.match(new RegExp(n+"\\s*[：:]\\s*([^\\n]*)"));return t?t[1].trim():""}
function h(e){for(var n="",t=1;t<=5;t++)n+=e>=t-.25?"★":"☆";return n}function c(n,t,a,i,s){var d=e("div","sb-br"+(s?" "+s:""))
;d.appendChild(e("span","sb-bl",t+" "+n));var l=e("i"),p=e("b");return p.style.width=(i?Math.min(100,a/i*100):0)+"%",l.appendChild(p),d.appendChild(l),
d.appendChild(e("span","sb-bv",i?a+"/"+i:"—")),d}function f(){var n=t(".sb-body");n.innerHTML="";var a=i.stat;if(a)if("main"===r.view){
var s=e("div","sb-hd"),l=e("div","sb-tt");l.appendChild(e("small","","THE BOUNDARY")),l.appendChild(e("b","","吧台狀態")),s.appendChild(l);var p=e("div","sb-tm")
;p.appendChild(e("span","sb-open-tag"+(/打烊/.test(a.open)?" off":""),/打烊/.test(a.open)?"打烊後":"營業中")),p.appendChild(e("b","",a.time||"--:--")),s.appendChild(p),
n.appendChild(s);var o=e("div","sb-nums");[["營收","$"+(a.rev||0)],["小費","$"+(a.tip||0)]].forEach(function(n){var t=e("div","sb-num")
;t.appendChild(e("small","",n[0])),t.appendChild(e("b","",n[1])),o.appendChild(t)});var v=e("div","sb-num");v.appendChild(e("small","","酒吧評價"))
;var m=e("b","sb-star",h(a.rating));v.appendChild(m),v.appendChild(e("span","sb-rv",a.rating.toFixed(1))),o.appendChild(v),n.appendChild(o)
;var b=e("div","sb-sh");b.appendChild(e("span","","吧台座位")),b.appendChild(e("span","",a.seats.filter(Boolean).length+" / 4 入座")),n.appendChild(b)
;var g=e("div","sb-seats");a.seats.forEach(function(n,t){
var a=n&&n.ang>=n.angMax&&n.ang>0,i=n&&!a&&n.angMax>1&&n.ang>=n.angMax-1,s=e("div","sb-seat"+(n?"":" empty")+(a?" rage":"")+(i?" warm":"")+(n&&n.sat>=4&&!a?" happy":"")),d=e("div","sb-no","#0"+(t+1))
;s.appendChild(d);var l=e("div","sb-mid"),p=e("div","sb-nm",n?n.name:"尚無客人")
;n&&(a?p.appendChild(e("span","sb-bdg w","⚠")):n.sat>=4&&p.appendChild(e("span","sb-bdg c","♛")),n.drunk>=3&&p.appendChild(e("span","sb-bdg d","◎"))),
l.appendChild(p),l.appendChild(e("div","sb-sts","✦ "+(n?n.state||"—":"等待下一位來客"))),s.appendChild(l);var r=e("div","sb-bars")
;r.appendChild(c("醉度","🍸",n?n.drunk:0,n?4:0,n&&n.drunk>=3?"hot":"")),r.appendChild(c("滿意","♥",n?n.sat:0,n?5:0,"")),
r.appendChild(c("怒氣","♨",n?n.ang:0,n?n.angMax:0,a?"hot":i?"warn":"")),s.appendChild(r),g.appendChild(s)}),n.appendChild(g);var C=e("div","sb-acts")
;[["myst","⚗ 神秘櫃",a.myst.length],["left","📖 已離開客人",a.left.length]].forEach(function(n){var t=e("button","sb-btn",n[1]+" "+n[2])
;t.addEventListener("click",function(){r.view=n[0],r.q="",f()}),C.appendChild(t)}),n.appendChild(C)}else{
var w=e("div","sb-sub"),y=e("button","sb-back"+("guests"===r.view||"guest"===r.view?" hid":""),"‹ 返回");if(y.addEventListener("click",function(){
"guests"!==r.view||"gb"!==r.from?(r.view="guest"===r.view?"guests":"main",f()):u()}),w.appendChild(y),
w.appendChild(e("b","","myst"===r.view?"✦ 神秘櫃 ✦":"left"===r.view?"✦ 已離開客人 ✦":"✦ 客人檔案 ✦")),w.appendChild(e("span")),n.appendChild(w),
"guests"===r.view||"guest"===r.view){var x=i.guests||[];if(!x.length){var E=e("div","sb-none");return E.appendChild(e("div","sb-glass","🗂")),
E.appendChild(e("b","","尚無訪客資料")),E.appendChild(e("small","","開始營業後，將會在此記錄來訪的客人。")),void n.appendChild(E)}(null==r.gi||r.gi>=x.length)&&(r.gi=x.length-1)
;var L=e("div","gf-pages sb-car"),k=[];x.forEach(function(e,n){var t=window.__gfBuild(e,{tag:"NO."+("00"+(n+1)).slice(-3)});t.classList.add("in","pg"),
n!==r.gi&&t.classList.add("off"),L.appendChild(t),k.push(t)}),n.appendChild(L)
;var M=e("div","gf-nav"),j=e("button","gf-ar","‹"),q=e("button","gf-ar","›"),I=e("span","sb-pgc");function A(){I.textContent=r.gi+1+" / "+x.length}
function B(e){e=(e+x.length)%x.length,k[r.gi].classList.add("off"),k[e].classList.remove("off"),r.gi=e,A()}j.addEventListener("click",function(){B(r.gi-1)}),
q.addEventListener("click",function(){B(r.gi+1)});var F=null;L.addEventListener("touchstart",function(e){F=e.touches[0].clientX},{passive:!0}),
L.addEventListener("touchend",function(e){if(null!=F){var n=e.changedTouches[0].clientX-F;Math.abs(n)>45&&B(r.gi+(n<0?1:-1)),F=null}}),
x.length>1&&(M.appendChild(j),M.appendChild(I),M.appendChild(q),n.appendChild(M),A()),requestAnimationFrame(function(){var e=0;k.forEach(function(n){
n.classList.remove("off"),e=Math.max(e,n.offsetHeight)}),k.forEach(function(n,t){t!==r.gi&&n.classList.add("off"),n.style.minHeight=e+"px"}),
L.style.minHeight=e+"px"})}else if("myst"===r.view){var H=a.myst.filter(function(e){return e.eff}),$=a.myst.filter(function(e){return!e.eff
}),R=e("div","sb-tabs");[["all","全部",a.myst.length],["known","已知",H.length],["unk","未知",$.length]].forEach(function(n){
var t=e("button","sb-tab"+(r.mf===n[0]?" on":""),n[1]+"（"+n[2]+"）");t.addEventListener("click",function(){r.mf=n[0],f()}),R.appendChild(t)}),n.appendChild(R)
;var T="known"===r.mf?H:"unk"===r.mf?$:a.myst,z=e("div","sb-list");T.length||z.appendChild(e("div","mx-empty","神秘櫃是空的")),T.forEach(function(n){
for(var t=e("div","sb-mi"),a=0,i=0;i< n.name.length;i++)a=(31*a+n.name.charCodeAt(i))%360;var s=e("div","sb-flask","⚗");s.style.color="hsl("+a+",70%,72%)",
s.style.borderColor="hsla("+a+",60%,60%,.5)",t.appendChild(s);var d=e("div","sb-mt"),l=e("div","sb-mn",n.name+" ×"+n.n)
;l.appendChild(e("span","sb-tag"+(n.eff?" k":""),n.eff?"已知":"？？？")),d.appendChild(l),d.appendChild(e("small","",n.eff?"效果："+n.eff:"尚未解析出效果，加進酒裡讓客人喝了才知道。")),
t.appendChild(d),z.appendChild(t)}),n.appendChild(z)}else{var N=e("div","sb-list");if(!a.left.length){var X=e("div","sb-none")
;X.appendChild(e("div","sb-glass","🍸")),X.appendChild(e("b","","今晚尚無客人離開。")),X.appendChild(e("small","","繼續用酒與對話，讓「邊界」更加熱鬧吧。")),N.appendChild(X)}
a.left.forEach(function(n){var t=e("div","sb-lf"),a=e("div","sb-th");d[n.cat]&&(a.style.backgroundImage="url("+d[n.cat]+")"),t.appendChild(a)
;var i=e("div","sb-mt"),s=e("div","sb-mn",n.name),l=e("span","sb-ls",h(n.star)+" "+(n.star?n.star.toFixed(1):""));s.appendChild(l),
n.time&&s.appendChild(e("span","sb-lt",n.time)),i.appendChild(s),i.appendChild(e("small","","離開原因："+(n.why||"—"))),
i.appendChild(e("small","","最後點單："+(n.drink||"—"))),t.appendChild(i),N.appendChild(t)}),n.appendChild(N)}}else n.appendChild(e("div","mx-empty","還沒有營業紀錄"))}
var v=t(".gb-open");function u(){l.classList.remove("show"),p.classList.remove("on"),v.classList.remove("on")}function m(e,t){var a,i,d,o,h
;a=Math.min(window.screen&&window.screen.height||800,window.screen&&window.screen.width>window.screen.height?window.screen.width:99999),
i=Math.round(Math.max(150,Math.min(300,.24*a))),n.style.setProperty("--lh",i+"px"),r.view=e,r.from=t===v?"gb":"sb",r.q="",d=l,
o=(n.parentElement||n).getBoundingClientRect(),h=n.getBoundingClientRect(),d.style.left=o.left-h.left+"px",d.style.right="auto",d.style.width=o.width+"px",
l.classList.add("show"),p.classList.toggle("on",t===p),v.classList.toggle("on",t===v),s()}p.addEventListener("click",function(){
if(l.classList.contains("show")&&p.classList.contains("on"))return u();m("main",p)}),v.addEventListener("click",function(){
if(l.classList.contains("show")&&v.classList.contains("on"))return u();r.gi=null,m("guests",v),v.classList.remove("dot")});var b=t(".nx-open")
;!async function(){}(),b.addEventListener("click",function(){if(!b.disabled){for(var e=[],n=1;n<=24;n++)e.push(n)
;for(var t=[],i=0;i<3;i++)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);var s="【下一夜】\n#謎"+t.join(" 謎");a,
navigator.clipboard?navigator.clipboard.writeText(s).catch(d):d()}function d(){var e=document.createElement("textarea");e.value=s,document.body.appendChild(e),
e.select();try{document.execCommand("copy")}catch(e){}e.remove()}}),async function(){}(),t(".sb-x").addEventListener("click",u)})}();