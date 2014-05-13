!function(a){a.fn.hoverIntent=function(b,c,d){var e={interval:100,sensitivity:7,timeout:0};e="object"==typeof b?a.extend(e,b):a.isFunction(c)?a.extend(e,{over:b,out:c,selector:d}):a.extend(e,{over:b,out:b,selector:c});var f,g,h,i,j=function(a){f=a.pageX,g=a.pageY},k=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.abs(h-f)+Math.abs(i-g)<e.sensitivity?(a(c).off("mousemove.hoverIntent",j),c.hoverIntent_s=1,e.over.apply(c,[b])):(h=f,i=g,c.hoverIntent_t=setTimeout(function(){k(b,c)},e.interval),void 0)},l=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=0,e.out.apply(b,[a])},m=function(b){var c=jQuery.extend({},b),d=this;d.hoverIntent_t&&(d.hoverIntent_t=clearTimeout(d.hoverIntent_t)),"mouseenter"==b.type?(h=c.pageX,i=c.pageY,a(d).on("mousemove.hoverIntent",j),1!=d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){k(c,d)},e.interval))):(a(d).off("mousemove.hoverIntent",j),1==d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){l(c,d)},e.timeout)))};return this.on({"mouseenter.hoverIntent":m,"mouseleave.hoverIntent":m},e.selector)}}(jQuery);
var showNotice,adminMenu,columns,validateForm,screenMeta;!function(a,b){adminMenu={init:function(){},fold:function(){},restoreMenuState:function(){},toggle:function(){},favorites:function(){}},columns={init:function(){var b=this;a(".hide-column-tog","#adv-settings").click(function(){var c=a(this),d=c.val();c.prop("checked")?b.checked(d):b.unchecked(d),columns.saveManageColumnsState()})},saveManageColumnsState:function(){var b=this.hidden();a.post(ajaxurl,{action:"hidden-columns",hidden:b,screenoptionnonce:a("#screenoptionnonce").val(),page:pagenow})},checked:function(b){a(".column-"+b).show(),this.colSpanChange(1)},unchecked:function(b){a(".column-"+b).hide(),this.colSpanChange(-1)},hidden:function(){return a(".manage-column").filter(":hidden").map(function(){return this.id}).get().join(",")},useCheckboxesForHidden:function(){this.hidden=function(){return a(".hide-column-tog").not(":checked").map(function(){var a=this.id;return a.substring(a,a.length-5)}).get().join(",")}},colSpanChange:function(b){var c,d=a("table").find(".colspanchange");d.length&&(c=parseInt(d.attr("colspan"),10)+b,d.attr("colspan",c.toString()))}},a(document).ready(function(){columns.init()}),validateForm=function(b){return!a(b).find(".form-required").filter(function(){return""===a("input:visible",this).val()}).addClass("form-invalid").find("input:visible").change(function(){a(this).closest(".form-invalid").removeClass("form-invalid")}).size()},showNotice={warn:function(){var a=commonL10n.warnDelete||"";return confirm(a)?!0:!1},note:function(a){alert(a)}},screenMeta={element:null,toggles:null,page:null,init:function(){this.element=a("#screen-meta"),this.toggles=a(".screen-meta-toggle a"),this.page=a("#wpcontent"),this.toggles.click(this.toggleEvent)},toggleEvent:function(b){var c=a(this.href.replace(/.+#/,"#"));b.preventDefault(),c.length&&(c.is(":visible")?screenMeta.close(c,a(this)):screenMeta.open(c,a(this)))},open:function(b,c){a(".screen-meta-toggle").not(c.parent()).css("visibility","hidden"),b.parent().show(),b.slideDown("fast",function(){b.focus(),c.addClass("screen-meta-active").attr("aria-expanded",!0)})},close:function(b,c){b.slideUp("fast",function(){c.removeClass("screen-meta-active").attr("aria-expanded",!1),a(".screen-meta-toggle").css("visibility",""),b.parent().hide()})}},a(".contextual-help-tabs").delegate("a","click focus",function(b){var c,d=a(this);return b.preventDefault(),d.is(".active a")?!1:(a(".contextual-help-tabs .active").removeClass("active"),d.parent("li").addClass("active"),c=a(d.attr("href")),a(".help-tab-content").not(c).removeClass("active").hide(),void c.addClass("active").show())}),a(document).ready(function(){var c,d,e,f,g,h,i,j,k=!1,l=a("#adminmenu"),m=a("input.current-page"),n=m.val();l.on("click.wp-submenu-head",".wp-submenu-head",function(b){a(b.target).parent().siblings("a").get(0).click()}),a("#collapse-menu").on("click.collapse-menu",function(){var c,d=a(document.body);a("#adminmenu div.wp-submenu").css("margin-top",""),c=b.innerWidth?Math.max(b.innerWidth,document.documentElement.clientWidth):901,c&&900>c?d.hasClass("auto-fold")?(d.removeClass("auto-fold").removeClass("folded"),setUserSetting("unfold",1),setUserSetting("mfold","o")):(d.addClass("auto-fold"),setUserSetting("unfold",0)):d.hasClass("folded")?(d.removeClass("folded"),setUserSetting("mfold","o")):(d.addClass("folded"),setUserSetting("mfold","f"))}),("ontouchstart"in b||/IEMobile\/[1-9]/.test(navigator.userAgent))&&(h=/Mobile\/.+Safari/.test(navigator.userAgent)?"touchstart":"click",a(document.body).on(h+".wp-mobile-hover",function(b){l.data("wp-responsive")||a(b.target).closest("#adminmenu").length||l.find("li.wp-has-submenu.opensub").removeClass("opensub")}),l.find("a.wp-has-submenu").on(h+".wp-mobile-hover",function(c){var d,e,f,g,h,i,j,k=a(this),m=k.parent(),n=m.find(".wp-submenu");l.data("wp-responsive")||m.hasClass("opensub")||m.hasClass("wp-menu-open")&&!(m.width()<40)||(c.preventDefault(),h=m.offset().top,i=a(b).scrollTop(),j=h-i-30,d=h+n.height()+1,e=a("#wpwrap").height(),f=60+d-e,g=a(b).height()+i-50,d-f>g&&(f=d-g),f>j&&(f=j),f>1?n.css("margin-top","-"+f+"px"):n.css("margin-top",""),l.find("li.opensub").removeClass("opensub"),m.addClass("opensub"))})),l.find("li.wp-has-submenu").hoverIntent({over:function(){var c,d,e,f,g,h,i,j=a(this).find(".wp-submenu"),k=parseInt(j.css("top"),10);isNaN(k)||k>-5||l.data("wp-responsive")||(g=a(this).offset().top,h=a(b).scrollTop(),i=g-h-30,c=g+j.height()+1,d=a("#wpwrap").height(),e=60+c-d,f=a(b).height()+h-15,c-e>f&&(e=c-f),e>i&&(e=i),e>1?j.css("margin-top","-"+e+"px"):j.css("margin-top",""),l.find("li.menu-top").removeClass("opensub"),a(this).addClass("opensub"))},out:function(){l.data("wp-responsive")||a(this).removeClass("opensub").find(".wp-submenu").css("margin-top","")},timeout:200,sensitivity:7,interval:90}),l.on("focus.adminmenu",".wp-submenu a",function(b){l.data("wp-responsive")||a(b.target).closest("li.menu-top").addClass("opensub")}).on("blur.adminmenu",".wp-submenu a",function(b){l.data("wp-responsive")||a(b.target).closest("li.menu-top").removeClass("opensub")}),a("div.wrap h2:first").nextAll("div.updated, div.error").addClass("below-h2"),a("div.updated, div.error").not(".below-h2, .inline").insertAfter(a("div.wrap h2:first")),screenMeta.init(),a("tbody").children().children(".check-column").find(":checkbox").click(function(b){if("undefined"==b.shiftKey)return!0;if(b.shiftKey){if(!k)return!0;c=a(k).closest("form").find(":checkbox"),d=c.index(k),e=c.index(this),f=a(this).prop("checked"),d>0&&e>0&&d!=e&&(g=e>d?c.slice(d,e):c.slice(e,d),g.prop("checked",function(){return a(this).closest("tr").is(":visible")?f:!1}))}k=this;var h=a(this).closest("tbody").find(":checkbox").filter(":visible").not(":checked");return a(this).closest("table").children("thead, tfoot").find(":checkbox").prop("checked",function(){return 0===h.length}),!0}),a("thead, tfoot").find(".check-column :checkbox").on("click.wp-toggle-checkboxes",function(b){var c=a(this),d=c.closest("table"),e=c.prop("checked"),f=b.shiftKey||c.data("wp-toggle");d.children("tbody").filter(":visible").children().children(".check-column").find(":checkbox").prop("checked",function(){return a(this).is(":hidden")?!1:f?!a(this).prop("checked"):e?!0:!1}),d.children("thead,  tfoot").filter(":visible").children().children(".check-column").find(":checkbox").prop("checked",function(){return f?!1:e?!0:!1})}),a("td.post-title, td.title, td.comment, .bookmarks td.column-name, td.blogname, td.username, .dashboard-comment-wrap").focusin(function(){clearTimeout(i),j=a(this).find(".row-actions"),j.addClass("visible")}).focusout(function(){i=setTimeout(function(){j.removeClass("visible")},30)}),a("#default-password-nag-no").click(function(){return setUserSetting("default_password_nag","hide"),a("div.default-password-nag").hide(),!1}),a("#newcontent").bind("keydown.wpevent_InsertTab",function(b){var c,d,e,f,g,h=b.target;if(27==b.keyCode)return void a(h).data("tab-out",!0);if(!(9!=b.keyCode||b.ctrlKey||b.altKey||b.shiftKey)){if(a(h).data("tab-out"))return void a(h).data("tab-out",!1);c=h.selectionStart,d=h.selectionEnd,e=h.value;try{this.lastKey=9}catch(i){}document.selection?(h.focus(),g=document.selection.createRange(),g.text="	"):c>=0&&(f=this.scrollTop,h.value=e.substring(0,c).concat("	",e.substring(d)),h.selectionStart=h.selectionEnd=c+1,this.scrollTop=f),b.stopPropagation&&b.stopPropagation(),b.preventDefault&&b.preventDefault()}}),a("#newcontent").bind("blur.wpevent_InsertTab",function(){this.lastKey&&9==this.lastKey&&this.focus()}),m.length&&m.closest("form").submit(function(){-1==a('select[name="action"]').val()&&-1==a('select[name="action2"]').val()&&m.val()==n&&m.val("1")}),a('.search-box input[type="search"], .search-box input[type="submit"]').mousedown(function(){a('select[name^="action"]').val("-1")}),a("#contextual-help-link, #show-settings-link").on("focus.scroll-into-view",function(a){a.target.scrollIntoView&&a.target.scrollIntoView(!1)}),function(){function b(){c.prop("disabled",""===d.map(function(){return a(this).val()}).get().join(""))}var c,d,e=a("form.wp-upload-form");e.length&&(c=e.find('input[type="submit"]'),d=e.find('input[type="file"]'),b(),d.on("change",b))}()}),function(){function c(){a(document).trigger("wp-window-resized")}function d(){b.clearTimeout(e),e=b.setTimeout(c,200)}var e;a(b).on("resize.wp-fire-once",d)}(),a(document).ready(function(){var c=a(document),d=a(b),e=a(document.body),f=a("#adminmenuwrap"),g=a("#collapse-menu"),h=a("#wpwrap"),i=a("#adminmenu"),j=a("#wp-responsive-overlay"),k=a("#wp-toolbar"),l=k.find('a[aria-haspopup="true"]'),m=a(".meta-box-sortables"),n=!1,o=!1;b.stickyMenu={enable:function(){n||(c.on("wp-window-resized.sticky-menu",a.proxy(this.update,this)),g.on("click.sticky-menu",a.proxy(this.update,this)),this.update(),n=!0)},disable:function(){n&&(d.off("resize.sticky-menu"),g.off("click.sticky-menu"),e.removeClass("sticky-menu"),n=!1)},update:function(){d.height()>f.height()+32?e.hasClass("sticky-menu")||e.addClass("sticky-menu"):e.hasClass("sticky-menu")&&e.removeClass("sticky-menu")}},b.wpResponsive={init:function(){var e=this,f=0;c.on("wp-responsive-activate.wp-responsive",function(){e.activate()}).on("wp-responsive-deactivate.wp-responsive",function(){e.deactivate()}),a("#wp-admin-bar-menu-toggle a").attr("aria-expanded","false"),a("#wp-admin-bar-menu-toggle").on("click.wp-responsive",function(b){b.preventDefault(),h.toggleClass("wp-responsive-open"),h.hasClass("wp-responsive-open")?(a(this).find("a").attr("aria-expanded","true"),a("#adminmenu a:first").focus()):a(this).find("a").attr("aria-expanded","false")}),i.on("touchstart.wp-responsive","li.wp-has-submenu > a",function(){f=d.scrollTop()}).on("touchend.wp-responsive click.wp-responsive","li.wp-has-submenu > a",function(b){!i.data("wp-responsive")||"touchend"===b.type&&d.scrollTop()!==f||(a(this).parent("li").toggleClass("selected"),b.preventDefault())}),e.trigger(),c.on("wp-window-resized.wp-responsive",a.proxy(this.trigger,this)),d.on("load.wp-responsive",function(){var a=navigator.userAgent.indexOf("AppleWebKit/")>-1?d.width():b.innerWidth;782>=a&&e.disableSortables()})},activate:function(){b.stickyMenu.disable(),e.hasClass("auto-fold")||e.addClass("auto-fold"),i.data("wp-responsive",1),this.disableSortables()},deactivate:function(){b.stickyMenu.enable(),i.removeData("wp-responsive"),this.enableSortables()},trigger:function(){var a;b.innerWidth&&(a=Math.max(b.innerWidth,document.documentElement.clientWidth),782>=a?o||(c.trigger("wp-responsive-activate"),o=!0):o&&(c.trigger("wp-responsive-deactivate"),o=!1),480>=a?this.enableOverlay():this.disableOverlay())},enableOverlay:function(){0===j.length&&(j=a('<div id="wp-responsive-overlay"></div>').insertAfter("#wpcontent").hide().on("click.wp-responsive",function(){k.find(".menupop.hover").removeClass("hover"),a(this).hide()})),l.on("click.wp-responsive",function(){j.show()})},disableOverlay:function(){l.off("click.wp-responsive"),j.hide()},disableSortables:function(){if(m.length)try{m.sortable("disable")}catch(a){}},enableSortables:function(){if(m.length)try{m.sortable("enable")}catch(a){}}},b.stickyMenu.enable(),b.wpResponsive.init()}),function(){if("-ms-user-select"in document.documentElement.style&&navigator.userAgent.match(/IEMobile\/10\.0/)){var a=document.createElement("style");a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.getElementsByTagName("head")[0].appendChild(a)}}()}(jQuery,window);
"undefined"!=typeof jQuery?("undefined"==typeof jQuery.fn.hoverIntent&&!function(a){a.fn.hoverIntent=function(b,c,d){var e={interval:100,sensitivity:7,timeout:0};e="object"==typeof b?a.extend(e,b):a.isFunction(c)?a.extend(e,{over:b,out:c,selector:d}):a.extend(e,{over:b,out:b,selector:c});var f,g,h,i,j=function(a){f=a.pageX,g=a.pageY},k=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.abs(h-f)+Math.abs(i-g)<e.sensitivity?(a(c).off("mousemove.hoverIntent",j),c.hoverIntent_s=1,e.over.apply(c,[b])):(h=f,i=g,c.hoverIntent_t=setTimeout(function(){k(b,c)},e.interval),void 0)},l=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=0,e.out.apply(b,[a])},m=function(b){var c=jQuery.extend({},b),d=this;d.hoverIntent_t&&(d.hoverIntent_t=clearTimeout(d.hoverIntent_t)),"mouseenter"==b.type?(h=c.pageX,i=c.pageY,a(d).on("mousemove.hoverIntent",j),1!=d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){k(c,d)},e.interval))):(a(d).off("mousemove.hoverIntent",j),1==d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){l(c,d)},e.timeout)))};return this.on({"mouseenter.hoverIntent":m,"mouseleave.hoverIntent":m},e.selector)}}(jQuery),jQuery(document).ready(function(a){var b,c,d,e=a("#wpadminbar"),f=!1;b=function(b,c){var d=a(c),e=d.attr("tabindex");e&&d.attr("tabindex","0").attr("tabindex",e)},c=function(b){e.find("li.menupop").on("click.wp-mobile-hover",function(c){var d=a(this);d.parent().is("#wp-admin-bar-root-default")&&!d.hasClass("hover")?(c.preventDefault(),e.find("li.menupop.hover").removeClass("hover"),d.addClass("hover")):d.hasClass("hover")||(c.stopPropagation(),c.preventDefault(),d.addClass("hover")),b&&(a("li.menupop").off("click.wp-mobile-hover"),f=!1)})},d=function(){var b=/Mobile\/.+Safari/.test(navigator.userAgent)?"touchstart":"click";a(document.body).on(b+".wp-mobile-hover",function(b){a(b.target).closest("#wpadminbar").length||e.find("li.menupop.hover").removeClass("hover")})},e.removeClass("nojq").removeClass("nojs"),"ontouchstart"in window?(e.on("touchstart",function(){c(!0),f=!0}),d()):/IEMobile\/[1-9]/.test(navigator.userAgent)&&(c(),d()),e.find("li.menupop").hoverIntent({over:function(){f||a(this).addClass("hover")},out:function(){f||a(this).removeClass("hover")},timeout:180,sensitivity:7,interval:100}),window.location.hash&&window.scrollBy(0,-32),a("#wp-admin-bar-get-shortlink").click(function(b){b.preventDefault(),a(this).addClass("selected").children(".shortlink-input").blur(function(){a(this).parents("#wp-admin-bar-get-shortlink").removeClass("selected")}).focus().select()}),a("#wpadminbar li.menupop > .ab-item").bind("keydown.adminbar",function(c){if(13==c.which){var d=a(c.target),e=d.closest("ab-sub-wrapper");c.stopPropagation(),c.preventDefault(),e.length||(e=a("#wpadminbar .quicklinks")),e.find(".menupop").removeClass("hover"),d.parent().toggleClass("hover"),d.siblings(".ab-sub-wrapper").find(".ab-item").each(b)}}).each(b),a("#wpadminbar .ab-item").bind("keydown.adminbar",function(c){if(27==c.which){var d=a(c.target);c.stopPropagation(),c.preventDefault(),d.closest(".hover").removeClass("hover").children(".ab-item").focus(),d.siblings(".ab-sub-wrapper").find(".ab-item").each(b)}}),a("#wpadminbar").click(function(b){("wpadminbar"==b.target.id||"wp-admin-bar-top-secondary"==b.target.id)&&(b.preventDefault(),a("html, body").animate({scrollTop:0},"fast"))}),a(".screen-reader-shortcut").keydown(function(b){var c,d;13==b.which&&(c=a(this).attr("href"),d=navigator.userAgent.toLowerCase(),-1!=d.indexOf("applewebkit")&&c&&"#"==c.charAt(0)&&setTimeout(function(){a(c).focus()},100))}),"sessionStorage"in window&&a("#wp-admin-bar-logout a").click(function(){try{for(var a in sessionStorage)-1!=a.indexOf("wp-autosave-")&&sessionStorage.removeItem(a)}catch(b){}}),navigator.userAgent&&-1===document.body.className.indexOf("no-font-face")&&/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test(navigator.userAgent)&&(document.body.className+=" no-font-face")})):!function(a,b){var c,d=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,function(){return c.call(a,window.event)})},e=new RegExp("\\bhover\\b","g"),f=[],g=new RegExp("\\bselected\\b","g"),h=function(a){for(var b=f.length;b--;)if(f[b]&&a==f[b][1])return f[b][0];return!1},i=function(b){for(var d,i,j,k,l,m,n=[],o=0;b&&b!=c&&b!=a;)"LI"==b.nodeName.toUpperCase()&&(n[n.length]=b,i=h(b),i&&clearTimeout(i),b.className=b.className?b.className.replace(e,"")+" hover":"hover",k=b),b=b.parentNode;if(k&&k.parentNode&&(l=k.parentNode,l&&"UL"==l.nodeName.toUpperCase()))for(d=l.childNodes.length;d--;)m=l.childNodes[d],m!=k&&(m.className=m.className?m.className.replace(g,""):"");for(d=f.length;d--;){for(j=!1,o=n.length;o--;)n[o]==f[d][1]&&(j=!0);j||(f[d][1].className=f[d][1].className?f[d][1].className.replace(e,""):"")}},j=function(b){for(;b&&b!=c&&b!=a;)"LI"==b.nodeName.toUpperCase()&&!function(a){var b=setTimeout(function(){a.className=a.className?a.className.replace(e,""):""},500);f[f.length]=[b,a]}(b),b=b.parentNode},k=function(b){for(var d,e,f,h=b.target||b.srcElement;;){if(!h||h==a||h==c)return;if(h.id&&"wp-admin-bar-get-shortlink"==h.id)break;h=h.parentNode}for(b.preventDefault&&b.preventDefault(),b.returnValue=!1,-1==h.className.indexOf("selected")&&(h.className+=" selected"),d=0,e=h.childNodes.length;e>d;d++)if(f=h.childNodes[d],f.className&&-1!=f.className.indexOf("shortlink-input")){f.focus(),f.select(),f.onblur=function(){h.className=h.className?h.className.replace(g,""):""};break}return!1},l=function(a){var b,c,d,e,f,g;if(!("wpadminbar"!=a.id&&"wp-admin-bar-top-secondary"!=a.id||(b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,1>b)))for(g=b>800?130:100,c=Math.min(12,Math.round(b/g)),d=Math.round(b>800?b/30:b/20),e=[],f=0;b;)b-=d,0>b&&(b=0),e.push(b),setTimeout(function(){window.scrollTo(0,e.shift())},f*c),f++};d(b,"load",function(){c=a.getElementById("wpadminbar"),a.body&&c&&(a.body.appendChild(c),c.className&&(c.className=c.className.replace(/nojs/,"")),d(c,"mouseover",function(a){i(a.target||a.srcElement)}),d(c,"mouseout",function(a){j(a.target||a.srcElement)}),d(c,"click",k),d(c,"click",function(a){l(a.target||a.srcElement)}),d(document.getElementById("wp-admin-bar-logout"),"click",function(){if("sessionStorage"in window)try{for(var a in sessionStorage)-1!=a.indexOf("wp-autosave-")&&sessionStorage.removeItem(a)}catch(b){}})),b.location.hash&&b.scrollBy(0,-32),navigator.userAgent&&-1===document.body.className.indexOf("no-font-face")&&/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test(navigator.userAgent)&&(document.body.className+=" no-font-face")})}(document,window);
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

