!function(){"use strict";function e(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function t(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}var n=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},i=function(){function i(n){d=n,l=document.getElementById(d.id),c=l.querySelectorAll(".slide"),o=l.querySelectorAll("#"+d.nav_id+" a"),l.className="active carousel";var i=document.createElement("ul");if(i.className="controls",i.innerHTML='<li><button type="button" class="btn-prev">Previous</button></li><li><button type="button" class="btn-next">Next</button></li>',i.querySelector(".btn-prev").addEventListener("click",function(){p=!0,s()}),i.querySelector(".btn-next").addEventListener("click",function(){p=!0,a()}),l.appendChild(i),c[0].parentNode.addEventListener("transitionend",function(n){var i=n.target;e(i,"in-transition"),t(i,"current")&&(i.removeAttribute("aria-live"),p=!1,v&&(i.setAttribute("tabindex","-1"),i.focus(),v=!1))}),d.nav_id)for(var f=l.querySelectorAll("#"+d.nav_id+" a"),b=0;b<f.length;b++)f[b].addEventListener("click",function(e){p=!0,r(e,!1,"prev")}.bind(this,b));u=0,r(u)}function r(t,i,r){v="undefined"!=typeof i?i:!1,r="undefined"!=typeof r?r:"none",t=parseFloat(t);var a=c.length,s=t+1,f=t-1;s===a?s=0:0>f&&(f=a-1);for(var b=0;b<o.length;b++)e(o[b],"current"),t===b&&n(o[b],"current");for(var b=c.length-1;b>=0;b--)e(c[b],"current"),e(c[b],"next"),e(c[b],"prev"),e(c[b],"in-transition");if(n(c[s],"next"),"next"==r&&n(c[s],"in-transition"),c[s].setAttribute("aria-hidden","true"),n(c[f],"prev"),"prev"==r&&n(c[f],"in-transition"),c[f].setAttribute("aria-hidden","true"),n(c[t],"current"),c[t].removeAttribute("aria-hidden"),p&&c[t].setAttribute("aria-live","polite"),d.slidenav){for(var h=l.querySelectorAll(".slidenav button[data-slide]"),m=h.length-1;m>=0;m--)h[m].className="",h[m].innerHTML='<span class="visuallyhidden">News</span> '+(m+1);h[t].className="current",h[t].innerHTML='<span class="visuallyhidden">News</span> '+(t+1)+' <span class="visuallyhidden">(Current Slide)</span>'}u=t}function a(){var e=c.length,t=u+1;t===e&&(t=0),r(t,!1,"prev")}function s(){var e=c.length,t=u-1;0>t&&(t=e-1),r(t,!1,"next")}var l,c,o,u,d,v,p=!1;return{init:i,next:a,prev:s,"goto":r}},r=new i;r.init({id:"carousel",nav_id:"carousel-nav"})}();