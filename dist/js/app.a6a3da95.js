(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)i=s[u],o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d04":function(t,e,a){t.exports=a.p+"img/odv-reversed-01.1ad0ce7a.svg"},1670:function(t,e,a){t.exports=a.p+"img/ocean-plus-main-logo.d5220070.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg--navy",attrs:{id:"app"}},[n("div",{staticClass:"home__hero-image",style:{"background-image":"url("+t.bgImg+")"}},[n("header",{staticClass:"home__header"},[n("img",{staticClass:"home__title",attrs:{src:a("1670"),alt:"Ocean+ Logo"}}),n("div",{staticClass:"home__description container--small"},t._l(t.description,(function(e){return n("p",{staticClass:"home__description-paragraph"},[t._v(t._s(e))])})),0)])]),n("div",{staticClass:"home__main container page-padding flex flex-h-center"},t._l(t.externalSites,(function(t){return n("site-link",{key:t.id,attrs:{site:t}})})),1),n("site-footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-link"},[a("a",{staticClass:"a--plain",attrs:{href:t.site.link}},[t.site.imagePath?a("img",{staticClass:"site-link__logo",attrs:{src:t.site.imagePath,alt:t.site.name+" Logo"}}):a("h1",{staticClass:"site-link__title"},[t._v(t._s(t.site.name))])]),a("p",{staticClass:"site-link__description",domProps:{innerHTML:t._s(t.description)}})])},s=[],l=(a("b54a"),a("a481"),{props:{site:{required:!0,type:Object}},computed:{description:function(){var t=this;return this.site.description.replace(/\[(.*?)\]/g,(function(e){return'<a class="site-link__text-link" href="'+t.site.link+'">'+e.substring(1,e.length-1)+"</a>"}))}}}),c=l,p=a("2877"),u=Object(p["a"])(c,i,s,!1,null,null,null),f=u.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer-wrapper gutters"},[a("div",{staticClass:"footer"},[t._m(0),a("div",{staticClass:"flex flex-wrap flex-center"},[t._m(1),a("span",{staticClass:"footer__copyright"},[t._v("© copyright "+t._s(t.currentYear))])])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"/",title:"Visit Ocean+"}},[n("img",{staticClass:"footer__partner-logo logo--site",attrs:{src:a("1670"),alt:"Ocean+ logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap flex-center"},[n("a",{attrs:{href:"https://geobon.org",title:"Visit GEO BON",target:"_blank"}},[n("img",{staticClass:"footer__partner-logo logo--geobon",attrs:{src:a("c0f4"),alt:"GEO BON logo"}})]),n("a",{attrs:{href:"http://proteuspartners.org",title:"Visit Proteus Partners",target:"_blank"}},[n("img",{staticClass:"footer__partner-logo logo--proteus",attrs:{src:a("ca21"),alt:"Proteus logo"}})]),n("a",{attrs:{href:"https://www.unep-wcmc.org",title:"Visit the UN Environment World Conservation Montioring Centre",target:"_blank"}},[n("img",{staticClass:"footer__partner-logo logo--wcmc",attrs:{src:"https://s3.amazonaws.com/wcmc.logo/UNEP_WCMC_logo_white.svg",alt:"UN Environment World Conservation Monitoring logo"}})])])}],m={name:"site-footer",computed:{currentYear:function(){return(new Date).getFullYear()}}},h=m,v=Object(p["a"])(h,d,g,!1,null,null,null),b=v.exports,_=a("b13e"),y=a.n(_),w=[{id:4,name:"Ocean Data Viewer",link:"http://data.unep-wcmc.org",description:"[Ocean+ Data Viewer] is the go-to-platform for up-to-date, globally coherent, marine biodiversity spatial datasets. Users can view and download a range of spatial datasets that are useful for informing decisions regarding the conservation of ocean biodiversity.",imagePath:a("0d04")},{id:2,name:"Ocean+ Habitats",link:"https://habitats.oceanplus.org/",description:"[Ocean+ Habitats] provides readily-available information and statistics on the distribution and conservation status of critical marine and coastal habitats. Combining habitat distribution data with Protected Planet and the IUCN Red List, users can explore and download tabular and spatial data to inform the conservation of marine habitats.",imagePath:a("7582")},{id:1,name:"Ocean+ Library",link:"https://data.oceanplus.org",description:"[Ocean+ Library] is a meta-database that provides summary information on additional online resources and data of ocean biodiversity importance. Users can search the information on the platform to find relevant resources that support effective ocean conservation on a regional and global level.",imagePath:a("a023")}],x=["Ocean+ is an initiative that brings together accurate and up-to-date data and information on ocean biodiversity to support effective decisions that protect global marine life.","The ocean contains some of the most productive ecosystems, vast natural resources, and unique habitats on Earth. Home to more than half of all life on Earth, the ocean covers over 70% of the surface of the planet and plays a vital role in regulating the planet’s climate. Today, the marine environment is facing many pressures as a result of irresponsible human activity, from the impacts of climate change and overfishing to the effects of coastal development and pollution.","We must protect our ocean. Ocean+ and its three data platforms aim to provide open and trusted information on marine biodiversity so that we can all make the best choices to sustainably manage, conserve and restore the ocean."],C={name:"app",components:{SiteLink:f,SiteFooter:b},data:function(){return{description:x,externalSites:w,bgImg:y.a}}},O=C,k=Object(p["a"])(O,o,r,!1,null,null,null),P=k.exports;a("69f5");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(P)}}).$mount("#app")},"69f5":function(t,e,a){},7582:function(t,e,a){t.exports=a.p+"img/logo-ocean-plus-habitats.9d769183.svg"},a023:function(t,e,a){t.exports=a.p+"img/logo-ocean-plus-library.a8710763.svg"},b13e:function(t,e,a){t.exports=a.p+"img/background.6b6826af.jpg"},c0f4:function(t,e,a){t.exports=a.p+"img/logo-geobon.1318f7f0.svg"},ca21:function(t,e,a){t.exports=a.p+"img/logo-proteus.9e42e28c.svg"}});
//# sourceMappingURL=app.a6a3da95.js.map