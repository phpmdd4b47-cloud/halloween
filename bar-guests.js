!function(){var n={"人類":"https://files.catbox.moe/grijo1.webp","妖精系":"https://files.catbox.moe/z7xj2c.webp","獸人系":"https://files.catbox.moe/nrmmyz.webp",
"不死系":"https://files.catbox.moe/zjiael.webp","妖怪系":"https://files.catbox.moe/6ybiql.webp","惡魔系":"https://files.catbox.moe/l1wnxa.webp",
"異界系":"https://files.catbox.moe/ehjukf.webp","克蘇魯系":"https://files.catbox.moe/wnjm5p.webp"
},e=["種族大類","姓名","種族","年齡","性別","外貌","點單","今晚的線","酒量","手頭","口味偏好","惹怒後果","藏著的事"];function t(n,e,t){var i=document.createElement(n);return e&&(i.className=e),
null!=t&&(i.textContent=t),i}function i(n){n=String(n).replace(/< span[^>]*>✦✦?<\/span>/g,"").replace(/<\/?客人秘密>/g,"\n").replace(/<[^>]*>/g,"")
;for(var t,i=new RegExp("("+e.join("|")+")\\s*[：:]","g"),a=[],d={};t=i.exec(n);)a.push({k:t[1],s:t.index,e:i.lastIndex});return a.forEach(function(e,t){
var i=t+1< a.length?a[t+1].s:n.length;e.k in d||(d[e.k]=n.slice(e.e,i).replace(/\s+/g," ").trim())}),d}window.__gfParse=i,window.__gfBuild=function(e,i){i=i||{}
;var a=t("div","gf"),d=t("div","gf-hd");d.appendChild(t("small","","THE BOUNDARY")),d.appendChild(t("b","","客人檔案")),d.appendChild(t("small","","GUEST FILE")),
a.appendChild(d);var l=t("div","gf-top"),o=t("div","gf-em"),p=t("i"),s=(e["種族大類"]||"").replace(/\s/g,"");n[s]&&(p.style.backgroundImage="url("+n[s]+")"),
o.appendChild(p),l.appendChild(o);var c=t("div","gf-id");c.appendChild(t("div","gf-nm",e["姓名"]||"？？？")),
c.appendChild(t("div","gf-sub",[e["種族"]||"？",e["年齡"]||"？歲",e["性別"]||"？性"].join("・"))),l.appendChild(c),
l.appendChild(t("span","gf-tag",i.tag||(i.no?"NO."+("00"+i.no).slice(-3):"初次來訪"))),a.appendChild(l);var r=t("div","gf-rows")
;[["種族大類","◈"],["外貌","◎"],["點單","🍸"],["今晚的線","✦"]].forEach(function(n){var i=e[n[0]],a=t("div","gf-r"+(i?"":" na"));a.appendChild(t("b","",n[0])),
a.appendChild(t("span","",i||"尚未記錄")),r.appendChild(a)}),a.appendChild(r);var f=t("div","gf-box");[["🥃","酒量",e["酒量"]],["🪙","手頭",e["手頭"]]].forEach(function(n){
var e=t("div","gf-bx");e.appendChild(t("i","",n[0]));var i=t("div");i.appendChild(t("small","",n[1]));var a=n[2]||"？",d=a.match(/^(\d)\s*[\/／]\s*6/)
;i.appendChild(t("b","",d?d[1]+" / 6":a)),e.appendChild(i),f.appendChild(e)}),a.appendChild(f);var h=t("button","gf-sec","🔒 客人秘密 ›");a.appendChild(h)
;var u=t("div","gf-ov"),g=t("div","gf-oh","🔓 客人秘密");return u.appendChild(g),[["口味偏好","🍸"],["惹怒後果","🔥"],["藏著的事","👁"]].forEach(function(n){
var i=t("div","gf-s"+(e[n[0]]?"":" na"));i.appendChild(t("i","",n[1]));var a=t("div");a.appendChild(t("b","",n[0])),a.appendChild(t("span","",e[n[0]]||"尚未得知")),
i.appendChild(a),u.appendChild(i)}),a.appendChild(u),h.addEventListener("click",function(){var n=!u.classList.contains("show")
;n&&(u.style.bottom=a.clientHeight-h.offsetTop+6+"px"),u.classList.toggle("show",n),h.classList.toggle("on",n),h.textContent=n?"🔓 收起秘密 ‹":"🔒 客人秘密 ›"}),a},
clearTimeout(window.__gfT),window.__gfT=setTimeout(function(){var n=[].slice.call(document.querySelectorAll(".gfx:not([data-done])")),e=[]
;n.forEach(function(n){var t=e[e.length-1];t&&t[t.length-1].parentNode===n.parentNode&&function(n,e){for(var t=n.nextSibling;t&&t!==e;){
if(1===t.nodeType&&!/^(BR|P|STYLE|SCRIPT|LINK)$/.test(t.tagName))return!1;if(1===t.nodeType&&"P"===t.tagName&&t.textContent.trim())return!1
;if(3===t.nodeType&&t.textContent.trim())return!1;t=t.nextSibling}return t===e}(t[t.length-1],n)?t.push(n):e.push([n])}),e.forEach(function(n){
n.forEach(function(n){n.setAttribute("data-done","1")});var e=n.map(function(n){return i(n.querySelector("textarea").value)});if(1!==e.length){
n.slice(1).forEach(function(n){n.style.display="none"});var a=t("div","gf-car"),d=t("div","gf-pages"),l=[];e.forEach(function(n,t){var i=window.__gfBuild(n,{
tag:t+1+" / "+e.length});i.classList.add("pg"),t&&i.classList.add("off"),d.appendChild(i),l.push(i)})
;var o=t("div","gf-nav"),p=t("button","gf-ar","‹"),s=t("button","gf-ar","›"),c=t("span","gf-dots");e.forEach(function(n,e){c.appendChild(t("i",e?"":"on"))}),
o.appendChild(p),o.appendChild(c),o.appendChild(s);var r=0;p.addEventListener("click",function(){h(r-1)}),s.addEventListener("click",function(){h(r+1)})
;var f=null;d.addEventListener("touchstart",function(n){f=n.touches[0].clientX},{passive:!0}),d.addEventListener("touchend",function(n){if(null!=f){
var e=n.changedTouches[0].clientX-f;Math.abs(e)>45&&h(r+(e<0?1:-1)),f=null}}),a.appendChild(d),a.appendChild(o),n[0].appendChild(a),
requestAnimationFrame(function(){var n=0;l.forEach(function(e){e.classList.remove("off"),n=Math.max(n,e.offsetHeight)}),l.forEach(function(n,e){
e!==r&&n.classList.add("off")}),d.style.minHeight=n+"px",l.forEach(function(e){e.style.minHeight=n+"px"})})}else n[0].appendChild(window.__gfBuild(e[0],{}))
;function h(n){n=(n+e.length)%e.length,l[r].classList.add("off"),l[n].classList.remove("off"),[].forEach.call(c.children,function(e,t){
e.classList.toggle("on",t===n)}),r=n}})},40)}(),function(){function n(n,e,t){var i=document.createElement(n);return e&&(i.className=e),
null!=t&&(i.textContent=t),i}document.querySelectorAll(".gbx:not([data-done])").forEach(function(e){function t(n){return e.querySelector(n)}
e.setAttribute("data-done","1");var i=String((t(".gbx-raw")||{}).value||"").replace(/<[^>]*>/g,"").split(/【客人】/).map(function(n){return n.trim()
}).filter(function(n){return n&&!/^(無|空)$/.test(n)}).map(function(n){return window.__gfParse(n)}).filter(function(n){return n["姓名"]
}),a=t(".gbx-open"),d=t(".gbx-pn"),l=t(".gbx-body"),o=i.length-1;a.innerHTML="",a.appendChild(n("i","","🗂")),a.appendChild(n("span","","客人檔案")),
i.length&&a.appendChild(n("b","gbx-n",String(i.length))),a.addEventListener("click",function(){var t,p,s=!d.classList.contains("show")
;s&&(t=(e.parentElement||e).getBoundingClientRect(),p=e.getBoundingClientRect(),d.style.left=t.left-p.left+"px",d.style.width=t.width+"px",function(){
if(l.innerHTML="",!i.length){var e=n("div","gbx-none");return e.appendChild(n("div","gbx-ic","🗂")),e.appendChild(n("b","","店裡目前沒有客人")),
e.appendChild(n("small","","有客人坐上吧台後，檔案會出現在這裡。")),void l.appendChild(e)}var t=n("div","gf-pages"),a=[];if(i.forEach(function(n,e){var d=window.__gfBuild(n,{
tag:e+1+" / "+i.length});d.classList.add("in","pg"),e!==o&&d.classList.add("off"),t.appendChild(d),a.push(d)}),l.appendChild(t),i.length>1){
var d=n("div","gf-nav"),p=n("button","gf-ar","‹"),s=n("button","gf-ar","›"),c=n("span","gbx-cnt");function r(){c.textContent=o+1+" / "+i.length}function f(n){
n=(n+i.length)%i.length,a[o].classList.add("off"),a[n].classList.remove("off"),o=n,r()}p.addEventListener("click",function(){f(o-1)}),
s.addEventListener("click",function(){f(o+1)});var h=null;t.addEventListener("touchstart",function(n){h=n.touches[0].clientX},{passive:!0}),
t.addEventListener("touchend",function(n){if(null!=h){var e=n.changedTouches[0].clientX-h;Math.abs(e)>45&&f(o+(e<0?1:-1)),h=null}}),d.appendChild(p),
d.appendChild(c),d.appendChild(s),l.appendChild(d),r()}requestAnimationFrame(function(){var n=0;a.forEach(function(e){e.classList.remove("off"),
n=Math.max(n,e.offsetHeight)}),a.forEach(function(e,t){t!==o&&e.classList.add("off"),e.style.minHeight=n+"px"}),t.style.minHeight=n+"px"})}()),
d.classList.toggle("show",s),a.classList.toggle("on",s)})})}();