if ( typeof tb_pathToImage != 'string' ) {
	var tb_pathToImage = thickboxL10n.loadingAnimation;
}

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
jQuery(document).ready(function(){
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	jQuery('body').on('click', domChunk, tb_click);
}

function tb_click(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			jQuery("body","html").css({height: "100%", width: "100%"});
			jQuery("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}

		if(tb_detectMacXFF()){
			jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			jQuery("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}

		if(caption===null){caption="";}
		jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' width='208' /></div>");//add loader to the page
		jQuery('#TB_load').show();//show loader

		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{
	   		baseURL = url;
	   }

	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images

			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = jQuery("a[rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){
			imgPreloader.onload = null;

			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth);
				imageWidth = x;
				if (imageHeight > y) {
					imageWidth = imageWidth * (y / imageHeight);
					imageHeight = y;
				}
			} else if (imageHeight > y) {
				imageWidth = imageWidth * (y / imageHeight);
				imageHeight = y;
				if (imageWidth > x) {
					imageHeight = imageHeight * (x / imageWidth);
					imageWidth = x;
				}
			}
			// End Resizing

			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			jQuery("#TB_window").append("<a href='' id='TB_ImageOff' title='"+thickboxL10n.close+"'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div>");

			jQuery("#TB_closeWindowButton").click(tb_remove);

			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if(jQuery(document).unbind("click",goPrev)){jQuery(document).unbind("click",goPrev);}
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;
				}
				jQuery("#TB_prev").click(goPrev);
			}

			if (!(TB_NextHTML === "")) {
				function goNext(){
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);
					return false;
				}
				jQuery("#TB_next").click(goNext);

			}

			jQuery(document).bind('keydown.thickbox', function(e){
				if ( e.which == 27 ){ // close
					tb_remove();

				} else if ( e.which == 190 ){ // display previous image
					if(!(TB_NextHTML == "")){
						jQuery(document).unbind('thickbox');
						goNext();
					}
				} else if ( e.which == 188 ){ // display next image
					if(!(TB_PrevHTML == "")){
						jQuery(document).unbind('thickbox');
						goPrev();
					}
				}
				return false;
			});

			tb_position();
			jQuery("#TB_load").remove();
			jQuery("#TB_ImageOff").click(tb_remove);
			jQuery("#TB_window").css({'visibility':'visible'}); //for safari using css instead of show
			};

			imgPreloader.src = url;
		}else{//code to show html

			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 45;

			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window
					urlNoQuery = url.split('TB_');
					jQuery("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' >"+thickboxL10n.noiframes+"</iframe>");
					}else{//iframe modal
					jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'>"+thickboxL10n.noiframes+"</iframe>");
					}
			}else{// not an iframe, ajax
					if(jQuery("#TB_window").css("visibility") != "visible"){
						if(params['modal'] != "true"){//ajax no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><div class='tb-close-icon'></div></a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						jQuery("#TB_ajaxContent")[0].scrollTop = 0;
						jQuery("#TB_ajaxWindowTitle").html(caption);
					}
			}

			jQuery("#TB_closeWindowButton").click(tb_remove);

				if(url.indexOf('TB_inline') != -1){
					jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
					jQuery("#TB_window").bind('tb_unload', function () {
						jQuery('#' + params['inlineId']).append( jQuery("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else{
					jQuery("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						jQuery("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						jQuery("#TB_window").css({'visibility':'visible'});
					});
				}

		}

		if(!params['modal']){
			jQuery(document).bind('keydown.thickbox', function(e){
				if ( e.which == 27 ){ // close
					tb_remove();
					return false;
				}
			});
		}

	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	jQuery("#TB_load").remove();
	jQuery("#TB_window").css({'visibility':'visible'});
}

function tb_remove() {
 	jQuery("#TB_imageOff").unbind("click");
	jQuery("#TB_closeWindowButton").unbind("click");
	jQuery("#TB_window").fadeOut("fast",function(){jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove();});
	jQuery("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		jQuery("body","html").css({height: "auto", width: "auto"});
		jQuery("html").css("overflow","");
	}
	jQuery(document).unbind('.thickbox');
	return false;
}

function tb_position() {
var isIE6 = typeof document.body.style.maxHeight === "undefined";
jQuery("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( ! isIE6 ) { // take away IE6
		jQuery("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}

(function(){var a=this,b=a._,c={},d=Array.prototype,e=Object.prototype,f=Function.prototype,g=d.push,h=d.slice,i=d.concat,j=e.toString,k=e.hasOwnProperty,l=d.forEach,m=d.map,n=d.reduce,o=d.reduceRight,p=d.filter,q=d.every,r=d.some,s=d.indexOf,t=d.lastIndexOf,u=Array.isArray,v=Object.keys,w=f.bind,x=function(a){return a instanceof x?a:this instanceof x?void(this._wrapped=a):new x(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=x),exports._=x):a._=x,x.VERSION="1.6.0";var y=x.each=x.forEach=function(a,b,d){if(null==a)return a;if(l&&a.forEach===l)a.forEach(b,d);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(b.call(d,a[e],e,a)===c)return}else for(var g=x.keys(a),e=0,f=g.length;f>e;e++)if(b.call(d,a[g[e]],g[e],a)===c)return;return a};x.map=x.collect=function(a,b,c){var d=[];return null==a?d:m&&a.map===m?a.map(b,c):(y(a,function(a,e,f){d.push(b.call(c,a,e,f))}),d)};var z="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),n&&a.reduce===n)return d&&(b=x.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(y(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError(z);return c},x.reduceRight=x.foldr=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),o&&a.reduceRight===o)return d&&(b=x.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=a.length;if(f!==+f){var g=x.keys(a);f=g.length}if(y(a,function(h,i,j){i=g?g[--f]:--f,e?c=b.call(d,c,a[i],i,j):(c=a[i],e=!0)}),!e)throw new TypeError(z);return c},x.find=x.detect=function(a,b,c){var d;return A(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},x.filter=x.select=function(a,b,c){var d=[];return null==a?d:p&&a.filter===p?a.filter(b,c):(y(a,function(a,e,f){b.call(c,a,e,f)&&d.push(a)}),d)},x.reject=function(a,b,c){return x.filter(a,function(a,d,e){return!b.call(c,a,d,e)},c)},x.every=x.all=function(a,b,d){b||(b=x.identity);var e=!0;return null==a?e:q&&a.every===q?a.every(b,d):(y(a,function(a,f,g){return(e=e&&b.call(d,a,f,g))?void 0:c}),!!e)};var A=x.some=x.any=function(a,b,d){b||(b=x.identity);var e=!1;return null==a?e:r&&a.some===r?a.some(b,d):(y(a,function(a,f,g){return e||(e=b.call(d,a,f,g))?c:void 0}),!!e)};x.contains=x.include=function(a,b){return null==a?!1:s&&a.indexOf===s?-1!=a.indexOf(b):A(a,function(a){return a===b})},x.invoke=function(a,b){var c=h.call(arguments,2),d=x.isFunction(b);return x.map(a,function(a){return(d?b:a[b]).apply(a,c)})},x.pluck=function(a,b){return x.map(a,x.property(b))},x.where=function(a,b){return x.filter(a,x.matches(b))},x.findWhere=function(a,b){return x.find(a,x.matches(b))},x.max=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);var d=-1/0,e=-1/0;return y(a,function(a,f,g){var h=b?b.call(c,a,f,g):a;h>e&&(d=a,e=h)}),d},x.min=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);var d=1/0,e=1/0;return y(a,function(a,f,g){var h=b?b.call(c,a,f,g):a;e>h&&(d=a,e=h)}),d},x.shuffle=function(a){var b,c=0,d=[];return y(a,function(a){b=x.random(c++),d[c-1]=d[b],d[b]=a}),d},x.sample=function(a,b,c){return null==b||c?(a.length!==+a.length&&(a=x.values(a)),a[x.random(a.length-1)]):x.shuffle(a).slice(0,Math.max(0,b))};var B=function(a){return null==a?x.identity:x.isFunction(a)?a:x.property(a)};x.sortBy=function(a,b,c){return b=B(b),x.pluck(x.map(a,function(a,d,e){return{value:a,index:d,criteria:b.call(c,a,d,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index-b.index}),"value")};var C=function(a){return function(b,c,d){var e={};return c=B(c),y(b,function(f,g){var h=c.call(d,f,g,b);a(e,h,f)}),e}};x.groupBy=C(function(a,b,c){x.has(a,b)?a[b].push(c):a[b]=[c]}),x.indexBy=C(function(a,b,c){a[b]=c}),x.countBy=C(function(a,b){x.has(a,b)?a[b]++:a[b]=1}),x.sortedIndex=function(a,b,c,d){c=B(c);for(var e=c.call(d,b),f=0,g=a.length;g>f;){var h=f+g>>>1;c.call(d,a[h])<e?f=h+1:g=h}return f},x.toArray=function(a){return a?x.isArray(a)?h.call(a):a.length===+a.length?x.map(a,x.identity):x.values(a):[]},x.size=function(a){return null==a?0:a.length===+a.length?a.length:x.keys(a).length},x.first=x.head=x.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:0>b?[]:h.call(a,0,b)},x.initial=function(a,b,c){return h.call(a,0,a.length-(null==b||c?1:b))},x.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:h.call(a,Math.max(a.length-b,0))},x.rest=x.tail=x.drop=function(a,b,c){return h.call(a,null==b||c?1:b)},x.compact=function(a){return x.filter(a,x.identity)};var D=function(a,b,c){return b&&x.every(a,x.isArray)?i.apply(c,a):(y(a,function(a){x.isArray(a)||x.isArguments(a)?b?g.apply(c,a):D(a,b,c):c.push(a)}),c)};x.flatten=function(a,b){return D(a,b,[])},x.without=function(a){return x.difference(a,h.call(arguments,1))},x.partition=function(a,b){var c=[],d=[];return y(a,function(a){(b(a)?c:d).push(a)}),[c,d]},x.uniq=x.unique=function(a,b,c,d){x.isFunction(b)&&(d=c,c=b,b=!1);var e=c?x.map(a,c,d):a,f=[],g=[];return y(e,function(c,d){(b?d&&g[g.length-1]===c:x.contains(g,c))||(g.push(c),f.push(a[d]))}),f},x.union=function(){return x.uniq(x.flatten(arguments,!0))},x.intersection=function(a){var b=h.call(arguments,1);return x.filter(x.uniq(a),function(a){return x.every(b,function(b){return x.contains(b,a)})})},x.difference=function(a){var b=i.apply(d,h.call(arguments,1));return x.filter(a,function(a){return!x.contains(b,a)})},x.zip=function(){for(var a=x.max(x.pluck(arguments,"length").concat(0)),b=new Array(a),c=0;a>c;c++)b[c]=x.pluck(arguments,""+c);return b},x.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},x.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=x.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(s&&a.indexOf===s)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1},x.lastIndexOf=function(a,b,c){if(null==a)return-1;var d=null!=c;if(t&&a.lastIndexOf===t)return d?a.lastIndexOf(b,c):a.lastIndexOf(b);for(var e=d?c:a.length;e--;)if(a[e]===b)return e;return-1},x.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);d>e;)f[e++]=a,a+=c;return f};var E=function(){};x.bind=function(a,b){var c,d;if(w&&a.bind===w)return w.apply(a,h.call(arguments,1));if(!x.isFunction(a))throw new TypeError;return c=h.call(arguments,2),d=function(){if(!(this instanceof d))return a.apply(b,c.concat(h.call(arguments)));E.prototype=a.prototype;var e=new E;E.prototype=null;var f=a.apply(e,c.concat(h.call(arguments)));return Object(f)===f?f:e}},x.partial=function(a){var b=h.call(arguments,1);return function(){for(var c=0,d=b.slice(),e=0,f=d.length;f>e;e++)d[e]===x&&(d[e]=arguments[c++]);for(;c<arguments.length;)d.push(arguments[c++]);return a.apply(this,d)}},x.bindAll=function(a){var b=h.call(arguments,1);if(0===b.length)throw new Error("bindAll must be passed function names");return y(b,function(b){a[b]=x.bind(a[b],a)}),a},x.memoize=function(a,b){var c={};return b||(b=x.identity),function(){var d=b.apply(this,arguments);return x.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},x.delay=function(a,b){var c=h.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},x.defer=function(a){return x.delay.apply(x,[a,1].concat(h.call(arguments,1)))},x.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:x.now(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=x.now();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}},x.debounce=function(a,b,c){var d,e,f,g,h,i=function(){var j=x.now()-g;b>j?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e),f=e=null))};return function(){f=this,e=arguments,g=x.now();var j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e),f=e=null),h}},x.once=function(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),a=null,b)}},x.wrap=function(a,b){return x.partial(b,a)},x.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},x.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},x.keys=function(a){if(!x.isObject(a))return[];if(v)return v(a);var b=[];for(var c in a)x.has(a,c)&&b.push(c);return b},x.values=function(a){for(var b=x.keys(a),c=b.length,d=new Array(c),e=0;c>e;e++)d[e]=a[b[e]];return d},x.pairs=function(a){for(var b=x.keys(a),c=b.length,d=new Array(c),e=0;c>e;e++)d[e]=[b[e],a[b[e]]];return d},x.invert=function(a){for(var b={},c=x.keys(a),d=0,e=c.length;e>d;d++)b[a[c[d]]]=c[d];return b},x.functions=x.methods=function(a){var b=[];for(var c in a)x.isFunction(a[c])&&b.push(c);return b.sort()},x.extend=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},x.pick=function(a){var b={},c=i.apply(d,h.call(arguments,1));return y(c,function(c){c in a&&(b[c]=a[c])}),b},x.omit=function(a){var b={},c=i.apply(d,h.call(arguments,1));for(var e in a)x.contains(c,e)||(b[e]=a[e]);return b},x.defaults=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)void 0===a[c]&&(a[c]=b[c])}),a},x.clone=function(a){return x.isObject(a)?x.isArray(a)?a.slice():x.extend({},a):a},x.tap=function(a,b){return b(a),a};var F=function(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return a===b;a instanceof x&&(a=a._wrapped),b instanceof x&&(b=b._wrapped);var e=j.call(a);if(e!=j.call(b))return!1;switch(e){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]==a)return d[f]==b;var g=a.constructor,h=b.constructor;if(g!==h&&!(x.isFunction(g)&&g instanceof g&&x.isFunction(h)&&h instanceof h)&&"constructor"in a&&"constructor"in b)return!1;c.push(a),d.push(b);var i=0,k=!0;if("[object Array]"==e){if(i=a.length,k=i==b.length)for(;i--&&(k=F(a[i],b[i],c,d)););}else{for(var l in a)if(x.has(a,l)&&(i++,!(k=x.has(b,l)&&F(a[l],b[l],c,d))))break;if(k){for(l in b)if(x.has(b,l)&&!i--)break;k=!i}}return c.pop(),d.pop(),k};x.isEqual=function(a,b){return F(a,b,[],[])},x.isEmpty=function(a){if(null==a)return!0;if(x.isArray(a)||x.isString(a))return 0===a.length;for(var b in a)if(x.has(a,b))return!1;return!0},x.isElement=function(a){return!(!a||1!==a.nodeType)},x.isArray=u||function(a){return"[object Array]"==j.call(a)},x.isObject=function(a){return a===Object(a)},y(["Arguments","Function","String","Number","Date","RegExp"],function(a){x["is"+a]=function(b){return j.call(b)=="[object "+a+"]"}}),x.isArguments(arguments)||(x.isArguments=function(a){return!(!a||!x.has(a,"callee"))}),"function"!=typeof/./&&(x.isFunction=function(a){return"function"==typeof a}),x.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},x.isNaN=function(a){return x.isNumber(a)&&a!=+a},x.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==j.call(a)},x.isNull=function(a){return null===a},x.isUndefined=function(a){return void 0===a},x.has=function(a,b){return k.call(a,b)},x.noConflict=function(){return a._=b,this},x.identity=function(a){return a},x.constant=function(a){return function(){return a}},x.property=function(a){return function(b){return b[a]}},x.matches=function(a){return function(b){if(b===a)return!0;for(var c in a)if(a[c]!==b[c])return!1;return!0}},x.times=function(a,b,c){for(var d=Array(Math.max(0,a)),e=0;a>e;e++)d[e]=b.call(c,e);return d},x.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))},x.now=Date.now||function(){return(new Date).getTime()};var G={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};G.unescape=x.invert(G.escape);var H={escape:new RegExp("["+x.keys(G.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(G.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(a){x[a]=function(b){return null==b?"":(""+b).replace(H[a],function(b){return G[a][b]})}}),x.result=function(a,b){if(null==a)return void 0;var c=a[b];return x.isFunction(c)?c.call(a):c},x.mixin=function(a){y(x.functions(a),function(b){var c=x[b]=a[b];x.prototype[b]=function(){var a=[this._wrapped];return g.apply(a,arguments),M.call(this,c.apply(x,a))}})};var I=0;x.uniqueId=function(a){var b=++I+"";return a?a+b:b},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,K={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},L=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(a,b,c){var d;c=x.defaults({},c,x.templateSettings);var e=new RegExp([(c.escape||J).source,(c.interpolate||J).source,(c.evaluate||J).source].join("|")+"|$","g"),f=0,g="__p+='";a.replace(e,function(b,c,d,e,h){return g+=a.slice(f,h).replace(L,function(a){return"\\"+K[a]}),c&&(g+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(g+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),e&&(g+="';\n"+e+"\n__p+='"),f=h+b.length,b}),g+="';\n",c.variable||(g="with(obj||{}){\n"+g+"}\n"),g="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+g+"return __p;\n";try{d=new Function(c.variable||"obj","_",g)}catch(h){throw h.source=g,h}if(b)return d(b,x);var i=function(a){return d.call(this,a,x)};return i.source="function("+(c.variable||"obj")+"){\n"+g+"}",i},x.chain=function(a){return x(a).chain()};var M=function(a){return this._chain?x(a).chain():a};x.mixin(x),y(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];x.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!=a&&"splice"!=a||0!==c.length||delete c[0],M.call(this,c)}}),y(["concat","join","slice"],function(a){var b=d[a];x.prototype[a]=function(){return M.call(this,b.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return x})}).call(this);
!function(a,b){if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(c,d,e){a.Backbone=b(a,e,c,d)});else if("undefined"!=typeof exports){var c=require("underscore");b(a,exports,c)}else a.Backbone=b(a,{},a._,a.jQuery||a.Zepto||a.ender||a.$)}(this,function(a,b,c,d){{var e=a.Backbone,f=[],g=(f.push,f.slice);f.splice}b.VERSION="1.1.2",b.$=d,b.noConflict=function(){return a.Backbone=e,this},b.emulateHTTP=!1,b.emulateJSON=!1;var h=b.Events={on:function(a,b,c){if(!j(this,"on",a,[b,c])||!b)return this;this._events||(this._events={});var d=this._events[a]||(this._events[a]=[]);return d.push({callback:b,context:c,ctx:c||this}),this},once:function(a,b,d){if(!j(this,"once",a,[b,d])||!b)return this;var e=this,f=c.once(function(){e.off(a,f),b.apply(this,arguments)});return f._callback=b,this.on(a,f,d)},off:function(a,b,d){var e,f,g,h,i,k,l,m;if(!this._events||!j(this,"off",a,[b,d]))return this;if(!a&&!b&&!d)return this._events=void 0,this;for(h=a?[a]:c.keys(this._events),i=0,k=h.length;k>i;i++)if(a=h[i],g=this._events[a]){if(this._events[a]=e=[],b||d)for(l=0,m=g.length;m>l;l++)f=g[l],(b&&b!==f.callback&&b!==f.callback._callback||d&&d!==f.context)&&e.push(f);e.length||delete this._events[a]}return this},trigger:function(a){if(!this._events)return this;var b=g.call(arguments,1);if(!j(this,"trigger",a,b))return this;var c=this._events[a],d=this._events.all;return c&&k(c,b),d&&k(d,arguments),this},stopListening:function(a,b,d){var e=this._listeningTo;if(!e)return this;var f=!b&&!d;d||"object"!=typeof b||(d=this),a&&((e={})[a._listenId]=a);for(var g in e)a=e[g],a.off(b,d,this),(f||c.isEmpty(a._events))&&delete this._listeningTo[g];return this}},i=/\s+/,j=function(a,b,c,d){if(!c)return!0;if("object"==typeof c){for(var e in c)a[b].apply(a,[e,c[e]].concat(d));return!1}if(i.test(c)){for(var f=c.split(i),g=0,h=f.length;h>g;g++)a[b].apply(a,[f[g]].concat(d));return!1}return!0},k=function(a,b){var c,d=-1,e=a.length,f=b[0],g=b[1],h=b[2];switch(b.length){case 0:for(;++d<e;)(c=a[d]).callback.call(c.ctx);return;case 1:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f);return;case 2:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g);return;case 3:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g,h);return;default:for(;++d<e;)(c=a[d]).callback.apply(c.ctx,b);return}},l={listenTo:"on",listenToOnce:"once"};c.each(l,function(a,b){h[b]=function(b,d,e){var f=this._listeningTo||(this._listeningTo={}),g=b._listenId||(b._listenId=c.uniqueId("l"));return f[g]=b,e||"object"!=typeof d||(e=this),b[a](d,e,this),this}}),h.bind=h.on,h.unbind=h.off,c.extend(b,h);var m=b.Model=function(a,b){var d=a||{};b||(b={}),this.cid=c.uniqueId("c"),this.attributes={},b.collection&&(this.collection=b.collection),b.parse&&(d=this.parse(d,b)||{}),d=c.defaults({},d,c.result(this,"defaults")),this.set(d,b),this.changed={},this.initialize.apply(this,arguments)};c.extend(m.prototype,h,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return c.clone(this.attributes)},sync:function(){return b.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return c.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,d){var e,f,g,h,i,j,k,l;if(null==a)return this;if("object"==typeof a?(f=a,d=b):(f={})[a]=b,d||(d={}),!this._validate(f,d))return!1;g=d.unset,i=d.silent,h=[],j=this._changing,this._changing=!0,j||(this._previousAttributes=c.clone(this.attributes),this.changed={}),l=this.attributes,k=this._previousAttributes,this.idAttribute in f&&(this.id=f[this.idAttribute]);for(e in f)b=f[e],c.isEqual(l[e],b)||h.push(e),c.isEqual(k[e],b)?delete this.changed[e]:this.changed[e]=b,g?delete l[e]:l[e]=b;if(!i){h.length&&(this._pending=d);for(var m=0,n=h.length;n>m;m++)this.trigger("change:"+h[m],this,l[h[m]],d)}if(j)return this;if(!i)for(;this._pending;)d=this._pending,this._pending=!1,this.trigger("change",this,d);return this._pending=!1,this._changing=!1,this},unset:function(a,b){return this.set(a,void 0,c.extend({},b,{unset:!0}))},clear:function(a){var b={};for(var d in this.attributes)b[d]=void 0;return this.set(b,c.extend({},a,{unset:!0}))},hasChanged:function(a){return null==a?!c.isEmpty(this.changed):c.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?c.clone(this.changed):!1;var b,d=!1,e=this._changing?this._previousAttributes:this.attributes;for(var f in a)c.isEqual(e[f],b=a[f])||((d||(d={}))[f]=b);return d},previous:function(a){return null!=a&&this._previousAttributes?this._previousAttributes[a]:null},previousAttributes:function(){return c.clone(this._previousAttributes)},fetch:function(a){a=a?c.clone(a):{},void 0===a.parse&&(a.parse=!0);var b=this,d=a.success;return a.success=function(c){return b.set(b.parse(c,a),a)?(d&&d(b,c,a),void b.trigger("sync",b,c,a)):!1},L(this,a),this.sync("read",this,a)},save:function(a,b,d){var e,f,g,h=this.attributes;if(null==a||"object"==typeof a?(e=a,d=b):(e={})[a]=b,d=c.extend({validate:!0},d),e&&!d.wait){if(!this.set(e,d))return!1}else if(!this._validate(e,d))return!1;e&&d.wait&&(this.attributes=c.extend({},h,e)),void 0===d.parse&&(d.parse=!0);var i=this,j=d.success;return d.success=function(a){i.attributes=h;var b=i.parse(a,d);return d.wait&&(b=c.extend(e||{},b)),c.isObject(b)&&!i.set(b,d)?!1:(j&&j(i,a,d),void i.trigger("sync",i,a,d))},L(this,d),f=this.isNew()?"create":d.patch?"patch":"update","patch"===f&&(d.attrs=e),g=this.sync(f,this,d),e&&d.wait&&(this.attributes=h),g},destroy:function(a){a=a?c.clone(a):{};var b=this,d=a.success,e=function(){b.trigger("destroy",b,b.collection,a)};if(a.success=function(c){(a.wait||b.isNew())&&e(),d&&d(b,c,a),b.isNew()||b.trigger("sync",b,c,a)},this.isNew())return a.success(),!1;L(this,a);var f=this.sync("delete",this,a);return a.wait||e(),f},url:function(){var a=c.result(this,"urlRoot")||c.result(this.collection,"url")||K();return this.isNew()?a:a.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(a){return this._validate({},c.extend(a||{},{validate:!0}))},_validate:function(a,b){if(!b.validate||!this.validate)return!0;a=c.extend({},this.attributes,a);var d=this.validationError=this.validate(a,b)||null;return d?(this.trigger("invalid",this,d,c.extend(b,{validationError:d})),!1):!0}});var n=["keys","values","pairs","invert","pick","omit"];c.each(n,function(a){m.prototype[a]=function(){var b=g.call(arguments);return b.unshift(this.attributes),c[a].apply(c,b)}});var o=b.Collection=function(a,b){b||(b={}),b.model&&(this.model=b.model),void 0!==b.comparator&&(this.comparator=b.comparator),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,c.extend({silent:!0},b))},p={add:!0,remove:!0,merge:!0},q={add:!0,remove:!1};c.extend(o.prototype,h,{model:m,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return b.sync.apply(this,arguments)},add:function(a,b){return this.set(a,c.extend({merge:!1},b,q))},remove:function(a,b){var d=!c.isArray(a);a=d?[a]:c.clone(a),b||(b={});var e,f,g,h;for(e=0,f=a.length;f>e;e++)h=a[e]=this.get(a[e]),h&&(delete this._byId[h.id],delete this._byId[h.cid],g=this.indexOf(h),this.models.splice(g,1),this.length--,b.silent||(b.index=g,h.trigger("remove",h,this,b)),this._removeReference(h,b));return d?a[0]:a},set:function(a,b){b=c.defaults({},b,p),b.parse&&(a=this.parse(a,b));var d=!c.isArray(a);a=d?a?[a]:[]:c.clone(a);var e,f,g,h,i,j,k,l=b.at,n=this.model,o=this.comparator&&null==l&&b.sort!==!1,q=c.isString(this.comparator)?this.comparator:null,r=[],s=[],t={},u=b.add,v=b.merge,w=b.remove,x=!o&&u&&w?[]:!1;for(e=0,f=a.length;f>e;e++){if(i=a[e]||{},g=i instanceof m?h=i:i[n.prototype.idAttribute||"id"],j=this.get(g))w&&(t[j.cid]=!0),v&&(i=i===h?h.attributes:i,b.parse&&(i=j.parse(i,b)),j.set(i,b),o&&!k&&j.hasChanged(q)&&(k=!0)),a[e]=j;else if(u){if(h=a[e]=this._prepareModel(i,b),!h)continue;r.push(h),this._addReference(h,b)}h=j||h,!x||!h.isNew()&&t[h.id]||x.push(h),t[h.id]=!0}if(w){for(e=0,f=this.length;f>e;++e)t[(h=this.models[e]).cid]||s.push(h);s.length&&this.remove(s,b)}if(r.length||x&&x.length)if(o&&(k=!0),this.length+=r.length,null!=l)for(e=0,f=r.length;f>e;e++)this.models.splice(l+e,0,r[e]);else{x&&(this.models.length=0);var y=x||r;for(e=0,f=y.length;f>e;e++)this.models.push(y[e])}if(k&&this.sort({silent:!0}),!b.silent){for(e=0,f=r.length;f>e;e++)(h=r[e]).trigger("add",h,this,b);(k||x&&x.length)&&this.trigger("sort",this,b)}return d?a[0]:a},reset:function(a,b){b||(b={});for(var d=0,e=this.models.length;e>d;d++)this._removeReference(this.models[d],b);return b.previousModels=this.models,this._reset(),a=this.add(a,c.extend({silent:!0},b)),b.silent||this.trigger("reset",this,b),a},push:function(a,b){return this.add(a,c.extend({at:this.length},b))},pop:function(a){var b=this.at(this.length-1);return this.remove(b,a),b},unshift:function(a,b){return this.add(a,c.extend({at:0},b))},shift:function(a){var b=this.at(0);return this.remove(b,a),b},slice:function(){return g.apply(this.models,arguments)},get:function(a){return null==a?void 0:this._byId[a]||this._byId[a.id]||this._byId[a.cid]},at:function(a){return this.models[a]},where:function(a,b){return c.isEmpty(a)?b?void 0:[]:this[b?"find":"filter"](function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},findWhere:function(a){return this.where(a,!0)},sort:function(a){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return a||(a={}),c.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(c.bind(this.comparator,this)),a.silent||this.trigger("sort",this,a),this},pluck:function(a){return c.invoke(this.models,"get",a)},fetch:function(a){a=a?c.clone(a):{},void 0===a.parse&&(a.parse=!0);var b=a.success,d=this;return a.success=function(c){var e=a.reset?"reset":"set";d[e](c,a),b&&b(d,c,a),d.trigger("sync",d,c,a)},L(this,a),this.sync("read",this,a)},create:function(a,b){if(b=b?c.clone(b):{},!(a=this._prepareModel(a,b)))return!1;b.wait||this.add(a,b);var d=this,e=b.success;return b.success=function(a,c){b.wait&&d.add(a,b),e&&e(a,c,b)},a.save(null,b),a},parse:function(a){return a},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(a,b){if(a instanceof m)return a;b=b?c.clone(b):{},b.collection=this;var d=new this.model(a,b);return d.validationError?(this.trigger("invalid",this,d.validationError,b),!1):d},_addReference:function(a){this._byId[a.cid]=a,null!=a.id&&(this._byId[a.id]=a),a.collection||(a.collection=this),a.on("all",this._onModelEvent,this)},_removeReference:function(a){this===a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"!==a&&"remove"!==a||c===this)&&("destroy"===a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=b)),this.trigger.apply(this,arguments))}});var r=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];c.each(r,function(a){o.prototype[a]=function(){var b=g.call(arguments);return b.unshift(this.models),c[a].apply(c,b)}});var s=["groupBy","countBy","sortBy","indexBy"];c.each(s,function(a){o.prototype[a]=function(b,d){var e=c.isFunction(b)?b:function(a){return a.get(b)};return c[a](this.models,e,d)}});var t=b.View=function(a){this.cid=c.uniqueId("view"),a||(a={}),c.extend(this,c.pick(a,v)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},u=/^(\S+)\s*(.*)$/,v=["model","collection","el","id","attributes","className","tagName","events"];c.extend(t.prototype,h,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(a,c){return this.$el&&this.undelegateEvents(),this.$el=a instanceof b.$?a:b.$(a),this.el=this.$el[0],c!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(!a&&!(a=c.result(this,"events")))return this;this.undelegateEvents();for(var b in a){var d=a[b];if(c.isFunction(d)||(d=this[a[b]]),d){var e=b.match(u),f=e[1],g=e[2];d=c.bind(d,this),f+=".delegateEvents"+this.cid,""===g?this.$el.on(f,d):this.$el.on(f,g,d)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(c.result(this,"el"),!1);else{var a=c.extend({},c.result(this,"attributes"));this.id&&(a.id=c.result(this,"id")),this.className&&(a["class"]=c.result(this,"className"));var d=b.$("<"+c.result(this,"tagName")+">").attr(a);this.setElement(d,!1)}}}),b.sync=function(a,d,e){var f=x[a];c.defaults(e||(e={}),{emulateHTTP:b.emulateHTTP,emulateJSON:b.emulateJSON});var g={type:f,dataType:"json"};if(e.url||(g.url=c.result(d,"url")||K()),null!=e.data||!d||"create"!==a&&"update"!==a&&"patch"!==a||(g.contentType="application/json",g.data=JSON.stringify(e.attrs||d.toJSON(e))),e.emulateJSON&&(g.contentType="application/x-www-form-urlencoded",g.data=g.data?{model:g.data}:{}),e.emulateHTTP&&("PUT"===f||"DELETE"===f||"PATCH"===f)){g.type="POST",e.emulateJSON&&(g.data._method=f);var h=e.beforeSend;e.beforeSend=function(a){return a.setRequestHeader("X-HTTP-Method-Override",f),h?h.apply(this,arguments):void 0}}"GET"===g.type||e.emulateJSON||(g.processData=!1),"PATCH"===g.type&&w&&(g.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var i=e.xhr=b.ajax(c.extend(g,e));return d.trigger("request",d,i,e),i};var w=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),x={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};b.ajax=function(){return b.$.ajax.apply(b.$,arguments)};var y=b.Router=function(a){a||(a={}),a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},z=/\((.*?)\)/g,A=/(\(\?)?:\w+/g,B=/\*\w+/g,C=/[\-{}\[\]+?.,\\\^$|#\s]/g;c.extend(y.prototype,h,{initialize:function(){},route:function(a,d,e){c.isRegExp(a)||(a=this._routeToRegExp(a)),c.isFunction(d)&&(e=d,d=""),e||(e=this[d]);var f=this;return b.history.route(a,function(c){var g=f._extractParameters(a,c);f.execute(e,g),f.trigger.apply(f,["route:"+d].concat(g)),f.trigger("route",d,g),b.history.trigger("route",f,d,g)}),this},execute:function(a,b){a&&a.apply(this,b)},navigate:function(a,c){return b.history.navigate(a,c),this},_bindRoutes:function(){if(this.routes){this.routes=c.result(this,"routes");for(var a,b=c.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])}},_routeToRegExp:function(a){return a=a.replace(C,"\\$&").replace(z,"(?:$1)?").replace(A,function(a,b){return b?a:"([^/?]+)"}).replace(B,"([^?]*?)"),new RegExp("^"+a+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(a,b){var d=a.exec(b).slice(1);return c.map(d,function(a,b){return b===d.length-1?a||null:a?decodeURIComponent(a):null})}});var D=b.History=function(){this.handlers=[],c.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},E=/^[#\/]|\s+$/g,F=/^\/+|\/+$/g,G=/msie [\w.]+/,H=/\/$/,I=/#.*$/;D.started=!1,c.extend(D.prototype,h,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(a){var b=(a||this).location.href.match(/#(.*)$/);return b?b[1]:""},getFragment:function(a,b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){a=decodeURI(this.location.pathname+this.location.search);var c=this.root.replace(H,"");a.indexOf(c)||(a=a.slice(c.length))}else a=this.getHash();return a.replace(E,"")},start:function(a){if(D.started)throw new Error("Backbone.history has already been started");D.started=!0,this.options=c.extend({root:"/"},this.options,a),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var d=this.getFragment(),e=document.documentMode,f=G.exec(navigator.userAgent.toLowerCase())&&(!e||7>=e);if(this.root=("/"+this.root+"/").replace(F,"/"),f&&this._wantsHashChange){var g=b.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=g.hide().appendTo("body")[0].contentWindow,this.navigate(d)}this._hasPushState?b.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!f?b.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=d;var h=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&h.hash&&(this.fragment=this.getHash().replace(E,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},stop:function(){b.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),D.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();return a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe))),a===this.fragment?!1:(this.iframe&&this.navigate(a),void this.loadUrl())},loadUrl:function(a){return a=this.fragment=this.getFragment(a),c.any(this.handlers,function(b){return b.route.test(a)?(b.callback(a),!0):void 0})},navigate:function(a,b){if(!D.started)return!1;b&&b!==!0||(b={trigger:!!b});var c=this.root+(a=this.getFragment(a||""));if(a=a.replace(I,""),this.fragment!==a){if(this.fragment=a,""===a&&"/"!==c&&(c=c.slice(0,-1)),this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else{if(!this._wantsHashChange)return this.location.assign(c);this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace))}return b.trigger?this.loadUrl(a):void 0}},_updateHash:function(a,b,c){if(c){var d=a.href.replace(/(javascript:|#).*$/,"");a.replace(d+"#"+b)}else a.hash="#"+b}}),b.history=new D;var J=function(a,b){var d,e=this;d=a&&c.has(a,"constructor")?a.constructor:function(){return e.apply(this,arguments)},c.extend(d,e,b);var f=function(){this.constructor=d};return f.prototype=e.prototype,d.prototype=new f,a&&c.extend(d.prototype,a),d.__super__=e.prototype,d};m.extend=o.extend=y.extend=t.extend=D.extend=J;var K=function(){throw new Error('A "url" property or function must be specified')},L=function(a,b){var c=b.error;b.error=function(d){c&&c(a,d,b),a.trigger("error",a,d,b)}};return b});
window.wp=window.wp||{},function(a){var b="undefined"==typeof _wpUtilSettings?{}:_wpUtilSettings;wp.template=_.memoize(function(b){var c,d={evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"};return function(e){return(c=c||_.template(a("#tmpl-"+b).html(),null,d))(e)}}),wp.ajax={settings:b.ajax||{},post:function(a,b){return wp.ajax.send({data:_.isObject(a)?a:_.extend(b||{},{action:a})})},send:function(b,c){return _.isObject(b)?c=b:(c=c||{},c.data=_.extend(c.data||{},{action:b})),c=_.defaults(c||{},{type:"POST",url:wp.ajax.settings.url,context:this}),a.Deferred(function(b){c.success&&b.done(c.success),c.error&&b.fail(c.error),delete c.success,delete c.error,a.ajax(c).done(function(a){("1"===a||1===a)&&(a={success:!0}),_.isObject(a)&&!_.isUndefined(a.success)?b[a.success?"resolveWith":"rejectWith"](this,[a.data]):b.rejectWith(this,[a])}).fail(function(){b.rejectWith(this,arguments)})}).promise()}}}(jQuery);
window.wp=window.wp||{},function(a){wp.Backbone={},wp.Backbone.Subviews=function(a,b){this.view=a,this._views=_.isArray(b)?{"":b}:b||{}},wp.Backbone.Subviews.extend=Backbone.Model.extend,_.extend(wp.Backbone.Subviews.prototype,{all:function(){return _.flatten(this._views)},get:function(a){return a=a||"",this._views[a]},first:function(a){var b=this.get(a);return b&&b.length?b[0]:null},set:function(a,b,c){var d,e;return _.isString(a)||(c=b,b=a,a=""),c=c||{},b=_.isArray(b)?b:[b],d=this.get(a),e=b,d&&(c.add?_.isUndefined(c.at)?e=d.concat(b):(e=d,e.splice.apply(e,[c.at,0].concat(b))):(_.each(e,function(a){a.__detach=!0}),_.each(d,function(a){a.__detach?a.$el.detach():a.remove()}),_.each(e,function(a){delete a.__detach}))),this._views[a]=e,_.each(b,function(b){var c=b.Views||wp.Backbone.Subviews,d=b.views=b.views||new c(b);d.parent=this.view,d.selector=a},this),c.silent||this._attach(a,b,_.extend({ready:this._isReady()},c)),this},add:function(a,b,c){return _.isString(a)||(c=b,b=a,a=""),this.set(a,b,_.extend({add:!0},c))},unset:function(a,b,c){var d;return _.isString(a)||(c=b,b=a,a=""),b=b||[],(d=this.get(a))&&(b=_.isArray(b)?b:[b],this._views[a]=b.length?_.difference(d,b):[]),c&&c.silent||_.invoke(b,"remove"),this},detach:function(){return a(_.pluck(this.all(),"el")).detach(),this},render:function(){var a={ready:this._isReady()};return _.each(this._views,function(b,c){this._attach(c,b,a)},this),this.rendered=!0,this},remove:function(a){return a&&a.silent||(this.parent&&this.parent.views&&this.parent.views.unset(this.selector,this.view,{silent:!0}),delete this.parent,delete this.selector),_.invoke(this.all(),"remove"),this._views=[],this},replace:function(a,b){return a.html(b),this},insert:function(a,b,c){var d,e=c&&c.at;return _.isNumber(e)&&(d=a.children()).length>e?d.eq(e).before(b):a.append(b),this},ready:function(){this.view.trigger("ready"),_.chain(this.all()).map(function(a){return a.views}).flatten().where({attached:!0}).invoke("ready")},_attach:function(a,b,c){var d,e=a?this.view.$(a):this.view.$el;return e.length?(d=_.chain(b).pluck("views").flatten().value(),_.each(d,function(a){a.rendered||(a.view.render(),a.rendered=!0)},this),this[c.add?"insert":"replace"](e,_.pluck(b,"el"),c),_.each(d,function(a){a.attached=!0,c.ready&&a.ready()},this),this):this},_isReady:function(){for(var a=this.view.el;a;){if(a===document.body)return!0;a=a.parentNode}return!1}}),wp.Backbone.View=Backbone.View.extend({Subviews:wp.Backbone.Subviews,constructor:function(a){this.views=new this.Subviews(this,this.views),this.on("ready",this.ready,this),this.options=a||{},Backbone.View.apply(this,arguments)},remove:function(){var a=Backbone.View.prototype.remove.apply(this,arguments);return this.views&&this.views.remove(),a},render:function(){var a;return this.prepare&&(a=this.prepare()),this.views.detach(),this.template&&(a=a||{},this.trigger("prepare",a),this.$el.html(this.template(a))),this.views.render(),this},prepare:function(){return this.options},ready:function(){}})}(jQuery);
window.wp=window.wp||{},function(a){var b,c;b=wp.themes=wp.themes||{},b.data=_wpThemeSettings,c=b.data.l10n,b.isInstall=!!b.data.settings.isInstall,_.extend(b,{model:{},view:{},routes:{},router:{},template:wp.template}),b.Model=Backbone.Model.extend({initialize:function(){var a;-1!==_.indexOf(b.data.installedThemes,this.get("slug"))&&this.set({installed:!0}),this.set({id:this.get("slug")||this.get("id")}),this.has("sections")&&(a=this.get("sections").description,this.set({description:a}))}}),b.view.Appearance=wp.Backbone.View.extend({el:"#wpbody-content .wrap .theme-browser",window:a(window),page:0,initialize:function(a){_.bindAll(this,"scroller"),this.SearchView=a.SearchView?a.SearchView:b.view.Search,this.window.bind("scroll",_.throttle(this.scroller,300))},render:function(){this.view=new b.view.Themes({collection:this.collection,parent:this}),this.search(),this.view.render(),this.$el.empty().append(this.view.el).addClass("rendered"),this.$el.append('<br class="clear"/>')},searchContainer:a("#wpbody h2:first"),search:function(){var d,e=this;1!==b.data.themes.length&&(d=new this.SearchView({collection:e.collection,parent:this}),d.render(),this.searchContainer.append(a.parseHTML('<label class="screen-reader-text" for="theme-search-input">'+c.search+"</label>")).append(d.el))},scroller:function(){var a,b,c=this;a=this.window.scrollTop()+c.window.height(),b=c.$el.offset().top+c.$el.outerHeight(!1)-c.window.height(),b=Math.round(.9*b),a>b&&this.trigger("theme:scroll")}}),b.Collection=Backbone.Collection.extend({model:b.Model,terms:"",doSearch:function(a){this.terms!==a&&(this.terms=a,this.terms.length>0&&this.search(this.terms),""===this.terms&&this.reset(b.data.themes),this.trigger("update"))},search:function(a){var c,d,e;this.reset(b.data.themes,{silent:!0}),a=a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),a=a.replace(/ /g,")(?=.*"),c=new RegExp("^(?=.*"+a+").+","i"),d=this.filter(function(b){return e=_.union(b.get("name"),b.get("id"),b.get("description"),b.get("author"),b.get("tags")),c.test(b.get("author"))&&a.length>2&&b.set("displayAuthor",!0),c.test(e)}),this.reset(d)},paginate:function(a){var b=this;return a=a||0,b=_(b.rest(20*a)),b=_(b.first(20))},count:!1,query:function(b){var c,d,e,f=this.queries,g=this;if(this.currentQuery.request=b,c=_.find(f,function(a){return _.isEqual(a.request,b)}),d=_.has(b,"page"),d||(this.currentQuery.page=1),c||d){if(d)return this.apiCall(b,d).done(function(a){g.add(a.themes),g.trigger("query:success"),g.loadingThemes=!1}).fail(function(){g.trigger("query:fail")});0===c.themes.length?g.trigger("query:empty"):a("body").removeClass("no-results"),_.isNumber(c.total)&&(this.count=c.total),this.reset(c.themes),c.total||(this.count=this.length),this.trigger("update"),this.trigger("query:success",this.count)}else c=this.apiCall(b).done(function(a){a.themes&&(g.reset(a.themes),e=a.info.results,f.push({themes:a.themes,request:b,total:e})),g.trigger("update"),g.trigger("query:success",e),a.themes&&0===a.themes.length&&g.trigger("query:empty")}).fail(function(){g.trigger("query:fail")})},queries:[],currentQuery:{page:1,request:{}},apiCall:function(b,c){return wp.ajax.send("query-themes",{data:{request:_.extend({per_page:100,fields:{description:!0,tested:!0,requires:!0,rating:!0,downloaded:!0,downloadLink:!0,last_updated:!0,homepage:!0,num_ratings:!0}},b)},beforeSend:function(){c||a("body").addClass("loading-themes").removeClass("no-results")}})},loadingThemes:!1}),b.view.Theme=wp.Backbone.View.extend({className:"theme",state:"grid",html:b.template("theme"),events:{click:b.isInstall?"preview":"expand","click .preview":"preview",keydown:b.isInstall?"preview":"expand",touchend:b.isInstall?"preview":"expand",keyup:"addFocus",touchmove:"preventExpand"},touchDrag:!1,render:function(){var a=this.model.toJSON();this.$el.html(this.html(a)).attr({tabindex:0,"aria-describedby":a.id+"-action "+a.id+"-name"}),this.activeTheme(),this.model.get("displayAuthor")&&this.$el.addClass("display-author"),this.model.get("installed")&&this.$el.addClass("is-installed")},activeTheme:function(){this.model.get("active")&&this.$el.addClass("active")},addFocus:function(){var b=a(":focus").hasClass("theme")?a(":focus"):a(":focus").parents(".theme");a(".theme.focus").removeClass("focus"),b.addClass("focus")},expand:function(c){var d=this;return c=c||window.event,"keydown"!==c.type||13===c.which||32===c.which?this.touchDrag===!0?this.touchDrag=!1:void(a(c.target).is(".theme-actions a")||(b.focusedTheme=this.$el,this.trigger("theme:expand",d.model.cid))):void 0},preventExpand:function(){this.touchDrag=!0},preview:function(c){var d,e,f=this;return this.touchDrag===!0?this.touchDrag=!1:void(a(c.target).hasClass("button-primary")||("keydown"!==c.type||13===c.which||32===c.which)&&("keydown"===c.type&&13!==c.which&&a(":focus").hasClass("button")||(c.preventDefault(),c=c||window.event,b.focusedTheme=this.$el,e=new b.view.Preview({model:this.model}),e.render(),this.setNavButtonsState(),1===this.model.collection.length?e.$el.addClass("no-navigation"):e.$el.removeClass("no-navigation"),a("div.wrap").append(e.el),this.listenTo(e,"theme:next",function(){return d=f.model,_.isUndefined(f.current)||(d=f.current),f.current=f.model.collection.at(f.model.collection.indexOf(d)+1),_.isUndefined(f.current)?(f.options.parent.parent.trigger("theme:end"),f.current=d):(e=new b.view.Preview({model:f.current}),e.render(),this.setNavButtonsState(),a("div.wrap").append(e.el),void a(".next-theme").focus())}).listenTo(e,"theme:previous",function(){d=f.model,0!==f.model.collection.indexOf(f.current)&&(_.isUndefined(f.current)||(d=f.current),f.current=f.model.collection.at(f.model.collection.indexOf(d)-1),_.isUndefined(f.current)||(e=new b.view.Preview({model:f.current}),e.render(),this.setNavButtonsState(),a("div.wrap").append(e.el),a(".previous-theme").focus()))}),this.listenTo(e,"preview:close",function(){f.current=f.model}))))},setNavButtonsState:function(){var b=a(".theme-install-overlay"),c=_.isUndefined(this.current)?this.model:this.current;0===this.model.collection.indexOf(c)&&b.find(".previous-theme").addClass("disabled"),_.isUndefined(this.model.collection.at(this.model.collection.indexOf(c)+1))&&b.find(".next-theme").addClass("disabled")}}),b.view.Details=wp.Backbone.View.extend({className:"theme-overlay",events:{click:"collapse","click .delete-theme":"deleteTheme","click .left":"previousTheme","click .right":"nextTheme"},html:b.template("theme-single"),render:function(){var a=this.model.toJSON();this.$el.html(this.html(a)),this.activeTheme(),this.navigation(),this.screenshotCheck(this.$el),this.containFocus(this.$el)},activeTheme:function(){this.$el.toggleClass("active",this.model.get("active"))},containFocus:function(b){var c;_.delay(function(){a(".theme-wrap a.button-primary:visible").focus()},500),b.on("keydown.wp-themes",function(d){9===d.which&&(c=a(d.target),c.is("button.left")&&d.shiftKey?(b.find(".theme-actions a:last-child").focus(),d.preventDefault()):c.is(".theme-actions a:last-child")&&(b.find("button.left").focus(),d.preventDefault()))})},collapse:function(c){var d,e=this;c=c||window.event,1!==b.data.themes.length&&(a(c.target).is(".theme-backdrop")||a(c.target).is(".close")||27===c.keyCode)&&(a("body").addClass("closing-overlay"),this.$el.fadeOut(130,function(){a("body").removeClass("closing-overlay"),e.closeOverlay(),d=document.body.scrollTop,b.router.navigate(b.router.baseUrl("")),document.body.scrollTop=d,b.focusedTheme&&b.focusedTheme.focus()}))},navigation:function(){this.model.cid===this.model.collection.at(0).cid&&this.$el.find(".left").addClass("disabled"),this.model.cid===this.model.collection.at(this.model.collection.length-1).cid&&this.$el.find(".right").addClass("disabled")},closeOverlay:function(){a("body").removeClass("theme-overlay-open"),this.remove(),this.unbind(),this.trigger("theme:collapse")},deleteTheme:function(){return confirm(b.data.settings.confirmDelete)},nextTheme:function(){var a=this;return a.trigger("theme:next",a.model.cid),!1},previousTheme:function(){var a=this;return a.trigger("theme:previous",a.model.cid),!1},screenshotCheck:function(a){var b,c;b=a.find(".screenshot img"),c=new Image,c.src=b.attr("src"),c.width&&c.width<=300&&a.addClass("small-screenshot")}}),b.view.Preview=b.view.Details.extend({className:"wp-full-overlay expanded",el:".theme-install-overlay",events:{"click .close-full-overlay":"close","click .collapse-sidebar":"collapse","click .previous-theme":"previousTheme","click .next-theme":"nextTheme",keyup:"keyEvent"},html:b.template("theme-preview"),render:function(){var c=this.model.toJSON();this.$el.html(this.html(c)),b.router.navigate(b.router.baseUrl("?theme="+this.model.get("id")),{replace:!0}),this.$el.fadeIn(200,function(){a("body").addClass("theme-installer-active full-overlay-active"),a(".close-full-overlay").focus()})},close:function(){return this.$el.fadeOut(200,function(){a("body").removeClass("theme-installer-active full-overlay-active"),b.focusedTheme&&b.focusedTheme.focus()}),b.router.navigate(b.router.baseUrl("")),this.trigger("preview:close"),this.unbind(),!1},collapse:function(){return this.$el.toggleClass("collapsed").toggleClass("expanded"),!1},keyEvent:function(a){27===a.keyCode&&(this.undelegateEvents(),this.close()),39===a.keyCode&&_.once(this.nextTheme()),37===a.keyCode&&this.previousTheme()}}),b.view.Themes=wp.Backbone.View.extend({className:"themes",$overlay:a("div.theme-overlay"),index:0,count:a(".theme-count"),initialize:function(b){var c=this;this.parent=b.parent,this.setView("grid"),c.currentTheme(),this.listenTo(c.collection,"update",function(){c.parent.page=0,c.currentTheme(),c.render(this)}),this.listenTo(c.collection,"query:success",function(a){c.count.text(_.isNumber(a)?a:c.collection.length)}),this.listenTo(c.collection,"query:empty",function(){a("body").addClass("no-results")}),this.listenTo(this.parent,"theme:scroll",function(){c.renderThemes(c.parent.page)}),this.listenTo(this.parent,"theme:close",function(){c.overlay&&c.overlay.closeOverlay()}),a("body").on("keyup",function(a){c.overlay&&(39===a.keyCode&&c.overlay.nextTheme(),37===a.keyCode&&c.overlay.previousTheme(),27===a.keyCode&&c.overlay.collapse(a))})},render:function(){this.$el.html(""),1===b.data.themes.length&&(this.singleTheme=new b.view.Details({model:this.collection.models[0]}),this.singleTheme.render(),this.$el.addClass("single-theme"),this.$el.append(this.singleTheme.el)),this.options.collection.size()>0&&this.renderThemes(this.parent.page),this.count.text(this.collection.count?this.collection.count:this.collection.length)},renderThemes:function(d){var e=this;return e.instance=e.collection.paginate(d),0===e.instance.size()?void this.parent.trigger("theme:end"):(d>=1&&a(".add-new-theme").remove(),e.instance.each(function(a){e.theme=new b.view.Theme({model:a,parent:e}),e.theme.render(),e.$el.append(e.theme.el),e.listenTo(e.theme,"theme:expand",e.expand,e)}),b.data.settings.canInstall&&this.$el.append('<div class="theme add-new-theme"><a href="'+b.data.settings.installURI+'"><div class="theme-screenshot"><span></span></div><h3 class="theme-name">'+c.addNew+"</h3></a></div>"),void this.parent.page++)},currentTheme:function(){var a,b=this;a=b.collection.findWhere({active:!0}),a&&(b.collection.remove(a),b.collection.add(a,{at:0}))},setView:function(a){return a},expand:function(c){var d=this;this.model=d.collection.get(c),b.router.navigate(b.router.baseUrl("?theme="+this.model.id)),this.setView("detail"),a("body").addClass("theme-overlay-open"),this.overlay=new b.view.Details({model:d.model}),this.overlay.render(),this.$overlay.html(this.overlay.el),this.listenTo(this.overlay,"theme:next",function(){d.next([d.model.cid])}).listenTo(this.overlay,"theme:previous",function(){d.previous([d.model.cid])})},next:function(a){var b,c,d=this;b=d.collection.get(a[0]),c=d.collection.at(d.collection.indexOf(b)+1),void 0!==c&&(this.overlay.closeOverlay(),d.theme.trigger("theme:expand",c.cid))},previous:function(a){var b,c,d=this;b=d.collection.get(a[0]),c=d.collection.at(d.collection.indexOf(b)-1),void 0!==c&&(this.overlay.closeOverlay(),d.theme.trigger("theme:expand",c.cid))}}),b.view.Search=wp.Backbone.View.extend({tagName:"input",className:"theme-search",id:"theme-search-input",searching:!1,attributes:{placeholder:c.searchPlaceholder,type:"search"},events:{input:"search",keyup:"search",change:"search",search:"search",blur:"pushState"},initialize:function(a){this.parent=a.parent,this.listenTo(this.parent,"theme:close",function(){this.searching=!1})},search:function(a){var c={};"keyup"===a.type&&27===a.which&&(a.target.value=""),13===a.which&&this.$el.trigger("blur"),this.collection.doSearch(a.target.value),this.searching&&13!==a.which?c.replace=!0:this.searching=!0,a.target.value?b.router.navigate(b.router.baseUrl("?search="+a.target.value),c):b.router.navigate(b.router.baseUrl(""))},pushState:function(a){var c=b.router.baseUrl("");a.target.value&&(c=b.router.baseUrl("?search="+a.target.value)),this.searching=!1,b.router.navigate(c)}}),b.Router=Backbone.Router.extend({routes:{"themes.php?theme=:slug":"theme","themes.php?search=:query":"search","themes.php?s=:query":"search","themes.php":"themes","":"themes"},baseUrl:function(a){return"themes.php"+a},search:function(b){a(".theme-search").val(b)},themes:function(){a(".theme-search").val("")},navigate:function(){Backbone.history._hasPushState&&Backbone.Router.prototype.navigate.apply(this,arguments)}}),b.Run={init:function(){this.themes=new b.Collection(b.data.themes),this.view=new b.view.Appearance({collection:this.themes}),this.render()},render:function(){this.view.render(),this.routes(),Backbone.history.start({root:b.data.settings.adminUrl,pushState:!0,hashChange:!1})},routes:function(){var c=this;b.router=new b.Router,b.router.on("route:theme",function(a){c.view.view.expand(a)}),b.router.on("route:themes",function(){c.themes.doSearch(""),c.view.trigger("theme:close")}),b.router.on("route:search",function(){a(".theme-search").trigger("keyup")}),this.extraRoutes()},extraRoutes:function(){return!1}},b.view.InstallerSearch=b.view.Search.extend({events:{keyup:"search"},search:function(a){("keyup"!==a.type||9!==a.which&&16!==a.which)&&(this.collection=this.options.parent.view.collection,"keyup"===a.type&&27===a.which&&(a.target.value=""),_.debounce(_.bind(this.doSearch,this),300)(a.target.value))},doSearch:_.debounce(function(c){var d={};d.search=c,"author:"===c.substring(0,7)&&(d.search="",d.author=c.slice(7)),"tag:"===c.substring(0,4)&&(d.search="",d.tag=[c.slice(4)]),a(".theme-section.current").removeClass("current"),a("body").removeClass("more-filters-opened filters-applied"),this.collection.query(d),b.router.navigate(b.router.baseUrl("?search="+c),{replace:!0})},300)}),b.view.Installer=b.view.Appearance.extend({el:"#wpbody-content .wrap",events:{"click .theme-section":"onSort","click .theme-filter":"onFilter","click .more-filters":"moreFilters","click .apply-filters":"applyFilters",'click [type="checkbox"]':"addFilter","click .clear-filters":"clearFilters","click .feature-name":"filterSection","click .filtering-by a":"backToFilters"},render:function(){var d=this;this.search(),this.uploader(),this.collection=new b.Collection,this.listenTo(this,"theme:end",function(){d.collection.loadingThemes||(d.collection.loadingThemes=!0,d.collection.currentQuery.page++,_.extend(d.collection.currentQuery.request,{page:d.collection.currentQuery.page}),d.collection.query(d.collection.currentQuery.request))}),this.listenTo(this.collection,"query:success",function(){a("body").removeClass("loading-themes"),a(".theme-browser").find("div.error").remove()}),this.listenTo(this.collection,"query:fail",function(){a("body").removeClass("loading-themes"),a(".theme-browser").find("div.error").remove(),a(".theme-browser").find("div.themes").before('<div class="error"><p>'+c.error+"</p></div>")}),this.view&&this.view.remove(),this.view=new b.view.Themes({collection:this.collection,parent:this}),this.page=0,this.$el.find(".themes").remove(),this.view.render(),this.$el.find(".theme-browser").append(this.view.el).addClass("rendered")},browse:function(a){this.collection.query({browse:a})},onSort:function(c){var d=a(c.target),e=d.data("sort");c.preventDefault(),a("body").removeClass("filters-applied more-filters-opened"),d.hasClass(this.activeClass)||(this.sort(e),b.router.navigate(b.router.baseUrl("?browse="+e)))},sort:function(b){this.clearSearch(),a(".theme-section, .theme-filter").removeClass(this.activeClass),a('[data-sort="'+b+'"]').addClass(this.activeClass),this.browse(b)},onFilter:function(b){var c,d=a(b.target),e=d.data("filter");d.hasClass(this.activeClass)||(a(".theme-filter, .theme-section").removeClass(this.activeClass),d.addClass(this.activeClass),e&&(e=_.union(e,this.filtersChecked()),c={tag:[e]},this.collection.query(c)))},addFilter:function(){this.filtersChecked()},applyFilters:function(b){var c,d=this.filtersChecked(),e={tag:d},f=a(".filtering-by .tags");b&&b.preventDefault(),a("body").addClass("filters-applied"),a(".theme-section.current").removeClass("current"),f.empty(),_.each(d,function(b){c=a('label[for="feature-id-'+b+'"]').text(),f.append('<span class="tag">'+c+"</span>")}),this.collection.query(e)},filtersChecked:function(){var b=a(".feature-group").find(":checkbox"),c=[];return _.each(b.filter(":checked"),function(b){c.push(a(b).prop("value"))}),0===c.length?(a(".apply-filters").find("span").text(""),a(".clear-filters").hide(),a("body").removeClass("filters-applied"),!1):(a(".apply-filters").find("span").text(c.length),a(".clear-filters").css("display","inline-block"),c)},activeClass:"current",searchContainer:a(".theme-navigation"),uploader:function(){a("a.upload").on("click",function(c){c.preventDefault(),a("body").addClass("show-upload-theme"),b.router.navigate(b.router.baseUrl("?upload"),{replace:!0})}),a("a.browse-themes").on("click",function(c){c.preventDefault(),a("body").removeClass("show-upload-theme"),b.router.navigate(b.router.baseUrl(""),{replace:!0})})},moreFilters:function(c){return c.preventDefault(),a("body").hasClass("filters-applied")?this.backToFilters():a("body").hasClass("more-filters-opened")&&this.filtersChecked()?this.addFilter():(this.clearSearch(),b.router.navigate(b.router.baseUrl("")),void a("body").toggleClass("more-filters-opened"))},filterSection:function(){a(event.target).parent().toggleClass("open")},clearFilters:function(b){var c=a(".feature-group").find(":checkbox"),d=this;b.preventDefault(),_.each(c.filter(":checked"),function(b){return a(b).prop("checked",!1),d.filtersChecked()})},backToFilters:function(b){b&&b.preventDefault(),a("body").removeClass("filters-applied")},clearSearch:function(){a("#theme-search-input").val("")}}),b.InstallerRouter=Backbone.Router.extend({routes:{"theme-install.php?theme=:slug":"preview","theme-install.php?browse=:sort":"sort","theme-install.php?upload":"upload","theme-install.php?search=:query":"search","theme-install.php":"sort"},baseUrl:function(a){return"theme-install.php"+a},search:function(b){a(".theme-search").val(b)},navigate:function(){Backbone.history._hasPushState&&Backbone.Router.prototype.navigate.apply(this,arguments)}}),b.RunInstaller={init:function(){this.view=new b.view.Installer({section:"featured",SearchView:b.view.InstallerSearch}),this.render()},render:function(){this.view.render(),this.routes(),Backbone.history.start({root:b.data.settings.adminUrl,pushState:!0,hashChange:!1})},routes:function(){var c=this,d={};b.router=new b.InstallerRouter,b.router.on("route:preview",function(a){d.theme=a,c.view.collection.query(d)}),b.router.on("route:sort",function(a){a||(a="featured"),c.view.sort(a),c.view.trigger("theme:close")}),b.router.on("route:upload",function(){a("a.upload").trigger("click")}),b.router.on("route:search",function(){a(".theme-search").focus().trigger("keyup")}),this.extraRoutes()},extraRoutes:function(){return!1}},a(document).ready(function(){b.isInstall?b.RunInstaller.init():b.Run.init()})}(jQuery);var tb_position;jQuery(document).ready(function(a){tb_position=function(){var b=a("#TB_window"),c=a(window).width(),d=a(window).height(),e=c>1040?1040:c,f=0;a("#wpadminbar").length&&(f=parseInt(a("#wpadminbar").css("height"),10)),b.size()&&(b.width(e-50).height(d-45-f),a("#TB_iframeContent").width(e-50).height(d-75-f),b.css({"margin-left":"-"+parseInt((e-50)/2,10)+"px"}),"undefined"!=typeof document.body.style.maxWidth&&b.css({top:20+f+"px","margin-top":"0"}))},a(window).resize(function(){tb_position()})});
window.wp=window.wp||{},function(a,b){var c,d,e,f,g=Array.prototype.slice;d=function(a,b){var c=f(this,a,b);return c.extend=this.extend,c},e=function(){},f=function(a,c,d){var f;return f=c&&c.hasOwnProperty("constructor")?c.constructor:function(){var b=a.apply(this,arguments);return b},b.extend(f,a),e.prototype=a.prototype,f.prototype=new e,c&&b.extend(f.prototype,c),d&&b.extend(f,d),f.prototype.constructor=f,f.__super__=a.prototype,f},c={},c.Class=function(a,d,e){var f,g=arguments;return a&&d&&c.Class.applicator===a&&(g=d,b.extend(this,e||{})),f=this,this.instance&&(f=function(){return f.instance.apply(f,arguments)},b.extend(f,this)),f.initialize.apply(f,g),f},c.Class.applicator={},c.Class.prototype.initialize=function(){},c.Class.prototype.extended=function(a){for(var b=this;"undefined"!=typeof b.constructor;){if(b.constructor===a)return!0;if("undefined"==typeof b.constructor.__super__)return!1;b=b.constructor.__super__}return!1},c.Class.extend=d,c.Events={trigger:function(a){return this.topics&&this.topics[a]&&this.topics[a].fireWith(this,g.call(arguments,1)),this},bind:function(a){return this.topics=this.topics||{},this.topics[a]=this.topics[a]||b.Callbacks(),this.topics[a].add.apply(this.topics[a],g.call(arguments,1)),this},unbind:function(a){return this.topics&&this.topics[a]&&this.topics[a].remove.apply(this.topics[a],g.call(arguments,1)),this}},c.Value=c.Class.extend({initialize:function(a,c){this._value=a,this.callbacks=b.Callbacks(),b.extend(this,c||{}),this.set=b.proxy(this.set,this)},instance:function(){return arguments.length?this.set.apply(this,arguments):this.get()},get:function(){return this._value},set:function(a){var b=this._value;return a=this._setter.apply(this,arguments),a=this.validate(a),null===a||this._value===a?this:(this._value=a,this.callbacks.fireWith(this,[a,b]),this)},_setter:function(a){return a},setter:function(a){var b=this.get();return this._setter=a,this._value=null,this.set(b),this},resetSetter:function(){return this._setter=this.constructor.prototype._setter,this.set(this.get()),this},validate:function(a){return a},bind:function(){return this.callbacks.add.apply(this.callbacks,arguments),this},unbind:function(){return this.callbacks.remove.apply(this.callbacks,arguments),this},link:function(){var a=this.set;return b.each(arguments,function(){this.bind(a)}),this},unlink:function(){var a=this.set;return b.each(arguments,function(){this.unbind(a)}),this},sync:function(){var a=this;return b.each(arguments,function(){a.link(this),this.link(a)}),this},unsync:function(){var a=this;return b.each(arguments,function(){a.unlink(this),this.unlink(a)}),this}}),c.Values=c.Class.extend({defaultConstructor:c.Value,initialize:function(a){b.extend(this,a||{}),this._value={},this._deferreds={}},instance:function(a){return 1===arguments.length?this.value(a):this.when.apply(this,arguments)},value:function(a){return this._value[a]},has:function(a){return"undefined"!=typeof this._value[a]},add:function(a,b){return this.has(a)?this.value(a):(this._value[a]=b,b.parent=this,b.extended(c.Value)&&b.bind(this._change),this.trigger("add",b),this._deferreds[a]&&this._deferreds[a].resolve(),this._value[a])},create:function(a){return this.add(a,new this.defaultConstructor(c.Class.applicator,g.call(arguments,1)))},each:function(a,c){c="undefined"==typeof c?this:c,b.each(this._value,function(b,d){a.call(c,d,b)})},remove:function(a){var b;this.has(a)&&(b=this.value(a),this.trigger("remove",b),b.extended(c.Value)&&b.unbind(this._change),delete b.parent),delete this._value[a],delete this._deferreds[a]},when:function(){var a=this,c=g.call(arguments),d=b.Deferred();return b.isFunction(c[c.length-1])&&d.done(c.pop()),b.when.apply(b,b.map(c,function(c){return a.has(c)?void 0:a._deferreds[c]=a._deferreds[c]||b.Deferred()})).done(function(){var e=b.map(c,function(b){return a(b)});return e.length!==c.length?void a.when.apply(a,c).done(function(){d.resolveWith(a,e)}):void d.resolveWith(a,e)}),d.promise()},_change:function(){this.parent.trigger("change",this)}}),b.extend(c.Values.prototype,c.Events),c.ensure=function(a){return"string"==typeof a?b(a):a},c.Element=c.Value.extend({initialize:function(a,d){var e,f,g,h=this,i=c.Element.synchronizer.html;this.element=c.ensure(a),this.events="",this.element.is("input, select, textarea")&&(this.events+="change",i=c.Element.synchronizer.val,this.element.is("input")?(e=this.element.prop("type"),c.Element.synchronizer[e]&&(i=c.Element.synchronizer[e]),("text"===e||"password"===e)&&(this.events+=" keyup")):this.element.is("textarea")&&(this.events+=" keyup")),c.Value.prototype.initialize.call(this,null,b.extend(d||{},i)),this._value=this.get(),f=this.update,g=this.refresh,this.update=function(a){a!==g.call(h)&&f.apply(this,arguments)},this.refresh=function(){h.set(g.call(h))},this.bind(this.update),this.element.bind(this.events,this.refresh)},find:function(a){return b(a,this.element)},refresh:function(){},update:function(){}}),c.Element.synchronizer={},b.each(["html","val"],function(a,b){c.Element.synchronizer[b]={update:function(a){this.element[b](a)},refresh:function(){return this.element[b]()}}}),c.Element.synchronizer.checkbox={update:function(a){this.element.prop("checked",a)},refresh:function(){return this.element.prop("checked")}},c.Element.synchronizer.radio={update:function(a){this.element.filter(function(){return this.value===a}).prop("checked",!0)},refresh:function(){return this.element.filter(":checked").val()}},b.support.postMessage=!!window.postMessage,c.Messenger=c.Class.extend({add:function(a,b,d){return this[a]=new c.Value(b,d)},initialize:function(a,c){var d=window.parent==window?null:window.parent;b.extend(this,c||{}),this.add("channel",a.channel),this.add("url",a.url||""),this.add("targetWindow",a.targetWindow||d),this.add("origin",this.url()).link(this.url).setter(function(a){return a.replace(/([^:]+:\/\/[^\/]+).*/,"$1")}),this.receive=b.proxy(this.receive,this),this.receive.guid=b.guid++,b(window).on("message",this.receive)},destroy:function(){b(window).off("message",this.receive)},receive:function(a){var b;a=a.originalEvent,this.targetWindow()&&(this.origin()&&a.origin!==this.origin()||"string"==typeof a.data&&"{"===a.data[0]&&(b=JSON.parse(a.data),b&&b.id&&"undefined"!=typeof b.data&&(!b.channel&&!this.channel()||this.channel()===b.channel)&&this.trigger(b.id,b.data)))},send:function(a,b){var c;b="undefined"==typeof b?null:b,this.url()&&this.targetWindow()&&(c={id:a,data:b},this.channel()&&(c.channel=this.channel()),this.targetWindow().postMessage(JSON.stringify(c),this.origin()))}}),b.extend(c.Messenger.prototype,c.Events),c=b.extend(new c.Values,c),c.get=function(){var a={};return this.each(function(b,c){a[c]=b.get()}),a},a.customize=c}(wp,jQuery);
window.wp=window.wp||{},function(a,b){var c,d=wp.customize;b.extend(b.support,{history:!(!window.history||!history.pushState),hashchange:"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7)}),c=b.extend({},d.Events,{initialize:function(){this.body=b(document.body),c.settings&&b.support.postMessage&&(b.support.cors||!c.settings.isCrossDomain)&&(this.window=b(window),this.element=b('<div id="customize-container" />').appendTo(this.body),this.bind("open",this.overlay.show),this.bind("close",this.overlay.hide),b("#wpbody").on("click",".load-customize",function(a){a.preventDefault(),c.link=b(this),c.open(c.link.attr("href"))}),b.support.history&&this.window.on("popstate",c.popstate),b.support.hashchange&&(this.window.on("hashchange",c.hashchange),this.window.triggerHandler("hashchange")))},popstate:function(a){var b=a.originalEvent.state;b&&b.customize?c.open(b.customize):c.active&&c.close()},hashchange:function(){var a=window.location.toString().split("#")[1];a&&0===a.indexOf("wp_customize=on")&&c.open(c.settings.url+"?"+a),a||b.support.history||c.close()},open:function(a){var e;if(!this.active){if(c.settings.browser.mobile)return window.location=a;this.active=!0,this.body.addClass("customize-loading"),this.iframe=b("<iframe />",{src:a}).appendTo(this.element),this.iframe.one("load",this.loaded),this.messenger=new d.Messenger({url:a,channel:"loader",targetWindow:this.iframe[0].contentWindow}),this.messenger.bind("ready",function(){c.messenger.send("back")}),this.messenger.bind("close",function(){b.support.history?history.back():b.support.hashchange?window.location.hash="":c.close()}),this.messenger.bind("activated",function(a){a&&(window.location=a)}),e=a.split("?")[1],b.support.history&&window.location.href!==a?history.pushState({customize:a},"",a):!b.support.history&&b.support.hashchange&&e&&(window.location.hash="wp_customize=on&"+e),this.trigger("open")}},opened:function(){c.body.addClass("customize-active full-overlay-active")},close:function(){this.active&&(this.active=!1,this.trigger("close"),this.link&&this.link.focus())},closed:function(){c.iframe.remove(),c.messenger.destroy(),c.iframe=null,c.messenger=null,c.body.removeClass("customize-active full-overlay-active").removeClass("customize-loading")},loaded:function(){c.body.removeClass("customize-loading")},overlay:{show:function(){this.element.fadeIn(200,c.opened)},hide:function(){this.element.fadeOut(200,c.closed)}}}),b(function(){c.settings=_wpCustomizeLoaderSettings,c.initialize()}),d.Loader=c}(wp,jQuery);
/**
 * Attempt to re-color SVG icons used in the admin menu or the toolbar
 *
 */

window.wp = window.wp || {};

wp.svgPainter = ( function( $, window, document, undefined ) {
	'use strict';
	var selector, base64, painter,
		colorscheme = {},
		elements = [];

	$(document).ready( function() {
		// detection for browser SVG capability
		if ( document.implementation.hasFeature( 'http://www.w3.org/TR/SVG11/feature#Image', '1.1' ) ) {
			$( document.body ).removeClass( 'no-svg' ).addClass( 'svg' );
			wp.svgPainter.init();
		}
	});

	/**
	 * Needed only for IE9
	 *
	 * Based on jquery.base64.js 0.0.3 - https://github.com/yckart/jquery.base64.js
	 *
	 * Based on: https://gist.github.com/Yaffle/1284012
	 *
	 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
	 * Licensed under the MIT license
	 * http://www.opensource.org/licenses/mit-license.php
	 */
	base64 = ( function() {
		var c,
			b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
			a256 = '',
			r64 = [256],
			r256 = [256],
			i = 0;

		function init() {
			while( i < 256 ) {
				c = String.fromCharCode(i);
				a256 += c;
				r256[i] = i;
				r64[i] = b64.indexOf(c);
				++i;
			}
		}

		function code( s, discard, alpha, beta, w1, w2 ) {
			var tmp, length,
				buffer = 0,
				i = 0,
				result = '',
				bitsInBuffer = 0;

			s = String(s);
			length = s.length;

			while( i < length ) {
				c = s.charCodeAt(i);
				c = c < 256 ? alpha[c] : -1;

				buffer = ( buffer << w1 ) + c;
				bitsInBuffer += w1;

				while( bitsInBuffer >= w2 ) {
					bitsInBuffer -= w2;
					tmp = buffer >> bitsInBuffer;
					result += beta.charAt(tmp);
					buffer ^= tmp << bitsInBuffer;
				}
				++i;
			}

			if ( ! discard && bitsInBuffer > 0 ) {
				result += beta.charAt( buffer << ( w2 - bitsInBuffer ) );
			}

			return result;
		}

		function btoa( plain ) {
			if ( ! c ) {
				init();
			}

			plain = code( plain, false, r256, b64, 8, 6 );
			return plain + '===='.slice( ( plain.length % 4 ) || 4 );
		}

		function atob( coded ) {
			var i;

			if ( ! c ) {
				init();
			}

			coded = coded.replace( /[^A-Za-z0-9\+\/\=]/g, '' );
			coded = String(coded).split('=');
			i = coded.length;

			do {
				--i;
				coded[i] = code( coded[i], true, r64, a256, 6, 8 );
			} while ( i > 0 );

			coded = coded.join('');
			return coded;
		}

		return {
			atob: atob,
			btoa: btoa
		};
	})();

	return {
		init: function() {
			painter = this;
			selector = $( '#adminmenu .wp-menu-image, #wpadminbar .ab-item' );

			this.setColors();
			this.findElements();
			this.paint();
		},

		setColors: function( colors ) {
			if ( typeof colors === 'undefined' && typeof window._wpColorScheme !== 'undefined' ) {
				colors = window._wpColorScheme;
			}

			if ( colors && colors.icons && colors.icons.base && colors.icons.current && colors.icons.focus ) {
				colorscheme = colors.icons;
			}
		},

		findElements: function() {
			selector.each( function() {
				var $this = $(this), bgImage = $this.css( 'background-image' );

				if ( bgImage && bgImage.indexOf( 'data:image/svg+xml;base64' ) != -1 ) {
					elements.push( $this );
				}
			});
		},

		paint: function() {
			// loop through all elements
			$.each( elements, function( index, $element ) {
				var $menuitem = $element.parent().parent();

				if ( $menuitem.hasClass( 'current' ) || $menuitem.hasClass( 'wp-has-current-submenu' ) ) {
					// paint icon in 'current' color
					painter.paintElement( $element, 'current' );
				} else {
					// paint icon in base color
					painter.paintElement( $element, 'base' );

					// set hover callbacks
					$menuitem.hover(
						function() {
							painter.paintElement( $element, 'focus' );
						},
						function() {
							// Match the delay from hoverIntent
							window.setTimeout( function() {
								painter.paintElement( $element, 'base' );
							}, 100 );
						}
					);
				}
			});
		},

		paintElement: function( $element, colorType ) {
			var xml, encoded, color;

			if ( ! colorType || ! colorscheme.hasOwnProperty( colorType ) ) {
				return;
			}

			color = colorscheme[ colorType ];

			// only accept hex colors: #101 or #101010
			if ( ! color.match( /^(#[0-9a-f]{3}|#[0-9a-f]{6})$/i ) ) {
				return;
			}

			xml = $element.data( 'wp-ui-svg-' + color );

			if ( xml === 'none' ) {
				return;
			}

			if ( ! xml ) {
				encoded = $element.css( 'background-image' ).match( /.+data:image\/svg\+xml;base64,([A-Za-z0-9\+\/\=]+)/ );

				if ( ! encoded || ! encoded[1] ) {
					$element.data( 'wp-ui-svg-' + color, 'none' );
					return;
				}

				try {
					if ( 'atob' in window ) {
						xml = window.atob( encoded[1] );
					} else {
						xml = base64.atob( encoded[1] );
					}
				} catch ( error ) {}

				if ( xml ) {
					// replace `fill` attributes
					xml = xml.replace( /fill="(.+?)"/g, 'fill="' + color + '"');

					// replace `style` attributes
					xml = xml.replace( /style="(.+?)"/g, 'style="fill:' + color + '"');

					// replace `fill` properties in `<style>` tags
					xml = xml.replace( /fill:.*?;/g, 'fill: ' + color + ';');

					if ( 'btoa' in window ) {
						xml = window.btoa( xml );
					} else {
						xml = base64.btoa( xml );
					}

					$element.data( 'wp-ui-svg-' + color, xml );
				} else {
					$element.data( 'wp-ui-svg-' + color, 'none' );
					return;
				}
			}

			$element.attr( 'style', 'background-image: url("data:image/svg+xml;base64,' + xml + '") !important;' );
		}
	};

})( jQuery, window, document );

!function(a,b,c){var d=function(){function d(){if("string"==typeof b.pagenow&&(B.screenId=b.pagenow),"string"==typeof b.ajaxurl&&(B.url=b.ajaxurl),"object"==typeof b.heartbeatSettings){var c=b.heartbeatSettings;!B.url&&c.ajaxurl&&(B.url=c.ajaxurl),c.interval&&(B.mainInterval=c.interval,B.mainInterval<15?B.mainInterval=15:B.mainInterval>60&&(B.mainInterval=60)),B.screenId||(B.screenId=c.screenId||"front"),"disable"===c.suspension&&(B.suspendEnabled=!1)}B.mainInterval=1e3*B.mainInterval,B.originalInterval=B.mainInterval,a(b).on("blur.wp-heartbeat-focus",function(){m(),B.winBlurTimer=b.setTimeout(function(){k()},500)}).on("focus.wp-heartbeat-focus",function(){n(),l()}).on("unload.wp-heartbeat",function(){B.suspend=!0,B.xhr&&4!==B.xhr.readyState&&B.xhr.abort()}),b.setInterval(function(){q()},3e4),A.ready(function(){B.lastTick=e(),j()})}function e(){return(new Date).getTime()}function f(a){var c,d=a.src;if(d&&/^https?:\/\//.test(d)&&(c=b.location.origin?b.location.origin:b.location.protocol+"//"+b.location.host,0!==d.indexOf(c)))return!1;try{if(a.contentWindow.document)return!0}catch(e){}return!1}function g(a,b){var c;if(a){switch(a){case"abort":break;case"timeout":c=!0;break;case"error":if(503===b&&B.hasConnected){c=!0;break}case"parsererror":case"empty":case"unknown":B.errorcount++,B.errorcount>2&&B.hasConnected&&(c=!0)}c&&!s()&&(B.connectionError=!0,A.trigger("heartbeat-connection-lost",[a,b]))}}function h(){B.hasConnected=!0,s()&&(B.errorcount=0,B.connectionError=!1,A.trigger("heartbeat-connection-restored"))}function i(){var c,d;B.connecting||B.suspend||(B.lastTick=e(),d=a.extend({},B.queue),B.queue={},A.trigger("heartbeat-send",[d]),c={data:d,interval:B.tempInterval?B.tempInterval/1e3:B.mainInterval/1e3,_nonce:"object"==typeof b.heartbeatSettings?b.heartbeatSettings.nonce:"",action:"heartbeat",screen_id:B.screenId,has_focus:B.hasFocus},B.connecting=!0,B.xhr=a.ajax({url:B.url,type:"post",timeout:3e4,data:c,dataType:"json"}).always(function(){B.connecting=!1,j()}).done(function(a,b,c){var d;return a?(h(),a.nonces_expired?void A.trigger("heartbeat-nonces-expired"):(a.heartbeat_interval&&(d=a.heartbeat_interval,delete a.heartbeat_interval),A.trigger("heartbeat-tick",[a,b,c]),void(d&&v(d)))):void g("empty")}).fail(function(a,b,c){g(b||"unknown",a.status),A.trigger("heartbeat-error",[a,b,c])}))}function j(){var a=e()-B.lastTick,c=B.mainInterval;B.suspend||(B.hasFocus?B.countdown>0&&B.tempInterval&&(c=B.tempInterval,B.countdown--,B.countdown<1&&(B.tempInterval=0)):c=12e4,b.clearTimeout(B.beatTimer),c>a?B.beatTimer=b.setTimeout(function(){i()},c-a):i())}function k(){o(),B.hasFocus=!1}function l(){o(),B.userActivity=e(),B.suspend=!1,B.hasFocus||(B.hasFocus=!0,j())}function m(){a("iframe").each(function(c,d){f(d)&&(a.data(d,"wp-heartbeat-focus")||(a.data(d,"wp-heartbeat-focus",1),a(d.contentWindow).on("focus.wp-heartbeat-focus",function(){l()}).on("blur.wp-heartbeat-focus",function(){m(),B.frameBlurTimer=b.setTimeout(function(){k()},500)})))})}function n(){a("iframe").each(function(b,c){f(c)&&(a.removeData(c,"wp-heartbeat-focus"),a(c.contentWindow).off(".wp-heartbeat-focus"))})}function o(){b.clearTimeout(B.winBlurTimer),b.clearTimeout(B.frameBlurTimer)}function p(){B.userActivityEvents=!1,A.off(".wp-heartbeat-active"),a("iframe").each(function(b,c){f(c)&&a(c.contentWindow).off(".wp-heartbeat-active")}),l()}function q(){var b=B.userActivity?e()-B.userActivity:0;b>3e5&&B.hasFocus&&k(),B.suspendEnabled&&b>12e5&&(B.suspend=!0),B.userActivityEvents||(A.on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active",function(){p()}),a("iframe").each(function(b,c){f(c)&&a(c.contentWindow).on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active",function(){p()})}),B.userActivityEvents=!0)}function r(){return B.hasFocus}function s(){return B.connectionError}function t(){B.lastTick=0,j()}function u(){B.suspendEnabled=!1}function v(a,b){var c,d=B.tempInterval?B.tempInterval:B.mainInterval;if(a){switch(a){case"fast":case 5:c=5e3;break;case 15:c=15e3;break;case 30:c=3e4;break;case 60:c=6e4;break;case"long-polling":return B.mainInterval=0,0;default:c=B.originalInterval}5e3===c?(b=parseInt(b,10)||30,b=1>b||b>30?30:b,B.countdown=b,B.tempInterval=c):(B.countdown=0,B.tempInterval=0,B.mainInterval=c),c!==d&&j()}return B.tempInterval?B.tempInterval/1e3:B.mainInterval/1e3}function w(a,b,c){return a?c&&this.isQueued(a)?!1:(B.queue[a]=b,!0):!1}function x(a){return a?B.queue.hasOwnProperty(a):void 0}function y(a){a&&delete B.queue[a]}function z(a){return a?this.isQueued(a)?B.queue[a]:c:void 0}var A=a(document),B={suspend:!1,suspendEnabled:!0,screenId:"",url:"",lastTick:0,queue:{},mainInterval:60,tempInterval:0,originalInterval:0,countdown:0,connecting:!1,connectionError:!1,errorcount:0,hasConnected:!1,hasFocus:!0,userActivity:0,userActivityEvents:!1,beatTimer:0,winBlurTimer:0,frameBlurTimer:0};return d(),{hasFocus:r,connectNow:t,disableSuspend:u,interval:v,hasConnectionError:s,enqueue:w,dequeue:y,isQueued:x,getQueuedItem:z}};b.wp=b.wp||{},b.wp.heartbeat=new d}(jQuery,window);
!function(a){function b(){var b,d=a("#wp-auth-check"),f=a("#wp-auth-check-form"),g=e.find(".wp-auth-fallback-expired"),h=!1;f.length&&(a(window).on("beforeunload.wp-auth-check",function(a){a.originalEvent.returnValue=window.authcheckL10n.beforeunload}),b=a('<iframe id="wp-auth-check-frame" frameborder="0">').attr("title",g.text()),b.load(function(){var b,i;h=!0;try{i=a(this).contents().find("body"),b=i.height()}catch(j){return e.addClass("fallback"),d.css("max-height",""),f.remove(),void g.focus()}b?i&&i.hasClass("interim-login-success")?c():d.css("max-height",b+40+"px"):i&&i.length||(e.addClass("fallback"),d.css("max-height",""),f.remove(),g.focus())}).attr("src",f.data("src")),a("#wp-auth-check-form").append(b)),e.removeClass("hidden"),b?(b.focus(),setTimeout(function(){h||(e.addClass("fallback"),f.remove(),g.focus())},1e4)):g.focus()}function c(){a(window).off("beforeunload.wp-auth-check"),"undefined"==typeof adminpage||"post-php"!==adminpage&&"post-new-php"!==adminpage||"undefined"==typeof wp||!wp.heartbeat||wp.heartbeat.connectNow(),e.fadeOut(200,function(){e.addClass("hidden").css("display",""),a("#wp-auth-check-frame").remove()})}function d(){var a=parseInt(window.authcheckL10n.interval,10)||180;f=(new Date).getTime()+1e3*a}var e,f;a(document).on("heartbeat-tick.wp-auth-check",function(a,f){"wp-auth-check"in f&&(d(),!f["wp-auth-check"]&&e.hasClass("hidden")?b():f["wp-auth-check"]&&!e.hasClass("hidden")&&c())}).on("heartbeat-send.wp-auth-check",function(a,b){(new Date).getTime()>f&&(b["wp-auth-check"]=!0)}).ready(function(){d(),e=a("#wp-auth-check-wrap"),e.find(".wp-auth-check-close").on("click",function(){c()})})}(jQuery);
