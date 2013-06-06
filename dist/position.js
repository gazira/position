define("arale/position/1.0.1/position",["$"],function(e,t){function n(e){e=f(e)||{},e.nodeType&&(e={element:e});var t=f(e.element)||d;if(1!==t.nodeType)throw Error("posObject.element is invalid.");var n={element:t,x:e.x||0,y:e.y||0},o=t===d||"VIEWPORT"===t._id;return n.offset=function(){return a?{left:0,top:0}:o?{left:p(document).scrollLeft(),top:p(document).scrollTop()}:l(p(t)[0])},n.size=function(){var e=o?p(window):p(t);return{width:e.outerWidth(),height:e.outerHeight()}},n}function o(e){e.x=i(e.x,e,"width"),e.y=i(e.y,e,"height")}function i(e,t,n){if(e+="",e=e.replace(/px/gi,""),/\D/.test(e)&&(e=e.replace(/(?:top|left)/gi,"0%").replace(/center/gi,"50%").replace(/(?:bottom|right)/gi,"100%")),-1!==e.indexOf("%")&&(e=e.replace(/(\d+(?:\.\d+)?)%/gi,function(e,o){return t.size()[n]*(o/100)})),/[+\-*\/]/.test(e))try{e=Function("return "+e)()}catch(o){throw Error("Invalid position value: "+e)}return c(e)}function r(e){var t=e.offsetParent();t[0]===document.documentElement&&(t=p(document.body)),y&&t.css("zoom",1);var n;return n=t[0]===document.body&&"static"===t.css("position")?{top:0,left:0}:l(t[0]),n.top+=c(t.css("border-top-width")),n.left+=c(t.css("border-left-width")),n}function c(e){return parseFloat(e,10)||0}function f(e){return p(e)[0]}function l(e){var t,n=e.getBoundingClientRect(),o=document.documentElement,i=e&&e.ownerDocument;if(i)return t=u(i),{left:n.left+(t.pageXOffset||o.scrollLeft)-(o.clientLeft||document.body.clientLeft||0),top:n.top+(t.pageYOffset||o.scrollTop)-(o.clientTop||document.body.clientTop||0)}}function u(e){return p.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var s=t,d={_id:"VIEWPORT",nodeType:1},p=e("$"),a=!1,m=(window.navigator.userAgent||"").toLowerCase(),y=-1!==m.indexOf("msie 6");s.pin=function(e,t){e=n(e),t=n(t);var i=p(e.element);"fixed"!==i.css("position")||y?(i.css("position","absolute"),a=!1):a=!0,o(e),o(t);var c=r(i),f=t.offset(),l=f.top+t.y-e.y-c.top,u=f.left+t.x-e.x-c.left;i.css({left:u,top:l})},s.center=function(e,t){s.pin({element:e,x:"50%",y:"50%"},{element:t,x:"50%",y:"50%"})},s.VIEWPORT=d});
