jQuery(document).ready(function(a){if("undefined"!=typeof ezTOC){var f=function(b){return a('.ez-toc-widget-container .ez-toc-list a[href="#'+a(b).attr("id")+'"]')};if(0!==a(".ez-toc-widget-container.ez-toc-affix").length){var c=30;"undefined"!=typeof ezTOC.scroll_offset&&(c=ezTOC.scroll_offset);a(ezTOC.affixSelector).stick_in_parent({inner_scrolling:!1,offset_top:parseInt(c)})}a.fn.shrinkTOCWidth=function(){a(this).css({width:"auto",display:"table"});/MSIE 7\./.test(navigator.userAgent)&&a(this).css("width",
"")};if(1==ezTOC.smooth_scroll){var d=hostname=pathname=qs=hash=null;a("body a").click(function(b){hostname=a(this).prop("hostname");pathname=a(this).prop("pathname");qs=a(this).prop("search");hash=a(this).prop("hash");0<pathname.length&&"/"!=pathname.charAt(0)&&(pathname="/"+pathname);window.location.hostname==hostname&&window.location.pathname==pathname&&window.location.search==qs&&""!==hash&&(b=hash.replace(/([ !"$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g,"\\$1"),0<a(b).length?d=hash:(anchor=hash,anchor=
anchor.replace("#",""),d='a[name="'+anchor+'"]',0==a(d).length&&(d="")),"undefined"!=typeof ezTOC.scroll_offset?b=-1*ezTOC.scroll_offset:(b=a("#wpadminbar"),b=0<b.length?b.is(":visible")?-30:0:0),d&&a.smoothScroll({scrollTarget:d,offset:b}))})}if("undefined"!=typeof ezTOC.visibility_hide_by_default){c=a("a.ez-toc-toggle");var e=ezTOC.visibility_hide_by_default;Cookies?1==Cookies.get("ezTOC_hidetoc")?c.data("visible",!1):c.data("visible",!0):c.data("visible",!0);e&&c.data("visible",!1);c.data("visible")||
a("ul.ez-toc-list").hide();c.click(function(b){b.preventDefault();a(this).data("visible")?(a(this).data("visible",!1),Cookies&&(e?Cookies.set("ezTOC_hidetoc",null,{path:"/"}):Cookies.set("ezTOC_hidetoc","1",{expires:30,path:"/"})),a("ul.ez-toc-list").hide("fast")):(a(this).data("visible",!0),Cookies&&(e?Cookies.set("ezTOC_hidetoc","1",{expires:30,path:"/"}):Cookies.set("ezTOC_hidetoc",null,{path:"/"})),a("ul.ez-toc-list").show("fast"))})}a("span.ez-toc-section").waypoint(function(a){f(this.element).toggleClass("active",
"down"===a).toggleClass("active","down"===a).parent().toggleClass("active","down"===a)},{offset:"90%"});a("span.ez-toc-section").waypoint(function(a){f(this.element).toggleClass("active","up"===a).toggleClass("active","up"===a).parent().toggleClass("active","up"===a)},{offset:function(b){var c="undefined"!=typeof ezTOC.scroll_offset?parseInt(ezTOC.scroll_offset):30;b=a(b).height()+c;0===a("#wpadminbar").length&&(b-=30);return parseInt(b)}(this.element)});c=a(".ez-toc-widget-container ul.ez-toc-list li").css("line-height");
a("<style>.ez-toc-widget-container ul.ez-toc-list li::before{line-height:"+c+";height:"+c+"}</style>").appendTo("head")}});
;var ak_js=document.getElementById("ak_js");if(!ak_js){ak_js=document.createElement('input');ak_js.setAttribute('id','ak_js');ak_js.setAttribute('name','ak_js');ak_js.setAttribute('type','hidden');}
else{ak_js.parentNode.removeChild(ak_js);}
ak_js.setAttribute('value',(new Date()).getTime());var commentForm=document.getElementById('commentform');if(commentForm){commentForm.appendChild(ak_js);}
else{var replyRowContainer=document.getElementById('replyrow');if(replyRowContainer){var children=replyRowContainer.getElementsByTagName('td');if(children.length>0){children[0].appendChild(ak_js);}}}