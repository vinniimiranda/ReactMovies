(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(78),a(71)),i=a(18),m=a(39),u=a.n(m),s=a(158),d=a(67),p=a(147),g=a(149),f=a(150),E=a(151),v=a(152),b=a(153),y=a(154),h=a(155),x=a(156),w=a(3),O=a(56),_=a.n(O),j=(a(99),Object(p.a)(function(e){return{card:{borderRadius:"1.9rem",filter:"drop-shadow(2px 7px 0 rgba(0,0,0,.3))"},media:{height:550,paddingTop:"56.25%"},expand:{position:"absolute",right:20,transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)",zIndex:"500"}}})),S=function(e){var t=j(),a=r.a.useState(!1),n=Object(i.a)(a,2),o=n[0],c=n[1],l=r.a.useState({}),m=Object(i.a)(l,2),s=m[0],p=m[1],O=function(t){u.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(e.apiKey,"&language=pt-bt")).then(function(e){var t=e.data;p(t)}),c(!o)},S=function(e){var t=parseInt(e).toFixed(2).split(".");return t[0]="U$ "+t[0].split(/(?=(?:...)*$)/).join(".")},k=function(e){return _()(e).format("LL")};return r.a.createElement("div",null,r.a.createElement(g.a,{className:t.card},r.a.createElement(f.a,{onClick:function(){return O(e.idMovie)}},r.a.createElement(E.a,{className:t.media,image:"https://image.tmdb.org/t/p/w500"+e.link}),r.a.createElement(v.a,null,r.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title,r.a.createElement(y.a,{className:Object(w.a)(t.expand,Object(d.a)({},t.expandOpen,o)),onClick:function(){return O(e.idMovie)}},r.a.createElement(h.a,null,"keyboard_arrow_down")))),r.a.createElement(x.a,{in:o,timeout:"auto",unmountOnExit:!0,style:{position:"absolute",bottom:0,backgroundColor:"#fff",width:"100%"}},r.a.createElement(v.a,{style:{height:"100%",overflowY:"auto"}},e.overview?r.a.createElement(b.a,{style:{textAlign:"left",clear:"both"},variant:"subtitle1",color:"textSecondary",component:"p"},r.a.createElement("strong",null,"Sinopse:")," ",e.overview):null,s.budget?r.a.createElement(b.a,{variant:"body1",color:"textSecondary",component:"p"},r.a.createElement("strong",null,"Or\xe7amento:")," ",S(s.budget)):null,s.revenue?r.a.createElement(b.a,{variant:"body1",color:"textSecondary",component:"p"},r.a.createElement("strong",null,"Bilheteria:")," ",S(s.revenue)):null,r.a.createElement(b.a,{variant:"body1",color:"textSecondary",component:"p"},r.a.createElement("strong",null,"Nota:")," ",s.vote_average?s.vote_average:null),r.a.createElement(b.a,{variant:"body1",color:"textSecondary",component:"p"},r.a.createElement("strong",null,"Data de Lan\xe7amento:")," ",e.releaseDate?k(e.releaseDate):k(e.first_air_date)),r.a.createElement(b.a,{variant:"body1",color:"textSecondary",component:"p"},r.a.createElement("strong",null,"Generos: ")," ",s.genres?s.genres.map(function(e){return"#".concat(e.name," ")}):null))))))},k=a(159),T=a(70),C=a(157),P=Object(T.a)({palette:{primary:{main:"#7c4dff"},secondary:{main:"#11cb5f"}}}),B=function(e){var t=r.a.useState([1,2,3,4,5,6]),a=Object(i.a)(t,2),n=a[0],o=a[1];return r.a.createElement(C.a,{theme:P},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(g.a,{style:{borderRadius:"1rem"}},r.a.createElement(s.a,{container:!0,style:{margin:10}},r.a.createElement(s.a,{item:!0,xs:1,sm:2,md:2}),r.a.createElement(s.a,{item:!0,xs:2,sm:2,md:1},r.a.createElement(k.a,{onClick:function(){return function(){if(n[0]===e.currentPage){var t=n.map(function(e){return e-1});o(n=t)}e.goTo(e.currentPage-1)}()},color:"primary",variant:"outlined",disabled:e.currentPage<=1},r.a.createElement(h.a,null,"keyboard_arrow_left "))),n.map(function(t,a){return r.a.createElement(s.a,{item:!0,xs:2,sm:2,md:1},r.a.createElement(k.a,{onClick:function(){return e.goTo(t)},color:"primary",variant:t===e.currentPage?"contained":"outlined"},t))}),r.a.createElement(s.a,{item:!0,xs:1},r.a.createElement(k.a,{color:"primary",onClick:function(){return function(){if(n[n.length-1]===e.currentPage){var t=n.map(function(e){return e+1});o(n=t)}e.goTo(e.currentPage+1)}()},variant:"outlined"},r.a.createElement(h.a,null,"keyboard_arrow_right"))),r.a.createElement(s.a,{item:!0,xs:2,sm:2})))))},L=a(160),D=a(165),K=a(163),N=a(161),F=a(166),R=a(164),A=function(e){var t=r.a.useState([{id:1,type:"movie"}]),a=Object(i.a)(t,2);a[0],a[1];return r.a.createElement("div",null,r.a.createElement(s.a,{container:!0,spacing:1,style:{marginBottom:15,marginTop:15}},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement(L.a,{fullWidth:!0,style:{margin:15,width:"95%",textAlign:"left"}},r.a.createElement(D.a,{htmlFor:"age-helper"},"Tipo"),r.a.createElement(K.a,{value:e.typeContent,onChange:function(t){return e.selectType(t.target.value)},input:r.a.createElement(N.a,{name:"age",id:"age-helper"})},r.a.createElement(F.a,{value:"movie"},"Filmes"),r.a.createElement(F.a,{value:"tv"},"S\xe9ries")))))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement(R.a,{style:{margin:15,width:"95%"},id:"filled-name",label:"Digite a pesquisa..",margin:"normal",onKeyUp:function(t){return e.setSearch(t.target.value)}}))))))},I=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{setSearch:e.setSearch,selectType:e.selectType,typeContent:e.typeContent}),r.a.createElement(s.a,{container:!0,spacing:1},e.movieList.map(function(t){return r.a.createElement(s.a,{key:t.id,item:!0,xs:12,sm:12,md:6,lg:6,xl:6,style:{position:"relative",top:0,left:0}},r.a.createElement(S,{link:t.poster_path,title:t.title||t.name,overview:t.overview,idMovie:t.id,releaseDate:t.release_date,first_air_date:t.first_air_date,apiKey:e.apiKey}))}),r.a.createElement(B,{goTo:e.goTo,currentPage:e.currentPage})))},M=a(162);a(113),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){var e="7b8e1e239f830512fd3d0ada5105a8e7",t=Object(n.useState)(1),a=Object(i.a)(t,2),o=a[0],c=a[1],m=Object(n.useState)([]),s=Object(i.a)(m,2),d=s[0],p=s[1],g=Object(n.useState)("movie"),f=Object(i.a)(g,2),E=f[0],v=f[1],b=Object(n.useState)(""),y=Object(i.a)(b,2),h=y[0],x=y[1];Object(n.useEffect)(function(){w(1)},[]),Object(n.useEffect)(function(){w(1)},[E]),Object(n.useEffect)(function(){h.length>0?u.a.get("https://api.themoviedb.org/3/search/".concat(E,"?api_key=").concat(e,"&language=pt-BR&query=").concat(h,"&page=1&include_adult=false")).then(function(e){var t=e.data;return p(t.results)}):w(1)},[h]);var w=function(t){u.a.get("https://api.themoviedb.org/3/discover/".concat(E,"?api_key=").concat(e,"&language=pt-BR&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(t)).then(function(e){var t=e.data;p(Object(l.a)(t.results))})};return r.a.createElement("div",{className:"App"},r.a.createElement(M.a,null,r.a.createElement(I,{goTo:function(e){c(e),w(e)},movieList:d,currentPage:o,setSearch:x,apiKey:e,selectType:function(e){v(e)},typeContent:E})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a(114)},78:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.57913c8f.chunk.js.map