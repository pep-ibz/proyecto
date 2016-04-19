/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

!function(e){function t(t){var n=e(this),o=null,i=[],u=null,r=null,c=e.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:e.noop,exit:e.noop,activate:e.noop,deactivate:e.noop,exitMenu:e.noop,exitDelay:1e3},t),l=3,a=300,f=function(e){i.push({x:e.pageX,y:e.pageY}),i.length>l&&i.shift()},s=function(){r&&clearTimeout(r),r=setTimeout(function(){c.exitMenu(this)&&(o&&c.deactivate(o),o=null)},c.exitDelay)},m=function(){r&&clearTimeout(r),c.enter(this),h(this)},v=function(){c.exit(this)},x=function(){d(this)},d=function(e){e!=o&&(o&&c.deactivate(o),c.activate(e),o=e)},h=function(e){var t=p();t?r=setTimeout(function(){h(e)},t):d(e)},p=function(){function e(e,t){return(t.y-e.y)/(t.x-e.x)}if(!o)return 0;var t=n.offset(),r={x:t.left,y:t.top-c.tolerance},l={x:t.left+n.outerWidth(),y:r.y},f={x:t.left,y:t.top+n.outerHeight()+c.tolerance},s={x:t.left+n.outerWidth(),y:f.y},m=i[i.length-1],v=i[0];if(!m)return 0;if(v||(v=m),v.x<t.left||v.x>s.x||v.y<t.top||v.y>s.y)return 0;if(u&&m.x==u.x&&m.y==u.y)return 0;var x=l,d=s;"left"==c.submenuDirection?(x=f,d=r):"below"==c.submenuDirection?(x=s,d=f):"above"==c.submenuDirection&&(x=r,d=l);var h=e(m,x),p=e(m,d),y=e(v,x),b=e(v,d);return y>h&&p>b?(u=m,a):(u=null,0)};n.mouseleave(s).find(c.rowSelector).mouseenter(m).mouseleave(v).click(x),e(document).mousemove(f)}e.fn.verticalDropdown=function(t){function n(){return r.removeClass("uk-open"),!0}function o(t){e(t).addClass("uk-open")}function i(t){e(t).removeClass("uk-open")}var u=e(this),r=(u.find(".uk-dropdown"),u.find("> ul > li"));r.removeAttr("data-uk-dropdown"),u.menuAim({activate:o,deactivate:i,exitMenu:n,rowSelector:"> ul > li",submenuSelector:"uk-parent",tolerance:200})},e.fn.menuAim=function(e){return this.each(function(){t.call(this,e)}),this}}(jQuery);