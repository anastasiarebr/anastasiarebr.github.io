(function(e){function t(t){for(var c,o,s=t[0],i=t[1],u=t[2],b=0,d=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04a7":function(e,t,n){},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3d16":function(e,t,n){"use strict";n("b9bc")},"45a4":function(e,t,n){},4745:function(e,t,n){},"4fdb":function(e,t,n){},5587:function(e,t,n){"use strict";n("c805")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=Object(c["K"])("data-v-79c26e1b");Object(c["v"])("data-v-79c26e1b");var a={class:"all"};Object(c["t"])();var o=r((function(e,t,n,r,o,s){var i=Object(c["A"])("Navbar"),u=Object(c["A"])("router-view"),l=Object(c["A"])("LoginModel");return Object(c["s"])(),Object(c["f"])("div",a,[Object(c["i"])(i),Object(c["i"])(u),(Object(c["s"])(),Object(c["f"])(c["b"],{to:"body"},[Object(c["i"])(l)]))])})),s=Object(c["K"])("data-v-ccfe00a2");Object(c["v"])("data-v-ccfe00a2");var i={class:"titles"};Object(c["t"])();var u=s((function(e,t,n,r,a,o){var u=Object(c["A"])("router-link");return Object(c["s"])(),Object(c["f"])("nav",null,[Object(c["i"])("div",i,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(a.list,(function(e){return Object(c["s"])(),Object(c["f"])(u,{key:e.to,class:"title",to:e.to},{default:s((function(){return[Object(c["h"])(Object(c["C"])(e.title),1)]})),_:2},1032,["to"])})),128)),o.isLoggedIn?(Object(c["s"])(),Object(c["f"])("button",{key:1,onClick:t[2]||(t[2]=function(){return o.logout&&o.logout.apply(o,arguments)})},"Logout")):(Object(c["s"])(),Object(c["f"])("button",{key:0,onClick:t[1]||(t[1]=function(){return o.openLogin&&o.openLogin.apply(o,arguments)})},"Login"))])])})),l=n("260b"),b=(n("ea7b"),n("66ce"),{apiKey:"AIzaSyDLmSQBM6l10vzdAkpi-7pi8_2Jh7Z0EqU",authDomain:"vue-learn-2a5c5.firebaseapp.com",databaseURL:"https://vue-learn-2a5c5-default-rtdb.firebaseio.com",projectId:"vue-learn-2a5c5",storageBucket:"vue-learn-2a5c5.appspot.com",messagingSenderId:"1015692077842",appId:"1:1015692077842:web:45627d6dc1be7017c5a1cb"});l["a"].initializeApp(b);var d=l["a"].database(),f=d.ref("chats"),O=l["a"],j={data:function(){return{list:[{title:"Heroes list",to:"/heroes"},{title:"Calendar",to:"/calendar"},{title:"Markdown",to:"/markdown"},{title:"Slider",to:"/slider"},{title:"Calculator",to:"/calculator"},{title:"Modal",to:"/reusable-modal"},{title:"Chat",to:"/chat"},{title:"User Crud",to:"/user-crud"}]}},computed:{isLoggedIn:function(){return this.$store.state.isLoggedIn}},methods:{logout:function(){O.auth().signOut()},openLogin:function(){this.$store.commit("setLoginModal",!0)}}};n("64f5");j.render=u,j.__scopeId="data-v-ccfe00a2";var p=j,m=Object(c["K"])("data-v-e6749a0e");Object(c["v"])("data-v-e6749a0e");var v={key:0},h={class:"login"},g={class:"flex"},y={class:"loginblock"},k=Object(c["i"])("h1",null,"Login",-1),w=Object(c["i"])("p",null,"Or",-1),C={class:"form-item"},x=Object(c["i"])("label",{class:"label",for:"email"},"Email or username",-1),M={class:"form-item"},L=Object(c["i"])("label",{for:"password"},"Password",-1),_={class:"button",type:"submit"},I={key:0},U={key:1};Object(c["t"])();var S=m((function(e,t,n,r,a,o){var s=Object(c["A"])("GoogleLogin");return o.isLoginOpen?(Object(c["s"])(),Object(c["f"])("div",v,[Object(c["i"])("section",{class:"background",onClick:t[1]||(t[1]=function(){return o.close&&o.close.apply(o,arguments)})}),Object(c["i"])("section",h,[Object(c["i"])("div",g,[Object(c["i"])("div",y,[k,Object(c["i"])(s,{onCloseLoginFromGoogle:o.close},null,8,["onCloseLoginFromGoogle"]),w,Object(c["i"])("form",{class:"form",onSubmit:t[4]||(t[4]=Object(c["J"])((function(){return o.submit&&o.submit.apply(o,arguments)}),["prevent"]))},[Object(c["i"])("div",C,[x,Object(c["H"])(Object(c["i"])("input",{class:"input",id:"email",type:"text",placeholder:"Enter your email or username","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.form.email=e}),ref:"emailRef"},null,512),[[c["E"],a.form.email]])]),Object(c["i"])("div",M,[L,Object(c["H"])(Object(c["i"])("input",{class:"input",id:"password",type:"password",placeholder:"Enter your password","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.form.password=e})},null,512),[[c["E"],a.form.password]])]),Object(c["i"])("button",_,[a.isLoading?(Object(c["s"])(),Object(c["f"])("span",U,":)")):(Object(c["s"])(),Object(c["f"])("span",I,"Login"))])],32)])])])])):Object(c["g"])("",!0)}));function A(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("section",null,[Object(c["i"])("button",{class:"google",onClick:t[1]||(t[1]=function(){return o.google&&o.google.apply(o,arguments)})},"Login with Google")])}var D={methods:{google:function(){var e=this,t=new O.auth.GoogleAuthProvider;O.auth().signInWithPopup(t).then((function(){e.$emit("closeLoginFromGoogle")}))}}};n("bc24");D.render=A;var R=D,N={components:{GoogleLogin:R},data:function(){return{form:{email:"",password:"123456"},isLoading:!1}},computed:{isLoginOpen:function(){return this.$store.state.isLoginOpen}},mounted:function(){},methods:{submit:function(){var e=this;this.isLoading=!0,O.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(t){console.log(t),e.form.email="",e.form.password="",e.isLoading=!1,e.close()})).catch((function(t){console.log(t),e.isLoading=!1}))},close:function(){this.$store.commit("setLoginModal",!1)}}};n("5587");N.render=S,N.__scopeId="data-v-e6749a0e";var E=N,H={mounted:function(){var e=this;O.auth().onAuthStateChanged((function(t){t?(e.$store.commit("setIsLoggedIn",!0),e.$store.commit("setAuthUser",t)):(e.$store.commit("setIsLoggedIn",!1),e.$store.commit("setAuthUser",{}))}))},components:{Navbar:p,LoginModel:E}};n("c276");H.render=o,H.__scopeId="data-v-79c26e1b";var T=H,K=n("6c02"),P=(n("b0c0"),Object(c["K"])("data-v-477892d2"));Object(c["v"])("data-v-477892d2");var $={class:"main-block"},G=Object(c["i"])("h1",{class:"title-block"},"DC heroes list",-1),V={class:"list"},Y=Object(c["i"])("button",{type:"submit",class:"button"},"Add hero",-1);Object(c["t"])();var q=P((function(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",$,[G,Object(c["i"])("p",null,"Heroes : "+Object(c["C"])(r.heroesCount),1),Object(c["i"])("ul",V,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(r.heroes,(function(e,t){return Object(c["s"])(),Object(c["f"])("li",{key:t,class:"item"},[Object(c["i"])("div",null,Object(c["C"])(t+1)+" : "+Object(c["C"])(e.name),1),Object(c["i"])("button",{onClick:function(e){return r.removeHero(t)},class:"button"},"X",8,["onClick"])])})),128))]),Object(c["i"])("form",{onSubmit:t[2]||(t[2]=Object(c["J"])((function(){return r.addHero&&r.addHero.apply(r,arguments)}),["prevent"])),class:"item"},[Object(c["H"])(Object(c["i"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.newHero=e}),ref:"newHeroRef"},null,512),[[c["E"],r.newHero,void 0,{trim:!0}]]),Y],32)])})),F=(n("a434"),{setup:function(){var e=Object(c["x"])(!0),t=Object(c["x"])(""),n=Object(c["x"])(""),r=Object(c["x"])([{name:"Superman"},{name:"Cat woman"},{name:"Spiderman"}]);Object(c["q"])((function(){t.value.focus()}));var a=Object(c["d"])({get:function(){return r.value.length}});function o(e){r.value.splice(e,1)}function s(){""==!n.value&&(r.value.push({name:n.value}),n.value="")}return{heroes:r,newHero:n,removeHero:o,addHero:s,newHeroRef:t,heroesCount:a,isDisabled:e}}});n("7db3");F.render=q,F.__scopeId="data-v-477892d2";var J=F,z=Object(c["K"])("data-v-53e4d3f8");Object(c["v"])("data-v-53e4d3f8");var W={class:"main-block"},B=Object(c["i"])("h1",{class:"title-block"},"Vue Calendar",-1),Q={class:"current"},X={class:"days"},Z={class:"nums"},ee={class:"buttons"};Object(c["t"])();var te=z((function(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",W,[B,Object(c["i"])("section",Q,[Object(c["i"])("h2",null,Object(c["C"])(o.currentMonthName),1),Object(c["i"])("h2",null,Object(c["C"])(a.currentYear),1)]),Object(c["i"])("section",X,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(a.days,(function(e){return Object(c["s"])(),Object(c["f"])("p",{key:e,class:"day"},Object(c["C"])(e),1)})),128))]),Object(c["i"])("section",Z,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(o.startDay(),(function(e){return Object(c["s"])(),Object(c["f"])("p",{key:e,class:"num"})})),128)),(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(o.daysInMonth(),(function(e){return Object(c["s"])(),Object(c["f"])("p",{key:e,class:["num",o.currentDayClass(e)]},Object(c["C"])(e),3)})),128))]),Object(c["i"])("section",ee,[Object(c["i"])("button",{class:"button",onClick:t[1]||(t[1]=function(e){return o.prev()})},"Prev"),Object(c["i"])("button",{class:"button",onClick:t[2]||(t[2]=function(e){return o.next()})},"Next")])])})),ne={data:function(){return{currentDay:(new Date).getUTCDate(),currentMonth:(new Date).getMonth(),currentYear:(new Date).getFullYear(),days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}},methods:{daysInMonth:function(){return new Date(this.currentYear,this.currentMonth+1,0).getDate()},startDay:function(){return new Date(this.currentYear,this.currentMonth,0).getDay()+1},next:function(){11===this.currentMonth?(this.currentMonth=0,this.currentYear++):this.currentMonth++},prev:function(){0===this.currentMonth?(this.currentMonth=11,this.currentYear--):this.currentMonth--},currentDayClass:function(e){var t=new Date(this.currentYear,this.currentMonth,e).toDateString(),n=(new Date).toDateString();return t===n?"num_now":""}},computed:{currentMonthName:function(){return new Date(this.currentYear,this.currentMonth).toLocaleString("default",{month:"long"})}}};n("3d16");ne.render=te,ne.__scopeId="data-v-53e4d3f8";var ce=ne,re=Object(c["K"])("data-v-f77d7f54"),ae=re((function(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("h1",null,"Welcome to Vue")})),oe={};oe.render=ae,oe.__scopeId="data-v-f77d7f54";var se=oe,ie=Object(c["K"])("data-v-5193d172");Object(c["v"])("data-v-5193d172");var ue={class:"main-block container"},le=Object(c["i"])("h1",{class:"title-block"},"Markdown App",-1),be={class:"flex"},de={class:"section"};Object(c["t"])();var fe=ie((function(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",ue,[le,Object(c["i"])("div",be,[Object(c["i"])("section",de,[Object(c["i"])("textarea",{class:"textarea",value:a.text,onInput:t[1]||(t[1]=function(){return o.update&&o.update.apply(o,arguments)}),ref:"markdownTextArea"},null,40,["value"])]),Object(c["i"])("section",{class:"section",innerHTML:o.markedText},null,8,["innerHTML"])])])})),Oe=n("0e54"),je=n.n(Oe);function pe(){var e=Object(c["x"])("");function t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;clearTimeout(e.value),e.value=setTimeout(t,n)}return t}var me={data:function(){return{text:"",debounce:""}},methods:{update:function(e){var t=this,n=function(){return t.text=t.text=e.target.value};this.debounce(n,500)}},computed:{markedText:function(){return je()(this.text)}},mounted:function(){this.debounce=pe(),this.$refs.markdownTextArea.focus()}};n("a6f4");me.render=fe,me.__scopeId="data-v-5193d172";var ve=me,he=Object(c["K"])("data-v-ccf4fc10");Object(c["v"])("data-v-ccf4fc10");var ge={class:"main-block slider"},ye=Object(c["i"])("h1",{class:"title-block "},"Slider",-1),ke={class:"dots"};Object(c["t"])();var we=he((function(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",ge,[ye,(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(a.sliders,(function(e,t){return Object(c["s"])(),Object(c["f"])("div",{class:"slide",key:t},[Object(c["i"])(c["c"],{name:"fade"},{default:he((function(){return[a.currentSlide===t?(Object(c["s"])(),Object(c["f"])("div",{key:0,class:"slide",style:{backgroundColor:e}},null,4)):Object(c["g"])("",!0)]})),_:2},1024)])})),128)),Object(c["i"])("div",ke,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(a.sliders,(function(e,t){return Object(c["s"])(),Object(c["f"])("div",{key:e,class:["dot",a.currentSlide===t?"active_dot":""],onClick:function(e){return o.makeActive(t)}},null,10,["onClick"])})),128))])])})),Ce={data:function(){return{currentSlide:0,interval:"",sliders:["green","yellow","red"],isTitleShowing:!0}},mounted:function(){var e=this;this.interval=setInterval((function(){2===e.currentSlide?e.currentSlide=0:e.currentSlide++}),3e3)},beforeUnmount:function(){clearInterval(this.interval)},methods:{makeActive:function(e){this.currentSlide=e}}};n("d868");Ce.render=we,Ce.__scopeId="data-v-ccf4fc10";var xe=Ce,Me=Object(c["K"])("data-v-3f45f8a2");Object(c["v"])("data-v-3f45f8a2");var Le={class:"main-block"},_e=Object(c["i"])("h1",{class:"title-block"},"Calculator",-1),Ie={class:"text"},Ue={class:"operations"},Se={key:0},Ae={class:"calculator"};Object(c["t"])();var De=Me((function(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("section",Le,[_e,Object(c["i"])("p",Ie,Object(c["C"])(r.currentNum),1),Object(c["i"])("div",Ue,[r.selectedOperation?(Object(c["s"])(),Object(c["f"])("small",Se,Object(c["C"])(r.prevNum)+" "+Object(c["C"])(r.selectedOperation)+" "+Object(c["C"])(r.currentNum),1)):Object(c["g"])("",!0)]),Object(c["i"])("div",Ae,[Object(c["i"])("button",{onClick:t[1]||(t[1]=function(e){return r.pressed("1")}),class:"num"},"1"),Object(c["i"])("button",{onClick:t[2]||(t[2]=function(e){return r.pressed("2")}),class:"num"},"2"),Object(c["i"])("button",{onClick:t[3]||(t[3]=function(e){return r.pressed("3")}),class:"num"},"3"),Object(c["i"])("button",{onClick:t[4]||(t[4]=function(e){return r.pressed("+")}),class:"num"},"+"),Object(c["i"])("button",{onClick:t[5]||(t[5]=function(e){return r.pressed("4")}),class:"num"},"4"),Object(c["i"])("button",{onClick:t[6]||(t[6]=function(e){return r.pressed("5")}),class:"num"},"5"),Object(c["i"])("button",{onClick:t[7]||(t[7]=function(e){return r.pressed("6")}),class:"num"},"6"),Object(c["i"])("button",{onClick:t[8]||(t[8]=function(e){return r.pressed("-")}),class:"num"},"-"),Object(c["i"])("button",{onClick:t[9]||(t[9]=function(e){return r.pressed("7")}),class:"num"},"7"),Object(c["i"])("button",{onClick:t[10]||(t[10]=function(e){return r.pressed("8")}),class:"num"},"8"),Object(c["i"])("button",{onClick:t[11]||(t[11]=function(e){return r.pressed("9")}),class:"num"},"9"),Object(c["i"])("button",{onClick:t[12]||(t[12]=function(e){return r.pressed("*")}),class:"num"},"*"),Object(c["i"])("button",{onClick:t[13]||(t[13]=function(e){return r.pressed("0")}),class:"num"},"0"),Object(c["i"])("button",{onClick:t[14]||(t[14]=function(e){return r.pressed("c")}),class:"num"},"C"),Object(c["i"])("button",{onClick:t[15]||(t[15]=function(e){return r.pressed("=")}),class:"num"},"="),Object(c["i"])("button",{onClick:t[16]||(t[16]=function(e){return r.pressed("/")}),class:"num"},"/")])])}));n("caad"),n("a9e3");function Re(e,t){Object(c["q"])((function(){window.addEventListener(e,t)})),Object(c["r"])((function(){window.removeEventListener(e,t)}))}var Ne={setup:function(){var e=["+","-","*","/"],t=["0","1","2","3","4","5","6","7","8","9"],n=Object(c["x"])(""),r=Object(c["x"])(""),a=Object(c["x"])("");function o(n){"="==n||"Enter"==n?u():e.includes(n)?i(n):"c"==n||"Backspace"==n?O():t.includes(n)&&s(n)}function s(e){n.value=n.value+e}function i(e){u(),r.value=n.value,n.value="",a.value=e}function u(){"*"===a.value?l():"/"===a.value?b():"+"===a.value?d():"-"===a.value&&f(),r.value="",a.value=""}function l(){n.value=r.value*n.value}function b(){n.value=r.value/n.value}function d(){n.value=Number(r.value)+Number(n.value)}function f(){n.value=r.value-n.value}function O(){n.value=""}function j(e){o(e.key)}return Re("keydown",j),{currentNum:n,pressed:o,appendNumber:s,operations:e,prevNum:r,selectedOperation:a}}};n("b057");Ne.render=De,Ne.__scopeId="data-v-3f45f8a2";var Ee=Ne,He=Object(c["i"])("h1",{class:"title"},"Reusable Modal",-1),Te=Object(c["h"])(" Modal 1 "),Ke=Object(c["i"])("p",null,"This is a body for modal 1",-1),Pe=Object(c["h"])(" Modal 2 "),$e=Object(c["i"])("p",null,"This is a body for modal 2",-1);function Ge(e,t,n,r,a,o){var s=Object(c["A"])("Modal");return Object(c["s"])(),Object(c["f"])("section",null,[He,r.isModal1Open?(Object(c["s"])(),Object(c["f"])(s,{key:0,onClose:t[1]||(t[1]=function(e){return r.isModal1Open=!1})},{title:Object(c["G"])((function(){return[Te]})),body:Object(c["G"])((function(){return[Ke]})),_:1})):Object(c["g"])("",!0),Object(c["i"])("button",{onClick:t[2]||(t[2]=function(e){return r.isModal1Open=!0}),class:"button button-reusablemodal"},"Modal 1"),r.isModal2Open?(Object(c["s"])(),Object(c["f"])(s,{key:1,onClose:t[3]||(t[3]=function(e){return r.isModal2Open=!1})},{title:Object(c["G"])((function(){return[Pe]})),body:Object(c["G"])((function(){return[$e]})),_:1})):Object(c["g"])("",!0),Object(c["i"])("button",{onClick:t[4]||(t[4]=function(e){return r.isModal2Open=!0}),class:"button button-reusablemodal"},"Modal 2")])}var Ve=Object(c["K"])("data-v-08b6591e");Object(c["v"])("data-v-08b6591e");var Ye={class:"login"},qe={class:"flex"},Fe={class:"loginblock"},Je=Object(c["h"])("Some data");Object(c["t"])();var ze=Ve((function(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("div",null,[Object(c["i"])("section",{class:"background",onClick:t[1]||(t[1]=function(){return r.close&&r.close.apply(r,arguments)})}),Object(c["i"])("section",Ye,[Object(c["i"])("div",qe,[Object(c["i"])("div",Fe,[Object(c["i"])("h1",null,[Object(c["z"])(e.$slots,"title",{},(function(){return[Je]}))]),Object(c["i"])("main",null,[Object(c["z"])(e.$slots,"body")])])])])])})),We={setup:function(e,t){var n=t.emit;function c(){n("close")}return{close:c}}};n("86ad");We.render=ze,We.__scopeId="data-v-08b6591e";var Be=We,Qe={components:{Modal:Be},setup:function(){var e=Object(c["x"])(!1),t=Object(c["x"])(!1);return{isModal1Open:e,isModal2Open:t}}};n("5ab0");Qe.render=Ge;var Xe=Qe,Ze={class:"chat"},et=Object(c["i"])("h1",{class:"title"},"Chat",-1);function tt(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("section",Ze,[et,(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(r.state.chats,(function(e){return Object(c["s"])(),Object(c["f"])("div",{key:e.message,class:["messages",e.userId===r.userId?"text-right":"text-left"]},Object(c["C"])(e.message),3)})),128)),Object(c["H"])(Object(c["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.state.message=e}),type:"text",name:"",id:"",placeholder:"Start typing",onKeydown:t[2]||(t[2]=Object(c["I"])((function(){return r.addMessage&&r.addMessage.apply(r,arguments)}),["enter"])),class:"input"},null,544),[[c["E"],r.state.message]])])}var nt=n("5530"),ct=(n("96cf"),n("1da1")),rt=n("5502"),at={setup:function(){var e=Object(c["w"])({chats:[],message:""}),t=Object(rt["b"])(),n=Object(c["d"])((function(){return t.state.authUser.uid}));function r(){var t=f.push();t.set({userId:n.value,message:e.message}),e.message=""}return Object(c["q"])(Object(ct["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:f.on("child_added",(function(t){e.chats.push(Object(nt["a"])({key:t.key},t.val()))}));case 1:case"end":return t.stop()}}),t)})))),{state:e,addMessage:r,userId:n}}};n("847b");at.render=tt;var ot=at,st={class:"block"},it=Object(c["i"])("h1",{class:"title"},"User Crud",-1),ut={class:"table"},lt=Object(c["i"])("thead",null,[Object(c["i"])("tr",null,[Object(c["i"])("th",null,"ID"),Object(c["i"])("th",null,"Avatar"),Object(c["i"])("th",null,"Name"),Object(c["i"])("th",null,"Email"),Object(c["i"])("th",null,"Actions")])],-1),bt={class:"table-item"},dt={class:"table-item"},ft={class:"table-item"},Ot={class:"table-item"},jt={class:"table-item"},pt={class:"flex-button"};function mt(e,t,n,r,a,o){var s=Object(c["A"])("Create");return Object(c["s"])(),Object(c["f"])("div",null,[Object(c["i"])("section",st,[it,Object(c["i"])("div",null,[Object(c["i"])(s,{onNewUserAdder:r.addUser},null,8,["onNewUserAdder"]),Object(c["i"])("table",ut,[lt,Object(c["i"])("tbody",null,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(r.state.users,(function(e){return Object(c["s"])(),Object(c["f"])("tr",{key:e.id},[Object(c["i"])("td",bt,Object(c["C"])(e._id),1),Object(c["i"])("td",dt,[Object(c["i"])("img",{src:e.avatar,alt:"user.first_name",class:"img"},null,8,["src"])]),Object(c["i"])("td",ft,Object(c["C"])(e.name),1),Object(c["i"])("td",Ot,Object(c["C"])(e.email),1),Object(c["i"])("td",jt,[Object(c["i"])("button",{onClick:function(t){return r.destroy(e._id)}},"Delete",8,["onClick"])])])})),128))])]),Object(c["i"])("div",pt,[Object(c["i"])("button",{class:["button button-usercrud",1===r.state.users.page?"disabled-button":"button-abled"],onClick:t[1]||(t[1]=function(){return r.prev&&r.prev.apply(r,arguments)}),disabled:1===r.state.users.page}," Prev ",10,["disabled"]),Object(c["i"])("button",{class:["button button-usercrud",r.state.users.page===r.state.users.total_pages?"disabled-button":"button-abled"],onClick:t[2]||(t[2]=function(){return r.next&&r.next.apply(r,arguments)}),disabled:r.state.users.page===r.state.users.total_pages}," Next ",10,["disabled"])])])])])}n("4de4");var vt=n("bc3a"),ht=n.n(vt);ht.a.defaults.baseURL="https://crudcrud.com/api/5a937b7f8dac417bb1b3613bc393bd72";var gt=ht.a,yt=Object(c["K"])("data-v-6a82672d");Object(c["v"])("data-v-6a82672d");var kt=Object(c["h"])(" Add New User "),wt=Object(c["i"])("label",{for:"name"},"Name",-1),Ct=Object(c["i"])("label",{for:"email"},"Email",-1),xt=Object(c["i"])("label",{for:"url"},"Avatar URL",-1),Mt=Object(c["i"])("div",null,[Object(c["i"])("input",{type:"submit",class:"form-input form-submit",value:"Create"})],-1);Object(c["t"])();var Lt=yt((function(e,t,n,r,a,o){var s=Object(c["A"])("Modal");return Object(c["s"])(),Object(c["f"])("div",null,[Object(c["i"])("button",{class:"button",onClick:t[1]||(t[1]=function(e){return r.isModalOpen=!0})},"Add User"),(Object(c["s"])(),Object(c["f"])(c["b"],{to:"body"},[r.isModalOpen?(Object(c["s"])(),Object(c["f"])(s,{key:0,onClose:t[6]||(t[6]=function(e){return r.isModalOpen=!1})},{title:yt((function(){return[kt]})),body:yt((function(){return[Object(c["i"])("form",{class:"form",onSubmit:t[5]||(t[5]=Object(c["J"])((function(){return r.submit&&r.submit.apply(r,arguments)}),["prevent"]))},[Object(c["i"])("div",null,[wt,Object(c["H"])(Object(c["i"])("input",{type:"text",placeholder:"User Name",class:"form-input",id:"name","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.state.form.name=e})},null,512),[[c["E"],r.state.form.name]])]),Object(c["i"])("div",null,[Ct,Object(c["H"])(Object(c["i"])("input",{type:"email",placeholder:"User Email",class:"form-input",id:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.state.form.email=e})},null,512),[[c["E"],r.state.form.email]])]),Object(c["i"])("div",null,[xt,Object(c["H"])(Object(c["i"])("input",{type:"text",placeholder:"User Avatar URL",class:"form-input",id:"url","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.state.form.avatar=e})},null,512),[[c["E"],r.state.form.avatar]])]),Mt],32)]})),_:1})):Object(c["g"])("",!0)]))])})),_t={components:{Modal:Be},setup:function(e,t){var n=t.emit,r=Object(c["w"])({form:{name:"",email:"",avatar:""}}),a=Object(c["x"])(!1);function o(){return s.apply(this,arguments)}function s(){return s=Object(ct["a"])(regeneratorRuntime.mark((function e(){var t,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gt.post("/users",r.form);case 2:t=e.sent,c=t.data,n("new-user-adder",c),r.form.email="",r.form.name="",r.form.avatar="",a.value=!1;case 9:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}return{isModalOpen:a,submit:o,state:r}}};n("5efd");_t.render=Lt,_t.__scopeId="data-v-6a82672d";var It=_t,Ut={components:{Create:It},setup:function(){var e=Object(c["w"])({users:[]});function t(){return n.apply(this,arguments)}function n(){return n=Object(ct["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.get("/users?page=2");case 2:n=t.sent,c=n.data,e.users=c;case 5:case"end":return t.stop()}}),t)}))),n.apply(this,arguments)}function r(){return a.apply(this,arguments)}function a(){return a=Object(ct["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.get("/users?page=1");case 2:n=t.sent,c=n.data,e.users=c;case 5:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}function o(e){return s.apply(this,arguments)}function s(){return s=Object(ct["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.delete("/users/".concat(n));case 2:e.users=e.users.filter((function(e){return e._id!==n}));case 3:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function i(t){e.users.push(t)}return Object(c["q"])(Object(ct["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.get("/users");case 2:n=t.sent,c=n.data,e.users=c;case 5:case"end":return t.stop()}}),t)})))),{state:e,next:t,prev:r,destroy:o,addUser:i}}};n("5e97");Ut.render=mt;var St=Ut,At={class:"main-block"},Dt=Object(c["i"])("h1",{class:"title"},"Tensorflow Object Detection",-1),Rt=Object(c["i"])("p",null,"Some trouble",-1),Nt={ref:"imgRef",src:"https://images.unsplash.com/photo-1567581935884-3349723552ca",width:"200",crossorigin:"anonymous"},Et={key:0};function Ht(e,t,n,r,a,o){return Object(c["s"])(),Object(c["f"])("section",At,[Dt,Rt,Object(c["i"])("img",Nt,null,512),r.result.length>0?(Object(c["s"])(),Object(c["f"])("div",Et,[Object(c["i"])("p",null,Object(c["C"])(r.result[0].class),1)])):Object(c["g"])("",!0)])}n("8b1d"),n("ee7d");var Tt=n("0cff"),Kt={setup:function(){var e=Object(c["x"])(""),t=Object(c["x"])([]);return Object(c["q"])(Object(ct["a"])(regeneratorRuntime.mark((function n(){var c,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.value,n.next=3,Tt.load();case 3:return r=n.sent,n.next=6,r.detect(c);case 6:a=n.sent,t.value=a;case 8:case"end":return n.stop()}}),n)})))),{imgRef:e,result:t}}};n("601a");Kt.render=Ht;var Pt=Kt,$t=Object(rt["a"])({state:function(){return{isLoggedIn:!1,authUser:{},isLoginOpen:!1}},mutations:{setIsLoggedIn:function(e,t){e.isLoggedIn=t},setAuthUser:function(e,t){e.authUser=t},setLoginModal:function(e,t){e.isLoginOpen=t}}}),Gt=$t,Vt=[{path:"/",component:se},{path:"/heroes",component:J},{path:"/calendar",component:ce},{path:"/markdown",component:ve},{path:"/slider",component:xe},{path:"/calculator",component:Ee,meta:{middleware:"auth"}},{path:"/reusable-modal",component:Xe},{path:"/chat",component:ot,meta:{middleware:"auth"}},{path:"/user-crud",component:St},{path:"/tensorflow",component:Pt}],Yt=Object(K["a"])({history:Object(K["b"])("/"),routes:Vt});Yt.beforeEach((function(e,t,c){if(e.meta.middleware){var r=n("7129")("./".concat(e.meta.middleware));r?r.default(c,Gt):c()}else c()}));var qt=Yt;Object(c["e"])(T).use(qt).use(Gt).mount("#app")},"5ab0":function(e,t,n){"use strict";n("c629")},"5e97":function(e,t,n){"use strict";n("4fdb")},"5efd":function(e,t,n){"use strict";n("bfdb")},"601a":function(e,t,n){"use strict";n("45a4")},"64f5":function(e,t,n){"use strict";n("e6d3")},6590:function(e,t,n){},7129:function(e,t,n){var c={"./auth":"efbe","./auth.js":"efbe"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=a,e.exports=r,r.id="7129"},"7db3":function(e,t,n){"use strict";n("4745")},"847b":function(e,t,n){"use strict";n("fffd")},"86ad":function(e,t,n){"use strict";n("04a7")},a6f4:function(e,t,n){"use strict";n("d38f")},b057:function(e,t,n){"use strict";n("6590")},b9bc:function(e,t,n){},bc24:function(e,t,n){"use strict";n("fe6f")},bfdb:function(e,t,n){},c276:function(e,t,n){"use strict";n("f7bf")},c629:function(e,t,n){},c805:function(e,t,n){},d38f:function(e,t,n){},d868:function(e,t,n){"use strict";n("e0fa")},e0fa:function(e,t,n){},e6d3:function(e,t,n){},efbe:function(e,t,n){"use strict";n.r(t),t["default"]=function(e,t){t.state.isLoggedIn?e():(e("/"),t.commit("setLoginModal",!0))}},f7bf:function(e,t,n){},fe6f:function(e,t,n){},fffd:function(e,t,n){}});
//# sourceMappingURL=app.86246ef6.js.map