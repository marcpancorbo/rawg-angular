import{a as ee}from"./chunk-GHMAJUYK.js";import{a as H}from"./chunk-ZXWOD2TX.js";import{a as Me,b as Oe}from"./chunk-DQKNE3NN.js";import{a as T}from"./chunk-YHBS67GD.js";import{d as F,e as N,g as G,h as $,i as I,j as M,k as O,l as k,m as Ie,o as A,p as j}from"./chunk-RT3USW4Q.js";import{$ as h,A as Z,Aa as J,B as q,C as v,D as xe,Da as Fe,E as Ce,F as ye,Ha as Ne,La as Ge,M as be,Ma as $e,N as we,Q as Te,R as c,S as E,U as ne,V as Ee,W as L,X as m,Y as De,_ as g,a as u,aa as y,b as S,ba as b,c as ce,ca as n,d as me,da as i,ea as d,f as pe,h as ie,ha as P,i as de,ia as w,k as fe,ka as a,l as ue,la as p,ma as Pe,na as _,oa as x,p as ge,qa as _e,r as he,s as B,t as Y,u as Se,x as X,y as ve}from"./chunk-HJHVUKEA.js";var ke=(()=>{let e=class e{constructor(o){this.httpClient=o}getGameById(o){return this.httpClient.get(`${Me.BASE_API_URL}games/${o}`)}};e.\u0275fac=function(l){return new(l||e)(Z(Fe))},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ae=(()=>{let e=class e{constructor(o){this.gameService=o}resolve(o){return this.gameService.getGameById(o.params.id)}};e.\u0275fac=function(l){return new(l||e)(Z(ke))},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var je=(()=>{let e=class e{constructor(o){this.route=o}ngOnInit(){this.gameDetails=this.route.snapshot.data.game}};e.\u0275fac=function(l){return new(l||e)(E(Ne))},e.\u0275cmp=v({type:e,selectors:[["app-game-detail-page"]],standalone:!0,features:[x],decls:21,vars:3,consts:[[1,"flex","flex-col","gap-5"],[1,"banner"],[1,"flex","relative","flex-col","gap-5","p-20"],[1,"text-6xl","text-white","font-bold","text-balance"],[1,"flex","gap-5","text-white"],[1,"flex","flex-col"]],template:function(l,s){l&1&&(n(0,"article",0)(1,"div",1)(2,"div",2)(3,"h1",3),a(4),i(),n(5,"div",4)(6,"div",5)(7,"span"),a(8,"Exceptional"),i(),n(9,"span"),a(10,"174 ratings"),i()(),n(11,"div",5)(12,"span"),a(13,"Exceptional"),i(),n(14,"span"),a(15,"174 ratings"),i()(),n(16,"div",5)(17,"span"),a(18,"Exceptional"),i(),n(19,"span"),a(20,"174 ratings"),i()()()()()()),l&2&&(c(1),De("background-image","url("+s.gameDetails.background_image+")"),c(3),Pe(" ",s.gameDetails.name," "))},styles:['.banner[_ngcontent-%COMP%]{position:relative;width:100%;display:flex;background-size:contain;background-repeat:no-repeat}.banner[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-color:#000000a6}@media (min-width: 768px){.banner[_ngcontent-%COMP%]{background-size:cover}}']});let t=e;return t})();function Qe(t,e,r,o){let l=window&&!!window.document&&window.document.documentElement,s=l&&e?window:r;if(t&&(s=t&&l&&typeof t=="string"?Ze(t,r.nativeElement,o):t,!s))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return s}function Ze(t,e,r){return(r?window.document:e).querySelector(t)}function oe(t){return t&&!t.firstChange}function Je(){return typeof window<"u"}var et={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},tt={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"},re=class{constructor(e=!0){this.vertical=e,this.propsMap=e?et:tt}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}};function it(t,e,r){return!!(t&&e||!r&&e)}function nt({windowElement:t,axis:e}){return ot({axis:e,isWindow:rt(t)},t)}function ot(t,e){let r=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return S(u({},t),{container:r})}function rt(t){return["Window","global"].some(r=>Object.prototype.toString.call(t).includes(r))}function se(t,e){return t?e.document.documentElement:null}function He(t,e){let r=st(e);return e.isWindow?lt(r,t,e):at(r,t,e)}function lt(t,e,r){let{axis:o,container:l,isWindow:s}=r,{offsetHeightKey:f,clientHeightKey:D}=Re(o),V=t+Ke(se(s,l),o,s),C=We(e.nativeElement,s,f,D),z=ct(e.nativeElement,o,s)+C;return{height:t,scrolled:V,totalToScroll:z,isWindow:s}}function at(t,e,r){let{axis:o,container:l}=r,s=l[o.scrollTopKey()],f=l[o.scrollHeightKey()];return{height:t,scrolled:s,totalToScroll:f,isWindow:!1}}function Re(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function st({container:t,isWindow:e,axis:r}){let{offsetHeightKey:o,clientHeightKey:l}=Re(r);return We(t,e,o,l)}function We(t,e,r,o){if(isNaN(t[r])){let l=se(e,t);return l?l[o]:0}else return t[r]}function ct(t,e,r){let o=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[o]+Ke(t,e,r)}function Ke(t,e,r){let o=e.pageYOffsetKey(),l=e.scrollTopKey(),s=e.offsetTopKey();return isNaN(window.pageYOffset)?se(r,t)[l]:t.ownerDocument?t.ownerDocument.defaultView[o]:t[s]}function mt(t,e={down:0,up:0},r){let o,l;if(t.totalToScroll<=0)return!1;let s=t.isWindow?t.scrolled:t.height+t.scrolled;if(r)o=(t.totalToScroll-s)/t.totalToScroll,l=(e?.down?e.down:0)/10;else{let D=t.scrolled+(t.totalToScroll-s);o=t.scrolled/D,l=(e?.up?e.up:0)/10}return o<=l}function pt(t,e){return t<e.scrolled}function dt(t,e,r){let o=pt(t,e);return{fire:mt(e,r,o),scrollDown:o}}var le=class{constructor(e){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},Object.assign(this,e)}updateScrollPosition(e){return this.lastScrollPosition=e}updateTotalToScroll(e){this.lastTotalToScroll!==e&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=e)}updateScroll(e,r){this.updateScrollPosition(e),this.updateTotalToScroll(r)}updateTriggeredFlag(e,r){r?this.triggered.down=e:this.triggered.up=e}isTriggeredScroll(e,r){return r?this.triggered.down===e:this.triggered.up===e}};function ft(t){let{scrollContainer:e,scrollWindow:r,element:o,fromRoot:l}=t,s=nt({axis:new re(!t.horizontal),windowElement:Qe(e,r,o,l)}),f=new le({totalToScroll:He(o,s).totalToScroll}),D={container:s.container,throttle:t.throttle},V={up:t.upDistance,down:t.downDistance};return ut(D).pipe(de(()=>pe(He(o,s))),ie(C=>gt(f.lastScrollPosition,C,V)),Y(({stats:C})=>f.updateScroll(C.scrolled,C.totalToScroll)),ue(({fire:C,scrollDown:z,stats:{totalToScroll:Ye}})=>it(t.alwaysCallback,C,f.isTriggeredScroll(Ye,z))),Y(({scrollDown:C,stats:{totalToScroll:z}})=>{f.updateTriggeredFlag(z,C)}),ie(ht))}function ut(t){let e=fe(t.container,"scroll");return t.throttle&&(e=e.pipe(Se(t.throttle,void 0,{leading:!0,trailing:!0}))),e}function gt(t,e,r){let{scrollDown:o,fire:l}=dt(t,e,r);return{scrollDown:o,fire:l,stats:e}}var ae={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function ht(t){let{scrollDown:e,stats:{scrolled:r}}=t;return{type:e?ae.DOWN:ae.UP,payload:{currentScrollPosition:r}}}var R=(()=>{let e=class e{constructor(o,l){this.element=o,this.zone=l,this.scrolled=new ne,this.scrolledUp=new ne,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:o,infiniteScrollDisabled:l,infiniteScrollDistance:s}){let f=oe(o),D=oe(l),V=oe(s),C=!D&&!this.infiniteScrollDisabled||D&&!l.currentValue||V;(f||D||V)&&(this.destroyScroller(),C&&this.setup())}setup(){Je()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=ft({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(o=>this.handleOnScroll(o))})}handleOnScroll({type:o,payload:l}){let s=o===ae.DOWN?this.scrolled:this.scrolledUp;St(s)&&this.zone.run(()=>s.emit(l))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}};e.\u0275fac=function(l){return new(l||e)(E(we),E(Ee))},e.\u0275dir=Ce({type:e,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[ye]});let t=e;return t})();function St(t){return t.observed??t.observers.length>0}var W=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=xe({type:e}),e.\u0275inj=ve({});let t=e;return t})();var vt=(t,e)=>e.id;function xt(t,e){if(t&1&&(n(0,"option",18),a(1),i()),t&2){let r=e.$implicit;m("value",r.id),c(1),p(r.name)}}function Ct(t,e){if(t&1&&(n(0,"form",7)(1,"div")(2,"label",8),a(3,"Order by"),i(),n(4,"select",9)(5,"option",10),a(6,"Relevance"),i(),n(7,"option",11),a(8,"Date added"),i(),n(9,"option",12),a(10,"Name"),i(),n(11,"option",13),a(12,"Release date"),i(),n(13,"option",14),a(14,"Popularity"),i(),n(15,"option",15),a(16,"Average rating"),i()()(),n(17,"div")(18,"label",8),a(19,"Genres"),i(),n(20,"select",16)(21,"option",17),a(22,"All"),i(),y(23,xt,2,2,"option",18,vt),i()()()),t&2){let r=w();m("formGroup",r.form),c(23),b(r.$genres())}}function yt(t,e){t&1&&(n(0,"div",19),d(1,"app-spinner"),i())}var U=(()=>{let e=class e{constructor(){this.gamesSearchService=q(Oe),this.genreService=q(ee),this.destroy$=q(j),this.fb=q(Ie),this.$games=Te([]),this.$genres=this.genreService.$genres,this.$loading=this.gamesSearchService.$loading,this.scrolled$=new ce,this.defaultSearchFilters={search:"",page_size:25,ordering:"-relevance",genres:""},this.componentParams={title:"Please provide a title",showFilters:!0}}ngOnInit(){this.filters$=new me(u({},this.defaultSearchFilters)),this.componentParams.showFilters&&this.initForm(),this.subscribeToFiltersChange(),this.subscribeToQueryChanges(),this.subscribeToInfiniteScroll()}initForm(){this.form=this.fb.group({order:[this.defaultSearchFilters.ordering],genres:[this.defaultSearchFilters.genres]}),this.subscribeToFormChanges()}subscribeToFormChanges(){this.form.valueChanges.pipe(B(this.destroy$)).subscribe(()=>{let o=this.form.controls.order.value,l=this.form.controls.genres.value;this.filters$.next(S(u({},this.filters$.getValue()),{ordering:o,genres:l}))})}subscribeToFiltersChange(){this.filters$.pipe(Y(()=>this.$games.set([])),he(o=>this.gamesSearchService.searchGames(o)),B(this.destroy$)).subscribe(o=>{this.$games.set(o.results)})}subscribeToInfiniteScroll(){this.scrolled$.pipe(ge(()=>this.gamesSearchService.nextPage()),B(this.destroy$)).subscribe(o=>this.$games.update(l=>[...l,...o.results]))}subscribeToQueryChanges(){this.gamesSearchService.queryString$.pipe(B(this.destroy$)).subscribe(o=>{this.filters$.next(S(u({},this.filters$.getValue()),{search:o}))})}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=v({type:e,selectors:[["app-abstract-games-page"]],standalone:!0,features:[_([]),x],decls:9,vars:7,consts:[["infiniteScroll","",1,"flex","flex-col","gap-10",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[1,"flex","flex-col","gap-3"],[1,"text-5xl","md:text-7xl","text-white","font-bold"],[1,"text-md","text-white"],["class","flex gap-5",3,"formGroup"],[3,"games"],["class","flex items-center justify-center"],[1,"flex","gap-5",3,"formGroup"],["for","small",1,"block","mb-2","text-sm","font-medium","text-white"],["id","small","formControlName","order",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value","-relevance"],["value","-created"],["value","name"],["value","-released"],["value","-added"],["value","-rating"],["id","small","formControlName","genres",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value",""],[3,"value"],[1,"flex","items-center","justify-center"]],template:function(l,s){l&1&&(n(0,"div",0),P("scrolled",function(){return s.scrolled$.next()}),n(1,"div",1)(2,"h1",2),a(3),i(),n(4,"span",3),a(5),i()(),g(6,Ct,25,1,"form",4),d(7,"app-game-list",5),g(8,yt,2,0,"div",6),i()),l&2&&(m("infiniteScrollDistance",2)("infiniteScrollThrottle",50),c(3),p(s.componentParams.title),c(2),p(s.componentParams.subtitle),c(1),h(6,s.componentParams.showFilters?6:-1),c(1),m("games",s.$games()),c(1),h(8,s.$loading()?8:-1))},dependencies:[H,T,A,G,O,k,M,F,N,$,I,W,R],changeDetection:0});let t=e;return t})();var bt=(t,e)=>e.id;function wt(t,e){if(t&1&&(n(0,"option",18),a(1),i()),t&2){let r=e.$implicit;m("value",r.id),c(1),p(r.name)}}function Tt(t,e){if(t&1&&(n(0,"form",7)(1,"div")(2,"label",8),a(3,"Order by"),i(),n(4,"select",9)(5,"option",10),a(6,"Relevance"),i(),n(7,"option",11),a(8,"Date added"),i(),n(9,"option",12),a(10,"Name"),i(),n(11,"option",13),a(12,"Release date"),i(),n(13,"option",14),a(14,"Popularity"),i(),n(15,"option",15),a(16,"Average rating"),i()()(),n(17,"div")(18,"label",8),a(19,"Genres"),i(),n(20,"select",16)(21,"option",17),a(22,"All"),i(),y(23,wt,2,2,"option",18,bt),i()()()),t&2){let r=w();m("formGroup",r.form),c(23),b(r.$genres())}}function Et(t,e){t&1&&(n(0,"div",19),d(1,"app-spinner"),i())}var Le=(()=>{let e=class e extends U{constructor(){super(),this.defaultSearchFilters=u({},this.defaultSearchFilters),this.componentParams=S(u({},this.componentParams),{title:"All Games"})}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=v({type:e,selectors:[["app-games-page"]],standalone:!0,features:[_([j]),L,x],decls:9,vars:7,consts:[["infiniteScroll","",1,"flex","flex-col","gap-10",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[1,"flex","flex-col","gap-3"],[1,"text-5xl","md:text-7xl","text-white","font-bold"],[1,"text-md","text-white"],["class","flex gap-5",3,"formGroup"],[3,"games"],["class","flex items-center justify-center"],[1,"flex","gap-5",3,"formGroup"],["for","small",1,"block","mb-2","text-sm","font-medium","text-white"],["id","small","formControlName","order",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value","-relevance"],["value","-created"],["value","name"],["value","-released"],["value","-added"],["value","-rating"],["id","small","formControlName","genres",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value",""],[3,"value"],[1,"flex","items-center","justify-center"]],template:function(l,s){l&1&&(n(0,"div",0),P("scrolled",function(){return s.scrolled$.next()}),n(1,"div",1)(2,"h1",2),a(3),i(),n(4,"span",3),a(5),i()(),g(6,Tt,25,1,"form",4),d(7,"app-game-list",5),g(8,Et,2,0,"div",6),i()),l&2&&(m("infiniteScrollDistance",2)("infiniteScrollThrottle",50),c(3),p(s.componentParams.title),c(2),p(s.componentParams.subtitle),c(1),h(6,s.componentParams.showFilters?6:-1),c(1),m("games",s.$games()),c(1),h(8,s.$loading()?8:-1))},dependencies:[H,T,A,G,O,k,M,F,N,$,I,W,R],encapsulation:2,changeDetection:0});let t=e;return t})();var Dt=(t,e)=>e.id;function Pt(t,e){if(t&1&&(n(0,"option",18),a(1),i()),t&2){let r=e.$implicit;m("value",r.id),c(1),p(r.name)}}function _t(t,e){if(t&1&&(n(0,"form",7)(1,"div")(2,"label",8),a(3,"Order by"),i(),n(4,"select",9)(5,"option",10),a(6,"Relevance"),i(),n(7,"option",11),a(8,"Date added"),i(),n(9,"option",12),a(10,"Name"),i(),n(11,"option",13),a(12,"Release date"),i(),n(13,"option",14),a(14,"Popularity"),i(),n(15,"option",15),a(16,"Average rating"),i()()(),n(17,"div")(18,"label",8),a(19,"Genres"),i(),n(20,"select",16)(21,"option",17),a(22,"All"),i(),y(23,Pt,2,2,"option",18,Dt),i()()()),t&2){let r=w();m("formGroup",r.form),c(23),b(r.$genres())}}function Ft(t,e){t&1&&(n(0,"div",19),d(1,"app-spinner"),i())}var Ue=(()=>{let e=class e extends U{constructor(o){super(),this.router=o,this.genre=""}ngOnInit(){this.setParentConfig(),super.ngOnInit()}setParentConfig(){let o=this.$genres().find(l=>l.name.toLowerCase()===this.genre.toLowerCase());if(!o){this.router.navigate(["/games"]);return}this.componentParams=S(u({},this.componentParams),{title:this.genre.slice(0,1).toUpperCase()+this.genre.slice(1),showFilters:!1}),this.defaultSearchFilters=S(u({},this.defaultSearchFilters),{genres:o.id.toString()})}};e.\u0275fac=function(l){return new(l||e)(E(Ge))},e.\u0275cmp=v({type:e,selectors:[["app-genre-page"]],inputs:{genre:"genre"},standalone:!0,features:[_([j]),L,x],decls:9,vars:7,consts:[["infiniteScroll","",1,"flex","flex-col","gap-10",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[1,"flex","flex-col","gap-3"],[1,"text-5xl","md:text-7xl","text-white","font-bold"],[1,"text-md","text-white"],["class","flex gap-5",3,"formGroup"],[3,"games"],["class","flex items-center justify-center"],[1,"flex","gap-5",3,"formGroup"],["for","small",1,"block","mb-2","text-sm","font-medium","text-white"],["id","small","formControlName","order",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value","-relevance"],["value","-created"],["value","name"],["value","-released"],["value","-added"],["value","-rating"],["id","small","formControlName","genres",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value",""],[3,"value"],[1,"flex","items-center","justify-center"]],template:function(l,s){l&1&&(n(0,"div",0),P("scrolled",function(){return s.scrolled$.next()}),n(1,"div",1)(2,"h1",2),a(3),i(),n(4,"span",3),a(5),i()(),g(6,_t,25,1,"form",4),d(7,"app-game-list",5),g(8,Ft,2,0,"div",6),i()),l&2&&(m("infiniteScrollDistance",2)("infiniteScrollThrottle",50),c(3),p(s.componentParams.title),c(2),p(s.componentParams.subtitle),c(1),h(6,s.componentParams.showFilters?6:-1),c(1),m("games",s.$games()),c(1),h(8,s.$loading()?8:-1))},dependencies:[H,T,A,G,O,k,M,F,N,$,I,W,R],encapsulation:2,changeDetection:0});let t=e;return t})();function Nt(t,e){t&1&&d(0,"app-spinner")}var Gt=(t,e)=>e.id,$t=t=>["/genres",t];function It(t,e){if(t&1&&(n(0,"figure",3),d(1,"img",4),n(2,"figcaption",5)(3,"a",6),a(4),i()()()),t&2){let r=e.$implicit;c(1),m("src",r.image_background,be)("alt",r.name),c(2),m("routerLink",_e(4,$t,r.name)),c(1),p(r.name)}}function Mt(t,e){if(t&1&&(n(0,"article",0)(1,"h1",1),a(2,"Genres"),i(),n(3,"section",2),y(4,It,5,6,"figure",7,Gt),i()()),t&2){let r=w();c(4),b(r.$genres())}}var Ve=(()=>{let e=class e{constructor(o){this.genreService=o,this.$loading=this.genreService.$loading,this.$genres=this.genreService.$genres}};e.\u0275fac=function(l){return new(l||e)(E(ee))},e.\u0275cmp=v({type:e,selectors:[["app-genres-page"]],standalone:!0,features:[x],decls:2,vars:1,consts:[[1,"flex","flex-col","gap-10"],[1,"text-5xl","md:text-7xl","text-white","font-bold"],[1,"grid","grid-cols-1","lg:grid-cols-3","xl:grid-cols-5","gap-6"],[1,"flex","flex-col","gap-2","h-[300px]","bg-[#202020]","rounded-md","md:hover:scale-105","transition-transform","duration-300"],[1,"w-auto","h-40","rounded-lg","object-cover",3,"src","alt"],[1,"p-3"],[1,"text-2xl","font-bold","text-balance","text-white","hover:text-[#636363]","transition-colors",3,"routerLink"],["class","flex flex-col gap-2 h-[300px] bg-[#202020] rounded-md md:hover:scale-105 transition-transform duration-300"]],template:function(l,s){l&1&&g(0,Nt,1,0,"app-spinner")(1,Mt,6,0),l&2&&h(0,s.$loading()?0:1)},dependencies:[T,$e],changeDetection:0});let t=e;return t})();var Ot=(t,e)=>e.id;function kt(t,e){if(t&1&&(n(0,"option",18),a(1),i()),t&2){let r=e.$implicit;m("value",r.id),c(1),p(r.name)}}function At(t,e){if(t&1&&(n(0,"form",7)(1,"div")(2,"label",8),a(3,"Order by"),i(),n(4,"select",9)(5,"option",10),a(6,"Relevance"),i(),n(7,"option",11),a(8,"Date added"),i(),n(9,"option",12),a(10,"Name"),i(),n(11,"option",13),a(12,"Release date"),i(),n(13,"option",14),a(14,"Popularity"),i(),n(15,"option",15),a(16,"Average rating"),i()()(),n(17,"div")(18,"label",8),a(19,"Genres"),i(),n(20,"select",16)(21,"option",17),a(22,"All"),i(),y(23,kt,2,2,"option",18,Ot),i()()()),t&2){let r=w();m("formGroup",r.form),c(23),b(r.$genres())}}function jt(t,e){t&1&&(n(0,"div",19),d(1,"app-spinner"),i())}var ze=(()=>{let e=class e extends U{constructor(o){super(),this.datePipe=o,this.defaultSearchFilters=S(u({},this.defaultSearchFilters),{ordering:"-relevance",updated:`${this.datePipe.transform(new Date(new Date().setDate(new Date().getDate()-30)),"yyyy-MM-dd")},${this.datePipe.transform(new Date,"yyyy-MM-dd")}`}),this.componentParams=S(u({},this.componentParams),{title:"Last 30 days"})}};e.\u0275fac=function(l){return new(l||e)(E(J))},e.\u0275cmp=v({type:e,selectors:[["app-last-30-days-page"]],standalone:!0,features:[_([j,J]),L,x],decls:9,vars:7,consts:[["infiniteScroll","",1,"flex","flex-col","gap-10",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[1,"flex","flex-col","gap-3"],[1,"text-5xl","md:text-7xl","text-white","font-bold"],[1,"text-md","text-white"],["class","flex gap-5",3,"formGroup"],[3,"games"],["class","flex items-center justify-center"],[1,"flex","gap-5",3,"formGroup"],["for","small",1,"block","mb-2","text-sm","font-medium","text-white"],["id","small","formControlName","order",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value","-relevance"],["value","-created"],["value","name"],["value","-released"],["value","-added"],["value","-rating"],["id","small","formControlName","genres",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value",""],[3,"value"],[1,"flex","items-center","justify-center"]],template:function(l,s){l&1&&(n(0,"div",0),P("scrolled",function(){return s.scrolled$.next()}),n(1,"div",1)(2,"h1",2),a(3),i(),n(4,"span",3),a(5),i()(),g(6,At,25,1,"form",4),d(7,"app-game-list",5),g(8,jt,2,0,"div",6),i()),l&2&&(m("infiniteScrollDistance",2)("infiniteScrollThrottle",50),c(3),p(s.componentParams.title),c(2),p(s.componentParams.subtitle),c(1),h(6,s.componentParams.showFilters?6:-1),c(1),m("games",s.$games()),c(1),h(8,s.$loading()?8:-1))},dependencies:[H,T,A,G,O,k,M,F,N,$,I,W,R],encapsulation:2,changeDetection:0});let t=e;return t})();var Ht=(t,e)=>e.id;function Rt(t,e){if(t&1&&(n(0,"option",18),a(1),i()),t&2){let r=e.$implicit;m("value",r.id),c(1),p(r.name)}}function Wt(t,e){if(t&1&&(n(0,"form",7)(1,"div")(2,"label",8),a(3,"Order by"),i(),n(4,"select",9)(5,"option",10),a(6,"Relevance"),i(),n(7,"option",11),a(8,"Date added"),i(),n(9,"option",12),a(10,"Name"),i(),n(11,"option",13),a(12,"Release date"),i(),n(13,"option",14),a(14,"Popularity"),i(),n(15,"option",15),a(16,"Average rating"),i()()(),n(17,"div")(18,"label",8),a(19,"Genres"),i(),n(20,"select",16)(21,"option",17),a(22,"All"),i(),y(23,Rt,2,2,"option",18,Ht),i()()()),t&2){let r=w();m("formGroup",r.form),c(23),b(r.$genres())}}function Kt(t,e){t&1&&(n(0,"div",19),d(1,"app-spinner"),i())}var Be=(()=>{let e=class e extends U{constructor(){super(),this.defaultSearchFilters=S(u({},this.defaultSearchFilters),{ordering:"-released",metacritic:"80,100"}),this.componentParams={title:"New and trending",subtitle:"Based on player counts and release date",showFilters:!0}}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=v({type:e,selectors:[["app-new-games-page"]],standalone:!0,features:[_([j]),L,x],decls:9,vars:7,consts:[["infiniteScroll","",1,"flex","flex-col","gap-10",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[1,"flex","flex-col","gap-3"],[1,"text-5xl","md:text-7xl","text-white","font-bold"],[1,"text-md","text-white"],["class","flex gap-5",3,"formGroup"],[3,"games"],["class","flex items-center justify-center"],[1,"flex","gap-5",3,"formGroup"],["for","small",1,"block","mb-2","text-sm","font-medium","text-white"],["id","small","formControlName","order",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value","-relevance"],["value","-created"],["value","name"],["value","-released"],["value","-added"],["value","-rating"],["id","small","formControlName","genres",1,"block","w-full","p-2","text-sm","text-white","rounded-lg","bg-[#202020]","outline-none"],["value",""],[3,"value"],[1,"flex","items-center","justify-center"]],template:function(l,s){l&1&&(n(0,"div",0),P("scrolled",function(){return s.scrolled$.next()}),n(1,"div",1)(2,"h1",2),a(3),i(),n(4,"span",3),a(5),i()(),g(6,Wt,25,1,"form",4),d(7,"app-game-list",5),g(8,Kt,2,0,"div",6),i()),l&2&&(m("infiniteScrollDistance",2)("infiniteScrollThrottle",50),c(3),p(s.componentParams.title),c(2),p(s.componentParams.subtitle),c(1),h(6,s.componentParams.showFilters?6:-1),c(1),m("games",s.$games()),c(1),h(8,s.$loading()?8:-1))},dependencies:[H,T,A,G,O,k,M,F,N,$,I,W,R],encapsulation:2,changeDetection:0});let t=e;return t})();var sn=[{path:"",component:Be},{path:"games",component:Le},{path:"games/:id",component:je,resolve:{game:Ae},data:{reuseComponent:!1}},{path:"last-30-days",component:ze},{path:"genres",component:Ve},{path:"genres/:genre",component:Ue,data:{reuseComponent:!1}}];export{sn as GAME_LIST_ROUTES};
