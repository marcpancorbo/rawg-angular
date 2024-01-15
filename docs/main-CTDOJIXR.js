import{a as C}from"./chunk-GHMAJUYK.js";import{a as $,b as ve}from"./chunk-DQKNE3NN.js";import{b as ue,d as de,f as fe,n as he,p as A}from"./chunk-RT3USW4Q.js";import{$ as G,A as D,Ba as te,C as d,Ca as ne,Ea as ie,Fa as re,G as N,Ga as oe,H as K,I as m,Ia as S,J as f,Ja as ae,Ka as le,L as Q,La as T,Ma as L,Na as se,Oa as pe,Pa as me,Qa as ce,R as p,S as v,Ta as y,X as c,_ as R,aa as q,ba as Y,c as j,ca as n,da as i,ea as l,fa as Z,g as B,ha as b,ia as H,ka as a,la as _,m as z,n as M,na as E,o as O,oa as h,pa as u,qa as J,s as P,ta as W,ua as X,va as ee,wa as V,x as U}from"./chunk-HJHVUKEA.js";var Te=["searchInput"],Le=()=>["/auth"];function Ae(e,t){e&1&&(n(0,"a",18),a(1,"LOG IN"),i()),e&2&&c("routerLink",u(1,Le))}var Ie=()=>["/user"];function Fe(e,t){if(e&1&&(n(0,"a",18),a(1),i()),e&2){let g=H(),o;c("routerLink",u(2,Ie)),p(1),_((o=g.$user())==null?null:o.name)}}function Be(e,t){e&1&&(m(),n(0,"svg",19),l(1,"path",20)(2,"path",21)(3,"path",22)(4,"path",23),i())}function De(e,t){if(e&1){let g=Z();n(0,"button",24),b("click",function(){N(g);let r=H();return K(r.logout())}),m(),n(1,"svg",19),l(2,"path",20)(3,"path",25)(4,"path",26)(5,"path",27),i()()}}var Re=()=>["/"],I=(()=>{let t=class t{onKeyDown(o){o.altKey&&o.key==="Enter"&&this.searchInput.nativeElement.focus()}constructor(o,r,s,x){this.gameSearchService=o,this.destroy$=r,this.authService=s,this.router=x,this.$user=this.authService.$user,this.query="",this.queryChange$=new j}ngOnInit(){this.subscribeToInputChanges()}subscribeToInputChanges(){this.queryChange$.pipe(z(500),O(),P(this.destroy$)).subscribe(o=>this.gameSearchService.setQueryString(o))}logout(){this.authService.logout().pipe(M(1)).subscribe(()=>this.router.navigate(["/"]))}};t.\u0275fac=function(r){return new(r||t)(v(ve),v(A),v(y),v(T))},t.\u0275cmp=d({type:t,selectors:[["app-top-bar"]],viewQuery:function(r,s){if(r&1&&X(Te,5),r&2){let x;W(x=ee())&&(s.searchInput=x.first)}},hostBindings:function(r,s){r&1&&b("keydown",function(w){return s.onKeyDown(w)},!1,Q)},standalone:!0,features:[E([A]),h],decls:30,vars:5,consts:[[1,"w-full","flex-col","md:flex-row","md:items-center","flex","gap-5","text-white"],[1,"text-xl","font-bold"],["title","Home",3,"routerLink"],[1,"w-full","flex","flex-col-reverse","md:flex-row","gap-5","md:items-center"],[1,"flex-1"],["for","default-search",1,"mb-2","text-sm","font-medium","text-gray-900","sr-only"],[1,"relative"],[1,"absolute","inset-y-0","start-0","flex","items-center","ps-3","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["type","search","autocomplete","off","id","default-search","placeholder","Search Games...",1,"block","w-full","p-3","ps-10","text-sm","outline-none","text-gray-900","rounded-full","bg-[#3b3b3b]","hover:bg-white","focus:bg-white","transition-colors","duration-300",3,"ngModel","ngModelChange"],["searchInput",""],[1,"absolute","gap-1","inset-y-0","end-0","flex","items-center","pe-5","pointer-events-none","text-sm","text-gray-500"],[1,"border","border-gray-500","px-1.5","py-0.5"],[1,"flex","gap-5","items-center"],["class","text-sm font-semibold hover:underline hover:underline-offset-8",3,"routerLink"],["href","#",1,"text-sm","font-semibold","hover:underline","hover:underline-offset-8"],["xmlns","http://www.w3.org/2000/svg","class","size-4","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round"],[1,"text-sm","font-semibold","hover:underline","hover:underline-offset-8",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"size-4"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"],["d","M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"],["d","M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"],["title","Logout",3,"click"],["d","M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"],["d","M9 12h12l-3 -3"],["d","M18 15l3 -3"]],template:function(r,s){r&1&&(n(0,"header",0)(1,"h1",1)(2,"a",2),a(3," AnguRawg "),i()(),n(4,"div",3)(5,"div",4)(6,"label",5),a(7,"Search"),i(),n(8,"div",6)(9,"div",7),m(),n(10,"svg",8),l(11,"path",9),i()(),f(),n(12,"input",10,11),b("ngModelChange",function(w){return s.query=w})("ngModelChange",function(w){return s.queryChange$.next(w)}),i(),n(14,"div",12)(15,"div",13)(16,"code"),a(17,"alt"),i()(),n(18,"span"),a(19,"+"),i(),n(20,"div",13)(21,"code"),a(22,"enter"),i()()()()(),n(23,"div",14),R(24,Ae,2,2,"a",15)(25,Fe,2,3),n(26,"a",16),a(27,"API"),i(),R(28,Be,5,0,":svg:svg",17)(29,De,6,0),i()()()),r&2&&(p(2),c("routerLink",u(4,Re)),p(10),c("ngModel",s.query),p(12),G(24,s.$user()?25:24),p(4),G(28,s.$user()?29:28))},dependencies:[he,ue,de,fe,L],changeDetection:0});let e=t;return e})();var He=(e,t)=>t.id,Ve=e=>["/genres",e];function $e(e,t){if(e&1&&(n(0,"li")(1,"a",6)(2,"span",7),m(),n(3,"svg",8),l(4,"path",9)(5,"path",26)(6,"path",27),i()(),f(),n(7,"span",11),a(8),i()()()),e&2){let g=t.$implicit;p(1),c("routerLink",J(2,Ve,g.name)),p(7),_(g.name)}}var je=()=>["/"],ge=()=>({exact:!0}),ze=()=>["/last-30-days"],Oe=()=>["/games"],Pe=()=>["/genres"],xe=(()=>{let t=class t{constructor(o){this.genreService=o,this.$genres=this.genreService.$genres}};t.\u0275fac=function(r){return new(r||t)(v(C))},t.\u0275cmp=d({type:t,selectors:[["app-aside-bar"]],standalone:!0,features:[h],decls:79,vars:12,consts:[[1,"text-white","sticky","top-0","py-5"],[1,"flex","flex-col","gap-5"],["routerLinkActive","underline underline-offset-8","title","Home",1,"text-2xl","block","font-bold","hover:text-[#636363]","transition-colors",3,"routerLink","routerLinkActiveOptions"],["href","#",1,"text-2xl","block","font-bold","hover:text-[#636363]","transition-colors"],[1,"flex","flex-col","gap-3","text-2xl","font-bold"],[1,"flex","flex-col","gap-2"],["routerLinkActive","underline underline-offset-8",1,"text-lg","font-normal","flex","items-center","gap-2","group",3,"routerLink"],[1,"p-2","bg-[#202020]","text-white","rounded-xl","group-hover:bg-white","group-hover:text-[#202020]","transition-colors","duration-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"size-4"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z","stroke-width","0","fill","currentColor"],[1,"text-sm"],["href","#",1,"text-lg","font-normal","flex","items-center","gap-2","group"],["d","M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"],["d","M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z","stroke-width","0","fill","currentColor"],["d","M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z","stroke-width","0","fill","currentColor"],["d","M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"],["d","M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"],["d","M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"],["d","M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"],["d","M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"],["d","M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"],["d","M4 20l14 0"],["d","M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"],["title","Home","routerLinkActive","underline underline-offset-8",1,"text-2xl","block","font-bold","hover:text-[#636363]","transition-colors",3,"routerLink"],["routerLinkActive","underline underline-offset-8",1,"text-2xl","block","font-bold","hover:text-[#636363]","transition-colors",3,"routerLink","routerLinkActiveOptions"],["d","M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z"],["d","M6.5 11.5l6 6"]],template:function(r,s){r&1&&(n(0,"nav",0)(1,"ul",1)(2,"li")(3,"a",2),a(4,"Home"),i()(),n(5,"li")(6,"a",3),a(7,"Reviews"),i()(),n(8,"li",4)(9,"span"),a(10," New Releases"),i(),n(11,"ul",5)(12,"li")(13,"a",6)(14,"span",7),m(),n(15,"svg",8),l(16,"path",9)(17,"path",10),i()(),f(),n(18,"span",11),a(19,"Last 30 days"),i()()(),n(20,"li")(21,"a",12)(22,"span",7),m(),n(23,"svg",8),l(24,"path",9)(25,"path",13),i()(),f(),n(26,"span",11),a(27,"This week"),i()()(),n(28,"li")(29,"a",12)(30,"span",7),m(),n(31,"svg",8),l(32,"path",9)(33,"path",14)(34,"path",15),i()(),f(),n(35,"span",11),a(36,"Next week"),i()()()()(),n(37,"li",4)(38,"span"),a(39,"Top"),i(),n(40,"ul",5)(41,"li")(42,"a",12)(43,"span",7),m(),n(44,"svg",8),l(45,"path",9)(46,"path",16)(47,"path",17)(48,"path",18),i()(),f(),n(49,"span",11),a(50,"Best of the year"),i()()(),n(51,"li")(52,"a",12)(53,"span",7),m(),n(54,"svg",8),l(55,"path",9)(56,"path",19)(57,"path",20)(58,"path",21)(59,"path",22),i()(),f(),n(60,"span",11),a(61,"Popular in 2023"),i()()(),n(62,"li")(63,"a",12)(64,"span",7),m(),n(65,"svg",8),l(66,"path",9)(67,"path",23),i()(),f(),n(68,"span",11),a(69,"All time top 250"),i()()()()(),n(70,"li")(71,"a",24),a(72,"All Games"),i()(),n(73,"li",4)(74,"a",25),a(75,"Genres"),i(),n(76,"ul",5),q(77,$e,9,4,"li",null,He),i()()()()),r&2&&(p(3),c("routerLink",u(6,je))("routerLinkActiveOptions",u(7,ge)),p(10),c("routerLink",u(8,ze)),p(58),c("routerLink",u(9,Oe)),p(3),c("routerLink",u(10,Pe))("routerLinkActiveOptions",u(11,ge)),p(3),Y(s.$genres().slice(0,5)))},dependencies:[L,se],changeDetection:0});let e=t;return e})();var Se=(()=>{let t=class t{constructor(o){this.genreService=o,this.getGenres()}getGenres(){this.genreService.getGenres().pipe(M(1)).subscribe()}};t.\u0275fac=function(r){return new(r||t)(v(C))},t.\u0275cmp=d({type:t,selectors:[["app-main-layout"]],standalone:!0,features:[E([]),h],decls:6,vars:0,consts:[[1,"content","py-12"]],template:function(r,s){r&1&&(l(0,"app-top-bar"),n(1,"main",0)(2,"aside"),l(3,"app-aside-bar"),i(),n(4,"div"),l(5,"router-outlet"),i()())},dependencies:[S,I,xe],styles:[".content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}@media (min-width: 768px){.content[_ngcontent-%COMP%]{grid-template-columns:220px 1fr}}"],changeDetection:0});let e=t;return e})();var ye=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=d({type:t,selectors:[["app-auth-layout"]],standalone:!0,features:[h],decls:4,vars:0,consts:[[1,"content","py-12"]],template:function(r,s){r&1&&(l(0,"app-top-bar"),n(1,"main",0)(2,"div"),l(3,"router-outlet"),i()())},dependencies:[S,I],changeDetection:0});let e=t;return e})();var Ce=(()=>{let t=class t{constructor(o,r){this.authService=o,this.router=r}canActivate(o,r){return this.authService.$user()?!0:this.router.parseUrl("/auth")}};t.\u0275fac=function(r){return new(r||t)(D(y),D(T))},t.\u0275prov=U({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var we=[{path:"",component:Se,children:[{path:"",loadChildren:()=>import("./chunk-4ODP2B3N.js").then(e=>e.GAME_LIST_ROUTES)},{path:"user",canActivate:[Ce],loadChildren:()=>import("./chunk-ZGYQ6KAP.js").then(e=>e.USER_ROUTES)}]},{path:"auth",component:ye,children:[{path:"",loadChildren:()=>import("./chunk-W4XWFSLX.js").then(e=>e.AUTH_ROUTES)}]},{path:"**",redirectTo:""}];var ke=(e,t)=>(e=e.clone({params:e.params?e.params.set("key",$.API_KEY):new ne().set("key",$.API_KEY)}),t(e));var F=class extends le{shouldReuseRoute(t,g){let o=t.data.reuseComponent??!0;return t.routeConfig===g.routeConfig&&o}};function Ue(e){return()=>B(e.getGenres())}function Ne(e){return()=>B(e.getUserFromStorage())}var Me={providers:[pe(we,me(),ce()),ie(re([ke])),{provide:ae,useClass:F},{provide:V,useFactory:Ue,deps:[C],multi:!0},{provide:V,useFactory:Ne,deps:[y],multi:!0}]};var be=(()=>{let t=class t{constructor(){this.title="rawg-angular"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=d({type:t,selectors:[["app-root"]],standalone:!0,features:[h],decls:1,vars:0,template:function(r,s){r&1&&l(0,"router-outlet")},dependencies:[te,S]});let e=t;return e})();oe(be,Me).catch(e=>console.error(e));